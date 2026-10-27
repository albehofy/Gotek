<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use App\Models\Contract;
use App\Models\Deal;
use App\Models\Task;
use App\Models\ClientPayment;
use App\Models\LedgerEntry;
use App\Models\Department;
use App\Models\NotificationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بالوصول لقائمة العملاء والمستخدمين'], 403);
        }

        if ($user && in_array(strtolower($user->role), ['department_manager', 'department manager'])) {
            if ($request->input('type') === 'client' || $request->input('role') === 'client') {
                return response()->json([
                    'status' => 'error',
                    'message' => 'غير مصرح لمدير القسم بالاطلاع على قائمة العملاء أو حساباتهم.'
                ], 403);
            }
        }

        $query = User::with(['department', 'roleModel', 'roles']);

        if ($user && in_array(strtolower($user->role), ['department_manager', 'department manager'])) {
            $query->whereNotIn('role', ['client', 'Client']);
        }

        // Type filter: employee / staff vs client
        if ($request->filled('type')) {
            if ($request->type === 'client') {
                $query->where(function($q) {
                    $q->where('role', 'client')
                      ->orWhere('role', 'Client')
                      ->orWhereHas('roles', fn($rq) => $rq->where('slug', 'client'))
                      ->orWhereHas('roleModel', fn($rq) => $rq->where('slug', 'client'));
                });
            } elseif (in_array($request->type, ['employee', 'staff'])) {
                $query->where(function($q) {
                    $q->where('role', '!=', 'client')
                      ->orWhereNull('role');
                });
            }
        } elseif ($request->filled('role')) {
            if ($request->role === 'client') {
                $query->where(function($q) {
                    $q->where('role', 'client')
                      ->orWhere('role', 'Client')
                      ->orWhereHas('roles', fn($rq) => $rq->where('slug', 'client'))
                      ->orWhereHas('roleModel', fn($rq) => $rq->where('slug', 'client'));
                });
            } elseif (in_array($request->role, ['employee', 'staff'])) {
                $query->where(function($q) {
                    $q->where('role', '!=', 'client')
                      ->orWhereNull('role');
                });
            } else {
                $query->where('role', $request->role);
            }
        }

        // Active only (exclude on hold users for dropdowns / assignment)
        if ($request->boolean('active_only') || $request->has('for_assignment')) {
            $query->where('is_hold', false);
        }

        if ($request->filled('department_id')) {
            $query->where('department_id', $request->department_id);
        }

        // If for_assignment is requested and current user is a department manager, restrict strictly to their department
        if ($request->boolean('for_assignment') && $user && in_array(strtolower($user->role), ['department_manager', 'department manager']) && $user->department_id) {
            $query->where('department_id', $user->department_id);
        }

        if ($request->filled('is_hold')) {
            $query->where('is_hold', $request->boolean('is_hold'));
        }

        if ($request->filled('client_category')) {
            $query->where('client_category', $request->client_category);
        }

        if ($request->filled('is_vip')) {
            $query->where('is_vip', $request->boolean('is_vip'));
        }

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('client_code', 'like', "%{$search}%");
            });
        }

        if ($request->has('per_page') || $request->has('page')) {
            $perPage = (int) $request->input('per_page', 15);
            $paginatedUsers = $query->latest()->paginate($perPage);

            return response()->json([
                'status' => 'success',
                'data' => $paginatedUsers
            ]);
        }

        $users = $query->latest()->get();

        return response()->json([
            'status' => 'success',
            'data' => $users
        ]);
    }

    public function show($id)
    {
        $currentUser = Auth::user();
        $user = User::with(['department', 'roleModel', 'roles'])->findOrFail($id);

        if ($currentUser && in_array($currentUser->role, ['department_manager', 'Department Manager']) && in_array(strtolower($user->role), ['client'])) {
            return response()->json(['message' => 'غير مصرح لمدير القسم بالاطلاع على تفاصيل أو حساب العميل'], 403);
        }

        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function team()
    {
        $founders = User::with('department')->whereIn('role', ['super_admin', 'admin', 'manager'])->where('is_hold', false)->get()->makeHidden(['base_salary', 'commission_rate', 'payment_type']);
        $team = User::with('department')->whereIn('role', ['employee', 'department_manager'])->where('is_hold', false)->get()->makeHidden(['base_salary', 'commission_rate', 'payment_type']);

        return response()->json([
            'status' => 'success',
            'data' => [
                'founders' => $founders,
                'team' => $team
            ]
        ]);
    }

    private function getRoleRank(?string $role): int
    {
        return match (strtolower(trim($role ?? ''))) {
            'super_admin' => 100,
            'admin' => 80,
            'department_manager' => 60,
            'account_manager' => 50,
            'employee' => 30,
            'client' => 10,
            default => 20,
        };
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'nullable|string',
            'password' => 'required|string|min:6',
            'role' => 'required|string',
            'role_ids' => 'nullable|array',
            'role_ids.*' => 'integer|exists:roles,id',
            'client_code' => 'nullable|string|max:30|unique:users,client_code',
            'is_hold' => 'nullable|boolean',
            'is_vip' => 'nullable|boolean',
            'client_category' => 'nullable|string|max:50',
            'department_id' => 'nullable|exists:departments,id',
            'payment_type' => 'nullable|in:task_based,salary_based,percentage_based,hybrid',
            'base_salary' => 'nullable|numeric|min:0',
            'commission_rate' => 'nullable|numeric|min:0',
        ]);

        $roleModel = Role::where('slug', $validated['role'])->first();

        $authUser = Auth::user();
        $authRank = $this->getRoleRank($authUser?->role);
        $newRank = $this->getRoleRank($validated['role']);

        if (!empty($validated['role_ids'])) {
            $roleSlugs = Role::whereIn('id', $validated['role_ids'])->pluck('slug')->toArray();
            foreach ($roleSlugs as $slug) {
                $rRank = $this->getRoleRank($slug);
                if ($rRank > $newRank) {
                    $newRank = $rRank;
                }
            }
        }

        // Only super_admin can create super_admin
        if ($newRank >= 100 && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بإنشاء حساب سوبر أدمن (Super Admin). إنشاء حسابات السوبر أدمن مقتصر حصرياً على السوبر أدمن فقط.'
            ], 403);
        }

        // No user can create an account with higher permissions than themselves
        if ($newRank > $authRank && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بإضافة أو إنشاء حساب بصلاحيات أعلى من رتبتك الحالية.'
            ], 403);
        }

        // Calculate client_code if client and empty
        $clientCode = $validated['client_code'] ?? null;
        if ($validated['role'] === 'client' && empty($clientCode)) {
            $maxCode = DB::table('users')->whereNotNull('client_code')->max(DB::raw('CAST(client_code AS UNSIGNED)'));
            $clientCode = (string) max(1001, ($maxCode ? $maxCode + 1 : 1001));
        }

        $clientCategory = $validated['client_category'] ?? ($request->boolean('is_vip') ? 'vip' : 'normal');
        $isVip = $request->boolean('is_vip') || strtolower((string)$clientCategory) === 'vip';

        $user = User::create([
            'client_code' => $clientCode,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : null,
            'is_hold' => $validated['is_hold'] ?? false,
            'is_vip' => $isVip,
            'client_category' => $clientCategory,
            'department_id' => $validated['department_id'] ?? null,
            'payment_type' => $validated['payment_type'] ?? 'salary_based',
            'base_salary' => $validated['base_salary'] ?? 0,
            'commission_rate' => $validated['commission_rate'] ?? 0,
        ]);

        // Multi-role checkboxes assignment
        if (!empty($validated['role_ids'])) {
            $user->roles()->sync($validated['role_ids']);
        } elseif ($roleModel) {
            $user->roles()->sync([$roleModel->id]);
        }

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel', 'roles'])], 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $authUser = Auth::user();
        $authRank = $this->getRoleRank($authUser?->role);
        $targetCurrentRank = $this->getRoleRank($user->role);

        // Non-super-admin cannot edit or modify a super-admin account
        if ($user->isSuperAdmin() && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بتعديل بيانات أو صلاحيات حساب السوبر أدمن (Super Admin).'
            ], 403);
        }

        // Cannot edit an account with higher permissions
        if ($targetCurrentRank > $authRank && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بتعديل بيانات حساب يمتلك رتبة أو صلاحيات أعلى من صلاحياتك.'
            ], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone' => 'nullable|string',
            'password' => 'nullable|string|min:6',
            'role' => 'required|string',
            'role_ids' => 'nullable|array',
            'role_ids.*' => 'integer|exists:roles,id',
            'client_code' => 'nullable|string|max:30|unique:users,client_code,' . $id,
            'is_hold' => 'nullable|boolean',
            'is_vip' => 'nullable|boolean',
            'client_category' => 'nullable|string|max:50',
            'department_id' => 'nullable|exists:departments,id',
            'payment_type' => 'nullable|in:task_based,salary_based,percentage_based,hybrid',
            'base_salary' => 'nullable|numeric|min:0',
            'commission_rate' => 'nullable|numeric|min:0',
        ]);

        $newRank = $this->getRoleRank($validated['role']);
        if (!empty($validated['role_ids'])) {
            $roleSlugs = Role::whereIn('id', $validated['role_ids'])->pluck('slug')->toArray();
            foreach ($roleSlugs as $slug) {
                $rRank = $this->getRoleRank($slug);
                if ($rRank > $newRank) {
                    $newRank = $rRank;
                }
            }
        }

        // Non-super-admin cannot escalate or assign super_admin role
        if ($newRank >= 100 && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بتعيين رتبة سوبر أدمن (Super Admin). هذا الإجراء مقتصر حصرياً على السوبر أدمن فقط.'
            ], 403);
        }

        // Cannot escalate anyone to a higher rank than the authenticated user
        if ($newRank > $authRank && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بترقية مستخدم إلى صلاحيات تفوق صلاحياتك الحالية.'
            ], 403);
        }

        $roleModel = Role::where('slug', $validated['role'])->first();

        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? $user->phone,
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : $user->role_id,
            'department_id' => array_key_exists('department_id', $validated) ? $validated['department_id'] : $user->department_id,
            'payment_type' => array_key_exists('payment_type', $validated) ? ($validated['payment_type'] ?? 'salary_based') : $user->payment_type,
            'base_salary' => array_key_exists('base_salary', $validated) ? ($validated['base_salary'] ?? 0) : $user->base_salary,
            'commission_rate' => array_key_exists('commission_rate', $validated) ? ($validated['commission_rate'] ?? 0) : $user->commission_rate,
        ];

        if (array_key_exists('is_hold', $validated)) {
            $data['is_hold'] = (bool) $validated['is_hold'];
        }

        if (array_key_exists('client_category', $validated) || $request->has('client_category')) {
            $cat = $request->input('client_category');
            if ($cat !== null) {
                $data['client_category'] = $cat;
                if (strtolower($cat) === 'vip') {
                    $data['is_vip'] = true;
                } elseif (strtolower($cat) === 'normal') {
                    $data['is_vip'] = false;
                }
            }
        }

        if (array_key_exists('is_vip', $validated) || $request->has('is_vip')) {
            $data['is_vip'] = (bool) $request->input('is_vip');
            if ($data['is_vip'] && (empty($data['client_category']) || $data['client_category'] === 'normal')) {
                $data['client_category'] = 'vip';
            }
        }

        if (array_key_exists('client_code', $validated) && !empty($validated['client_code'])) {
            $data['client_code'] = $validated['client_code'];
        }

        if (!empty($validated['password'])) {
            $data['password'] = Hash::make($validated['password']);
        }

        $user->update($data);

        // Sync roles
        if (!empty($validated['role_ids'])) {
            $user->roles()->sync($validated['role_ids']);
        } elseif ($roleModel) {
            $user->roles()->syncWithoutDetaching([$roleModel->id]);
        }

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel', 'roles'])]);
    }

    public function toggleHold($id)
    {
        $user = User::findOrFail($id);
        $authUser = Auth::user();

        if ($user->isSuperAdmin() && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json(['message' => 'غير مصرح لك بتعليق حساب السوبر أدمن (Super Admin)'], 403);
        }

        if (auth()->id() == $id) {
            return response()->json(['message' => 'لا يمكنك تعليق حسابك الشخصي'], 403);
        }

        $user->is_hold = !$user->is_hold;
        $user->save();

        if ($user->is_hold) {
            $user->tokens()->delete();
        }

        $statusText = $user->is_hold ? 'تم تعليق الحساب بنجاح (Hold)' : 'تم رفع التعليق وتنشيط الحساب بنجاح';

        return response()->json([
            'status' => 'success',
            'message' => $statusText,
            'data' => $user->load(['department', 'roleModel', 'roles'])
        ]);
    }

    public function toggleVip(Request $request, $id)
    {
        $authUser = Auth::user();
        if (!in_array(strtolower($authUser?->role ?? ''), ['super_admin', 'admin', 'manager'])) {
            return response()->json(['message' => 'غير مصرح — تعديل تصنيف العميل مقتصر على مدير النظام'], 403);
        }

        $client = User::findOrFail($id);

        if ($request->filled('client_category')) {
            $cat = $request->input('client_category');
            $client->client_category = $cat;
            $client->is_vip = (strtolower($cat) === 'vip');
        } else {
            $client->is_vip = !$client->is_vip;
            $client->client_category = $client->is_vip ? 'vip' : 'normal';
        }

        $client->save();

        $statusText = $client->is_vip ? 'تم تفعيل تصنيف VIP للعميل بنجاح' : 'تم تحديث تصنيف العميل إلى ' . $client->client_category_label;

        return response()->json([
            'status'  => 'success',
            'message' => $statusText,
            'is_vip'  => (bool) $client->is_vip,
            'client_category' => $client->client_category,
            'client_category_label' => $client->client_category_label,
            'data' => $client
        ]);
    }

    public function updateClassification(Request $request, $id)
    {
        $authUser = Auth::user();
        if (!in_array(strtolower($authUser?->role ?? ''), ['super_admin', 'admin', 'manager'])) {
            return response()->json(['message' => 'غير مصرح — تحديد وتعديل تصنيف العميل مقتصر على مدير النظام والإدارة'], 403);
        }

        $request->validate([
            'client_category' => 'required|string|max:50'
        ]);

        $client = User::findOrFail($id);
        $cat = $request->client_category;
        $client->client_category = $cat;
        $client->is_vip = (strtolower($cat) === 'vip');
        $client->save();

        return response()->json([
            'status'  => 'success',
            'message' => 'تم تحديث تصنيف العميل بنجاح إلى: ' . $client->client_category_label,
            'is_vip'  => (bool) $client->is_vip,
            'client_category' => $client->client_category,
            'client_category_label' => $client->client_category_label,
            'data' => $client
        ]);
    }

    public function clientProfile($id)
    {
        $currentUser = Auth::user();
        if ($currentUser && in_array(strtolower($currentUser->role), ['department_manager', 'department manager', 'employee'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لمدير القسم بالاطلاع على تفاصيل أو حساب العميل والصفقات المالية.'
            ], 403);
        }

        $client = User::with(['roleModel', 'roles'])->findOrFail($id);

        // Ensure client code exists
        if (empty($client->client_code)) {
            $maxCode = DB::table('users')->whereNotNull('client_code')->max(DB::raw('CAST(client_code AS UNSIGNED)'));
            $client->client_code = (string) max(1001, ($maxCode ? $maxCode + 1 : 1001));
            $client->save();
        }

        // Fetch all deals with their tasks, payments, and attachments (plans/briefs)
        $deals = Deal::where('client_id', $client->id)
            ->with(['department', 'tasks.users', 'payments', 'attachments.uploader'])
            ->latest()
            ->get();

        $totalBilled = 0;
        $totalPaid = 0;
        $allPayments = [];

        foreach ($deals as $deal) {
            $deal->syncFinancialTotals();
            $totalBilled += (float) $deal->calculated_total;
            $totalPaid += (float) $deal->calculated_paid;

            if ($deal->payments && count($deal->payments) > 0) {
                foreach ($deal->payments as $p) {
                    $pData = $p->toArray();
                    $pData['deal_title'] = $deal->title;
                    $allPayments[] = $pData;
                }
            }
        }

        // Direct payments with client_id if any
        $directPayments = ClientPayment::where('client_id', $client->id)->whereNull('deal_id')->get();
        foreach ($directPayments as $dp) {
            $dpData = $dp->toArray();
            $dpData['deal_title'] = 'رصيد عام';
            $allPayments[] = $dpData;
            $totalPaid += (float) $dp->amount;
        }

        // Add standalone tasks billed amounts for this client
        $standaloneTasksBilled = (float) Task::where('client_id', $client->id)
            ->whereNull('deal_id')
            ->whereNull('parent_id')
            ->where('status', '!=', 'cancelled')
            ->sum('client_price');
        $totalBilled += $standaloneTasksBilled;

        $remainingBalance = max(0, $totalBilled - $totalPaid);

        // Categorize deals by execution phase
        $requiredDeals = $deals->filter(function($d) {
            return in_array($d->status, ['pending', 'new', 'draft']);
        })->values();

        $inProgressDeals = $deals->filter(function($d) {
            return in_array($d->status, ['active', 'in_progress', 'won']);
        })->values();

        $completedDeals = $deals->filter(function($d) {
            return in_array($d->status, ['completed', 'approved', 'closed']);
        })->values();

        // Tasks associated with this client (both from deals and direct standalone tasks)
        $dealIds = $deals->pluck('id');
        $tasks = Task::where(function($q) use ($dealIds, $client) {
                if ($dealIds->isNotEmpty()) {
                    $q->whereIn('deal_id', $dealIds);
                }
                $q->orWhere('client_id', $client->id);
            })
            ->whereNull('parent_id')
            ->with(['attachments', 'users', 'department', 'deal', 'subtasks.users', 'subtasks.attachments'])
            ->latest()
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'client' => $client,
                'stats' => [
                    'total_billed' => $totalBilled,
                    'total_paid' => $totalPaid,
                    'remaining_balance' => $remainingBalance,
                    'deals_count' => $deals->count(),
                    'tasks_count' => $tasks->count(),
                    'completed_tasks_count' => $tasks->whereIn('status', ['done', 'approved', 'completed'])->count()
                ],
                'deals' => [
                    'all' => $deals,
                    'required' => $requiredDeals,
                    'in_progress' => $inProgressDeals,
                    'completed' => $completedDeals
                ],
                'payments' => $allPayments,
                'tasks' => $tasks
            ]
        ]);
    }

    public function updateDepartment(Request $request, $id)
    {
        $request->validate([
            'department_id' => 'required|exists:departments,id',
        ]);

        $user = User::findOrFail($id);
        $authUser = Auth::user();

        if ($user->isSuperAdmin() && (!$authUser || !$authUser->isSuperAdmin())) {
            return response()->json(['message' => 'غير مصرح لك بتعديل قسم السوبر أدمن (Super Admin)'], 403);
        }

        $user->department_id = $request->department_id;
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'تم نقل المستخدم للقسم بنجاح',
            'data' => $user
        ]);
    }

    public function destroy($id)
    {
        $authUser = Auth::user();
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'المستخدم غير موجود'], 404);
        }

        if (auth()->id() == $id) {
            return response()->json(['message' => 'لا يمكنك حذف حسابك الشخصي الحالي من هنا'], 403);
        }

        // If target is Super Admin: ONLY a Super Admin can delete him
        if ($user->isSuperAdmin()) {
            if (!$authUser || !$authUser->isSuperAdmin()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'غير مصرح لك بحذف حساب السوبر أدمن (Super Admin). حذف السوبر أدمن مقتصر حصرياً على السوبر أدمن فقط ولا يحق لأي رتبة أقل حذفه.'
                ], 403);
            }

            // Ensure we do not delete the last remaining Super Admin in the system
            $otherSuperAdminsCount = User::where('id', '!=', $user->id)
                ->where(function($q) {
                    $q->where('role', 'super_admin')
                      ->orWhere('role', 'Super Admin')
                      ->orWhereHas('roles', fn($rq) => $rq->where('slug', 'super_admin'));
                })
                ->count();

            if ($otherSuperAdminsCount < 1) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'لا يمكن حذف حساب السوبر أدمن الأخير المتبقي في النظام لضمان وجود مدير عام للمنظومة.'
                ], 422);
            }
        } else {
            // All deletions inside the system must be by Super Admin only
            if (!$authUser || !$authUser->isSuperAdmin()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'غير مصرح لك بحذف الحسابات أو العملاء. عمليات الحذف في النظام مقتصرة حصرياً على السوبر أدمن (Super Admin).'
                ], 403);
            }
        }

        $fallbackAdminId = auth()->id() ?: User::where('role', 'super_admin')->where('id', '!=', $user->id)->value('id') ?: 1;

        DB::beginTransaction();
        try {
            // Safely reassign created_by to prevent cascade deletion of company assets
            if (Schema::hasColumn('deals', 'created_by')) {
                Deal::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
            }
            if (Schema::hasColumn('client_payments', 'created_by')) {
                ClientPayment::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
            }
            if (Schema::hasColumn('ledger_entries', 'created_by')) {
                LedgerEntry::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
            }

            // Contracts
            if (Schema::hasTable('contracts')) {
                // If user is the client, contracts associated with this client can be removed
                Contract::where('client_id', $user->id)->delete();
                // If user was the admin creating the contract, reassign to fallback admin to preserve contract record
                Contract::where('admin_id', $user->id)->update(['admin_id' => $fallbackAdminId]);
            }

            // Unlink or clean up user relations
            if (Schema::hasColumn('deals', 'client_id')) {
                Deal::where('client_id', $user->id)->update(['client_id' => null]);
            }
            if (Schema::hasColumn('deals', 'sales_person_id')) {
                Deal::where('sales_person_id', $user->id)->update(['sales_person_id' => null]);
            }
            if (Schema::hasColumn('client_payments', 'client_id')) {
                ClientPayment::where('client_id', $user->id)->update(['client_id' => null]);
            }
            if (Schema::hasColumn('ledger_entries', 'employee_id')) {
                LedgerEntry::where('employee_id', $user->id)->update(['employee_id' => null]);
            }
            if (Schema::hasColumn('ledger_entries', 'client_id')) {
                LedgerEntry::where('client_id', $user->id)->update(['client_id' => null]);
            }
            if (Schema::hasColumn('departments', 'manager_id')) {
                Department::where('manager_id', $user->id)->update(['manager_id' => null]);
            }

            // Task relations
            if (Schema::hasTable('task_checklists') && Schema::hasColumn('task_checklists', 'completed_by')) {
                DB::table('task_checklists')->where('completed_by', $user->id)->update(['completed_by' => null]);
            }
            if (Schema::hasTable('task_status_histories') && Schema::hasColumn('task_status_histories', 'changed_by')) {
                DB::table('task_status_histories')->where('changed_by', $user->id)->update(['changed_by' => null]);
            }
            if (Schema::hasTable('task_attachments') && Schema::hasColumn('task_attachments', 'uploaded_by')) {
                DB::table('task_attachments')->where('uploaded_by', $user->id)->update(['uploaded_by' => null]);
            }
            if (Schema::hasTable('attachments') && Schema::hasColumn('attachments', 'uploaded_by')) {
                DB::table('attachments')->where('uploaded_by', $user->id)->update(['uploaded_by' => $fallbackAdminId]);
            }

            // Custody & Payroll
            if (Schema::hasTable('custody_accounts')) {
                if (Schema::hasColumn('custody_accounts', 'created_by')) {
                    DB::table('custody_accounts')->where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
                }
                if (Schema::hasColumn('custody_accounts', 'employee_id')) {
                    DB::table('custody_accounts')->where('employee_id', $user->id)->delete();
                }
            }
            if (Schema::hasTable('payroll_records') && Schema::hasColumn('payroll_records', 'employee_id')) {
                DB::table('payroll_records')->where('employee_id', $user->id)->delete();
            }
            
            $user->tasks()->detach();
            $user->roles()->detach();

            if (Schema::hasTable('notifications')) {
                NotificationModel::where('user_id', $user->id)->delete();
            }

            $user->delete();
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'تم حذف المستخدم بنجاح'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error('User deletion failed: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'تعذر حذف المستخدم لوجود ارتباطات في النظام: ' . $e->getMessage()
            ], 422);
        }
    }
}