<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class ResetAccountsCommand extends Command
{
    protected $signature = 'crm:reset-accounts 
                            {--email= : The email of the super admin account to keep}
                            {--password=Devoryx2026## : The new password for the super admin}
                            {--force : Bypass confirmation prompt}';

    protected $description = 'Delete all user accounts except one Super Admin account and update its password to Devoryx2026##';

    public function handle(): int
    {
        $password = $this->option('password') ?: 'Devoryx2026##';
        $email = $this->option('email');

        // Locate the super admin to keep
        $superAdmin = null;
        if (!empty($email)) {
            $superAdmin = User::where('email', $email)->first();
            if (!$superAdmin) {
                $this->error("No user found with email: {$email}");
                return 1;
            }
        } else {
            // Find default super admin: prefer admin@mediaglowegypt.com or first super_admin or user id 1
            $superAdmin = User::where('email', 'admin@mediaglowegypt.com')->first()
                ?? User::where('role', 'super_admin')->first()
                ?? User::find(1);
        }

        if (!$superAdmin) {
            $this->error("No admin user found to retain as Super Admin!");
            return 1;
        }

        $otherUsersCount = User::where('id', '!=', $superAdmin->id)->count();

        $this->warn("==================================================");
        $this->warn("       PRODUCTION ACCOUNT RESET ACTION            ");
        $this->warn("==================================================");
        $this->info("Super Admin to KEEP: {$superAdmin->name} ({$superAdmin->email}) [ID: {$superAdmin->id}]");
        $this->info("New Password: {$password}");
        $this->info("Number of accounts to DELETE: {$otherUsersCount}");
        $this->warn("==================================================");

        if (!$this->option('force')) {
            if (!$this->confirm('Are you sure you want to delete all other user accounts and reset the Super Admin password?')) {
                $this->info('Operation cancelled.');
                return 0;
            }
        }

        DB::beginTransaction();
        try {
            // Ensure super_admin role exists
            $superAdminRole = Role::firstOrCreate(
                ['slug' => 'super_admin'],
                ['name' => 'Super Admin', 'description' => 'System-wide full administrative access']
            );

            // Update super admin credentials and ensure it has super_admin role
            $superAdmin->update([
                'password' => Hash::make($password),
                'role' => 'super_admin',
                'role_id' => $superAdminRole->id,
                'is_hold' => false,
            ]);
            $superAdmin->roles()->syncWithoutDetaching([$superAdminRole->id]);

            $otherUserIds = User::where('id', '!=', $superAdmin->id)->pluck('id')->toArray();

            if (!empty($otherUserIds)) {
                // Reassign created_by and admin references to Super Admin to prevent cascade loss or constraint failure
                if (Schema::hasTable('deals')) {
                    DB::table('deals')->whereIn('created_by', $otherUserIds)->update(['created_by' => $superAdmin->id]);
                    DB::table('deals')->whereIn('client_id', $otherUserIds)->update(['client_id' => null]);
                    if (Schema::hasColumn('deals', 'sales_person_id')) {
                        DB::table('deals')->whereIn('sales_person_id', $otherUserIds)->update(['sales_person_id' => null]);
                    }
                }

                if (Schema::hasTable('client_payments')) {
                    DB::table('client_payments')->whereIn('created_by', $otherUserIds)->update(['created_by' => $superAdmin->id]);
                    DB::table('client_payments')->whereIn('client_id', $otherUserIds)->update(['client_id' => null]);
                }

                if (Schema::hasTable('ledger_entries')) {
                    DB::table('ledger_entries')->whereIn('created_by', $otherUserIds)->update(['created_by' => $superAdmin->id]);
                    DB::table('ledger_entries')->whereIn('client_id', $otherUserIds)->update(['client_id' => null]);
                    DB::table('ledger_entries')->whereIn('employee_id', $otherUserIds)->update(['employee_id' => null]);
                }

                if (Schema::hasTable('contracts')) {
                    DB::table('contracts')->whereIn('admin_id', $otherUserIds)->update(['admin_id' => $superAdmin->id]);
                    DB::table('contracts')->whereIn('client_id', $otherUserIds)->update(['client_id' => null]);
                }

                if (Schema::hasTable('departments')) {
                    DB::table('departments')->whereIn('manager_id', $otherUserIds)->update(['manager_id' => null]);
                }

                if (Schema::hasTable('tasks')) {
                    if (Schema::hasColumn('tasks', 'client_id')) {
                        DB::table('tasks')->whereIn('client_id', $otherUserIds)->update(['client_id' => null]);
                    }
                }

                if (Schema::hasTable('task_checklists') && Schema::hasColumn('task_checklists', 'completed_by')) {
                    DB::table('task_checklists')->whereIn('completed_by', $otherUserIds)->update(['completed_by' => null]);
                }

                if (Schema::hasTable('task_status_histories') && Schema::hasColumn('task_status_histories', 'changed_by')) {
                    DB::table('task_status_histories')->whereIn('changed_by', $otherUserIds)->update(['changed_by' => null]);
                }

                if (Schema::hasTable('task_attachments') && Schema::hasColumn('task_attachments', 'uploaded_by')) {
                    DB::table('task_attachments')->whereIn('uploaded_by', $otherUserIds)->update(['uploaded_by' => null]);
                }

                if (Schema::hasTable('attachments') && Schema::hasColumn('attachments', 'uploaded_by')) {
                    DB::table('attachments')->whereIn('uploaded_by', $otherUserIds)->update(['uploaded_by' => $superAdmin->id]);
                }

                if (Schema::hasTable('custody_accounts')) {
                    DB::table('custody_accounts')->whereIn('created_by', $otherUserIds)->update(['created_by' => $superAdmin->id]);
                    DB::table('custody_accounts')->whereIn('employee_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('payroll_records')) {
                    DB::table('payroll_records')->whereIn('employee_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('task_notes')) {
                    DB::table('task_notes')->whereIn('user_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('task_user')) {
                    DB::table('task_user')->whereIn('user_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('role_user')) {
                    DB::table('role_user')->whereIn('user_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('notifications')) {
                    DB::table('notifications')->whereIn('user_id', $otherUserIds)->delete();
                }

                if (Schema::hasTable('personal_access_tokens')) {
                    DB::table('personal_access_tokens')->where('tokenable_type', User::class)->whereIn('tokenable_id', $otherUserIds)->delete();
                }

                // Delete all other users
                DB::table('users')->whereIn('id', $otherUserIds)->delete();
            }

            // Invalidate super admin old session tokens so fresh login is required
            DB::table('personal_access_tokens')
                ->where('tokenable_type', User::class)
                ->where('tokenable_id', $superAdmin->id)
                ->delete();

            DB::commit();

            $this->info("✓ Operation completed successfully!");
            $this->table(
                ['Retained User', 'Email', 'Role', 'New Password'],
                [[$superAdmin->name, $superAdmin->email, $superAdmin->role, $password]]
            );
            $this->info("Total deleted accounts: {$otherUsersCount}");

            return 0;
        } catch (\Throwable $e) {
            DB::rollBack();
            $this->error("Failed to reset accounts: " . $e->getMessage());
            return 1;
        }
    }
}
