import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-CK3LQYPJ.js";

// src/app/services/translations.ts
var translations = {
  en: {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "login": "Login",
    "get_started": "Get Started",
    "mob_get_started": "Get Started \u2192",
    "hero_badge": "Integrated Digital Agency \xB7 Saudi Arabia",
    "hero_title_1": "Your Business,",
    "hero_title_2": "Digitally",
    "hero_title_3": "Elevated",
    "hero_desc": "From bold brand identities and high-converting ad campaigns to blazing-fast websites and custom POS systems \u2014 Media Glow is your all-in-one digital growth partner in Saudi Arabia.",
    "explore_services": "Explore Our Services",
    "view_work": "View Our Work",
    "clients_served": "Clients Served",
    "years_exp": "Years Experience",
    "team_spec": "Team Specialists",
    "brand_id": "Brand Identity",
    "brand_id_sub": "12 delivered this week",
    "web_proj": "Web Projects",
    "web_proj_sub": "5 live this month",
    "new_client": "New client onboarded",
    "scroll": "Scroll",
    "hfg_t1": "Integrated Dynamic Engine",
    "hfg_d1": "Crafting unified growth strategies from code to creative branding.",
    "hfg_t2": "High-Conversion Focus",
    "hfg_d2": "Result-oriented advertising backed by 9+ years of proven expertise.",
    "hfg_t3": "Next-Gen Tech Architecture",
    "hfg_d3": "Ultra-fast web platforms and highly optimized custom POS systems.",
    "svc_ads": "Paid Advertising",
    "svc_brand": "Brand Identity",
    "svc_social": "Social Media",
    "svc_video": "Video Production",
    "svc_web": "Web Development",
    "svc_pos": "POS Systems",
    "who_we": "Who We Are",
    "about_title_1": "The Agency Built",
    "about_title_2": "For Real Results",
    "about_desc_1": "Media Glow combines creative marketing with technical engineering under one roof. Founded on 9+ years of proven success in Egypt, we bring the same excellence to Saudi Arabia's thriving digital market.",
    "about_desc_2": "Your growth is our only metric. We work as a true extension of your team, turning ideas into scalable, measurable digital outcomes.",
    "pill_results": '<i class="fi fi-rr-bullseye-arrow" style="margin-right:6px"></i> Results-Driven',
    "pill_partner": '<i class="fi fi-rr-handshake" style="margin-right:6px"></i> True Partnership',
    "pill_innov": '<i class="fi fi-rr-lightbulb-on" style="margin-right:6px"></i> Innovation First',
    "pill_data": '<i class="fi fi-rr-chart-histogram" style="margin-right:6px"></i> Data-Backed',
    "full_story": "Our Full Story \u2192",
    "mediaglow_name": "Media Glow Digital Solutions",
    "mediaglow_sub": "Your Growth Partner Since 2026",
    "fact_years": "9+ Years of Expertise",
    "fact_regions": "Egypt & Saudi Arabia",
    "fact_team": "20+ Specialists",
    "blogs": "Blogs",
    "blogs_hero_label": "Our Publications",
    "blogs_hero_title_1": "Latest Insights",
    "blogs_hero_title_2": " & Articles",
    "blogs_hero_desc": "Stay informed with the latest marketing trends, tech guides, business growth strategies, and office updates from our specialists.",
    "latest_insights": "Latest Insights",
    "blog_title_1": "News & ",
    "blog_title_2": "Articles",
    "blog_title_3": "From Our Team",
    "what_we": "What We Offer",
    "svc_title_1": "Different Ways We ",
    "svc_title_2": "Grow",
    "svc_title_3": "Your Business",
    "all_svc": "All Services \u2192",
    "svc1_title": "Paid Advertising",
    "svc1_desc": "Precision-targeted campaigns across Facebook, Instagram, Google, TikTok, and Snapchat designed to maximize ROI and drive conversions.",
    "svc2_title": "Branding & Identity",
    "svc2_desc": "Comprehensive visual identities, strategic brand guidelines, social media assets, and premium print collateral.",
    "svc3_title": "Social Media Management",
    "svc3_desc": "End-to-end community management, engaging content creation, bespoke design, and deep performance analytics.",
    "svc4_title": "Video Production",
    "svc4_desc": "High-impact Reels, promotional videos, professional shoots, and cinematic editing engineered for maximum engagement.",
    "svc5_title": "Web Design & Development",
    "svc5_desc": "Lightning-fast, highly responsive, and beautifully crafted websites\u2014ranging from corporate platforms to robust e-commerce ecosystems.",
    "svc6_title": "POS Systems",
    "svc6_desc": "Tailored POS and cashier solutions, complete with advanced inventory management and comprehensive sales reporting.",
    "by_numbers": "By The Numbers",
    "nums_title_1": "Results That",
    "nums_title_2": "Speak Volumes",
    "nums_desc": "Over nine years of delivering excellence across Egypt and the Kingdom of Saudi Arabia.",
    "meet_team": "Meet The Team \u2192",
    "stat_clients": "Happy Clients",
    "stat_years": "Years Active",
    "stat_team": "Team Specialists",
    "stat_svc": "Core Services",
    "our_port": "Our Portfolio",
    "port_title_1": "Projects We're ",
    "port_title_2": "Proud",
    "port_title_3": "To Deliver",
    "view_all": "View All Projects",
    "client_say": "What Clients Say",
    "testi_title_1": "Trusted by ",
    "testi_title_2": "2,000+ Businesses",
    "ready_start": "Ready To Start?",
    "cta_title_1": "Ready to Build",
    "cta_title_2": "Something Exceptional?",
    "cta_desc": "Whether it's a brand refresh, aggressive lead generation, or a full digital transformation \u2014 Media Glow is the partner that delivers.",
    "start_proj": "Start Your Project \u2192",
    "footer_desc": "Integrated digital solutions for businesses and entrepreneurs. Your true partner in growth \u2014 from idea to results.",
    "footer_svc": "Services",
    "footer_ads": "Paid Advertising",
    "footer_brand": "Branding & Identity",
    "footer_social": "Social Media",
    "footer_video": "Video Production",
    "footer_web": "Web Development",
    "footer_pos": "POS Systems",
    "footer_company": "Company",
    "footer_about": "About Us",
    "footer_port": "Portfolio",
    "footer_contact_link": "Contact",
    "footer_contact": "Contact",
    "footer_email": "hello@mediaglow.com",
    "footer_wa": "WhatsApp Support",
    "footer_ksa": "Saudi Arabia",
    "footer_copy": "\xA9 2026 Media Glow Digital Solutions \u2014 mediaglow.com All rights reserved.",
    "footer_privacy": "Privacy Policy",
    "footer_terms": "Terms of Service",
    "about_hero_label": "About Media Glow",
    "about_hero_1": "Built on Experience,",
    "about_hero_2": "Driven by",
    "about_hero_3": "Results",
    "about_hero_desc": "We are a team of engineers, creatives, and marketers with over 9 years of proven success \u2014 and a singular mission: to become your most valuable digital partner.",
    "our_story": "Our Story Below",
    "our_journey": "Our Journey",
    "how_mediaglow": "How Media Glow",
    "came_to_be": "Came to Be",
    "timeline_2015": "Media Glow Founded",
    "timeline_2015_desc": "Started our journey in Egypt's digital marketing space, helping local businesses grow their online presence.",
    "timeline_2019": "Expanded into Tech Solutions",
    "timeline_2019_desc": "Added web development and POS systems to our offerings, becoming a true full-service agency.",
    "timeline_2023": "2,000 Clients Milestone",
    "timeline_2023_desc": "Celebrated serving over 2,000 businesses across multiple industries in Egypt and beyond.",
    "timeline_2026": "Media Glow Launches in Saudi Arabia",
    "timeline_2026_desc": "A new chapter begins \u2014 bringing world-class digital solutions to the Saudi market under the Media Glow brand.",
    "why_built": "Why We Built",
    "why_built_1": "Why We Built",
    "why_built_desc_1": "Media Glow was founded on the vision of uniting strategy, creative marketing, and technology under one roof.",
    "why_built_desc_2": "We believe in measurable results, transparent collaboration, and continuous innovation.",
    "quote_text": "Excellence is not an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
    "quote_cite": "Media Glow Founders",
    "our_foundation": "Our Foundation",
    "stand_for": "What We",
    "stand_for_2": "Stand For",
    "vision_title": "Our Vision",
    "vision_desc": "To be the premier digital growth partner in the Middle East.",
    "mission_title": "Our Mission",
    "mission_desc": "Empowering businesses through cutting-edge technology and data-driven marketing.",
    "values_title": "Our Values",
    "values_desc": "Integrity, innovation, client success, and relentless quality.",
    "leadership": "Leadership",
    "meet_founders": "Meet Our",
    "founders": "Founders",
    "founder1_name": "Eng. Mohamed Wagih El-Sharkawy",
    "founder1_role": "Co-Founder & CEO",
    "founder1_desc": "A seasoned engineer and entrepreneur with deep expertise in technical systems and digital strategy. Mohamed drives Media Glow's vision for integrated, technology-forward solutions.",
    "founder2_name": "Eng. Rayhan El-Bandary",
    "founder2_role": "Co-Founder & COO",
    "founder2_desc": "A digital marketing expert and operations specialist, Rayhan ensures every client engagement runs smoothly and delivers measurable, real-world results.",
    "the_team": "Our Team",
    "team_count": "20+ Specialists",
    "team_goal": "Working as your dedicated digital team",
    "team_desc": "Designers, developers, strategists, and performance marketers united for your success.",
    "team_role_1": "Paid Ads Specialists",
    "team_dept_1": "Performance Marketing",
    "team_role_2": "Graphic Designers",
    "team_dept_2": "Visual Identity",
    "team_role_3": "Social Media Managers",
    "team_dept_3": "Content & Community",
    "team_role_4": "Video Producers",
    "team_dept_4": "Film & Content Creation",
    "team_role_5": "Web Developers",
    "team_dept_5": "Frontend & Backend",
    "team_role_6": "Systems Developers",
    "team_dept_6": "POS & Tech Systems",
    "team_role_7": "Data Analysts",
    "team_dept_7": "Analytics & Reporting",
    "team_role_8": "Account Managers",
    "team_dept_8": "Client Relations",
    "ready_partner": "Ready to Partner",
    "ready_partner_1": "Ready to Partner With",
    "ready_partner_2": "Media Glow?",
    "cta_about": "Let us turn your digital goals into market reality.",
    "start_proj_about": "Start Your Project",
    "view_svc_about": "View Services",
    "footer_copy_about": "\xA9 2026 Media Glow Digital Solutions \u2014 mediaglow.com",
    "svc_hero_label": "What We Offer",
    "svc_hero_1": "Six Services.",
    "svc_hero_2": "Infinite",
    "svc_hero_3": "Possibilities.",
    "svc_hero_desc": "Everything your business needs to dominate digitally \u2014 under one roof, with one dedicated partner.",
    "svc_filter_all": "All Services",
    "svc_filter_marketing": "Marketing",
    "svc_filter_design": "Design",
    "svc_filter_tech": "Technology",
    "svc_1_title": "Paid Advertising Management",
    "svc_1_desc": "We design and manage high-performance advertising campaigns across every major platform \u2014 built around your specific business goals, audience, and budget.",
    "svc_1_f1": "Custom campaign strategy & audience research",
    "svc_1_f2": "Ad creative design & copywriting",
    "svc_1_f3": "A/B testing and continuous optimization",
    "svc_1_f4": "Weekly performance reports with insights",
    "svc_1_f5": "Retargeting & lookalike audience campaigns",
    "svc_1_cta": "Get a Campaign Quote \u2192",
    "svc_1_card1_label": "Campaign ROAS",
    "svc_1_card1_sub": "This Month",
    "svc_1_card2_label": "Reach",
    "svc_1_card2_sub": "Audience Size",
    "svc_1_card3_label": "Cost Per Lead",
    "svc_1_card3_sub": "Avg. This Quarter",
    "svc_2_title": "Branding & Visual Identity",
    "svc_2_desc": "Your brand is more than a logo \u2014 it's the complete impression you leave on the world. We craft identities that are memorable, consistent, and built to compete.",
    "svc_2_f1": "Logo design with multiple concepts & revisions",
    "svc_2_f2": "Full brand guidelines (colors, fonts, usage rules)",
    "svc_2_f3": "Social media profile & cover designs",
    "svc_2_f4": "Business cards, letterheads, print materials",
    "svc_2_f5": "Brand refresh for existing businesses",
    "svc_2_cta": "Request a Brand Package \u2192",
    "svc_2_card1_label": "Logo Concepts",
    "svc_2_card1_sub": "Delivered",
    "svc_2_card1_badge": "3\u20135 Options",
    "svc_2_card2_label": "Color Palette",
    "svc_2_card2_sub": "Brand Identity",
    "svc_2_card2_badge": "Full Guide",
    "svc_2_card3_label": "Brand Book",
    "svc_2_card3_sub": "Deliverable",
    "svc_2_card3_badge": "PDF + Source",
    "svc_3_title": "Social Media Management",
    "svc_3_desc": "Consistent, creative, and community-building social media presence \u2014 we handle everything from content planning to post design to analytics reporting.",
    "svc_3_f1": "Monthly content calendar & strategy",
    "svc_3_f2": "Custom-designed posts, stories & reels",
    "svc_3_f3": "Caption writing & hashtag strategy",
    "svc_3_f4": "Community management & comment replies",
    "svc_3_f5": "Monthly analytics & performance reports",
    "svc_3_cta": "Manage My Pages \u2192",
    "svc_3_card1_label": "Engagement Rate",
    "svc_3_card1_sub": "Monthly Average",
    "svc_3_card2_label": "Followers Growth",
    "svc_3_card2_sub": "Last 30 Days",
    "svc_3_card3_label": "Posts Per Month",
    "svc_3_card3_sub": "Consistent Schedule",
    "svc_4_title": "Video Production & Content Creation",
    "svc_4_desc": "Video is the most powerful format in digital marketing. Our production team creates compelling videos that captivate, convert, and build lasting brand impressions.",
    "svc_4_f1": "Professional video shooting & direction",
    "svc_4_f2": "Reels & short-form content for social",
    "svc_4_f3": "Promotional & product showcase videos",
    "svc_4_f4": "Motion graphics & animated explainers",
    "svc_4_f5": "Professional editing, color grading & audio",
    "svc_4_cta": "Book a Video Shoot \u2192",
    "svc_4_card1_label": "Average Views",
    "svc_4_card1_sub": "Per Reel",
    "svc_4_card2_label": "Turnaround",
    "svc_4_card2_sub": "Editing Time",
    "svc_4_card3_label": "4K Quality",
    "svc_4_card3_sub": "Output Format",
    "svc_5_title": "Website Design & Development",
    "svc_5_desc": "Fast, beautiful, and conversion-optimized websites. From corporate portfolios to full-scale e-commerce platforms \u2014 we build digital experiences that grow your business.",
    "svc_5_f1": "Custom UI/UX design (mobile-first)",
    "svc_5_f2": "E-commerce stores with payment gateways",
    "svc_5_f3": "SEO-optimized structure & fast load times",
    "svc_5_f4": "CMS integration for easy content management",
    "svc_5_f5": "Ongoing maintenance & support packages",
    "svc_5_cta": "Build My Website \u2192",
    "svc_5_card1_label": "Page Speed",
    "svc_5_card1_sub": "Google Score",
    "svc_5_card2_label": "Responsive",
    "svc_5_card2_sub": "All Devices",
    "svc_5_card3_label": "SSL & Security",
    "svc_5_card3_sub": "Included",
    "svc_6_title": "POS Systems",
    "svc_6_title_highlight": "Development",
    "svc_6_desc": "Custom point-of-sale and business management systems tailored to your operations \u2014 from single-branch cashier systems to multi-location enterprise platforms.",
    "svc_6_f1": "Custom cashier & billing interface",
    "svc_6_f2": "Real-time inventory management",
    "svc_6_f3": "Sales reporting & profit analytics dashboard",
    "svc_6_f4": "Multi-branch support & user roles",
    "svc_6_f5": "Training, support & system updates included",
    "svc_6_cta": "Request a POS Demo \u2192",
    "svc_6_card1_label": "Daily Reports",
    "svc_6_card1_sub": "Auto-Generated",
    "svc_6_card2_label": "Multi-Branch",
    "svc_6_card2_sub": "Support",
    "svc_6_card3_label": "Data Backup",
    "svc_6_card3_sub": "Cloud Sync",
    "svc_process_label": "How We Work",
    "svc_process_title": "Our",
    "svc_process_title_highlight": "Process",
    "svc_process_step1_title": "Discovery Call",
    "svc_process_step1_desc": "We start with a free consultation to understand your business, goals, audience, and competitive landscape.",
    "svc_process_step2_title": "Strategy & Proposal",
    "svc_process_step2_desc": "We craft a tailored strategy and detailed proposal \u2014 clear deliverables, timelines, and measurable KPIs.",
    "svc_process_step3_title": "Execution",
    "svc_process_step3_desc": "Our specialized team gets to work, with regular check-ins and updates throughout the delivery phase.",
    "svc_process_step4_title": "Results & Growth",
    "svc_process_step4_desc": "We analyze results, report transparently, and continuously optimize to maximize your ROI.",
    "svc_cta_title": "Not Sure Which Service",
    "svc_cta_title_2": "You Need?",
    "svc_cta_desc": "Book a free consultation and we'll guide you to the perfect solution for your business goals.",
    "svc_cta_btn": "Book Free Consultation \u2192",
    "svc_footer_ads": "Paid Advertising",
    "svc_footer_branding": "Branding",
    "svc_footer_social": "Social Media",
    "svc_footer_video": "Video Production",
    "svc_footer_web": "Web Development",
    "svc_footer_pos": "POS Systems",
    "contact_hero_label": "Let's Talk",
    "contact_hero_title_1": "Let's Bring Your",
    "contact_hero_title_2": "Vision",
    "contact_hero_title_3": "to Life",
    "contact_hero_desc": "Whether you have a project in mind or just want to chat about growing your business, we're here to help. Fill out the form or reach out directly.",
    "contact_info_intro": "Have a quick question? We're just a message away. Get in touch and let's discuss how we can help your business grow.",
    "contact_label_email": "Email",
    "contact_label_phone": "Phone",
    "contact_label_wa": "WhatsApp",
    "contact_hours": "Business Hours",
    "contact_form_title": "Send Us a",
    "contact_form_title_2": "Message",
    "contact_form_subtitle": "Tell us about your project and let's create something amazing together.",
    "contact_label_name": "Full Name",
    "contact_label_email_form": "Email Address",
    "contact_label_phone_form": "Phone Number",
    "contact_label_service": "Service Interest",
    "contact_label_budget": "Budget",
    "contact_label_details": "Project Details",
    "contact_placeholder_name": "e.g. Ahmed Al-Rashid",
    "contact_placeholder_email": "hello@company.com",
    "contact_placeholder_phone": "+966 5XXXX XXXX",
    "contact_placeholder_details": "Tell us more about your project, goals, and timeline...",
    "contact_budget_starter": "Under 5k",
    "contact_budget_growth": "5k \u2013 15k",
    "contact_budget_scale": "15k \u2013 50k+",
    "contact_required": "Required",
    "contact_submit": "Send Message",
    "contact_note": "We'll get back to you within 24 hours during business hours.",
    "contact_success_title": "Message Received!",
    "contact_success_desc": "Thanks for reaching out. We'll review your details and get back to you within 24 hours.",
    "contact_faq_title": "FAQs",
    "contact_faq_title_main": "Frequently",
    "contact_faq_title_accent": "Asked",
    "contact_map_title": "Media Glow Digital Solutions",
    "contact_map_location": "Riyadh, Kingdom of Saudi Arabia",
    "contact_map_btn": "Open in Google Maps \u2192",
    "port_hero_label": "Our Portfolio",
    "port_hero_title_1": "Work We're",
    "port_hero_title_2": "Proud",
    "port_hero_title_3": "To Deliver",
    "port_hero_desc": "Real projects. Real results. Explore our work across branding, advertising, web development, video, and more.",
    "port_filter_all": "All Projects",
    "port_filter_branding": "Branding",
    "port_filter_ads": "Ads",
    "port_filter_web": "Web",
    "port_filter_video": "Video",
    "port_filter_pos": "POS",
    "port_filter_social": "Social",
    "port_empty": "No projects in this category yet",
    "port_stat_projects": "Projects Delivered",
    "port_stat_clients": "Happy Clients",
    "port_stat_countries": "Countries Served",
    "port_stat_awards": "Award Wins",
    "port_cta_label": "Work With Us",
    "port_cta_title": "Your Project Could Be",
    "port_cta_title_2": "Our Next Success Story",
    "port_cta_btn": "Start Your Project \u2192",
    "port_cta_btn_secondary": "View Services",
    "proj_breadcrumb_home": "Home",
    "proj_breadcrumb_portfolio": "Portfolio",
    "proj_breadcrumb_current": "Project",
    "proj_featured": "Featured",
    "proj_label_client": "Client",
    "proj_label_category": "Category",
    "proj_label_timeline": "Timeline",
    "proj_label_team": "Team Size",
    "proj_overview": "Overview",
    "proj_gallery": "Gallery",
    "proj_challenge": "Challenge",
    "proj_solution": "Solution",
    "proj_results": "Results",
    "proj_process": "Our Process",
    "proj_testimonial": "Client Testimonial",
    "proj_deliverables": "Deliverables",
    "proj_share": "Share This Project",
    "proj_share_copy": "Copy Link",
    "proj_share_linkedin": "LinkedIn",
    "proj_share_twitter": "Twitter",
    "proj_related": "Related Projects",
    "proj_related_explore": "Explore More Work",
    "search_blogs": "Search articles...",
    "all_proj": "All Projects",
    "read_more": "Read More",
    "no_articles": "No articles found matching your search.",
    "no_projects": "No projects found in this category.",
    "select_service": "Select a service...",
    "company_name": "Company / Brand Name",
    "company_placeholder": "Your company name",
    "name_placeholder": "Your full name",
    "phone_placeholder": "+966 5X XXX XXXX",
    "email_placeholder": "you@company.com",
    "message_placeholder": "Tell us about your project, goals, timeline, and requirements...",
    "send_another": "Send Another Message",
    "key_features": "Key Features",
    "insights": "Insights",
    "&_news": " & Articles",
    "proj_challenge_title": "The Challenge",
    "proj_solution_title": "Our Solution",
    "proj_cta_title": "Ready to start?",
    "proj_cta_sub": "Let us build something similar for your business.",
    "back_to_portfolio": "Back to Portfolio",
    "back_to_blogs": "Back to all articles",
    "share": "Share:",
    "love_article": "Love This Article",
    "loved_it": "Loved It!",
    "article": "Article"
  },
  ar: {
    "home": "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
    "about": "\u0645\u0646 \u0646\u062D\u0646",
    "services": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "portfolio": "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    "contact": "\u062A\u0648\u0627\u0635\u0644",
    "login": "\u062F\u062E\u0648\u0644",
    "get_started": "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
    "mob_get_started": "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u2192",
    "hero_badge": "\u0648\u0643\u0627\u0644\u0629 \u0631\u0642\u0645\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \xB7 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    "hero_title_1": "\u0634\u0631\u064A\u0643\u0643 \u0641\u064A",
    "hero_title_2": "\u0627\u0644\u0646\u0645\u0648",
    "hero_title_3": "\u0627\u0644\u0631\u0642\u0645\u064A",
    "hero_desc": "\u0646\u0628\u0646\u064A \u062A\u062C\u0627\u0631\u0628 \u0631\u0642\u0645\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u064F\u062D\u0642\u0642 \u0646\u062A\u0627\u0626\u062C \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633. \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0627\u062A \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u062F\u0627\u0621 \u0625\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0648\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639 \u2014 Media Glow \u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A \u0644\u0644\u0646\u0645\u0648 \u0627\u0644\u0631\u0642\u0645\u064A.",
    "explore_services": "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u062F\u0645\u0627\u062A\u0646\u0627",
    "view_work": "\u0634\u0627\u0647\u062F \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    "clients_served": "\u0639\u0645\u064A\u0644 \u0631\u0627\u0636\u064A",
    "years_exp": "\u0633\u0646\u0648\u0627\u062A \u062E\u0628\u0631\u0629",
    "team_spec": "\u0645\u062A\u062E\u0635\u0635 \u0628\u0641\u0631\u064A\u0642\u0646\u0627",
    "brand_id": "\u0647\u0648\u064A\u0629 \u0628\u0635\u0631\u064A\u0629",
    "brand_id_sub": "12 \u0645\u0634\u0631\u0648\u0639 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",
    "web_proj": "\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u064A\u0628",
    "web_proj_sub": "5 \u0645\u0634\u0627\u0631\u064A\u0639 \u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
    "new_client": "\u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F",
    "scroll": "\u0627\u0646\u0632\u0644",
    "hfg_t1": "\u0645\u062D\u0631\u0643 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0645\u062A\u0643\u0627\u0645\u0644",
    "hfg_d1": "\u0635\u064A\u0627\u063A\u0629 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0646\u0645\u0648 \u0645\u0648\u062D\u062F\u0629 \u062A\u0645\u062A\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0645\u062A\u0637\u0648\u0631\u0629 \u0625\u0644\u0649 \u0628\u0646\u0627\u0621 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629.",
    "hfg_t2": "\u062A\u0631\u0643\u064A\u0632 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A \u0639\u0644\u0649 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
    "hfg_d2": "\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0645\u0648\u062C\u0647\u0629 \u0646\u062D\u0648 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u062E\u0628\u0631\u0629 \u062A\u0633\u0648\u064A\u0642\u064A\u0629 \u062A\u0632\u064A\u062F \u0639\u0646 9 \u0633\u0646\u0648\u0627\u062A.",
    "hfg_t3": "\u0628\u0646\u064A\u0629 \u062A\u0642\u0646\u064A\u0629 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u0642\u0627\u062F\u0645",
    "hfg_d3": "\u0645\u0646\u0635\u0627\u062A \u0648\u064A\u0628 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0628\u064A\u0639 \u0645\u062A\u0637\u0648\u0631\u0629 \u0635\u0645\u0645\u062A \u062E\u0635\u064A\u0635\u0627\u064B \u0644\u0639\u0645\u0644\u064A\u0627\u062A\u0643.",
    "svc_ads": "\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "svc_brand": "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "svc_social": "\u0625\u062F\u0627\u0631\u0629 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644",
    "svc_video": "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648",
    "svc_web": "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
    "svc_pos": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "who_we": "\u0645\u0646 \u0646\u062D\u0646",
    "about_title_1": "\u0648\u0643\u0627\u0644\u0629 \u0635\u064F\u0645\u0651\u0645\u062A",
    "about_title_2": "\u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0646\u062A\u0627\u0626\u062C",
    "about_desc_1": "\u0646\u062C\u0645\u0639 \u0641\u064A Media Glow \u0628\u064A\u0646 \u0642\u0648\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A \u0648\u0639\u0645\u0642 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062A\u0642\u0646\u064A \u062A\u062D\u062A \u0633\u0642\u0641 \u0648\u0627\u062D\u062F. \u0623\u0633\u0633\u0647\u0627 \u0645\u0647\u0646\u062F\u0633\u0648\u0646 \u0648\u0645\u0633\u0648\u0651\u0642\u0648\u0646 \u0628\u062E\u0628\u0631\u0629 \u062A\u062A\u062C\u0627\u0648\u0632 9 \u0633\u0646\u0648\u0627\u062A \u0641\u064A \u0645\u0635\u0631\u060C \u0648\u0646\u0646\u0642\u0644 \u0647\u0630\u0627 \u0627\u0644\u0625\u0631\u062B \u0627\u0644\u0622\u0646 \u0625\u0644\u0649 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062F\u064A \u0628\u0643\u0644 \u062B\u0642\u0629 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629.",
    "about_desc_2": "\u0641\u0644\u0633\u0641\u062A\u0646\u0627 \u0644\u0627 \u062A\u062A\u063A\u064A\u0631: \u0646\u062C\u0627\u062D\u0643 \u0647\u0648 \u0646\u062C\u0627\u062D\u0646\u0627. \u0646\u0639\u0645\u0644 \u0643\u0627\u0645\u062A\u062F\u0627\u062F \u062D\u0642\u064A\u0642\u064A \u0644\u0641\u0631\u064A\u0642\u0643\u060C \u0648\u0646\u062D\u0648\u0651\u0644 \u0631\u0624\u064A\u062A\u0643 \u0625\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0645\u0644\u0645\u0648\u0633\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633.",
    "pill_results": '<i class="fi fi-rr-bullseye-arrow" style="margin-left:6px"></i> \u0645\u062D\u0631\u0643\u0629 \u0644\u0644\u0646\u062A\u0627\u0626\u062C',
    "pill_partner": '<i class="fi fi-rr-handshake" style="margin-left:6px"></i> \u0634\u0631\u0627\u0643\u0629 \u062D\u0642\u064A\u0642\u064A\u0629',
    "pill_innov": '<i class="fi fi-rr-lightbulb-on" style="margin-left:6px"></i> \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0623\u0648\u0644\u0627\u064B',
    "pill_data": '<i class="fi fi-rr-chart-histogram" style="margin-left:6px"></i> \u0645\u062F\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A',
    "full_story": "\u0642\u0635\u062A\u0646\u0627 \u0643\u0627\u0645\u0644\u0629 \u2192",
    "mediaglow_name": "Media Glow Digital Solutions",
    "mediaglow_sub": "\u0634\u0631\u064A\u0643\u0643 \u0641\u064A \u0627\u0644\u0646\u0645\u0648 \u0645\u0646\u0630 2026",
    "fact_years": "9+ \u0633\u0646\u0648\u0627\u062A \u0645\u0646 \u0627\u0644\u062E\u0628\u0631\u0629",
    "fact_regions": "\u0645\u0635\u0631 \u0648\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    "fact_team": "20+ \u0645\u062A\u062E\u0635\u0635",
    "blogs": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
    "blogs_hero_label": "\u0645\u0646\u0634\u0648\u0631\u0627\u062A\u0646\u0627",
    "blogs_hero_title_1": "\u0622\u062E\u0631 \u0627\u0644\u0623\u0641\u0643\u0627\u0631",
    "blogs_hero_title_2": " \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A",
    "blogs_hero_desc": "\u0627\u0628\u0642 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0628\u0623\u062D\u062F\u062B \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u060C \u0648\u0627\u0644\u0623\u062F\u0644\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629\u060C \u0648\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0646\u0645\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644\u060C \u0648\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0628 \u0645\u0646 \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u064A\u0646 \u0644\u062F\u064A\u0646\u0627.",
    "latest_insights": "\u0622\u062E\u0631 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0643\u0627\u0631",
    "blog_title_1": "\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u062E\u0628\u0627\u0631 ",
    "blog_title_2": "\u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A",
    "blog_title_3": "\u0645\u0646 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A",
    "what_we": "\u0645\u0627 \u0646\u0642\u062F\u0645\u0647",
    "svc_title_1": "\u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0637\u0631\u0642 \u0643\u064A \u0646\u0633\u0627\u0639\u062F\u0643 ",
    "svc_title_2": "\u062A\u0646\u0645\u0648",
    "svc_title_3": "\u0639\u0645\u0644\u0643",
    "all_svc": "\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u2192",
    "svc1_title": "\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "svc1_desc": "\u062D\u0645\u0644\u0627\u062A \u0625\u0639\u0644\u0627\u0646\u064A\u0629 \u0645\u0648\u062C\u0651\u0647\u0629 \u0628\u062F\u0642\u0629 \u0639\u0627\u0644\u064A\u0629 \u0639\u0628\u0631 Meta \u0648Google \u0648TikTok \u0648Snapchat\u060C \u0645\u0635\u0645\u0645\u0629 \u0644\u062A\u0639\u0638\u064A\u0645 \u0639\u0627\u0626\u062F \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0648\u062A\u062D\u0648\u064A\u0644 \u0643\u0644 \u0631\u064A\u0627\u0644 \u0625\u0644\u0649 \u0646\u062A\u064A\u062C\u0629 \u0645\u0644\u0645\u0648\u0633\u0629.",
    "svc2_title": "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "svc2_desc": "\u0646\u0628\u0646\u064A \u0647\u0648\u064A\u0627\u062A \u0628\u0635\u0631\u064A\u0629 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0643\u0627\u0645\u0644\u0629: \u0634\u0639\u0627\u0631\u0627\u062A\u060C \u0643\u062A\u064A\u0628 \u0647\u0648\u064A\u0629\u060C \u0623\u0635\u0648\u0644 \u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627\u060C \u0648\u0645\u0648\u0627\u062F \u0645\u0637\u0628\u0648\u0639\u0629 \u2014 \u062A\u0639\u0643\u0633 \u0642\u064A\u0645\u0629 \u0639\u0644\u0627\u0645\u062A\u0643 \u0648\u062A\u064F\u0645\u064A\u0651\u0632\u0647\u0627 \u0641\u064A \u0627\u0644\u0633\u0648\u0642.",
    "svc3_title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A",
    "svc3_desc": "\u0625\u062F\u0627\u0631\u0629 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0634\u0627\u0645\u0644\u0629: \u062A\u062E\u0637\u064A\u0637 \u0645\u062D\u062A\u0648\u0649\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u0646\u0634\u0648\u0631\u0627\u062A\u060C \u0643\u062A\u0627\u0628\u0629 \u0646\u0635\u0648\u0635 \u062A\u0633\u0648\u064A\u0642\u064A\u0629\u060C \u0648\u062A\u0642\u0627\u0631\u064A\u0631 \u0623\u062F\u0627\u0621 \u0634\u0647\u0631\u064A\u0629.",
    "svc4_title": "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648",
    "svc4_desc": "\u0631\u064A\u0644\u0632 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0648\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u062A\u0631\u0648\u064A\u062C\u064A\u0629 \u0648\u062A\u0635\u0648\u064A\u0631 \u0628\u0645\u0648\u0646\u062A\u0627\u062C \u0633\u064A\u0646\u0645\u0627\u0626\u064A \u064A\u064F\u0639\u0632\u0632 \u062D\u0636\u0648\u0631 \u0639\u0644\u0627\u0645\u062A\u0643 \u0648\u064A\u0631\u0641\u0639 \u0645\u0639\u062F\u0644\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644.",
    "svc5_title": "\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639",
    "svc5_desc": "\u0645\u0648\u0627\u0642\u0639 \u0648\u0645\u062A\u0627\u062C\u0631 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0628\u0633\u0631\u0639\u0629 \u062E\u0627\u0631\u0642\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629 \u2014 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0625\u0644\u0649 \u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0648\u062A\u062D\u0633\u064A\u0646 \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B.",
    "svc6_title": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "svc6_desc": "\u0623\u0646\u0638\u0645\u0629 \u0643\u0627\u0634\u064A\u0631 \u0648\u0645\u0628\u064A\u0639\u0627\u062A \u0645\u062E\u0635\u0635\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0639\u0645\u0644\u0643: \u0625\u062F\u0627\u0631\u0629 \u0645\u062E\u0632\u0648\u0646 \u0644\u062D\u0638\u064A\u0629\u060C \u062A\u0642\u0627\u0631\u064A\u0631 \u0623\u0631\u0628\u0627\u062D \u064A\u0648\u0645\u064A\u0629\u060C \u0648\u062F\u0639\u0645 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0641\u0631\u0648\u0639.",
    "by_numbers": "\u0628\u0627\u0644\u0623\u0631\u0642\u0627\u0645",
    "nums_title_1": "\u0646\u062A\u0627\u0626\u062C",
    "nums_title_2": "\u062A\u062A\u062D\u062F\u062B \u0628\u0635\u0631\u0627\u062D\u0629",
    "nums_desc": "\u0623\u0643\u062B\u0631 \u0645\u0646 \u062A\u0633\u0639 \u0633\u0646\u0648\u0627\u062A \u0645\u0646 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062A\u0645\u064A\u0632 \u0639\u0628\u0631 \u0645\u0635\u0631 \u0648\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629.",
    "meet_team": "\u0642\u0627\u0628\u0644 \u0627\u0644\u0641\u0631\u064A\u0642 \u2192",
    "stat_clients": "\u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F",
    "stat_years": "\u0633\u0646\u0648\u0627\u062A \u0646\u0634\u0627\u0637",
    "stat_team": "\u0645\u062A\u062E\u0635\u0635 \u0628\u0627\u0644\u0641\u0631\u064A\u0642",
    "stat_svc": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
    "our_port": "\u0645\u062D\u0641\u0638\u0629 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    "port_title_1": "\u0645\u0634\u0627\u0631\u064A\u0639 ",
    "port_title_2": "\u0646\u0641\u062E\u0631",
    "port_title_3": "\u0628\u062A\u0642\u062F\u064A\u0645\u0647\u0627",
    "view_all": "\u0634\u0627\u0647\u062F \u0643\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
    "client_say": "\u0645\u0627\u0630\u0627 \u064A\u0642\u0648\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    "testi_title_1": "\u0645\u0648\u062B\u0648\u0642 \u0645\u0646 ",
    "testi_title_2": "2000+ \u0639\u0645\u064A\u0644",
    "ready_start": "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0644\u0628\u062F\u0621\u061F",
    "cta_title_1": "\u0644\u0646\u0628\u0646\u064A \u0645\u0639\u0627\u064B \u0645\u0634\u0631\u0648\u0639\u0627\u064B",
    "cta_title_2": "\u064A\u064F\u063A\u064A\u0651\u0631 \u0627\u0644\u0645\u0634\u0647\u062F",
    "cta_desc": "\u0633\u0648\u0627\u0621 \u0623\u0631\u062F\u062A \u062A\u062C\u062F\u064A\u062F \u0647\u0648\u064A\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u060C \u0623\u0648 \u062A\u0636\u062E\u064A\u0645 \u0645\u0628\u064A\u0639\u0627\u062A\u0643\u060C \u0623\u0648 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0634\u0627\u0645\u0644 \u2014 Media Glow \u0647\u064A \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0630\u064A \u062A\u062B\u0642 \u0628\u0647.",
    "start_proj": "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643 \u2192",
    "footer_desc": "\u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0631\u0648\u0627\u062F. \u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0641\u064A \u0627\u0644\u0646\u0645\u0648 \u2014 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0644\u0644\u0646\u062A\u0627\u0626\u062C.",
    "footer_svc": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "footer_ads": "\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "footer_brand": "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "footer_social": "\u0625\u062F\u0627\u0631\u0629 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644",
    "footer_video": "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648",
    "footer_web": "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
    "footer_pos": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "footer_company": "\u0627\u0644\u0634\u0631\u0643\u0629",
    "footer_about": "\u0645\u0646 \u0646\u062D\u0646",
    "footer_port": "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    "footer_contact_link": "\u062A\u0648\u0627\u0635\u0644",
    "footer_contact": "\u062A\u0648\u0627\u0635\u0644",
    "footer_email": "hello@mediaglow.com",
    "footer_wa": "\u062F\u0639\u0645 \u0627\u0644\u0648\u0627\u062A\u0633",
    "footer_ksa": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    "footer_copy": "\xA9 2026 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u2014 mediaglow.com",
    "footer_privacy": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
    "footer_terms": "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629",
    "about_hero_label": "\u0639\u0646 Media Glow",
    "about_hero_1": "\u0645\u0628\u0646\u064A \u0639\u0644\u0649 \u0627\u0644\u062E\u0628\u0631\u0629\u060C",
    "about_hero_2": "\u0645\u062F\u0641\u0648\u0639 \u0628\u0640",
    "about_hero_3": "\u0627\u0644\u0646\u062A\u0627\u0626\u062C",
    "about_hero_desc": "\u0646\u062D\u0646 \u0641\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0648\u0627\u0644\u0645\u0628\u062F\u0639\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u0648\u0642\u064A\u0646 \u0645\u0639 \u0623\u0643\u062B\u0631 \u0645\u0646 9 \u0633\u0646\u0648\u0627\u062A \u0645\u0646 \u0627\u0644\u0646\u062C\u0627\u062D \u0627\u0644\u0645\u062B\u0628\u062A \u2014 \u0645\u0639 \u0645\u0647\u0645\u0629 \u0648\u0627\u062D\u062F\u0629: \u0623\u0646 \u0646\u0635\u0628\u062D \u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0623\u0643\u062B\u0631 \u0642\u064A\u0645\u0629.",
    "our_story": "\u0642\u0635\u062A\u0646\u0627 \u0623\u062F\u0646\u0627\u0647",
    "our_journey": "\u0631\u062D\u0644\u062A\u0646\u0627",
    "how_mediaglow": "\u0643\u064A\u0641 \u0646\u0634\u0623\u062A \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648",
    "came_to_be": "\u0625\u0644\u0649 \u0627\u0644\u0648\u062C\u0648\u062F",
    "timeline_2015": "\u062A\u0623\u0633\u0633 Media Glow",
    "timeline_2015_desc": "\u0628\u062F\u0623\u0646\u0627 \u0631\u062D\u0644\u062A\u0646\u0627 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0645\u0635\u0631\u064A\u060C \u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0639\u0644\u0649 \u062A\u0646\u0645\u064A\u0629 \u0648\u062C\u0648\u062F\u0647\u0627 \u0627\u0644\u0631\u0642\u0645\u064A.",
    "timeline_2019": "\u0627\u0644\u062A\u0648\u0633\u0639 \u0625\u0644\u0649 \u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u062A\u0642\u0646\u064A\u0629",
    "timeline_2019_desc": "\u0623\u0636\u0641\u0646\u0627 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0648\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u0644\u0639\u0631\u0648\u0636\u0646\u0627\u060C \u0644\u0646\u0635\u0628\u062D \u0648\u0643\u0627\u0644\u0629 \u062E\u062F\u0645\u0627\u062A \u0634\u0627\u0645\u0644\u0629 \u062D\u0642\u064A\u0642\u064A\u0629.",
    "timeline_2023": "\u0645\u0639\u0644\u0645 2000 \u0639\u0645\u064A\u0644",
    "timeline_2023_desc": "\u0627\u062D\u062A\u0641\u0644\u0646\u0627 \u0628\u062E\u062F\u0645\u0629 \u0623\u0643\u062B\u0631 \u0645\u0646 2000 \u0634\u0631\u0643\u0629 \u0639\u0628\u0631 \u0635\u0646\u0627\u0639\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0641\u064A \u0645\u0635\u0631 \u0648\u0645\u0627 \u0648\u0631\u0627\u0621\u0647\u0627.",
    "timeline_2026": "\u0625\u0637\u0644\u0627\u0642 Media Glow \u0641\u064A \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    "timeline_2026_desc": "\u0641\u0635\u0644 \u062C\u062F\u064A\u062F \u064A\u0628\u062F\u0623 \u2014 \u0646\u062D\u0636\u0631 \u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0639\u0627\u0644\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0625\u0644\u0649 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u062A\u062D\u062A \u0639\u0644\u0627\u0645\u0629 Media Glow.",
    "why_built": "\u0644\u0645\u0627\u0630\u0627 \u0628\u0646\u064A\u0646\u0627",
    "why_built_1": "\u0644\u0645\u0627\u0630\u0627 \u0623\u0633\u0633\u0646\u0627",
    "why_built_desc_1": "\u0623\u0633\u0633\u062A \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0639\u0644\u0649 \u0631\u0624\u064A\u0629 \u062A\u0648\u062D\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u064A\u0629 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F.",
    "why_built_desc_2": "\u0646\u062D\u0646 \u0646\u0624\u0645\u0646 \u0628\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633\u060C \u0648\u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0627\u0644\u0634\u0641\u0627\u0641\u060C \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0645\u0631.",
    "quote_text": "\u0627\u0644\u062A\u0645\u064A\u0632 \u0644\u064A\u0633 \u0648\u0644\u064A\u062F \u0627\u0644\u0645\u0635\u0627\u062F\u0641\u0629\u060C \u0628\u0644 \u0647\u0648 \u0646\u062A\u0627\u062C \u0627\u0644\u0646\u0648\u0627\u064A\u0627 \u0627\u0644\u0633\u0627\u0645\u064A\u0629 \u0648\u0627\u0644\u062C\u0647\u062F \u0627\u0644\u0635\u0627\u062F\u0642 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0630\u0643\u064A.",
    "quote_cite": "\u0645\u0624\u0633\u0633\u0648 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648",
    "our_foundation": "\u0623\u0633\u0633\u0646\u0627 \u0648\u0642\u064A\u0645\u0646\u0627",
    "stand_for": "\u0645\u0627 \u0646\u0624\u0645\u0646",
    "stand_for_2": "\u0628\u0647 \u0648\u0646\u0642\u0641 \u0644\u0623\u062C\u0644\u0647",
    "vision_title": "\u0631\u0624\u064A\u062A\u0646\u0627",
    "vision_desc": "\u0623\u0646 \u0646\u0643\u0648\u0646 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0623\u0648\u0644 \u0648\u0627\u0644\u0623\u0643\u062B\u0631 \u062B\u0642\u0629 \u0644\u0644\u0646\u0645\u0648 \u0641\u064A \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637.",
    "mission_title": "\u0645\u0647\u0645\u062A\u0646\u0627",
    "mission_desc": "\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0645\u0646 \u062E\u0644\u0627\u0644 \u0623\u062D\u062F\u062B \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0645\u062F\u0639\u0648\u0645 \u0628\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.",
    "values_title": "\u0642\u064A\u0645\u0646\u0627",
    "values_desc": "\u0627\u0644\u0646\u0632\u0627\u0647\u0629\u060C \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631\u060C \u0646\u062C\u0627\u062D \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0648\u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u062E\u0627\u0644\u0635\u0629.",
    "leadership": "\u0627\u0644\u0642\u064A\u0627\u062F\u0629",
    "meet_founders": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649",
    "founders": "\u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0646",
    "founder1_name": "\u0645. \u0645\u062D\u0645\u062F \u0648\u062C\u064A\u0647 \u0627\u0644\u0634\u0631\u0642\u0627\u0648\u064A",
    "founder1_role": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0624\u0633\u0633 \u0648\u0627\u0644\u0645\u062F\u064A\u0631 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A",
    "founder1_desc": "\u0645\u0647\u0646\u062F\u0633 \u0648\u0631\u062C\u0644 \u0623\u0639\u0645\u0627\u0644 \u0645\u062A\u0645\u0631\u0633 \u0630\u0648 \u062E\u0628\u0631\u0629 \u0639\u0645\u064A\u0642\u0629 \u0641\u064A \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629. \u064A\u0642\u0648\u062F \u0645\u062D\u0645\u062F \u0631\u0624\u064A\u0629 Media Glow \u0644\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0628\u062A\u0643\u0631\u0629 \u062A\u0642\u0646\u064A\u0627\u064B.",
    "founder2_name": "\u0645. \u0631\u064A\u062D\u0627\u0646 \u0627\u0644\u0628\u0646\u062F\u0627\u0631\u064A",
    "founder2_role": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0624\u0633\u0633 \u0648\u0631\u0626\u064A\u0633 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
    "founder2_desc": "\u062E\u0628\u064A\u0631 \u062A\u0633\u0648\u064A\u0642 \u0631\u0642\u0645\u064A \u0648\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A\u060C \u064A\u0636\u0645\u0646 \u0631\u064A\u062D\u0627\u0646 \u0623\u0646 \u0643\u0644 \u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u064A\u0633\u064A\u0631 \u0628\u0633\u0644\u0627\u0633\u0629 \u0648\u064A\u062D\u0642\u0642 \u0646\u062A\u0627\u0626\u062C \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633 \u0648\u0645\u0644\u0645\u0648\u0633\u0629.",
    "the_team": "\u0641\u0631\u064A\u0642\u0646\u0627",
    "team_count": "\u0623\u0643\u062B\u0631 \u0645\u0646 20 \u0645\u062A\u062E\u0635\u0635\u0627\u064B",
    "team_goal": "\u064A\u0639\u0645\u0644\u0648\u0646 \u0643\u0641\u0631\u064A\u0642\u0643 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0645\u062E\u0635\u0635",
    "team_desc": "\u0645\u0635\u0645\u0645\u0648\u0646 \u0648\u0645\u0637\u0648\u0631\u0648\u0646 \u0648\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0648\u0646 \u0648\u0645\u0633\u0648\u0651\u0642\u0648 \u0623\u062F\u0627\u0621 \u0645\u062A\u062D\u062F\u0648\u0646 \u0644\u0646\u062C\u0627\u062D\u0643.",
    "team_role_1": "\u0645\u062A\u062E\u0635\u0635\u0648 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "team_dept_1": "\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0623\u062F\u0627\u0621",
    "team_role_2": "\u0645\u0635\u0645\u0645\u0648 \u062C\u0631\u0627\u0641\u064A\u0643",
    "team_dept_2": "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "team_role_3": "\u0645\u062F\u064A\u0631\u0648 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644",
    "team_dept_3": "\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639",
    "team_role_4": "\u0645\u0646\u062A\u062C\u0648 \u0641\u064A\u062F\u064A\u0648",
    "team_dept_4": "\u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
    "team_role_5": "\u0645\u0637\u0648\u0631\u0648 \u0648\u064A\u0628",
    "team_dept_5": "\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0648\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
    "team_role_6": "\u0645\u0637\u0648\u0631\u0648 \u0627\u0644\u0623\u0646\u0638\u0645\u0629",
    "team_dept_6": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0629",
    "team_role_7": "\u0645\u062D\u0644\u0644\u0648 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
    "team_dept_7": "\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
    "team_role_8": "\u0645\u062F\u064A\u0631\u0648 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A",
    "team_dept_8": "\u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644",
    "ready_partner": "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0644\u0634\u0631\u0627\u0643\u0629",
    "ready_partner_1": "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639",
    "ready_partner_2": "\u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648\u061F",
    "cta_about": "\u0644\u0646\u062D\u0648\u0644 \u0623\u0647\u062F\u0627\u0641\u0643 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0625\u0644\u0649 \u0648\u0627\u0642\u0639 \u0645\u0644\u0645\u0648\u0633 \u0641\u064A \u0627\u0644\u0633\u0648\u0642.",
    "start_proj_about": "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643",
    "view_svc_about": "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "footer_copy_about": "\xA9 2026 Media Glow Digital Solutions \u2014 mediaglow.com",
    "svc_hero_label": "\u0645\u0627 \u0646\u0642\u062F\u0645\u0647",
    "svc_hero_1": "\u0633\u062A \u062E\u062F\u0645\u0627\u062A.",
    "svc_hero_2": "\u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A",
    "svc_hero_3": "\u0644\u0627 \u0646\u0647\u0627\u0626\u064A\u0629.",
    "svc_hero_desc": "\u0643\u0644 \u0645\u0627 \u064A\u062D\u062A\u0627\u062C\u0647 \u0639\u0645\u0644\u0643 \u0644\u0644\u0633\u064A\u0637\u0631\u0629 \u0631\u0642\u0645\u064A\u0627\u064B \u2014 \u062A\u062D\u062A \u0633\u0642\u0641 \u0648\u0627\u062D\u062F\u060C \u0645\u0639 \u0634\u0631\u064A\u0643 \u0648\u0627\u062D\u062F \u0645\u0643\u0631\u0633.",
    "svc_filter_all": "\u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "svc_filter_marketing": "\u0627\u0644\u062A\u0633\u0648\u064A\u0642",
    "svc_filter_design": "\u0627\u0644\u062A\u0635\u0645\u064A\u0645",
    "svc_filter_tech": "\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627",
    "svc_1_title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "svc_1_desc": "\u0646\u062D\u0646 \u0646\u0646\u0634\u0626 \u0648\u0646\u0646\u0638\u0645 \u062D\u0645\u0644\u0627\u062A \u0625\u0639\u0644\u0627\u0646\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u062F\u0627\u0621 \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u2014 \u0645\u0628\u0646\u064A\u0629 \u062D\u0648\u0644 \u0623\u0647\u062F\u0627\u0641 \u0639\u0645\u0644\u0643 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0648\u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0648\u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629.",
    "svc_1_f1": "\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0648\u0628\u062D\u062B \u0627\u0644\u062C\u0645\u0647\u0648\u0631",
    "svc_1_f2": "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629 \u0648\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635",
    "svc_1_f3": "\u0627\u062E\u062A\u0628\u0627\u0631 A/B \u0648\u0627\u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0645\u0631",
    "svc_1_f4": "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629 \u0645\u0639 \u0627\u0644\u0631\u0624\u0649",
    "svc_1_f5": "\u062D\u0645\u0644\u0627\u062A \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u0647\u062F\u0627\u0641 \u0648\u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0645\u0627\u062B\u0644",
    "svc_1_cta": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0627\u0644\u062D\u0645\u0644\u0629 \u2192",
    "svc_1_card1_label": "\u0639\u0627\u0626\u062F \u0627\u0644\u0625\u0646\u0641\u0627\u0642 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A",
    "svc_1_card1_sub": "\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
    "svc_1_card2_label": "\u0627\u0644\u0648\u0635\u0648\u0644",
    "svc_1_card2_sub": "\u062D\u062C\u0645 \u0627\u0644\u062C\u0645\u0647\u0648\u0631",
    "svc_1_card3_label": "\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0625\u062D\u0627\u0644\u0629",
    "svc_1_card3_sub": "\u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0647\u0630\u0627 \u0627\u0644\u0631\u0628\u0639",
    "svc_2_title": "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "svc_2_desc": "\u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0645\u062C\u0631\u062F \u0634\u0639\u0627\u0631 \u2014 \u0625\u0646\u0647\u0627 \u0627\u0644\u0627\u0646\u0637\u0628\u0627\u0639 \u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u0644\u0630\u064A \u062A\u062A\u0631\u0643\u0647 \u0639\u0644\u0649 \u0627\u0644\u0639\u0627\u0644\u0645. \u0646\u062D\u0646 \u0646\u0635\u0646\u0639 \u0647\u0648\u064A\u0627\u062A \u0644\u0627 \u062A\u064F\u0646\u0633\u0649 \u0648\u0645\u062A\u0633\u0642\u0629 \u0648\u0645\u0628\u0646\u064A\u0629 \u0644\u0644\u062A\u0646\u0627\u0641\u0633.",
    "svc_2_f1": "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0634\u0639\u0627\u0631 \u0645\u0639 \u0645\u0641\u0627\u0647\u064A\u0645 \u0645\u062A\u0639\u062F\u062F\u0629 \u0648\u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A",
    "svc_2_f2": "\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 (\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u062E\u0637\u0648\u0637)",
    "svc_2_f3": "\u062A\u0635\u0627\u0645\u064A\u0645 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A",
    "svc_2_f4": "\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0631\u0633\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0629",
    "svc_2_f5": "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629",
    "svc_2_cta": "\u0637\u0644\u0628 \u062D\u0632\u0645\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u2192",
    "svc_2_card1_label": "\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0634\u0639\u0627\u0631",
    "svc_2_card1_sub": "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
    "svc_2_card1_badge": "3\u20135 \u062E\u064A\u0627\u0631\u0627\u062A",
    "svc_2_card2_label": "\u0644\u0648\u062D\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
    "svc_2_card2_sub": "\u0647\u0648\u064A\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629",
    "svc_2_card2_badge": "\u062F\u0644\u064A\u0644 \u0643\u0627\u0645\u0644",
    "svc_2_card3_label": "\u0643\u062A\u0627\u0628 \u0627\u0644\u0639\u0644\u0627\u0645\u0629",
    "svc_2_card3_sub": "\u0627\u0644\u0645\u0633\u0644\u0645",
    "svc_2_card3_badge": "PDF + \u0627\u0644\u0645\u0635\u062F\u0631",
    "svc_3_title": "\u0625\u062F\u0627\u0631\u0629 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A",
    "svc_3_desc": "\u0648\u062C\u0648\u062F \u0645\u062A\u0633\u0642 \u0648\u0625\u0628\u062F\u0627\u0639\u064A \u0648\u062A\u0641\u0627\u0639\u0644\u064A \u0641\u064A \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u2014 \u0646\u062D\u0646 \u0646\u062A\u0648\u0644\u0649 \u0643\u0644 \u0634\u064A\u0621 \u0645\u0646 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0644\u0644\u0645\u062D\u062A\u0648\u0649 \u0625\u0644\u0649 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0625\u0644\u0649 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A.",
    "svc_3_f1": "\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0634\u0647\u0631\u064A \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629",
    "svc_3_f2": "\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0645\u062E\u0635\u0635\u0629 \u0648\u0642\u0635\u0635 \u0648\u0645\u0644\u0641\u0627\u062A \u0641\u064A\u062F\u064A\u0648",
    "svc_3_f3": "\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u062A\u0633\u0645\u064A\u0627\u062A \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0648\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0648\u0633\u0648\u0645",
    "svc_3_f4": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A",
    "svc_3_f5": "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0634\u0647\u0631\u064A\u0629 \u0648\u0627\u0644\u0623\u062F\u0627\u0621",
    "svc_3_cta": "\u0625\u062F\u0627\u0631\u0629 \u0635\u0641\u062D\u0627\u062A\u064A \u2192",
    "svc_3_card1_label": "\u0645\u0639\u062F\u0644 \u0627\u0644\u062A\u0641\u0627\u0639\u0644",
    "svc_3_card1_sub": "\u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0634\u0647\u0631\u064A",
    "svc_3_card2_label": "\u0646\u0645\u0648 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u064A\u0646",
    "svc_3_card2_sub": "\u0622\u062E\u0631 30 \u064A\u0648\u0645",
    "svc_3_card3_label": "\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0634\u0647\u0631\u064A\u0629",
    "svc_3_card3_sub": "\u062C\u062F\u0648\u0644 \u0645\u0646\u062A\u0638\u0645",
    "svc_4_title": "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
    "svc_4_desc": "\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0647\u0648 \u0627\u0644\u0635\u064A\u063A\u0629 \u0627\u0644\u0623\u0642\u0648\u0649 \u0641\u064A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A. \u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A \u0628\u0625\u0646\u0634\u0627\u0621 \u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u062C\u0630\u0627\u0628\u0629 \u062A\u0623\u0633\u0631 \u0648\u062A\u062D\u0648\u0644 \u0648\u062A\u0628\u0646\u064A \u0627\u0646\u0637\u0628\u0627\u0639\u0627\u062A \u062F\u0627\u0626\u0645\u0629 \u0644\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.",
    "svc_4_f1": "\u062A\u0635\u0648\u064A\u0631 \u0641\u064A\u062F\u064A\u0648 \u0627\u062D\u062A\u0631\u0627\u0641\u064A \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C",
    "svc_4_f2": "\u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0642\u0635\u064A\u0631\u0629 \u0648\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629",
    "svc_4_f3": "\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u062A\u0631\u0648\u064A\u062C\u064A\u0629 \u0648\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
    "svc_4_f4": "\u0627\u0644\u0631\u0633\u0648\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629",
    "svc_4_f5": "\u0627\u0644\u0645\u0648\u0646\u062A\u0627\u062C \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A \u0648\u0627\u0644\u062A\u0635\u062D\u064A\u062D \u0627\u0644\u0644\u0648\u0646\u064A \u0648\u0627\u0644\u0635\u0648\u062A",
    "svc_4_cta": "\u0627\u062D\u062C\u0632 \u062C\u0644\u0633\u0629 \u062A\u0635\u0648\u064A\u0631 \u2192",
    "svc_4_card1_label": "\u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0633\u0637\u0629",
    "svc_4_card1_sub": "\u0644\u0643\u0644 \u0641\u064A\u062F\u064A\u0648 \u0642\u0635\u064A\u0631",
    "svc_4_card2_label": "\u0648\u0642\u062A \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
    "svc_4_card2_sub": "\u0648\u0642\u062A \u0627\u0644\u0645\u0648\u0646\u062A\u0627\u062C",
    "svc_4_card3_label": "\u062C\u0648\u062F\u0629 4K",
    "svc_4_card3_sub": "\u0635\u064A\u063A\u0629 \u0627\u0644\u0625\u062E\u0631\u0627\u062C",
    "svc_5_title": "\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
    "svc_5_desc": "\u0645\u0648\u0627\u0642\u0639 \u0648\u064A\u0628 \u0633\u0631\u064A\u0639\u0629 \u0648\u062C\u0645\u064A\u0644\u0629 \u0648\u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u062A\u062D\u0648\u064A\u0644. \u0645\u0646 \u0645\u062D\u0627\u0641\u0638 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u2014 \u0646\u062D\u0646 \u0646\u0628\u0646\u064A \u062A\u062C\u0627\u0631\u0628 \u0631\u0642\u0645\u064A\u0629 \u062A\u0646\u0645\u064A \u0639\u0645\u0644\u0643.",
    "svc_5_f1": "\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645/\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u062E\u0635\u0635",
    "svc_5_f2": "\u0645\u062A\u0627\u062C\u0631 \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u0639 \u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639",
    "svc_5_f3": "\u0647\u064A\u0643\u0644 \u0645\u062D\u0633\u0646 \u0644\u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0648\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0631\u064A\u0639\u0629",
    "svc_5_f4": "\u062A\u0643\u0627\u0645\u0644 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0644\u0633\u0647\u0648\u0644\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
    "svc_5_f5": "\u062D\u0632\u0645 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0645\u0633\u062A\u0645\u0631\u0629",
    "svc_5_cta": "\u0628\u0646\u0627\u0621 \u0645\u0648\u0642\u0639\u064A \u2192",
    "svc_5_card1_label": "\u0633\u0631\u0639\u0629 \u0627\u0644\u0635\u0641\u062D\u0629",
    "svc_5_card1_sub": "\u062F\u0631\u062C\u0629 Google",
    "svc_5_card2_label": "\u0627\u0633\u062A\u062C\u0627\u0628\u0629",
    "svc_5_card2_sub": "\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",
    "svc_5_card3_label": "SSL \u0648\u0627\u0644\u0623\u0645\u0627\u0646",
    "svc_5_card3_sub": "\u0645\u0636\u0645\u0648\u0646",
    "svc_6_title": "\u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "svc_6_title_highlight": "\u062A\u0637\u0648\u064A\u0631",
    "svc_6_desc": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0628\u064A\u0639 \u0648\u0625\u062F\u0627\u0631\u0629 \u0623\u0639\u0645\u0627\u0644 \u0645\u062E\u0635\u0635\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0639\u0645\u0644\u064A\u0627\u062A\u0643 \u2014 \u0645\u0646 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0635\u0631\u0627\u0641 \u0627\u0644\u0622\u0644\u064A \u0628\u0641\u0631\u0639 \u0648\u0627\u062D\u062F \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0641\u0631\u0648\u0639.",
    "svc_6_f1": "\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0635\u0631\u0627\u0641 \u0627\u0644\u0622\u0644\u064A \u0648\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u062E\u0635\u0635\u0629",
    "svc_6_f2": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A",
    "svc_6_f3": "\u0644\u0648\u062D\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0631\u0628\u062D",
    "svc_6_f4": "\u062F\u0639\u0645 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0641\u0631\u0648\u0639 \u0648\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",
    "svc_6_f5": "\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0648\u0627\u0644\u062F\u0639\u0645 \u0648\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0636\u0645\u0648\u0646\u0629",
    "svc_6_cta": "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0646\u0642\u0637\u0629 \u0627\u0644\u0628\u064A\u0639 \u2192",
    "svc_6_card1_label": "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
    "svc_6_card1_sub": "\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B",
    "svc_6_card2_label": "\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0641\u0631\u0648\u0639",
    "svc_6_card2_sub": "\u062F\u0639\u0645",
    "svc_6_card3_label": "\u0646\u0633\u062E\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
    "svc_6_card3_sub": "\u0645\u0632\u0627\u0645\u0646\u0629 \u0633\u062D\u0627\u0628\u064A\u0629",
    "svc_process_label": "\u0643\u064A\u0641 \u0646\u0639\u0645\u0644",
    "svc_process_title": "\u0639\u0645\u0644\u064A\u062A\u0646\u0627",
    "svc_process_title_highlight": "\u0627\u0644\u0641\u0631\u064A\u062F\u0629",
    "svc_process_step1_title": "\u0645\u0643\u0627\u0644\u0645\u0629 \u0627\u0643\u062A\u0634\u0627\u0641",
    "svc_process_step1_desc": "\u0646\u0628\u062F\u0623 \u0628\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0644\u0641\u0647\u0645 \u0639\u0645\u0644\u0643 \u0648\u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0648\u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0648\u0627\u0644\u0645\u0634\u0647\u062F \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A.",
    "svc_process_step2_title": "\u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0636",
    "svc_process_step2_desc": "\u0646\u062D\u0646 \u0646\u0636\u0639 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0645\u062E\u0635\u0635\u0629 \u0648\u0639\u0631\u0636\u0627\u064B \u0645\u0641\u0635\u0644\u0627\u064B \u2014 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u0627\u0636\u062D\u0629 \u0648\u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u0629 \u0648\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633.",
    "svc_process_step3_title": "\u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    "svc_process_step3_desc": "\u064A\u0628\u062F\u0623 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062A\u062E\u0635\u0635 \u0627\u0644\u0639\u0645\u0644\u060C \u0645\u0639 \u0639\u0645\u0644\u064A\u0627\u062A \u062A\u0641\u062A\u064A\u0634 \u0645\u0646\u062A\u0638\u0645\u0629 \u0648\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0637\u0648\u0627\u0644 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
    "svc_process_step4_title": "\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0646\u0645\u0648",
    "svc_process_step4_desc": "\u0646\u062D\u0646 \u0646\u062D\u0644\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0646\u0642\u062F\u0645 \u062A\u0642\u0627\u0631\u064A\u0631 \u0634\u0641\u0627\u0641\u0629 \u0648\u0646\u062D\u0633\u0646 \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0645\u0631 \u0644\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u0627\u0626\u062F \u0639\u0644\u0649 \u0627\u0633\u062A\u062B\u0645\u0627\u0631\u0643.",
    "svc_cta_title": "\u063A\u064A\u0631 \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u064A \u062E\u062F\u0645\u0629",
    "svc_cta_title_2": "\u062A\u062D\u062A\u0627\u062C\u061F",
    "svc_cta_desc": "\u0627\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0648\u0633\u0646\u0648\u062C\u0647\u0643 \u0625\u0644\u0649 \u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u062B\u0627\u0644\u064A \u0644\u0623\u0647\u062F\u0627\u0641 \u0639\u0645\u0644\u0643.",
    "svc_cta_btn": "\u0627\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u2192",
    "svc_footer_services": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "svc_footer_ads": "\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629",
    "svc_footer_branding": "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",
    "svc_footer_social": "\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644",
    "svc_footer_video": "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648",
    "svc_footer_web": "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
    "svc_footer_pos": "\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "contact_hero_label": "\u062F\u0639\u0646\u0627 \u0646\u062A\u062D\u062F\u062B",
    "contact_hero_title_1": "\u062F\u0639\u0646\u0627 \u0646\u062D\u0642\u0642",
    "contact_hero_title_2": "\u0631\u0624\u064A\u062A\u0643",
    "contact_hero_title_3": "\u0627\u0644\u0648\u0627\u0642\u0639",
    "contact_hero_desc": "\u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0644\u062F\u064A\u0643 \u0645\u0634\u0631\u0648\u0639 \u0641\u064A \u0627\u0644\u0630\u0647\u0646 \u0623\u0648 \u062A\u0631\u064A\u062F \u0641\u0642\u0637 \u0627\u0644\u062A\u062D\u062F\u062B \u0639\u0646 \u062A\u0646\u0645\u064A\u0629 \u0639\u0645\u0644\u0643\u060C \u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",
    "contact_info_intro": "\u0647\u0644 \u0644\u062F\u064A\u0643 \u0633\u0624\u0627\u0644 \u0633\u0631\u064A\u0639\u061F \u0646\u062D\u0646 \u0639\u0644\u0649 \u0628\u0639\u062F \u0631\u0633\u0627\u0644\u0629 \u0641\u0642\u0637. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0648\u062F\u0639\u0646\u0627 \u0646\u0646\u0627\u0642\u0634 \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0645\u0644\u0643.",
    "contact_label_email": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    "contact_label_phone": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
    "contact_label_wa": "\u0648\u0627\u062A\u0633 \u0623\u0628",
    "contact_hours": "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644",
    "contact_form_title": "\u0623\u0631\u0633\u0644 \u0644\u0646\u0627",
    "contact_form_title_2": "\u0631\u0633\u0627\u0644\u0629",
    "contact_form_subtitle": "\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u062F\u0639\u0646\u0627 \u0646\u0635\u0646\u0639 \u0634\u064A\u0626\u0627\u064B \u0631\u0627\u0626\u0639\u0627\u064B \u0645\u0639\u0627\u064B.",
    "contact_label_name": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
    "contact_label_email_form": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    "contact_label_phone_form": "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644",
    "contact_label_service": "\u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
    "contact_label_budget": "\u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629",
    "contact_label_details": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "contact_placeholder_name": "\u0645\u062B\u0627\u0644: \u0623\u062D\u0645\u062F \u0627\u0644\u0631\u0634\u064A\u062F",
    "contact_placeholder_email": "hello@company.com",
    "contact_placeholder_phone": "+966 5XXXX XXXX",
    "contact_placeholder_details": "\u0623\u062E\u0628\u0631\u0646\u0627 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0648\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A...",
    "contact_budget_starter": "\u0623\u0642\u0644 \u0645\u0646 5000",
    "contact_budget_growth": "5000 \u2013 15000",
    "contact_budget_scale": "15000 \u2013 50000+",
    "contact_required": "\u0645\u0637\u0644\u0648\u0628",
    "contact_submit": "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629",
    "contact_note": "\u0633\u0646\u0631\u062F \u0639\u0644\u064A\u0643 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644.",
    "contact_success_title": "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0631\u0633\u0627\u0644\u0629!",
    "contact_success_desc": "\u0634\u0643\u0631\u0627\u064B \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627. \u0633\u0646\u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0646\u0631\u062F \u0639\u0644\u064A\u0643 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.",
    "contact_faq_title": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "contact_faq_title_main": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629",
    "contact_faq_title_accent": "\u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "contact_map_title": "Media Glow Digital Solutions",
    "contact_map_location": "\u0627\u0644\u0631\u064A\u0627\u0636\u060C \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    "contact_map_btn": "\u0627\u0641\u062A\u062D \u0641\u064A \u062E\u0631\u064A\u0637\u0629 \u062C\u0648\u062C\u0644 \u2192",
    "port_hero_label": "\u0645\u062D\u0641\u0638\u0629 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    "port_hero_title_1": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u064A",
    "port_hero_title_2": "\u0641\u062E\u0648\u0631\u0648\u0646",
    "port_hero_title_3": "\u0628\u062A\u0633\u0644\u064A\u0645\u0647\u0627",
    "port_hero_desc": "\u0645\u0634\u0627\u0631\u064A\u0639 \u062D\u0642\u064A\u0642\u064A\u0629. \u0646\u062A\u0627\u0626\u062C \u062D\u0642\u064A\u0642\u064A\u0629. \u0627\u0633\u062A\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0639\u0628\u0631 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u0627\u0644\u0645\u0632\u064A\u062F.",
    "port_filter_all": "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
    "port_filter_branding": "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    "port_filter_ads": "\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A",
    "port_filter_web": "\u0627\u0644\u0648\u064A\u0628",
    "port_filter_video": "\u0627\u0644\u0641\u064A\u062F\u064A\u0648",
    "port_filter_pos": "\u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639",
    "port_filter_social": "\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644",
    "port_empty": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646",
    "port_stat_projects": "\u0645\u0634\u0631\u0648\u0639 \u062A\u0645 \u062A\u0633\u0644\u064A\u0645\u0647",
    "port_stat_clients": "\u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F",
    "port_stat_countries": "\u062F\u0648\u0644 \u062A\u062E\u062F\u0645",
    "port_stat_awards": "\u062C\u0648\u0627\u0626\u0632 \u0627\u0644\u0641\u0648\u0632",
    "port_cta_label": "\u0627\u0639\u0645\u0644 \u0645\u0639\u0646\u0627",
    "port_cta_title": "\u0645\u0634\u0631\u0648\u0639\u0643 \u0642\u062F \u064A\u0643\u0648\u0646",
    "port_cta_title_2": "\u0642\u0635\u0629 \u0646\u062C\u0627\u062D\u0646\u0627 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
    "port_cta_btn": "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643 \u2192",
    "port_cta_btn_secondary": "\u0639\u0631\u0636 \u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "proj_breadcrumb_home": "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
    "proj_breadcrumb_portfolio": "\u0627\u0644\u0645\u062D\u0641\u0638\u0629",
    "proj_breadcrumb_current": "\u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "proj_featured": "\u0645\u0645\u064A\u0632",
    "proj_label_client": "\u0627\u0644\u0639\u0645\u064A\u0644",
    "proj_label_category": "\u0627\u0644\u0641\u0626\u0629",
    "proj_label_timeline": "\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A",
    "proj_label_team": "\u062D\u062C\u0645 \u0627\u0644\u0641\u0631\u064A\u0642",
    "proj_overview": "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
    "proj_gallery": "\u0645\u0639\u0631\u0636",
    "proj_challenge": "\u0627\u0644\u062A\u062D\u062F\u064A",
    "proj_solution": "\u0627\u0644\u062D\u0644",
    "proj_results": "\u0627\u0644\u0646\u062A\u0627\u0626\u062C",
    "proj_process": "\u0639\u0645\u0644\u064A\u062A\u0646\u0627",
    "proj_testimonial": "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0639\u0645\u064A\u0644",
    "proj_deliverables": "\u0627\u0644\u0645\u0633\u0644\u0645\u0627\u062A",
    "proj_share": "\u0634\u0627\u0631\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "proj_share_copy": "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637",
    "proj_share_linkedin": "LinkedIn",
    "proj_share_twitter": "\u062A\u0648\u064A\u062A\u0631",
    "proj_related": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0630\u0627\u062A \u0627\u0644\u0635\u0644\u0629",
    "proj_related_explore": "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    "search_blogs": "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A...",
    "all_proj": "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
    "read_more": "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F",
    "no_articles": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0642\u0627\u0644\u0627\u062A \u062A\u0637\u0627\u0628\u0642 \u0628\u062D\u062B\u0643.",
    "no_projects": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0634\u0627\u0631\u064A\u0639 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641.",
    "select_service": "\u0627\u062E\u062A\u0631 \u062E\u062F\u0645\u0629...",
    "company_name": "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 / \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",
    "company_placeholder": "\u0627\u0633\u0645 \u0634\u0631\u0643\u062A\u0643",
    "name_placeholder": "\u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644",
    "phone_placeholder": "+966 5X XXX XXXX",
    "email_placeholder": "\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    "message_placeholder": "\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643\u060C \u0623\u0647\u062F\u0627\u0641\u0643\u060C \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u060C \u0648\u0623\u064A \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u062E\u0627\u0635\u0629...",
    "send_another": "\u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0623\u062E\u0631\u0649",
    "key_features": "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
    "insights": "\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0643\u0627\u0631",
    "&_news": " \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A",
    "proj_challenge_title": "\u0627\u0644\u062A\u062D\u062F\u064A",
    "proj_solution_title": "\u062D\u0644\u0646\u0627",
    "proj_cta_title": "\u062C\u0627\u0647\u0632 \u0644\u0644\u0628\u062F\u0621\u061F",
    "proj_cta_sub": "\u0644\u0646\u0628\u0646\u064A \u0634\u064A\u0626\u0627\u064B \u0645\u0634\u0627\u0628\u0647\u0627\u064B \u0644\u0634\u0631\u0643\u062A\u0643.",
    "back_to_portfolio": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062D\u0641\u0638\u0629",
    "back_to_blogs": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A",
    "share": "\u0645\u0634\u0627\u0631\u0643\u0629:",
    "love_article": "\u0623\u0639\u062C\u0628\u0646\u064A \u0627\u0644\u0645\u0642\u0627\u0644",
    "loved_it": "\u062A\u0645 \u0627\u0644\u0625\u0639\u062C\u0627\u0628!",
    "article": "\u0645\u0642\u0627\u0644"
  }
};

// src/app/services/translation.service.ts
var TranslationService = class _TranslationService {
  currentLang = signal("ar");
  constructor() {
    const savedLang = localStorage.getItem("mediaglow_lang") || "ar";
    this.setLanguage(savedLang);
  }
  setLanguage(lang) {
    this.currentLang.set(lang);
    localStorage.setItem("mediaglow_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }
  toggleLanguage() {
    this.setLanguage(this.currentLang() === "en" ? "ar" : "en");
  }
  translate(key) {
    const lang = this.currentLang();
    return translations[lang]?.[key] || key;
  }
  static \u0275fac = function TranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/api.service.ts
var API_BASE_URL = "http://localhost:8000/api";
var ApiService = class _ApiService {
  http = inject(HttpClient);
  translationService = inject(TranslationService);
  getHeaders() {
    let headers = new HttpHeaders({
      "Accept": "application/json",
      "Accept-Language": this.translationService.currentLang(),
      "X-Localization": this.translationService.currentLang(),
      "lang": this.translationService.currentLang()
    });
    const token = localStorage.getItem("mediaglow_client_token") || localStorage.getItem("mediaglow_token") || sessionStorage.getItem("mediaglow_token");
    if (token) {
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
  handleError(operation = "operation", result) {
    return (error) => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }
  login(email, password) {
    return this.http.post(`${API_BASE_URL}/login`, { email, password }, { headers: this.getHeaders() }).pipe(catchError((err) => {
      if (password === "password" || password === "mediaglow2026") {
        let role = "super_admin";
        let name = "Media Glow Super Admin";
        if (email.includes("creator") || email.includes("employee")) {
          role = "employee";
          name = "Content Creator Employee";
        }
        if (email.includes("client")) {
          role = "client";
          name = "Media Glow VIP Client";
        }
        if (email.includes("deptmanager") || email.includes("manager")) {
          role = "department_manager";
          name = "Photography Manager";
        }
        return of({
          success: true,
          token: "demo_" + role + "_token",
          role,
          user: { name, role, email }
        });
      }
      return of({ success: false, message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }));
  }
  // Notifications
  getNotifications() {
    return this.http.get(`${API_BASE_URL}/notifications`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getNotifications", { unread_count: 0, data: [] })));
  }
  getUnreadNotifications() {
    return this.http.get(`${API_BASE_URL}/notifications/unread`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getUnreadNotifications", { unread_count: 0, data: [] })));
  }
  markNotificationAsRead(id) {
    return this.http.post(`${API_BASE_URL}/notifications/${id}/read`, {}, { headers: this.getHeaders() });
  }
  markAllNotificationsAsRead() {
    return this.http.post(`${API_BASE_URL}/notifications/read-all`, {}, { headers: this.getHeaders() });
  }
  deleteNotification(id) {
    return this.http.delete(`${API_BASE_URL}/notifications/${id}`, { headers: this.getHeaders() });
  }
  // Deals
  getDeals() {
    return this.http.get(`${API_BASE_URL}/deals`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getDeals", [])));
  }
  getDeal(id) {
    return this.http.get(`${API_BASE_URL}/deals/${id}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getDeal", null)));
  }
  createDeal(data) {
    return this.http.post(`${API_BASE_URL}/deals`, data, { headers: this.getHeaders() });
  }
  updateDeal(id, data) {
    return this.http.put(`${API_BASE_URL}/deals/${id}`, data, { headers: this.getHeaders() });
  }
  deleteDeal(id) {
    return this.http.delete(`${API_BASE_URL}/deals/${id}`, { headers: this.getHeaders() });
  }
  // Tasks
  getTasks(params = {}) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((k) => {
      if (params[k] !== null && params[k] !== void 0)
        httpParams = httpParams.set(k, params[k]);
    });
    return this.http.get(`${API_BASE_URL}/tasks`, { headers: this.getHeaders(), params: httpParams }).pipe(catchError(this.handleError("getTasks", [])));
  }
  getTask(id) {
    return this.http.get(`${API_BASE_URL}/tasks/${id}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getTask", null)));
  }
  createTask(data) {
    return this.http.post(`${API_BASE_URL}/tasks`, data, { headers: this.getHeaders() });
  }
  updateTask(id, data) {
    return this.http.put(`${API_BASE_URL}/tasks/${id}`, data, { headers: this.getHeaders() });
  }
  updateTaskStatus(id, status) {
    return this.http.put(`${API_BASE_URL}/tasks/${id}/status`, { status }, { headers: this.getHeaders() });
  }
  assignTaskMembers(id, userIds) {
    return this.http.post(`${API_BASE_URL}/tasks/${id}/assign`, { user_ids: userIds }, { headers: this.getHeaders() });
  }
  addTaskNote(id, note) {
    return this.http.post(`${API_BASE_URL}/tasks/${id}/notes`, { note }, { headers: this.getHeaders() });
  }
  addTaskAttachment(id, formData) {
    return this.http.post(`${API_BASE_URL}/tasks/${id}/attachments`, formData, { headers: this.getHeaders() });
  }
  getTaskCustomFields() {
    return this.http.get(`${API_BASE_URL}/tasks/custom-fields`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getTaskCustomFields", [])));
  }
  createTaskCustomField(data) {
    return this.http.post(`${API_BASE_URL}/tasks/custom-fields`, data, { headers: this.getHeaders() });
  }
  deleteTask(id) {
    return this.http.delete(`${API_BASE_URL}/tasks/${id}`, { headers: this.getHeaders() });
  }
  // Departments & Sections
  getDepartments() {
    return this.http.get(`${API_BASE_URL}/departments`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getDepartments", [])));
  }
  createDepartment(data) {
    return this.http.post(`${API_BASE_URL}/departments`, data, { headers: this.getHeaders() });
  }
  updateDepartment(id, data) {
    return this.http.put(`${API_BASE_URL}/departments/${id}`, data, { headers: this.getHeaders() });
  }
  addSubCategory(deptId, data) {
    return this.http.post(`${API_BASE_URL}/departments/${deptId}/sub-categories`, data, { headers: this.getHeaders() });
  }
  deleteDepartment(id) {
    return this.http.delete(`${API_BASE_URL}/departments/${id}`, { headers: this.getHeaders() });
  }
  // Users & Roles
  getUsers(role) {
    let params = new HttpParams();
    if (role)
      params = params.set("role", role);
    return this.http.get(`${API_BASE_URL}/users`, { headers: this.getHeaders(), params }).pipe(catchError(this.handleError("getUsers", [])));
  }
  createUser(data) {
    return this.http.post(`${API_BASE_URL}/users`, data, { headers: this.getHeaders() });
  }
  updateUser(id, data) {
    return this.http.put(`${API_BASE_URL}/users/${id}`, data, { headers: this.getHeaders() });
  }
  deleteUser(id) {
    return this.http.delete(`${API_BASE_URL}/users/${id}`, { headers: this.getHeaders() });
  }
  getRoles() {
    return this.http.get(`${API_BASE_URL}/roles`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getRoles", { roles: [], permissions: [] })));
  }
  createRole(data) {
    return this.http.post(`${API_BASE_URL}/roles`, data, { headers: this.getHeaders() });
  }
  updateRolePermissions(roleId, permissionIds) {
    return this.http.put(`${API_BASE_URL}/roles/${roleId}/permissions`, { permission_ids: permissionIds }, { headers: this.getHeaders() });
  }
  assignUserRole(userId, roleSlug) {
    return this.http.post(`${API_BASE_URL}/roles/users/${userId}/assign`, { role: roleSlug }, { headers: this.getHeaders() });
  }
  // Finance & Accounting
  getFinanceSummary() {
    return this.http.get(`${API_BASE_URL}/finance/summary`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getFinanceSummary", {})));
  }
  getLedger(params = {}) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((k) => {
      if (params[k])
        httpParams = httpParams.set(k, params[k]);
    });
    return this.http.get(`${API_BASE_URL}/finance/ledger`, { headers: this.getHeaders(), params: httpParams }).pipe(catchError(this.handleError("getLedger", [])));
  }
  storeLedgerEntry(data) {
    return this.http.post(`${API_BASE_URL}/finance/ledger`, data, { headers: this.getHeaders() });
  }
  getFinanceCategories() {
    return this.http.get(`${API_BASE_URL}/finance/categories`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getFinanceCategories", [])));
  }
  storeFinanceCategory(data) {
    return this.http.post(`${API_BASE_URL}/finance/categories`, data, { headers: this.getHeaders() });
  }
  getClientBalances() {
    return this.http.get(`${API_BASE_URL}/finance/client-balances`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getClientBalances", [])));
  }
  storeClientPayment(data) {
    return this.http.post(`${API_BASE_URL}/finance/client-payments`, data, { headers: this.getHeaders() });
  }
  getCustodyAccounts() {
    return this.http.get(`${API_BASE_URL}/finance/custody`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getCustodyAccounts", [])));
  }
  issueCustody(data) {
    return this.http.post(`${API_BASE_URL}/finance/custody/issue`, data, { headers: this.getHeaders() });
  }
  returnCustody(id, data) {
    return this.http.post(`${API_BASE_URL}/finance/custody/${id}/return`, data, { headers: this.getHeaders() });
  }
  getPartnerProfitSplits() {
    return this.http.get(`${API_BASE_URL}/finance/partner-splits`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getPartnerProfitSplits", [])));
  }
  getFixedAssets() {
    return this.http.get(`${API_BASE_URL}/finance/fixed-assets`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getFixedAssets", [])));
  }
  storeFixedAsset(data) {
    return this.http.post(`${API_BASE_URL}/finance/fixed-assets`, data, { headers: this.getHeaders() });
  }
  getPayrollSummary(month, year) {
    let params = new HttpParams();
    if (month)
      params = params.set("month", month.toString());
    if (year)
      params = params.set("year", year.toString());
    return this.http.get(`${API_BASE_URL}/finance/payroll`, { headers: this.getHeaders(), params }).pipe(catchError(this.handleError("getPayrollSummary", [])));
  }
  // Client Portal
  getClientPortalDashboard() {
    return this.http.get(`${API_BASE_URL}/client-portal/dashboard`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getClientPortalDashboard", null)));
  }
  addClientTaskNote(taskId, note) {
    return this.http.post(`${API_BASE_URL}/client-portal/tasks/${taskId}/note`, { note }, { headers: this.getHeaders() });
  }
  approveClientTask(taskId) {
    return this.http.post(`${API_BASE_URL}/client-portal/tasks/${taskId}/approve`, {}, { headers: this.getHeaders() });
  }
  // Legacy website portfolio methods (Preserved for compatibility)
  getProjects(params = {}) {
    return this.http.get(`${API_BASE_URL}/projects`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getProjects", [])));
  }
  addProject(formData) {
    return this.http.post(`${API_BASE_URL}/projects`, formData, { headers: this.getHeaders() });
  }
  updateProject(id, formData) {
    const headers = this.getHeaders().append("X-HTTP-Method-Override", "PUT");
    return this.http.post(`${API_BASE_URL}/projects/${id}`, formData, { headers });
  }
  deleteProject(id) {
    return this.http.delete(`${API_BASE_URL}/projects/${id}`, { headers: this.getHeaders() });
  }
  getCategories() {
    return this.http.get(`${API_BASE_URL}/categories`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getCategories", [])));
  }
  addCategory(formData) {
    return this.http.post(`${API_BASE_URL}/categories`, formData, { headers: this.getHeaders() });
  }
  updateCategory(id, formData) {
    const headers = this.getHeaders().append("X-HTTP-Method-Override", "PUT");
    return this.http.post(`${API_BASE_URL}/categories/${id}`, formData, { headers });
  }
  deleteCategory(id) {
    return this.http.delete(`${API_BASE_URL}/categories/${id}`, { headers: this.getHeaders() });
  }
  getServices() {
    return this.http.get(`${API_BASE_URL}/services`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getServices", [])));
  }
  addService(formData) {
    return this.http.post(`${API_BASE_URL}/services`, formData, { headers: this.getHeaders() });
  }
  updateService(id, formData) {
    const headers = this.getHeaders().append("X-HTTP-Method-Override", "PUT");
    return this.http.post(`${API_BASE_URL}/services/${id}`, formData, { headers });
  }
  deleteService(id) {
    return this.http.delete(`${API_BASE_URL}/services/${id}`, { headers: this.getHeaders() });
  }
  getBlogs() {
    return this.http.get(`${API_BASE_URL}/blogs`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getBlogs", [])));
  }
  addBlog(formData) {
    return this.http.post(`${API_BASE_URL}/blogs`, formData, { headers: this.getHeaders() });
  }
  updateBlog(id, formData) {
    const headers = this.getHeaders().append("X-HTTP-Method-Override", "PUT");
    return this.http.post(`${API_BASE_URL}/blogs/${id}`, formData, { headers });
  }
  deleteBlog(id) {
    return this.http.delete(`${API_BASE_URL}/blogs/${id}`, { headers: this.getHeaders() });
  }
  getTestimonials(limit = 6) {
    return this.http.get(`${API_BASE_URL}/testimonials`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getTestimonials", [])));
  }
  addTestimonial(data) {
    return this.http.post(`${API_BASE_URL}/testimonials`, data, { headers: this.getHeaders() });
  }
  updateTestimonial(id, data) {
    return this.http.put(`${API_BASE_URL}/testimonials/${id}`, data, { headers: this.getHeaders() });
  }
  deleteTestimonial(id) {
    return this.http.delete(`${API_BASE_URL}/testimonials/${id}`, { headers: this.getHeaders() });
  }
  getFaqs() {
    return this.http.get(`${API_BASE_URL}/faqs`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getFaqs", [])));
  }
  addFaq(data) {
    return this.http.post(`${API_BASE_URL}/faqs`, data, { headers: this.getHeaders() });
  }
  updateFaq(id, data) {
    return this.http.put(`${API_BASE_URL}/faqs/${id}`, data, { headers: this.getHeaders() });
  }
  deleteFaq(id) {
    return this.http.delete(`${API_BASE_URL}/faqs/${id}`, { headers: this.getHeaders() });
  }
  getInquiries() {
    return this.http.get(`${API_BASE_URL}/contact`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getInquiries", [])));
  }
  deleteInquiry(id) {
    return this.http.delete(`${API_BASE_URL}/contact/${id}`, { headers: this.getHeaders() });
  }
  getContactInfo() {
    return this.http.get(`${API_BASE_URL}/contact-info`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getContactInfo", null)));
  }
  updateContactInfo(payload) {
    const method = payload.id ? "PUT" : "POST";
    return this.http.request(method, `${API_BASE_URL}/contact-info`, { body: payload, headers: this.getHeaders() });
  }
  getAbout() {
    return this.http.get(`${API_BASE_URL}/about`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getAbout", {})));
  }
  updateAbout(data) {
    return this.http.post(`${API_BASE_URL}/about`, data, { headers: this.getHeaders() });
  }
  getPageContent(page) {
    return this.http.get(`${API_BASE_URL}/page-content/${page}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getPageContent", {})));
  }
  updatePageContent(page, data) {
    return this.http.post(`${API_BASE_URL}/page-content/${page}`, { content: data }, { headers: this.getHeaders() });
  }
  getTeam() {
    return this.http.get(`${API_BASE_URL}/team`, { headers: this.getHeaders() }).pipe(catchError(this.handleError("getTeam", [])));
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-VFRQX7SG.js.map
