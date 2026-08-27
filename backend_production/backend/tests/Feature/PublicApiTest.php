<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Project;
use App\Models\Category;
use App\Models\User;
use App\Models\AboutPage;
use App\Models\PageContent;
use App\Models\Testimonial;
use App\Models\Blog;
use App\Models\Service;
use App\Models\FAQ;
use App\Models\ContactInfo;
use App\Models\ContactMessage;

class PublicApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_home_data_and_stats()
    {
        $responseHome = $this->getJson('/api/home-data');
        $responseHome->assertStatus(200);

        $responseStats = $this->getJson('/api/stats');
        $responseStats->assertStatus(200);
    }

    public function test_public_projects_index_and_show()
    {
        $category = Category::create(['name' => 'Programming', 'slug' => 'programming']);
        $project = Project::create([
            'title' => ['en' => 'Test Project', 'ar' => 'مشروع'],
            'slug' => 'test-project',
            'description' => ['en' => 'Project Description', 'ar' => 'وصف'],
            'main_image' => 'projects/default.jpg',
            'category_id' => $category->id,
            'client_name' => 'Acme',
            'status' => 'completed'
        ]);

        $resIndex = $this->getJson('/api/projects');
        $resIndex->assertStatus(200);

        $resShow = $this->getJson('/api/projects/' . $project->id);
        $resShow->assertStatus(200)
            ->assertJsonPath('title_en', 'Test Project');
    }

    public function test_public_categories_and_team()
    {
        Category::create(['name' => 'Marketing', 'slug' => 'marketing']);
        User::factory()->create(['role' => 'employee', 'name' => 'Team Member']);

        $resCat = $this->getJson('/api/categories');
        $resCat->assertStatus(200);

        $resTeam = $this->getJson('/api/team');
        $resTeam->assertStatus(200);
    }

    public function test_public_about_and_page_content()
    {
        AboutPage::create(['hero_title_ar' => 'عن الشركة', 'hero_title_en' => 'About Us']);
        PageContent::create([
            'page_slug' => 'terms',
            'page_name' => 'Terms of Service',
            'section_key' => 'hero',
            'content_ar' => 'الشروط'
        ]);

        $resAbout = $this->getJson('/api/about');
        $resAbout->assertStatus(200);

        $resPage = $this->getJson('/api/page-content/terms');
        $resPage->assertStatus(200);
    }

    public function test_public_testimonials_blogs_services_faqs()
    {
        Testimonial::create(['client_name' => 'Jane', 'content' => 'Great work']);
        $blog = Blog::create([
            'title' => 'Blog 1',
            'slug' => 'blog-1',
            'description' => 'Blog summary',
            'content' => 'Content'
        ]);
        $service = Service::create(['title' => 'Service 1', 'slug' => 'service-1', 'description' => 'Desc']);
        FAQ::create([
            'question_en' => 'How to start?',
            'question_ar' => 'كيف أبدأ؟',
            'answer_en' => 'Contact us.',
            'answer_ar' => 'تواصل معنا.'
        ]);

        $this->getJson('/api/testimonials')->assertStatus(200);
        $this->getJson('/api/blogs')->assertStatus(200);
        $this->getJson('/api/blogs/' . $blog->id)->assertStatus(200);
        $this->getJson('/api/services')->assertStatus(200);
        $this->getJson('/api/services/' . $service->id)->assertStatus(200);
        $this->getJson('/api/faqs')->assertStatus(200);
    }

    public function test_contact_info_and_messages()
    {
        ContactInfo::create([
            'whatsapp_phone' => '123456789',
            'official_email' => 'contact@example.com',
            'company_address' => 'Cairo, Egypt'
        ]);

        $this->getJson('/api/contact-info')->assertStatus(200)
            ->assertJsonPath('whatsapp_support.phone', '123456789');

        $this->getJson('/api/contact')->assertStatus(200);

        $postRes = $this->postJson('/api/contact', [
            'full_name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '01012345678',
            'service_needed' => 'Web Development',
            'project_details' => 'I need a new website created.'
        ]);
        $postRes->assertStatus(201);

        $msg = ContactMessage::first();
        $this->assertNotNull($msg);

        $delRes = $this->deleteJson('/api/contact/' . $msg->id);
        $delRes->assertStatus(200);
    }
}
