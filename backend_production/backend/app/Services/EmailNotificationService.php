<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EmailNotificationService
{
    /**
     * Send a styled HTML email notification to a user.
     *
     * @param User|int $recipient
     * @param string $subject
     * @param string $title
     * @param string $messageBody
     * @param string|null $actionUrl
     * @param string|null $actionLabel
     * @return bool
     */
    public static function sendNotificationEmail($recipient, string $subject, string $title, string $messageBody, ?string $actionUrl = null, ?string $actionLabel = 'عرض التفاصيل في النظام'): bool
    {
        try {
            $user = ($recipient instanceof User) ? $recipient : User::find($recipient);
            if (!$user || empty($user->email)) {
                return false;
            }

            $userEmail = trim($user->email);
            if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
                return false;
            }

            $systemUrl = env('APP_URL', 'https://api.mediaglowegypt.com');
            $dashboardUrl = env('FRONTEND_URL', 'http://localhost:4200');
            $fullActionUrl = $actionUrl ?: $dashboardUrl;

            $htmlContent = self::renderHtmlTemplate($user->name, $title, $messageBody, $fullActionUrl, $actionLabel);

            Mail::html($htmlContent, function ($message) use ($userEmail, $user, $subject) {
                $fromAddress = env('MAIL_FROM_ADDRESS', 'noreply@mediaglowegypt.com');
                $fromName = env('MAIL_FROM_NAME', 'Media Glow System');

                $message->from($fromAddress, $fromName)
                        ->to($userEmail, $user->name)
                        ->subject('🔔 ' . $subject . ' | سيستم ميديا جلو');
            });

            return true;
        } catch (\Throwable $e) {
            Log::warning('EmailNotificationService failed: ' . $e->getMessage(), [
                'recipient' => is_object($recipient) ? ($recipient->email ?? $recipient->id) : $recipient,
                'subject'   => $subject
            ]);
            return false;
        }
    }

    /**
     * Generates responsive, elegant HTML email template with Media Glow brand.
     */
    private static function renderHtmlTemplate(string $userName, string $title, string $messageBody, string $actionUrl, string $actionLabel): string
    {
        $year = date('Y');
        $safeUserName = htmlspecialchars($userName, ENT_QUOTES, 'UTF-8');
        $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
        $safeBody = nl2br(htmlspecialchars($messageBody, ENT_QUOTES, 'UTF-8'));
        $safeUrl = htmlspecialchars($actionUrl, ENT_QUOTES, 'UTF-8');
        $safeLabel = htmlspecialchars($actionLabel, ENT_QUOTES, 'UTF-8');

        return <<<HTML
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$safeTitle}</title>
  <style>
    body {
      margin: 0; padding: 0; background-color: #0b0f19; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; direction: rtl; text-align: right; color: #e2e8f0;
    }
    .wrapper {
      max-width: 600px; margin: 24px auto; background: #111827; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .header {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 24px 28px; text-align: center; color: #ffffff;
    }
    .logo-badge {
      display: inline-block; font-size: 1.4rem; font-weight: 900; letter-spacing: 1px; color: #ffffff; text-shadow: 0 2px 8px rgba(0,0,0,0.3); margin-bottom: 4px;
    }
    .logo-badge span { color: #38bdf8; }
    .header-sub {
      font-size: 0.85rem; color: #e0e7ff; margin: 0; opacity: 0.95;
    }
    .content {
      padding: 30px 28px;
    }
    .greeting {
      font-size: 1.05rem; font-weight: 700; color: #f8fafc; margin-bottom: 16px;
    }
    .card-box {
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; border-right: 4px solid #6366f1;
    }
    .notif-title {
      font-size: 1.05rem; font-weight: 800; color: #818cf8; margin: 0 0 10px 0;
    }
    .notif-body {
      font-size: 0.94rem; line-height: 1.65; color: #cbd5e1; margin: 0;
    }
    .btn-wrap {
      text-align: center; margin: 28px 0 16px;
    }
    .btn {
      display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: #ffffff !important; text-decoration: none; padding: 12px 28px; font-size: 0.95rem; font-weight: 700; border-radius: 8px; box-shadow: 0 4px 14px rgba(99,102,241,0.4);
    }
    .footer {
      background: #0d121f; padding: 18px 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.78rem; color: #64748b;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo-badge">Media<span>Glow</span> System</div>
      <p class="header-sub">نظام إدارة الوكالة والمهام والمشاريع</p>
    </div>
    <div class="content">
      <div class="greeting">مرحباً {$safeUserName} 👋</div>
      <div class="card-box">
        <h3 class="notif-title">{$safeTitle}</h3>
        <p class="notif-body">{$safeBody}</p>
      </div>
      <div class="btn-wrap">
        <a href="{$safeUrl}" class="btn" target="_blank">{$safeLabel} &larr;</a>
      </div>
    </div>
    <div class="footer">
      هذا إشعار تلقائي صادر عن منصة Media Glow CRM & ERP System &copy; {$year}. جميع الحقوق محفوظة.
    </div>
  </div>
</body>
</html>
HTML;
    }
}
