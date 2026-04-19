// shared.js — nav scroll, mobile menu, reveal observer, language system
(function () {
  // ========== LANGUAGE SYSTEM ==========
  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      login: "Login",
      get_started: "Get Started",
      mob_get_started: "Get Started →",
      hero_badge: "Integrated Digital Solutions — Est. 2026",
      hero_title_1: "Elevate Your",
      hero_title_2: "Business",
      hero_title_3: "Online",
      hero_desc:
        "From brand identity to paid advertising, web development to POS systems — we're your all-in-one digital partner built to grow your business in the modern era.",
      explore_services: "Explore Our Services",
      view_work: "View Our Work",
      clients_served: "Clients Served",
      years_exp: "Years Experience",
      team_spec: "Team Specialists",
      brand_id: "Brand Identity",
      brand_id_sub: "12 delivered this week",
      web_proj: "Web Projects",
      web_proj_sub: "5 live this month",
      new_client: "New client onboarded",
      scroll: "Scroll",
      svc_ads: "Paid Advertising",
      svc_brand: "Brand Identity",
      svc_social: "Social Media",
      svc_video: "Video Production",
      svc_web: "Web Development",
      svc_pos: "POS Systems",
      who_we: "Who We Are",
      about_title_1: "The Agency Built",
      about_title_2: "For Real Results",
      about_desc_1:
        "Gotek Digital Solutions combines digital marketing and technical development under one roof. Built by engineers and marketers with over 9 years of proven success through Media Glow in Egypt, now expanding into the Saudi market.",
      about_desc_2:
        "Our mission is simple: your success is our success. We partner with you from the initial idea to real, measurable results.",
      pill_results: "🎯 Results-Driven",
      pill_partner: "🤝 True Partnership",
      pill_innov: "💡 Innovation First",
      pill_data: "📊 Data-Backed",
      full_story: "Our Full Story →",
      gotek_name: "Gotek Digital Solutions",
      gotek_sub: "Your Growth Partner Since 2026",
      fact_years: "9+ Years of Expertise",
      fact_regions: "Egypt & Saudi Arabia",
      fact_team: "20+ Specialists",
      what_we: "What We Offer",
      svc_title_1: "Six Ways We ",
      svc_title_2: "Grow",
      svc_title_3: "Your Business",
      all_svc: "All Services →",
      svc1_title: "Paid Advertising",
      svc1_desc:
        "Facebook, Instagram, Google, TikTok & Snapchat — targeted campaigns that convert.",
      svc2_title: "Branding & Identity",
      svc2_desc:
        "Logo design, brand guidelines, social media kits, and print materials.",
      svc3_title: "Social Media Management",
      svc3_desc:
        "Full page management, content creation, design, and performance analytics.",
      svc4_title: "Video Production",
      svc4_desc:
        "Reels, promos, shoots, and professional editing for maximum engagement.",
      svc5_title: "Web Design & Development",
      svc5_desc:
        "Stunning, fast, responsive websites — from corporate to full e-commerce stores.",
      svc6_title: "POS Systems",
      svc6_desc:
        "Custom cashier, inventory & sales reporting systems for retail businesses.",
      by_numbers: "By The Numbers",
      nums_title_1: "Results That",
      nums_title_2: "Speak Volumes",
      nums_desc:
        "Over nine years of delivering excellence across Egypt and the Kingdom of Saudi Arabia.",
      meet_team: "Meet The Team →",
      stat_clients: "Happy Clients",
      stat_years: "Years Active",
      stat_team: "Team Specialists",
      stat_svc: "Core Services",
      our_port: "Our Portfolio",
      port_title_1: "Projects We're ",
      port_title_2: "Proud",
      port_title_3: "To Deliver",
      view_all: "View All Projects",
      client_say: "What Clients Say",
      testi_title_1: "Trusted by ",
      testi_title_2: "2,000+ Businesses",
      ready_start: "Ready To Start?",
      cta_title_1: "Let's Build Something",
      cta_title_2: "Remarkable Together",
      cta_desc:
        "Whether you need a brand refresh, more leads, or a complete digital transformation — Gotek is your partner.",
      start_proj: "Start Your Project →",
      explore_svc: "Explore Services",
      footer_desc:
        "Integrated digital solutions for businesses and entrepreneurs. Your true partner in growth — from idea to results.",
      footer_svc: "Services",
      footer_ads: "Paid Advertising",
      footer_brand: "Branding & Identity",
      footer_social: "Social Media",
      footer_video: "Video Production",
      footer_web: "Web Development",
      footer_pos: "POS Systems",
      footer_company: "Company",
      footer_about: "About Us",
      footer_port: "Portfolio",
      footer_contact_link: "Contact",
      footer_contact: "Contact",
      footer_email: "hello@goteksa.com",
      footer_wa: "WhatsApp Support",
      footer_ksa: "Saudi Arabia",
      footer_copy:
        "© 2026 Gotek Digital Solutions — goteksa.com All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      // About Page
      about_hero_label: "About Gotek",
      about_hero_1: "Built on Experience,",
      about_hero_2: "Driven by",
      about_hero_3: "Results",
      about_hero_desc:
        "We are a team of engineers, creatives, and marketers with over 9 years of proven success — and a singular mission: to become your most valuable digital partner.",
      our_story: "Our Story Below",
      our_journey: "Our Journey",
      how_gotek: "How Gotek",
      came_to_be: "Came to Be",
      timeline_2015: "Media Glow Founded",
      timeline_2015_desc:
        "Started our journey in Egypt's digital marketing space, helping local businesses grow their online presence.",
      timeline_2019: "Expanded into Tech Solutions",
      timeline_2019_desc:
        "Added web development and POS systems to our offerings, becoming a true full-service agency.",
      timeline_2023: "2,000 Clients Milestone",
      timeline_2023_desc:
        "Celebrated serving over 2,000 businesses across multiple industries in Egypt and beyond.",
      timeline_2026: "Gotek Launches in Saudi Arabia",
      timeline_2026_desc:
        "A new chapter begins — bringing world-class digital solutions to the Saudi market under the Gotek brand.",
      why_built: "Why We Built",
      why_built_1: "Why We Built",
      why_built_desc_1:
        "After years of building Media Glow into a leading Egyptian agency, our founders saw a clear opportunity: the Saudi market needed a truly integrated partner — one that could handle everything from logo design to complex technical systems, without the client having to manage multiple vendors.",
      why_built_desc_2:
        "Gotek was born to fill that gap. A company where creativity meets engineering, where strategy meets execution, and where your success is the only metric that matters.",
      quote_text:
        "\"We don't just deliver services — we build partnerships. Every client's growth story is a page in ours.\"",
      quote_cite: "— Gotek Founders",
      our_foundation: "Our Foundation",
      stand_for: "What We Stand",
      stand_for_2: "For",
      vision_title: "Our Vision",
      vision_desc:
        "To become one of the leading digital solutions companies in the Middle East and the first technical and marketing partner for businesses aiming for growth.",
      mission_title: "Our Mission",
      mission_desc:
        "We believe that our clients' success is our success. We work as a true partner in building and developing projects from the initial idea to achieving real results.",
      values_title: "Our Values",
      values_desc:
        "Integrity in every interaction. Innovation in every solution. Excellence in every delivery. Accountability in every result. Partnership in every relationship.",
      leadership: "Leadership",
      meet_founders: "Meet Our",
      founders: "Founders",
      founder1_name: "Eng. Mohamed Wagih El-Sharkawy",
      founder1_role: "Co-Founder & CEO",
      founder1_desc:
        "A seasoned engineer and entrepreneur with deep expertise in technical systems and digital strategy. Mohamed drives Gotek's vision for integrated, technology-forward solutions.",
      founder2_name: "Eng. Rayhan El-Bandary",
      founder2_role: "Co-Founder & COO",
      founder2_desc:
        "A digital marketing expert and operations specialist, Rayhan ensures every client engagement runs smoothly and delivers measurable, real-world results.",
      the_team: "The Team",
      team_count: "20+ Specialists,",
      team_goal: "One Goal",
      team_desc:
        "Our diverse team covers every discipline needed to grow your business digitally.",
      team_role_1: "Paid Ads Specialists",
      team_dept_1: "Performance Marketing",
      team_role_2: "Graphic Designers",
      team_dept_2: "Visual Identity",
      team_role_3: "Social Media Managers",
      team_dept_3: "Content & Community",
      team_role_4: "Video Producers",
      team_dept_4: "Film & Content Creation",
      team_role_5: "Web Developers",
      team_dept_5: "Frontend & Backend",
      team_role_6: "Systems Developers",
      team_dept_6: "POS & Tech Systems",
      team_role_7: "Data Analysts",
      team_dept_7: "Analytics & Reporting",
      team_role_8: "Account Managers",
      team_dept_8: "Client Relations",
      ready_partner: "Ready to Partner",
      ready_partner_1: "Ready to Partner",
      ready_partner_2: "With",
      cta_about:
        "Let's start a conversation about your business goals and how we can help achieve them.",
      start_proj_about: "Start Your Project →",
      view_svc_about: "View Services",
      footer_copy_about: "© 2026 Gotek Digital Solutions — goteksa.com",
      // Services Page
      svc_hero_label: "What We Offer",
      svc_hero_1: "Six Services.",
      svc_hero_2: "Infinite",
      svc_hero_3: "Possibilities.",
      svc_hero_desc:
        "Everything your business needs to dominate digitally — under one roof, with one dedicated partner.",
      svc_filter_all: "All Services",
      svc_filter_marketing: "Marketing",
      svc_filter_design: "Design",
      svc_filter_tech: "Technology",
      svc_1_title: "Paid Advertising Management",
      svc_1_desc:
        "We design and manage high-performance advertising campaigns across every major platform — built around your specific business goals, audience, and budget.",
      svc_1_f1: "Custom campaign strategy & audience research",
      svc_1_f2: "Ad creative design & copywriting",
      svc_1_f3: "A/B testing and continuous optimization",
      svc_1_f4: "Weekly performance reports with insights",
      svc_1_f5: "Retargeting & lookalike audience campaigns",
      svc_1_cta: "Get a Campaign Quote →",
      svc_1_card1_label: "Campaign ROAS",
      svc_1_card1_sub: "This Month",
      svc_1_card2_label: "Reach",
      svc_1_card2_sub: "Audience Size",
      svc_1_card3_label: "Cost Per Lead",
      svc_1_card3_sub: "Avg. This Quarter",
      svc_2_title: "Branding & Visual Identity",
      svc_2_desc:
        "Your brand is more than a logo — it's the complete impression you leave on the world. We craft identities that are memorable, consistent, and built to compete.",
      svc_2_f1: "Logo design with multiple concepts & revisions",
      svc_2_f2: "Full brand guidelines (colors, fonts, usage rules)",
      svc_2_f3: "Social media profile & cover designs",
      svc_2_f4: "Business cards, letterheads, print materials",
      svc_2_f5: "Brand refresh for existing businesses",
      svc_2_cta: "Request a Brand Package →",
      svc_2_card1_label: "Logo Concepts",
      svc_2_card1_sub: "Delivered",
      svc_2_card1_badge: "3–5 Options",
      svc_2_card2_label: "Color Palette",
      svc_2_card2_sub: "Brand Identity",
      svc_2_card2_badge: "Full Guide",
      svc_2_card3_label: "Brand Book",
      svc_2_card3_sub: "Deliverable",
      svc_2_card3_badge: "PDF + Source",
      svc_3_title: "Social Media Management",
      svc_3_desc:
        "Consistent, creative, and community-building social media presence — we handle everything from content planning to post design to analytics reporting.",
      svc_3_f1: "Monthly content calendar & strategy",
      svc_3_f2: "Custom-designed posts, stories & reels",
      svc_3_f3: "Caption writing & hashtag strategy",
      svc_3_f4: "Community management & comment replies",
      svc_3_f5: "Monthly analytics & performance reports",
      svc_3_cta: "Manage My Pages →",
      svc_3_card1_label: "Engagement Rate",
      svc_3_card1_sub: "Monthly Average",
      svc_3_card2_label: "Followers Growth",
      svc_3_card2_sub: "Last 30 Days",
      svc_3_card3_label: "Posts Per Month",
      svc_3_card3_sub: "Consistent Schedule",
      svc_4_title: "Video Production & Content Creation",
      svc_4_desc:
        "Video is the most powerful format in digital marketing. Our production team creates compelling videos that captivate, convert, and build lasting brand impressions.",
      svc_4_f1: "Professional video shooting & direction",
      svc_4_f2: "Reels & short-form content for social",
      svc_4_f3: "Promotional & product showcase videos",
      svc_4_f4: "Motion graphics & animated explainers",
      svc_4_f5: "Professional editing, color grading & audio",
      svc_4_cta: "Book a Video Shoot →",
      svc_4_card1_label: "Average Views",
      svc_4_card1_sub: "Per Reel",
      svc_4_card2_label: "Turnaround",
      svc_4_card2_sub: "Editing Time",
      svc_4_card3_label: "4K Quality",
      svc_4_card3_sub: "Output Format",
      svc_5_title: "Website Design & Development",
      svc_5_desc:
        "Fast, beautiful, and conversion-optimized websites. From corporate portfolios to full-scale e-commerce platforms — we build digital experiences that grow your business.",
      svc_5_f1: "Custom UI/UX design (mobile-first)",
      svc_5_f2: "E-commerce stores with payment gateways",
      svc_5_f3: "SEO-optimized structure & fast load times",
      svc_5_f4: "CMS integration for easy content management",
      svc_5_f5: "Ongoing maintenance & support packages",
      svc_5_cta: "Build My Website →",
      svc_5_card1_label: "Page Speed",
      svc_5_card1_sub: "Google Score",
      svc_5_card2_label: "Responsive",
      svc_5_card2_sub: "All Devices",
      svc_5_card3_label: "SSL & Security",
      svc_5_card3_sub: "Included",
      svc_6_title: "POS Systems",
      svc_6_title_highlight: "Development",
      svc_6_desc:
        "Custom point-of-sale and business management systems tailored to your operations — from single-branch cashier systems to multi-location enterprise platforms.",
      svc_6_f1: "Custom cashier & billing interface",
      svc_6_f2: "Real-time inventory management",
      svc_6_f3: "Sales reporting & profit analytics dashboard",
      svc_6_f4: "Multi-branch support & user roles",
      svc_6_f5: "Training, support & system updates included",
      svc_6_cta: "Request a POS Demo →",
      svc_6_card1_label: "Daily Reports",
      svc_6_card1_sub: "Auto-Generated",
      svc_6_card2_label: "Multi-Branch",
      svc_6_card2_sub: "Support",
      svc_6_card3_label: "Data Backup",
      svc_6_card3_sub: "Cloud Sync",
      svc_process_label: "How We Work",
      svc_process_title: "Our",
      svc_process_title_highlight: "Process",
      svc_process_step1_title: "Discovery Call",
      svc_process_step1_desc:
        "We start with a free consultation to understand your business, goals, audience, and competitive landscape.",
      svc_process_step2_title: "Strategy & Proposal",
      svc_process_step2_desc:
        "We craft a tailored strategy and detailed proposal — clear deliverables, timelines, and measurable KPIs.",
      svc_process_step3_title: "Execution",
      svc_process_step3_desc:
        "Our specialized team gets to work, with regular check-ins and updates throughout the delivery phase.",
      svc_process_step4_title: "Results & Growth",
      svc_process_step4_desc:
        "We analyze results, report transparently, and continuously optimize to maximize your ROI.",
      svc_cta_title: "Not Sure Which Service",
      svc_cta_title_2: "You Need?",
      svc_cta_desc:
        "Book a free consultation and we'll guide you to the perfect solution for your business goals.",
      svc_cta_btn: "Book Free Consultation →",
      svc_footer_ads: "Paid Advertising",
      svc_footer_branding: "Branding",
      svc_footer_social: "Social Media",
      svc_footer_video: "Video Production",
      svc_footer_web: "Web Development",
      svc_footer_pos: "POS Systems",
      // Contact Page
      contact_hero_label: "Let's Talk",
      contact_hero_title_1: "Let's Bring Your",
      contact_hero_title_2: "Vision",
      contact_hero_title_3: "to Life",
      contact_hero_desc:
        "Whether you have a project in mind or just want to chat about growing your business, we're here to help. Fill out the form or reach out directly.",
      contact_info_intro:
        "Have a quick question? We're just a message away. Get in touch and let's discuss how we can help your business grow.",
      contact_label_email: "Email",
      contact_label_phone: "Phone",
      contact_label_wa: "WhatsApp",
      contact_hours: "Business Hours",
      contact_form_title: "Send Us a",
      contact_form_title_2: "Message",
      contact_form_subtitle:
        "Tell us about your project and let's create something amazing together.",
      contact_label_name: "Full Name",
      contact_label_email_form: "Email Address",
      contact_label_phone_form: "Phone Number",
      contact_label_service: "Service Interest",
      contact_label_budget: "Budget",
      contact_label_details: "Project Details",
      contact_placeholder_name: "e.g. Ahmed Al-Rashid",
      contact_placeholder_email: "hello@company.com",
      contact_placeholder_phone: "+966 5XXXX XXXX",
      contact_placeholder_details:
        "Tell us more about your project, goals, and timeline...",
      contact_budget_starter: "Under 5k",
      contact_budget_growth: "5k – 15k",
      contact_budget_scale: "15k – 50k+",
      contact_required: "Required",
      contact_submit: "Send Message",
      contact_note:
        "We'll get back to you within 24 hours during business hours.",
      contact_success_title: "Message Received!",
      contact_success_desc:
        "Thanks for reaching out. We'll review your details and get back to you within 24 hours.",
      contact_faq_title: "Frequently Asked Questions",
      contact_map_title: "Gotek Digital Solutions",
      contact_map_location: "Riyadh, Kingdom of Saudi Arabia",
      contact_map_btn: "Open in Google Maps →",
      // Portfolio Page
      port_hero_label: "Our Portfolio",
      port_hero_title_1: "Work We're",
      port_hero_title_2: "Proud",
      port_hero_title_3: "To Deliver",
      port_hero_desc:
        "Real projects. Real results. Explore our work across branding, advertising, web development, video, and more.",
      port_filter_all: "All Projects",
      port_filter_branding: "Branding",
      port_filter_ads: "Ads",
      port_filter_web: "Web",
      port_filter_video: "Video",
      port_filter_pos: "POS",
      port_filter_social: "Social",
      port_empty: "No projects in this category yet",
      port_stat_projects: "Projects Delivered",
      port_stat_clients: "Happy Clients",
      port_stat_countries: "Countries Served",
      port_stat_awards: "Award Wins",
      port_cta_label: "Work With Us",
      port_cta_title: "Your Project Could Be",
      port_cta_title_2: "Our Next Success Story",
      port_cta_btn: "Start Your Project →",
      port_cta_btn_secondary: "View Services",
      // Project Details Page
      proj_breadcrumb_home: "Home",
      proj_breadcrumb_portfolio: "Portfolio",
      proj_breadcrumb_current: "Project",
      proj_featured: "Featured",
      proj_label_client: "Client",
      proj_label_category: "Category",
      proj_label_timeline: "Timeline",
      proj_label_team: "Team Size",
      proj_overview: "Overview",
      proj_gallery: "Gallery",
      proj_challenge: "Challenge",
      proj_solution: "Solution",
      proj_results: "Results",
      proj_process: "Our Process",
      proj_testimonial: "Client Testimonial",
      proj_deliverables: "Deliverables",
      proj_share: "Share This Project",
      proj_share_copy: "Copy Link",
      proj_share_linkedin: "LinkedIn",
      proj_share_twitter: "Twitter",
      proj_related: "Related Projects",
      proj_related_explore: "Explore More Work",
      // Common across pages
      explore_services: "Explore Services",
      view_work: "View Our Work",
    },
    ar: {
      home: "الرئيسية",
      about: "عننا",
      services: "الخدمات",
      portfolio: "أعمالنا",
      contact: "تواصل",
      login: "دخول",
      get_started: "ابدأ الآن",
      mob_get_started: "ابدأ الآن →",
      hero_badge: "حلول رقمية متكاملة — تأسس 2026",
      hero_title_1: "ارفع مستوى",
      hero_title_2: "عملك",
      hero_title_3: "أونلاين",
      hero_desc:
        "من بناء الهوية البصرية إلى الإعلانات المدفوعة، تطوير المواقع لأنظمة نقاط البيع — نحن شريكك الرقمي الكامل المبني لنمو عملك في العصر الحديث.",
      explore_services: "استكشف خدماتنا",
      view_work: "شاهد أعمالنا",
      clients_served: "عميل راضي",
      years_exp: "سنوات خبرة",
      team_spec: "متخصص بفريقنا",
      brand_id: "هوية بصرية",
      brand_id_sub: "12 مشروع هذا الأسبوع",
      web_proj: "مشاريع ويب",
      web_proj_sub: "5 مشاريع حية هذا الشهر",
      new_client: "عميل جديد",
      scroll: "انزل",
      svc_ads: "الإعلانات المدفوعة",
      svc_brand: "الهوية البصرية",
      svc_social: "إدارة وسائل التواصل",
      svc_video: "إنتاج الفيديو",
      svc_web: "تطوير الويب",
      svc_pos: "أنظمة الفاتورة",
      who_we: "من نحن",
      about_title_1: "الوكالة المبنية",
      about_title_2: "للنتائج الحقيقية",
      about_desc_1:
        "Gotek Digital Solutions تجمع بين التسويق الرقمي والتطوير التقني تحت سقف واحد. تأسست من قبل مهندسين وخبراء تسويق لديهم أكثر من 9 سنوات من النجاح المثبت من خلال Media Glow في مصر، والآن تتوسع في السوق السعودية.",
      about_desc_2:
        "مهمتنا بسيطة: نجاحك هو نجاحنا. نحن نشارك معك من الفكرة الأولى إلى النتائج الحقيقية والقابلة للقياس.",
      pill_results: "🎯 محركة للنتائج",
      pill_partner: "🤝 شراكة حقيقية",
      pill_innov: "💡 الابتكار أولاً",
      pill_data: "📊 مدعومة بالبيانات",
      full_story: "قصتنا كاملة →",
      gotek_name: "Gotek Digital Solutions",
      gotek_sub: "شريكك في النمو منذ 2026",
      fact_years: "9+ سنوات من الخبرة",
      fact_regions: "مصر والمملكة العربية السعودية",
      fact_team: "20+ متخصص",
      what_we: "ما نقدمه",
      svc_title_1: "ست طرق نساعدك ",
      svc_title_2: "تنمو",
      svc_title_3: "عملك",
      all_svc: "كل الخدمات →",
      svc1_title: "الإعلانات المدفوعة",
      svc1_desc:
        "فيسبوك، إنستغرام، جوجل، تيك توك وسناب شات — حملات موجهة تحول للمبيعات.",
      svc2_title: "الهوية البصرية",
      svc2_desc:
        "تصميم شعارات، أدلة العلامات التجارية، حزم وسائل التواصل، والمواد المطبوعة.",
      svc3_title: "إدارة وسائل التواصل",
      svc3_desc: "إدارة الصفحة كاملة، إنشاء المحتوى، التصميم، وتحليل الأداء.",
      svc4_title: "إنتاج الفيديو",
      svc4_desc: "ريلز، دعايات، تصوير وتحرير احترافي لأقصى تفاعل.",
      svc5_title: "تصميم وتطوير الويب",
      svc5_desc:
        "مواقع مذهلة وسريعة وسريعة الاستجابة — من الشركات لمتاجر التجارة الإلكترونية الكاملة.",
      svc6_title: "أنظمة الفاتورة",
      svc6_desc:
        "أنظمة كاشير وإدارة المخزون وتقارير المبيعات المخصصة لمتاجر البيع بالتجزئة.",
      by_numbers: "بالأرقام",
      nums_title_1: "نتائج",
      nums_title_2: "تتحدث بصراحة",
      nums_desc:
        "أكثر من تسع سنوات من تقديم التميز عبر مصر والمملكة العربية السعودية.",
      meet_team: "قابل الفريق →",
      stat_clients: "عميل سعيد",
      stat_years: "سنوات نشاط",
      stat_team: "متخصص بالفريق",
      stat_svc: "الخدمات الأساسية",
      our_port: "محفظة أعمالنا",
      port_title_1: "المشاريع التي ",
      port_title_2: "فخورون",
      port_title_3: "بتسليمها",
      view_all: "شاهد كل المشاريع",
      client_say: "ماذا يقول العملاء",
      testi_title_1: "موثوق من ",
      testi_title_2: "2000+ عميل",
      ready_start: "هل أنت مستعد للبدء؟",
      cta_title_1: "دعنا نبني شيء",
      cta_title_2: "رائع معاً",
      cta_desc:
        "سواء كنت بحاجة لتحديث العلامة التجارية، أو مزيد من العملاء، أو تحول رقمي كامل — Gotek هو شريكك.",
      start_proj: "ابدأ مشروعك →",
      explore_svc: "استكشف الخدمات",
      footer_desc:
        "حلول رقمية متكاملة للشركات والرواد. شريكك الحقيقي في النمو — من الفكرة للنتائج.",
      footer_svc: "الخدمات",
      footer_ads: "الإعلانات المدفوعة",
      footer_brand: "الهوية البصرية",
      footer_social: "إدارة وسائل التواصل",
      footer_video: "إنتاج الفيديو",
      footer_web: "تطوير الويب",
      footer_pos: "أنظمة الفاتورة",
      footer_company: "الشركة",
      footer_about: "من نحن",
      footer_port: "أعمالنا",
      footer_contact_link: "تواصل",
      footer_contact: "تواصل",
      footer_email: "hello@goteksa.com",
      footer_wa: "دعم الواتس",
      footer_ksa: "المملكة العربية السعودية",
      footer_copy: "© 2026 جميع الحقوق محفوظة — goteksa.com",
      footer_privacy: "سياسة الخصوصية",
      footer_terms: "شروط الخدمة",
      // About Page
      about_hero_label: "عن Gotek",
      about_hero_1: "مبني على الخبرة،",
      about_hero_2: "مدفوع بـ",
      about_hero_3: "النتائج",
      about_hero_desc:
        "نحن فريق من المهندسين والمبدعين والمسوقين مع أكثر من 9 سنوات من النجاح المثبت — مع مهمة واحدة: أن نصبح شريكك الرقمي الأكثر قيمة.",
      our_story: "قصتنا أدناه",
      our_journey: "رحلتنا",
      how_gotek: "كيف نشأت Gotek",
      came_to_be: "إلى الوجود",
      timeline_2015: "تأسس Media Glow",
      timeline_2015_desc:
        "بدأنا رحلتنا في مجال التسويق الرقمي المصري، مساعدة الشركات المحلية على تنمية وجودها الرقمي.",
      timeline_2019: "التوسع إلى الحلول التقنية",
      timeline_2019_desc:
        "أضفنا تطوير الويب وأنظمة الفاتورة لعروضنا، لنصبح وكالة خدمات شاملة حقيقية.",
      timeline_2023: "معلم 2000 عميل",
      timeline_2023_desc:
        "احتفلنا بخدمة أكثر من 2000 شركة عبر صناعات متعددة في مصر وما وراءها.",
      timeline_2026: "إطلاق Gotek في المملكة العربية السعودية",
      timeline_2026_desc:
        "فصل جديد يبدأ — نحضر حلول رقمية عالمية المستوى إلى السوق السعودية تحت علامة Gotek.",
      why_built: "لماذا بنينا",
      why_built_1: "لماذا بنينا",
      why_built_desc_1:
        "بعد سنوات من بناء Media Glow لتصبح وكالة مصرية رائدة، رأى مؤسسونا فرصة واضحة: السوق السعودي كان يحتاج إلى شريك متكامل حقيقي — واحد يمكنه التعامل مع كل شيء من تصميم الشعار إلى الأنظمة التقنية المعقدة، دون الحاجة لإدارة شركات متعددة.",
      why_built_desc_2:
        "وُلدت Gotek لسد هذه الفجوة. شركة حيث تلتقي الإبداعية بالهندسة، حيث تلبي الإستراتيجية التنفيذ، وحيث نجاحك هو المقياس الوحيد الذي يهمنا.",
      quote_text:
        '"لا نوفر خدمات فحسب — نبني شراكات. قصة نمو كل عميل هي صفحة من قصتنا."',
      quote_cite: "— مؤسسو Gotek",
      our_foundation: "أساسنا",
      stand_for: "ما نقف معه",
      stand_for_2: "من أجله",
      vision_title: "رؤيتنا",
      vision_desc:
        "أن نصبح إحدى الشركات الرائدة في حلول رقمية في الشرق الأوسط والشريك التقني والتسويقي الأول للشركات التي تهدف للنمو.",
      mission_title: "مهمتنا",
      mission_desc:
        "نؤمن أن نجاح عملائنا هو نجاحنا. نعمل كشريك حقيقي في بناء وتطوير المشاريع من الفكرة الأولى إلى تحقيق نتائج حقيقية.",
      values_title: "قيمنا",
      values_desc:
        "النزاهة في كل تفاعل. الابتكار في كل حل. التميز في كل تسليم. المساءلة في كل نتيجة. الشراكة في كل علاقة.",
      leadership: "القيادة",
      meet_founders: "قابل",
      founders: "المؤسسين",
      founder1_name: "المهندس محمد واجه الشرقاوي",
      founder1_role: "المشارك المؤسس والمدير التنفيذي",
      founder1_desc:
        "مهندس رجل أعمال متمرس مع خبرة عميقة في الأنظمة التقنية والإستراتيجية الرقمية. يقود محمد رؤية Gotek للحلول المتكاملة والموجهة التكنولوجية.",
      founder2_name: "المهندس ريحان البندري",
      founder2_role: "المشارك المؤسس ورئيس العمليات",
      founder2_desc:
        "خبير تسويق رقمي ومتخصص العمليات، يضمن ريحان أن كل مشاركة عميل تعمل بسلاسة وتقدم نتائج قابلة for measurement وواقعية.",
      the_team: "الفريق",
      team_count: "20+ متخصص،",
      team_goal: "هدف واحد",
      team_desc: "يغطي فريقنا المتنوع كل تخصص مطلوب لتنمية عملك رقمياً.",
      team_role_1: "متخصصو الإعلانات المدفوعة",
      team_dept_1: "تسويق الأداء",
      team_role_2: "مصممو جرافيك",
      team_dept_2: "الهوية البصرية",
      team_role_3: "مديرو وسائل التواصل",
      team_dept_3: "المحتوى والمجتمع",
      team_role_4: "منتجو فيديو",
      team_dept_4: "الأفلام وإنشاء المحتوى",
      team_role_5: "مطورو ويب",
      team_dept_5: "الواجهة الأمامية والخلفية",
      team_role_6: "مطورو الأنظمة",
      team_dept_6: "أنظمة الفاتورة والتقنية",
      team_role_7: "محللو البيانات",
      team_dept_7: "التحليلات والتقارير",
      team_role_8: "مديرو الحسابات",
      team_dept_8: "علاقات العميل",
      ready_partner: "هل أنت مستعد للشراكة",
      ready_partner_1: "هل أنت مستعد للشراكة",
      ready_partner_2: "مع",
      cta_about:
        "دعنا نبدأ محادثة حول أهداف عملك وكيف يمكننا مساعدتك في تحقيقها.",
      start_proj_about: "ابدأ مشروعك →",
      view_svc_about: "عرض الخدمات",
      footer_copy_about: "© 2026 Gotek Digital Solutions — goteksa.com",
      // Services Page
      svc_hero_label: "ما نقدمه",
      svc_hero_1: "ست خدمات.",
      svc_hero_2: "إمكانيات",
      svc_hero_3: "لا نهائية.",
      svc_hero_desc:
        "كل ما يحتاجه عملك للسيطرة رقمياً — تحت سقف واحد، مع شريك واحد مكرس.",
      svc_filter_all: "جميع الخدمات",
      svc_filter_marketing: "التسويق",
      svc_filter_design: "التصميم",
      svc_filter_tech: "التكنولوجيا",
      svc_1_title: "إدارة الإعلانات المدفوعة",
      svc_1_desc:
        "نحن ننشئ وننظم حملات إعلانية عالية الأداء عبر جميع المنصات الرئيسية — مبنية حول أهداف عملك المحددة والجمهور والميزانية.",
      svc_1_f1: "استراتيجية الحملة المخصصة وبحث الجمهور",
      svc_1_f2: "تصميم الإعلانات الإبداعية وكتابة النصوص",
      svc_1_f3: "اختبار A/B والتحسين المستمر",
      svc_1_f4: "تقارير الأداء الأسبوعية مع الرؤى",
      svc_1_f5: "حملات إعادة الاستهداف والجمهور المماثل",
      svc_1_cta: "احصل على عرض الحملة →",
      svc_1_card1_label: "عائد الإنفاق الإعلاني",
      svc_1_card1_sub: "هذا الشهر",
      svc_1_card2_label: "الوصول",
      svc_1_card2_sub: "حجم الجمهور",
      svc_1_card3_label: "تكلفة الإحالة",
      svc_1_card3_sub: "المتوسط هذا الربع",
      svc_2_title: "العلامة التجارية والهوية البصرية",
      svc_2_desc:
        "علامتك التجارية أكثر من مجرد شعار — إنها الانطباع الكامل الذي تتركه على العالم. نحن نصنع هويات لا تُنسى ومتسقة ومبنية للتنافس.",
      svc_2_f1: "تصميم الشعار مع مفاهيم متعددة والتعديلات",
      svc_2_f2: "إرشادات العلامة التجارية الكاملة (الألوان والخطوط)",
      svc_2_f3: "تصاميم ملفات تعريف ووسائل التواصل الاجتماعي",
      svc_2_f4: "بطاقات العمل والرسالات والمواد المطبوعة",
      svc_2_f5: "تحديث العلامة التجارية للشركات الموجودة",
      svc_2_cta: "طلب حزمة العلامة التجارية →",
      svc_2_card1_label: "مفاهيم الشعار",
      svc_2_card1_sub: "تم التسليم",
      svc_2_card1_badge: "3–5 خيارات",
      svc_2_card2_label: "لوحة الألوان",
      svc_2_card2_sub: "هوية العلامة",
      svc_2_card2_badge: "دليل كامل",
      svc_2_card3_label: "كتاب العلامة",
      svc_2_card3_sub: "المسلم",
      svc_2_card3_badge: "PDF + المصدر",
      svc_3_title: "إدارة وسائل التواصل الاجتماعي",
      svc_3_desc:
        "وجود متسق وإبداعي وتفاعلي في وسائل التواصل الاجتماعي — نحن نتولى كل شيء من التخطيط للمحتوى إلى تصميم المنشورات إلى تقارير التحليلات.",
      svc_3_f1: "تقويم المحتوى الشهري والاستراتيجية",
      svc_3_f2: "منشورات مخصصة وقصص وملفات فيديو",
      svc_3_f3: "كتابة التسميات التوضيحية واستراتيجية الوسوم",
      svc_3_f4: "إدارة المجتمع والرد على التعليقات",
      svc_3_f5: "تقارير التحليلات الشهرية والأداء",
      svc_3_cta: "إدارة صفحاتي →",
      svc_3_card1_label: "معدل التفاعل",
      svc_3_card1_sub: "المتوسط الشهري",
      svc_3_card2_label: "نمو المتابعين",
      svc_3_card2_sub: "آخر 30 يوم",
      svc_3_card3_label: "منشورات شهرية",
      svc_3_card3_sub: "جدول منتظم",
      svc_4_title: "إنتاج الفيديو وإنشاء المحتوى",
      svc_4_desc:
        "الفيديو هو الصيغة الأقوى في التسويق الرقمي. يقوم فريقنا الإنتاجي بإنشاء فيديوهات جذابة تأسر وتحول وتبني انطباعات دائمة للعلامة التجارية.",
      svc_4_f1: "تصوير فيديو احترافي والإخراج",
      svc_4_f2: "الملفات القصيرة ومحتوى الوسائط الاجتماعية",
      svc_4_f3: "فيديوهات ترويجية وعرض المنتجات",
      svc_4_f4: "الرسوميات المتحركة والمشروحات المتحركة",
      svc_4_f5: "المونتاج الاحترافي والتصحيح اللوني والصوت",
      svc_4_cta: "احجز جلسة تصوير →",
      svc_4_card1_label: "المشاهدات المتوسطة",
      svc_4_card1_sub: "لكل فيديو قصير",
      svc_4_card2_label: "وقت التسليم",
      svc_4_card2_sub: "وقت المونتاج",
      svc_4_card3_label: "جودة 4K",
      svc_4_card3_sub: "صيغة الإخراج",
      svc_5_title: "تصميم وتطوير الويب",
      svc_5_desc:
        "مواقع ويب سريعة وجميلة وموجهة للتحويل. من محافظ الشركات إلى منصات التجارة الإلكترونية الكاملة — نحن نبني تجارب رقمية تنمي عملك.",
      svc_5_f1: "تصميم واجهة المستخدم/تجربة المستخدم المخصص",
      svc_5_f2: "متاجر التجارة الإلكترونية مع بوابات الدفع",
      svc_5_f3: "هيكل محسن لمحركات البحث وأوقات التحميل السريعة",
      svc_5_f4: "تكامل نظام إدارة المحتوى لسهولة إدارة المحتوى",
      svc_5_f5: "حزم الصيانة والدعم المستمرة",
      svc_5_cta: "بناء موقعي →",
      svc_5_card1_label: "سرعة الصفحة",
      svc_5_card1_sub: "درجة Google",
      svc_5_card2_label: "استجابة",
      svc_5_card2_sub: "جميع الأجهزة",
      svc_5_card3_label: "SSL والأمان",
      svc_5_card3_sub: "مضمون",
      svc_6_title: "نقاط البيع",
      svc_6_title_highlight: "تطوير",
      svc_6_desc:
        "أنظمة نقاط بيع وإدارة أعمال مخصصة مصممة لعملياتك — من أنظمة الصراف الآلي بفرع واحد إلى منصات المؤسسات متعددة الفروع.",
      svc_6_f1: "واجهة الصراف الآلي والفواتير المخصصة",
      svc_6_f2: "إدارة المخزون في الوقت الفعلي",
      svc_6_f3: "لوحة معلومات التقارير والتحليلات الربح",
      svc_6_f4: "دعم متعدد الفروع وأدوار المستخدمين",
      svc_6_f5: "التدريب والدعم وتحديثات النظام المضمونة",
      svc_6_cta: "اطلب عرض نقطة البيع →",
      svc_6_card1_label: "التقارير اليومية",
      svc_6_card1_sub: "تم إنشاؤها تلقائياً",
      svc_6_card2_label: "متعدد الفروع",
      svc_6_card2_sub: "دعم",
      svc_6_card3_label: "نسخة البيانات",
      svc_6_card3_sub: "مزامنة سحابية",
      svc_process_label: "كيف نعمل",
      svc_process_title: "عمليتنا",
      svc_process_title_highlight: "الفريدة",
      svc_process_step1_title: "مكالمة اكتشاف",
      svc_process_step1_desc:
        "نبدأ باستشارة مجانية لفهم عملك والأهداف والجمهور والمشهد التنافسي.",
      svc_process_step2_title: "الاستراتيجية والعرض",
      svc_process_step2_desc:
        "نحن نضع استراتيجية مخصصة وعرضاً مفصلاً — المخرجات واضحة والجداول الزمنية ومؤشرات الأداء الرئيسية القابلة للقياس.",
      svc_process_step3_title: "التنفيذ",
      svc_process_step3_desc:
        "يبدأ فريقنا المتخصص العمل، مع عمليات تفتيش منتظمة وتحديثات طوال مرحلة التسليم.",
      svc_process_step4_title: "النتائج والنمو",
      svc_process_step4_desc:
        "نحن نحلل النتائج ونقدم تقارير شفافة ونحسن بشكل مستمر لزيادة العائد على استثمارك.",
      svc_cta_title: "غير متأكد من أي خدمة",
      svc_cta_title_2: "تحتاج؟",
      svc_cta_desc: "احجز استشارة مجانية وسنوجهك إلى الحل المثالي لأهداف عملك.",
      svc_cta_btn: "احجز استشارة مجانية →",
      svc_footer_services: "الخدمات",
      svc_footer_ads: "الإعلانات المدفوعة",
      svc_footer_branding: "العلامة التجارية",
      svc_footer_social: "وسائل التواصل",
      svc_footer_video: "إنتاج الفيديو",
      svc_footer_web: "تطوير الويب",
      svc_footer_pos: "أنظمة نقاط البيع",
      // Contact Page
      contact_hero_label: "دعنا نتحدث",
      contact_hero_title_1: "دعنا نحقق",
      contact_hero_title_2: "رؤيتك",
      contact_hero_title_3: "الواقع",
      contact_hero_desc:
        "سواء كان لديك مشروع في الذهن أو تريد فقط التحدث عن تنمية عملك، نحن هنا للمساعدة.",
      contact_info_intro:
        "هل لديك سؤال سريع؟ نحن على بعد رسالة فقط. تواصل معنا ودعنا نناقش كيف يمكننا مساعدة عملك.",
      contact_label_email: "البريد الإلكتروني",
      contact_label_phone: "رقم الهاتف",
      contact_label_wa: "واتس أب",
      contact_hours: "ساعات العمل",
      contact_form_title: "أرسل لنا",
      contact_form_title_2: "رسالة",
      contact_form_subtitle: "أخبرنا عن مشروعك ودعنا نصنع شيئاً رائعاً معاً.",
      contact_label_name: "الاسم الكامل",
      contact_label_email_form: "عنوان البريد الإلكتروني",
      contact_label_phone_form: "رقم الجوال",
      contact_label_service: "الخدمة المطلوبة",
      contact_label_budget: "الميزانية",
      contact_label_details: "تفاصيل المشروع",
      contact_placeholder_name: "مثال: أحمد الرشيد",
      contact_placeholder_email: "hello@company.com",
      contact_placeholder_phone: "+966 5XXXX XXXX",
      contact_placeholder_details:
        "أخبرنا المزيد عن مشروعك والأهداف والجدول الزمني...",
      contact_budget_starter: "أقل من 5000",
      contact_budget_growth: "5000 – 15000",
      contact_budget_scale: "15000 – 50000+",
      contact_required: "مطلوب",
      contact_submit: "إرسال الرسالة",
      contact_note: "سنرد عليك خلال 24 ساعة خلال ساعات العمل.",
      contact_success_title: "تم استلام الرسالة!",
      contact_success_desc:
        "شكراً على التواصل معنا. سنراجع التفاصيل ونرد عليك خلال 24 ساعة.",
      contact_faq_title: "الأسئلة الشائعة",
      contact_map_title: "Gotek Digital Solutions",
      contact_map_location: "الرياض، المملكة العربية السعودية",
      contact_map_btn: "افتح في خريطة جوجل →",
      // Portfolio Page
      port_hero_label: "محفظة أعمالنا",
      port_hero_title_1: "المشاريع التي",
      port_hero_title_2: "فخورون",
      port_hero_title_3: "بتسليمها",
      port_hero_desc:
        "مشاريع حقيقية. نتائج حقيقية. استكشف أعمالنا عبر الهوية البصرية والإعلانات وتطوير الويب والفيديو والمزيد.",
      port_filter_all: "جميع المشاريع",
      port_filter_branding: "الهوية البصرية",
      port_filter_ads: "الإعلانات",
      port_filter_web: "الويب",
      port_filter_video: "الفيديو",
      port_filter_pos: "نقاط البيع",
      port_filter_social: "وسائل التواصل",
      port_empty: "لا توجد مشاريع في هذه الفئة حتى الآن",
      port_stat_projects: "مشروع تم تسليمه",
      port_stat_clients: "عميل سعيد",
      port_stat_countries: "دول تخدم",
      port_stat_awards: "جوائز الفوز",
      port_cta_label: "اعمل معنا",
      port_cta_title: "مشروعك قد يكون",
      port_cta_title_2: "قصة نجاحنا التالية",
      port_cta_btn: "ابدأ مشروعك →",
      port_cta_btn_secondary: "عرض الخدمات",
      // Project Details Page
      proj_breadcrumb_home: "الرئيسية",
      proj_breadcrumb_portfolio: "المحفظة",
      proj_breadcrumb_current: "المشروع",
      proj_featured: "مميز",
      proj_label_client: "العميل",
      proj_label_category: "الفئة",
      proj_label_timeline: "الجدول الزمني",
      proj_label_team: "حجم الفريق",
      proj_overview: "نظرة عامة",
      proj_gallery: "معرض",
      proj_challenge: "التحدي",
      proj_solution: "الحل",
      proj_results: "النتائج",
      proj_process: "عمليتنا",
      proj_testimonial: "شهادة العميل",
      proj_deliverables: "المسلمات",
      proj_share: "شارك هذا المشروع",
      proj_share_copy: "نسخ الرابط",
      proj_share_linkedin: "LinkedIn",
      proj_share_twitter: "تويتر",
      proj_related: "المشاريع ذات الصلة",
      proj_related_explore: "استكشف المزيد من الأعمال",
      // Common across pages
      explore_services: "استكشف الخدمات",
      view_work: "شاهد أعمالنا",
    },
  };

  // Get saved language or default to English
  let currentLang = localStorage.getItem("gotek_lang") || "en";

  // Update page language on load
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("gotek_lang", lang);

    // Update all elements with data-lang
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.dataset.lang;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update HTML lang attribute and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    // Update lang button
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";
  }

  // Initialize language on page load
  updateLanguage(currentLang);

  // Language toggle button
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "ar" : "en";
      updateLanguage(newLang);
    });
  }

  // ========== NAV SCROLL ==========
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav && nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  // Hamburger
  const ham = document.querySelector(".hamburger");
  const mob = document.querySelector(".mobile-menu");
  if (ham && mob) {
    ham.addEventListener("click", () => {
      ham.classList.toggle("open");
      mob.classList.toggle("open");
      document.body.style.overflow = mob.classList.contains("open")
        ? "hidden"
        : "";
    });
    mob.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        ham.classList.remove("open");
        mob.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Reveal
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );
  const ro = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    },
    { threshold: 0.1 },
  );
  revealEls.forEach((el) => ro.observe(el));

  // Counter
  function counter(el, end, suffix = "") {
    const dur = 1800;
    const step = (ts) => {
      if (!step.t) step.t = ts;
      const p = Math.min((ts - step.t) / dur, 1);
      el.textContent = Math.floor(p * end) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const statsSection = document.querySelector(".stats-trigger");
  if (statsSection) {
    const so = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.querySelectorAll("[data-count]").forEach((el) => {
            counter(el, +el.dataset.count, el.dataset.suffix || "");
          });
          so.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    so.observe(statsSection);
  }

  // Active nav link
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a, .mobile-menu a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
})();
