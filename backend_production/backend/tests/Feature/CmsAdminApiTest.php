<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Category;
use App\Models\Project;
use App\Models\Service;
use App\Models\Blog;
use App\Models\Testimonial;
use App\Models\FAQ;
use App\Models\Extra;

class CmsAdminApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => 'admin']);
    }

    public function test_activity_logs()
    {
        $res = $this->actingAs($this->admin)->getJson('/api/activity-logs');
        $res->assertStatus(200);
    }

    public function test_categories_admin_crud()
    {
        $store = $this->actingAs($this->admin)->postJson('/api/categories', [
            'name' => 'Brand Identity',
            'name_ar' => 'تصميم الهوية',
            'name_en' => 'Brand Identity'
        ]);
        $store->assertStatus(201);
        $catId = $store->json('data.id');

        $update = $this->actingAs($this->admin)->putJson("/api/categories/{$catId}", [
            'name' => 'Visual Brand Identity'
        ]);
        $update->assertStatus(200);

        $del = $this->actingAs($this->admin)->deleteJson("/api/categories/{$catId}");
        $del->assertStatus(200);
    }

    public function test_projects_services_and_blogs_admin_crud()
    {
        $category = Category::create(['name' => 'General', 'slug' => 'general']);

        // Project
        $project = Project::create([
            'title' => ['en' => 'CRM Platform', 'ar' => 'منصة'],
            'description' => ['en' => 'Desc', 'ar' => 'وصف'],
            'main_image' => 'projects/default.jpg',
            'category_id' => $category->id
        ]);
        $projId = $project->id;

        $this->actingAs($this->admin)->deleteJson("/api/projects/{$projId}")->assertStatus(200);

        // Service
        $servStore = $this->actingAs($this->admin)->postJson('/api/services', [
            'title' => ['en' => 'SEO Optimization', 'ar' => 'تحسين محركات البحث'],
            'description' => ['en' => 'Improve rankings', 'ar' => 'تحسين الظهور']
        ]);
        $servStore->assertStatus(201);
        $servId = $servStore->json('data.id');

        $this->actingAs($this->admin)->putJson("/api/services/{$servId}", [
            'title' => ['en' => 'SEO & SEM', 'ar' => 'تحسين وإعلانات محركات البحث'],
            'description' => ['en' => 'Improve search rankings', 'ar' => 'تحسين نتائج البحث']
        ])->assertStatus(200);

        $this->actingAs($this->admin)->deleteJson("/api/services/{$servId}")->assertStatus(200);

        // Blog
        $blog = Blog::create([
            'title' => ['en' => 'Top 10 Marketing Strategies', 'ar' => 'أفضل 10 استراتيجيات تسويقية'],
            'description' => ['en' => 'Article Summary', 'ar' => 'ملخص المقال']
        ]);
        $blogId = $blog->id;

        $this->actingAs($this->admin)->deleteJson("/api/blogs/{$blogId}")->assertStatus(200);
    }

    public function test_testimonials_faqs_extras_about_page_content()
    {
        // Testimonial
        $testStore = $this->actingAs($this->admin)->postJson('/api/testimonials', [
            'client_name' => 'Alice',
            'job_title' => 'CEO',
            'rating' => 5,
            'feedback' => [
                'ar' => 'خدمة ممتازة',
                'en' => 'Outstanding service quality'
            ]
        ]);
        $testStore->assertStatus(200);
        $testId = $testStore->json('data.id');

        $this->actingAs($this->admin)->putJson("/api/testimonials/{$testId}", [
            'client_name' => 'Alice Johnson',
            'job_title' => 'CEO & Founder',
            'rating' => 5,
            'feedback' => [
                'ar' => 'خدمة رائعة وممتازة',
                'en' => 'Outstanding service quality updated'
            ]
        ])->assertStatus(200);

        $this->actingAs($this->admin)->deleteJson("/api/testimonials/{$testId}")->assertStatus(200);

        // FAQ
        $faqStore = $this->actingAs($this->admin)->postJson('/api/faqs', [
            'question_en' => 'How long does development take?',
            'question_ar' => 'كم استغرق التطوير؟',
            'answer_en' => 'Typically 4 to 8 weeks.',
            'answer_ar' => 'عادة من 4 إلى 8 أسابيع.'
        ]);
        $faqStore->assertStatus(201);
        $faqId = $faqStore->json('data.id');

        $this->actingAs($this->admin)->putJson("/api/faqs/{$faqId}", [
            'question_en' => 'How long does full development take?',
            'question_ar' => 'كم يستغرق التطوير الكامل؟',
            'answer_en' => 'Typically 4 to 12 weeks.',
            'answer_ar' => 'عادة من 4 إلى 12 أسابيع.'
        ])->assertStatus(200);

        $this->actingAs($this->admin)->deleteJson("/api/faqs/{$faqId}")->assertStatus(200);

        // Extra Resource
        $extraStore = $this->actingAs($this->admin)->postJson('/api/extras', [
            'title' => 'Completed Projects',
            'value' => '50+'
        ]);
        $extraStore->assertStatus(201);
        $extraId = $extraStore->json('data.id');

        $this->actingAs($this->admin)->putJson("/api/extras/{$extraId}", [
            'title' => 'Updated Projects Count',
            'value' => '60+'
        ])->assertStatus(200);

        $this->actingAs($this->admin)->deleteJson("/api/extras/{$extraId}")->assertStatus(200);

        // About & Page Content
        $this->actingAs($this->admin)->postJson('/api/about', [
            'hero_title_ar' => 'عن شركتنا'
        ])->assertStatus(200);

        $this->actingAs($this->admin)->postJson('/api/page-content/privacy', [
            'section_key' => 'hero',
            'content_ar' => 'سياسة الخصوصية'
        ])->assertStatus(200);
    }

    public function test_contact_info_admin_crud()
    {
        $res = $this->actingAs($this->admin)->postJson('/api/contact-info', [
            'whatsapp_phone' => '+966500000000',
            'official_email' => 'admin@mediaglow.com',
            'company_address' => 'Riyadh, KSA'
        ]);
        $res->assertStatus(201);

        $updateRes = $this->actingAs($this->admin)->putJson('/api/contact-info', [
            'whatsapp_phone' => '+966511111111',
            'official_email' => 'contact@mediaglow.com',
            'company_address' => 'Cairo, Egypt'
        ]);
        $updateRes->assertStatus(200);
        $updateRes->assertJsonFragment(['whatsapp_phone' => '+966511111111']);
    }
}
