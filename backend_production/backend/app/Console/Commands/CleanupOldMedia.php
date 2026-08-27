<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\TaskAttachment;
use App\Models\Attachment;
use App\Models\ProjectImage;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class CleanupOldMedia extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'media:cleanup-old {--years=2 : The age in years after which media should be deleted}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically delete media, images, and attachment files and database records older than 2 years';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $years = (int) $this->option('years') ?: 2;
        $cutoffDate = Carbon::now()->subYears($years);

        $this->info("Scanning for media and attachments created before: {$cutoffDate->toDateTimeString()} ({$years} years threshold)...");

        $deletedTaskAttCount = 0;
        $deletedAttCount = 0;
        $deletedProjImgCount = 0;
        $deletedFilesCount = 0;

        // 1. Clean TaskAttachments
        $oldTaskAttachments = TaskAttachment::where('created_at', '<', $cutoffDate)->get();
        foreach ($oldTaskAttachments as $att) {
            if ($att->file_path && !str_starts_with($att->file_path, 'http://') && !str_starts_with($att->file_path, 'https://')) {
                $cleanPath = ltrim($att->file_path, '/');
                if (Storage::disk('public')->exists($cleanPath)) {
                    Storage::disk('public')->delete($cleanPath);
                    $deletedFilesCount++;
                }
            }
            $att->delete();
            $deletedTaskAttCount++;
        }

        // 2. Clean General Attachments
        $oldAttachments = Attachment::where('created_at', '<', $cutoffDate)->get();
        foreach ($oldAttachments as $att) {
            if ($att->file_path && !str_starts_with($att->file_path, 'http://') && !str_starts_with($att->file_path, 'https://')) {
                $cleanPath = ltrim($att->file_path, '/');
                if (Storage::disk('public')->exists($cleanPath)) {
                    Storage::disk('public')->delete($cleanPath);
                    $deletedFilesCount++;
                }
            }
            if ($att->thumbnail && !str_starts_with($att->thumbnail, 'http://') && !str_starts_with($att->thumbnail, 'https://')) {
                $cleanThumb = ltrim($att->thumbnail, '/');
                if (Storage::disk('public')->exists($cleanThumb)) {
                    Storage::disk('public')->delete($cleanThumb);
                }
            }
            $att->delete();
            $deletedAttCount++;
        }

        // 3. Clean Project Gallery Images
        $oldProjectImages = ProjectImage::where('created_at', '<', $cutoffDate)->get();
        foreach ($oldProjectImages as $img) {
            if ($img->image_path && !str_starts_with($img->image_path, 'http://') && !str_starts_with($img->image_path, 'https://')) {
                $cleanPath = ltrim($img->image_path, '/');
                if (Storage::disk('public')->exists($cleanPath)) {
                    Storage::disk('public')->delete($cleanPath);
                    $deletedFilesCount++;
                }
            }
            $img->delete();
            $deletedProjImgCount++;
        }

        $this->info("Cleanup Completed Successfully!");
        $this->info("- Deleted Task Attachments: {$deletedTaskAttCount}");
        $this->info("- Deleted General Attachments: {$deletedAttCount}");
        $this->info("- Deleted Project Images: {$deletedProjImgCount}");
        $this->info("- Total Physical Files Deleted: {$deletedFilesCount}");

        return 0;
    }
}
