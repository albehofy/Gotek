<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageContent;

class PageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Home Data
        PageContent::updateOrCreate(
            ['page_name' => 'home'],
            ['content' => [
                'hero' => [
                    'tag' => ['en' => 'Welcome to Media Glow', 'ar' => 'مرحباً بكم في ميديا جلو'],
                    'title1' => ['en' => 'Future of Innovation', 'ar' => 'مستقبل الابتكار'],
                    'subtitle' => ['en' => 'We create exceptional digital experiences.', 'ar' => 'نحن نصنع تجارب رقمية استثنائية.']
                ]
            ]]
        );

        // About Data
        PageContent::updateOrCreate(
            ['page_name' => 'about'],
            ['content' => [
                'hero' => [
                    'en' => [
                        'label' => 'Our Story',
                        'title1' => 'Building the Future',
                        'desc' => 'We are passionate about creating amazing products.'
                    ],
                    'ar' => [
                        'label' => 'قصتنا',
                        'title1' => 'نبني المستقبل',
                        'desc' => 'نحن شغوفون بابتكار منتجات مذهلة.'
                    ]
                ],
                'timeline' => [
                    [
                        'year' => '2023',
                        'title' => ['en' => 'Founded', 'ar' => 'التأسيس'],
                        'description' => ['en' => 'Media Glow was born.', 'ar' => 'ولدت ميديا جلو.']
                    ]
                ]
            ]]
        );

        // Services Data
        PageContent::updateOrCreate(
            ['page_name' => 'services'],
            ['content' => [
                'hero' => [
                    'tag' => ['en' => 'What We Do', 'ar' => 'ماذا نفعل'],
                    'title' => ['en' => 'Our Core Services', 'ar' => 'خدماتنا الأساسية'],
                    'desc' => ['en' => 'Explore the solutions we offer.', 'ar' => 'استكشف الحلول التي نقدمها.']
                ]
            ]]
        );

        // Portfolio Data
        PageContent::updateOrCreate(
            ['page_name' => 'portfolio'],
            ['content' => [
                'hero' => [
                    'tag' => ['en' => 'Our Work', 'ar' => 'أعمالنا'],
                    'title' => ['en' => 'Featured Projects', 'ar' => 'مشاريع مميزة'],
                    'desc' => ['en' => 'Check out some of our recent digital creations.', 'ar' => 'شاهد بعض إبداعاتنا الرقمية الأخيرة.']
                ]
            ]]
        );

        // Blogs Data
        PageContent::updateOrCreate(
            ['page_name' => 'blogs'],
            ['content' => [
                'hero' => [
                    'tag' => ['en' => 'Insights', 'ar' => 'أفكار'],
                    'title' => ['en' => 'Latest Articles', 'ar' => 'أحدث المقالات'],
                    'desc' => ['en' => 'Thoughts, stories and ideas from our team.', 'ar' => 'أفكار وقصص من فريقنا.']
                ]
            ]]
        );

        // Footer Data
        PageContent::updateOrCreate(
            ['page_name' => 'footer'],
            ['content' => [
                'desc' => ['en' => 'A creative agency pushing the boundaries of web experiences.', 'ar' => 'وكالة إبداعية تدفع حدود التجارب الرقمية.'],
                'email' => 'hello@mediaglow.com',
                'phone' => '966500000000',
                'copy' => ['en' => '© 2026 Media Glow. All rights reserved.', 'ar' => '© 2026 ميديا جلو. جميع الحقوق محفوظة.'],
                'socials' => [
                    'facebook' => 'https://facebook.com/mediaglow',
                    'instagram' => 'https://instagram.com/mediaglow',
                    'twitter' => 'https://x.com/mediaglow',
                    'linkedin' => 'https://linkedin.com/company/mediaglow'
                ]
            ]]
        );
    }
}
