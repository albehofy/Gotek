/**
 * ═══════════════════════════════════════════════════════════════════
 *  GOTEK DIGITAL SOLUTIONS — API INTEGRATION LAYER
 * ═══════════════════════════════════════════════════════════════════
 *
 *  This file handles all API calls, with graceful fallback to
 *  rich dummy data when the backend is unavailable.
 *
 *  BACKEND ENGINEER — PLEASE IMPLEMENT THESE ENDPOINTS:
 *  (see API_SPEC below for full request/response contracts)
 *
 * ═══════════════════════════════════════════════════════════════════
 */

/* ── CONFIG ── */
const API_CONFIG = {
  BASE_URL: 'https://api.goteksa.com/v1',   // ← change to your backend URL
  TIMEOUT_MS: 5000,
  RETRY_ATTEMPTS: 2
};

/* ─────────────────────────────────────────────────────────────────
   API SPECIFICATION FOR BACKEND TEAM
   Every endpoint is documented with: method, path, request body,
   expected response shape, and which frontend section uses it.
──────────────────────────────────────────────────────────────────*/
const API_SPEC = {

  /* ── 1. PROJECTS LIST ─────────────────────────────────────────
     Returns paginated list of portfolio projects.

     GET /v1/projects?page=1&limit=9&category=all
     QUERY PARAMS:
       page     (int)    current page, default 1
       limit    (int)    items per page, default 9
       category (string) all | branding | ads | web | video | pos | social

     RESPONSE 200:
     {
       "success": true,
       "data": [
         {
           "id": "al-nakheel",
           "title": "Al-Nakheel Construction",
           "titleAccent": "Brand Identity",
           "category": "branding",
           "tags": ["Branding", "Visual Identity", "Print"],
           "client": "Al-Nakheel Group",
           "year": "2025",
           "thumbnail": "https://your-cdn.com/projects/al-nakheel/thumb.jpg",
           "thumbBg": "linear-gradient(135deg,#FDDCCA,#F5AA80)",
           "emoji": "🏗️",
           "featured": true
         },
         ...
       ],
       "pagination": {
         "page": 1,
         "limit": 9,
         "total": 24,
         "totalPages": 3
       }
     }
  ────────────────────────────────────────────────────────────── */
  GET_PROJECTS: { method: 'GET', path: '/projects' },

  /* ── 2. SINGLE PROJECT ─────────────────────────────────────────
     Returns full project detail data.

     GET /v1/projects/:id

     RESPONSE 200:
     {
       "success": true,
       "data": {
         "id": "al-nakheel",
         "title": "Al-Nakheel Construction",
         "titleAccent": "Brand Identity",
         "emoji": "🏗️",
         "heroBg": "linear-gradient(135deg,#1a0e06,#2d1800)",
         "tags": ["Branding", "Visual Identity", "Print"],
         "meta": [
           { "label": "Client", "value": "Al-Nakheel Group" },
           { "label": "Industry", "value": "Construction" },
           { "label": "Year", "value": "2025" },
           { "label": "Duration", "value": "3 Weeks" }
         ],
         "media": [
           {
             "type": "image",
             "src": "https://your-cdn.com/projects/al-nakheel/01.jpg",
             "bg": "linear-gradient(135deg,#FDDCCA,#F5AA80)",
             "emoji": "🏗️",
             "label": "Brand Overview"
           },
           {
             "type": "video",
             "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
             "thumbEmoji": "▶️",
             "label": "Brand Reveal Video"
           }
         ],
         "overview": {
           "title": "Building a Brand as Strong as Steel",
           "body": ["paragraph 1", "paragraph 2"]
         },
         "challenges": [
           { "icon": "⚠️", "title": "The Challenge", "text": "...", "full": false },
           { "icon": "💡", "title": "Our Solution",  "text": "...", "full": false },
           { "icon": "📦", "title": "Scope of Work", "text": "...", "full": true  }
         ],
         "results": [
           { "num": "3",   "label": "Weeks to Delivery" },
           { "num": "40+", "label": "Brand Assets Delivered" }
         ],
         "process": [
           { "title": "Discovery Workshop", "desc": "..." },
           { "title": "Concept Development","desc": "..." }
         ],
         "testimonial": {
           "text": "Quote text...",
           "name": "Eng. Khalid Al-Nakheel",
           "role": "Managing Director, Al-Nakheel Group",
           "initials": "KN",
           "avatar": "https://your-cdn.com/avatars/kn.jpg"
         },
         "details": [
           { "key": "Service",   "val": "Branding", "tag": true },
           { "key": "Timeline",  "val": "3 Weeks" },
           { "key": "Status",    "val": "✓ Completed" }
         ],
         "deliverables": ["Logo Design", "Brand Guidelines", "Business Card"],
         "related": ["techmart", "bloom", "sawa"]
       }
     }

     RESPONSE 404:
     { "success": false, "error": "Project not found" }
  ────────────────────────────────────────────────────────────── */
  GET_PROJECT: { method: 'GET', path: '/projects/:id' },

  /* ── 3. SUBMIT CONTACT FORM ────────────────────────────────────
     POST /v1/contact

     REQUEST BODY (application/json):
     {
       "name":    "Ahmed Hassan",
       "email":   "ahmed@example.com",
       "phone":   "+966501234567",
       "company": "TechMart",
       "service": "Paid Advertising",
       "budget":  "10000-30000 SAR",
       "message": "We need help with our Meta campaigns..."
     }

     RESPONSE 200:
     { "success": true, "message": "Thank you! We'll be in touch within 24 hours." }

     RESPONSE 422:
     { "success": false, "errors": { "email": "Invalid email format" } }
  ────────────────────────────────────────────────────────────── */
  POST_CONTACT: { method: 'POST', path: '/contact' },

  /* ── 4. TESTIMONIALS ───────────────────────────────────────────
     GET /v1/testimonials?limit=6

     RESPONSE 200:
     {
       "success": true,
       "data": [
         {
           "id": "t1",
           "text": "Gotek transformed our brand...",
           "name": "Ahmed Hassan",
           "role": "CEO, TechMart Retail",
           "initials": "AH",
           "avatar": null,
           "rating": 5,
           "service": "Branding"
         }
       ]
     }
  ────────────────────────────────────────────────────────────── */
  GET_TESTIMONIALS: { method: 'GET', path: '/testimonials' },

  /* ── 5. STATS / METRICS ────────────────────────────────────────
     GET /v1/stats

     RESPONSE 200:
     {
       "success": true,
       "data": {
         "clients":   2000,
         "years":     9,
         "team":      20,
         "services":  6,
         "projects":  150,
         "satisfaction": 98
       }
     }
  ────────────────────────────────────────────────────────────── */
  GET_STATS: { method: 'GET', path: '/stats' },

  /* ── 6. SERVICES LIST ──────────────────────────────────────────
     GET /v1/services

     RESPONSE 200:
     {
       "success": true,
       "data": [
         {
           "id": "ads",
           "number": "01",
           "icon": "📣",
           "title": "Paid Advertising",
           "shortDesc": "Facebook, Instagram, Google, TikTok & Snapchat...",
           "fullDesc": "Full campaign strategy, ad creative, A/B testing...",
           "features": ["Campaign Strategy", "Ad Creative", "A/B Testing"],
           "startingPrice": "3,500 SAR/month",
           "platforms": ["Facebook", "Instagram", "Google", "TikTok", "Snapchat"]
         }
       ]
     }
  ────────────────────────────────────────────────────────────── */
  GET_SERVICES: { method: 'GET', path: '/services' },

  /* ── 7. TEAM MEMBERS ───────────────────────────────────────────
     GET /v1/team

     RESPONSE 200:
     {
       "success": true,
       "data": [
         {
           "id": "1",
           "name": "Omar Al-Rashidi",
           "role": "CEO & Founder",
           "bio": "10+ years in digital marketing...",
           "avatar": "https://your-cdn.com/team/omar.jpg",
           "initials": "OR",
           "linkedin": "https://linkedin.com/in/...",
           "specialties": ["Strategy", "Paid Ads", "Business Development"]
         }
       ]
     }
  ────────────────────────────────────────────────────────────── */
  GET_TEAM: { method: 'GET', path: '/team' },

  /* ── 8. BLOG / INSIGHTS (optional) ────────────────────────────
     GET /v1/blog?limit=3

     RESPONSE 200:
     {
       "success": true,
       "data": [
         {
           "id": "slug-here",
           "title": "How We Achieved 347% ROAS for TechMart",
           "excerpt": "A deep dive into our campaign strategy...",
           "category": "Case Study",
           "publishedAt": "2025-11-15",
           "readTime": "5 min",
           "thumbnail": "https://your-cdn.com/blog/techmart-case-study.jpg"
         }
       ]
     }
  ────────────────────────────────────────────────────────────── */
  GET_BLOG: { method: 'GET', path: '/blog' }
};

/* ─────────────────────────────────────────────────────────────────
   FETCH WRAPPER — handles timeout, retries, and fallback
──────────────────────────────────────────────────────────────────*/
async function apiFetch(path, options = {}) {
  const url = API_CONFIG.BASE_URL + path;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      signal: controller.signal,
      ...options
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    clearTimeout(timeout);
    console.warn(`[Gotek API] ${path} failed — using dummy data. (${err.message})`);
    return null;
  }
}

/* ─────────────────────────────────────────────────────────────────
   PUBLIC API FUNCTIONS
──────────────────────────────────────────────────────────────────*/
const GotekAPI = {

  async getProjects(params = {}) {
    const qs = new URLSearchParams({ page: 1, limit: 9, category: 'all', ...params }).toString();
    const res = await apiFetch(`/projects?${qs}`);
    return res?.success ? res.data : DUMMY_DATA.projects;
  },

  async getProject(id) {
    const res = await apiFetch(`/projects/${id}`);
    return res?.success ? res.data : (DUMMY_DATA.projectDetails[id] || null);
  },

  async getTestimonials(limit = 6) {
    const res = await apiFetch(`/testimonials?limit=${limit}`);
    return res?.success ? res.data : DUMMY_DATA.testimonials;
  },

  async getStats() {
    const res = await apiFetch('/stats');
    return res?.success ? res.data : DUMMY_DATA.stats;
  },

  async getServices() {
    const res = await apiFetch('/services');
    return res?.success ? res.data : DUMMY_DATA.services;
  },

  async getTeam() {
    const res = await apiFetch('/team');
    return res?.success ? res.data : DUMMY_DATA.team;
  },

  async submitContact(formData) {
    const res = await apiFetch('/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    if (res === null) {
      // API unavailable — simulate success for demo
      return { success: true, message: "Thank you! We'll be in touch within 24 hours. (Demo mode)" };
    }
    return res;
  }
};

/* ─────────────────────────────────────────────────────────────────
   DUMMY DATA — Rich fallback when API is unavailable
   Use real Unsplash images via the embed API (no key needed)
──────────────────────────────────────────────────────────────────*/
const DUMMY_DATA = {

  stats: {
    clients: 2000,
    years: 9,
    team: 20,
    services: 6,
    projects: 150,
    satisfaction: 98
  },

  projects: [
    {
      id: 'al-nakheel',
      title: 'Al-Nakheel Construction',
      titleAccent: 'Brand Identity',
      category: 'branding',
      tags: ['Branding', 'Visual Identity', 'Print'],
      client: 'Al-Nakheel Group',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#FDDCCA,#F5AA80)',
      emoji: '🏗️',
      featured: true
    },
    {
      id: 'techmart',
      title: 'TechMart Retail',
      titleAccent: '347% ROAS Campaign',
      category: 'ads',
      tags: ['Paid Ads', 'Facebook', 'Google'],
      client: 'TechMart Retail Co.',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#C8E8FF,#80B8F5)',
      emoji: '📈',
      featured: true
    },
    {
      id: 'bloom',
      title: 'Bloom Store',
      titleAccent: 'E-Commerce Platform',
      category: 'web',
      tags: ['Web Dev', 'E-Commerce', 'UI/UX'],
      client: 'Bloom Retail Co.',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#D4F5D4,#80D080)',
      emoji: '🛒',
      featured: true
    },
    {
      id: 'luxe',
      title: 'Luxe Brand Films',
      titleAccent: 'Video Production',
      category: 'video',
      tags: ['Video', 'Reels', 'Direction'],
      client: 'Luxe Lifestyle Brand',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#F0D5F5,#C880D0)',
      emoji: '🎬',
      featured: false
    },
    {
      id: 'al-noor',
      title: 'Al-Noor Stores',
      titleAccent: '8-Branch POS System',
      category: 'pos',
      tags: ['POS', 'Tech', 'Multi-Branch'],
      client: 'Al-Noor Retail Group',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#FFF3C0,#F0D060)',
      emoji: '🖥️',
      featured: false
    },
    {
      id: 'greenlife',
      title: 'GreenLife Brand',
      titleAccent: 'Social Media Management',
      category: 'social',
      tags: ['Social Media', 'Content', 'Management'],
      client: 'GreenLife Wellness',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#D0FFE8,#80E0A0)',
      emoji: '📱',
      featured: false
    },
    {
      id: 'sawa',
      title: 'Sawa Restaurant Group',
      titleAccent: 'Full Brand System',
      category: 'branding',
      tags: ['Branding', 'Print', 'Packaging'],
      client: 'Sawa Restaurant Group',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#FFE8C8,#F5B870)',
      emoji: '🍽️',
      featured: false
    },
    {
      id: 'medico',
      title: 'Medico Health',
      titleAccent: 'Patient Booking Portal',
      category: 'web',
      tags: ['Web Dev', 'Healthcare', 'Portal'],
      client: 'Medico Health Group',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#E0F0FF,#B0D8F5)',
      emoji: '🏥',
      featured: false
    },
    {
      id: 'snap-fashion',
      title: 'Snap Fashion',
      titleAccent: 'TikTok & Snapchat Campaign',
      category: 'ads',
      tags: ['TikTok Ads', 'Snapchat', 'Gen-Z'],
      client: 'Snap Fashion Co.',
      year: '2025',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      thumbBg: 'linear-gradient(135deg,#FFD0E8,#F080A0)',
      emoji: '👗',
      featured: false
    }
  ],

  testimonials: [
    {
      id: 't1',
      text: 'Gotek transformed our brand from scratch. The team understood our vision perfectly and delivered beyond expectations — our sales increased by 180% within 3 months.',
      name: 'Ahmed Hassan',
      role: 'CEO, TechMart Retail',
      initials: 'AH',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
      rating: 5,
      service: 'Branding'
    },
    {
      id: 't2',
      text: 'The paid advertising campaigns they ran for us were exceptional. Professional team, fast delivery, and results that actually matter. Highly recommend Gotek.',
      name: 'Sara Al-Rashidi',
      role: 'Marketing Director, Bloom Co.',
      initials: 'SR',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=80&q=80',
      rating: 5,
      service: 'Paid Ads'
    },
    {
      id: 't3',
      text: 'Our new website and POS system from Gotek completely streamlined our operations. They\'re a true tech partner, not just a vendor.',
      name: 'Mohammed Al-Khalid',
      role: 'Owner, Al-Noor Stores',
      initials: 'MK',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
      rating: 5,
      service: 'Web Dev & POS'
    },
    {
      id: 't4',
      text: 'Every reel felt like a short film. Our audience noticed immediately — comments, saves, shares went through the roof. Gotek\'s production quality is world-class.',
      name: 'Layla Al-Mansouri',
      role: 'Creative Director, Luxe Brand',
      initials: 'LM',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
      rating: 5,
      service: 'Video Production'
    },
    {
      id: 't5',
      text: 'In 6 months they took our Instagram from 800 to 15,000 followers. More importantly, social is now our #1 sales channel. Unbelievable results.',
      name: 'Rania Kamal',
      role: 'Marketing Manager, GreenLife',
      initials: 'RK',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80',
      rating: 5,
      service: 'Social Media'
    },
    {
      id: 't6',
      text: 'The portal reduced our reception team\'s workload by 65%. Patients love it — especially the UX which works for all age groups. Clear expertise in healthcare UX.',
      name: 'Dr. Faisal Al-Hamdan',
      role: 'CEO, Medico Health Group',
      initials: 'FH',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&q=80',
      rating: 5,
      service: 'Web Development'
    }
  ],

  services: [
    {
      id: 'ads',
      number: '01',
      icon: '📣',
      title: 'Paid Advertising',
      shortDesc: 'Facebook, Instagram, Google, TikTok & Snapchat — targeted campaigns that convert.',
      fullDesc: 'From strategy to execution, we manage every aspect of your paid media. Full-funnel campaign architecture, platform-native creative, rigorous A/B testing, and weekly optimisation — all focused on measurable ROI.',
      features: ['Campaign Strategy & Planning', 'Ad Creative Production', 'A/B Testing Framework', 'Audience Research & Segmentation', 'Conversion Tracking Setup', 'Weekly Performance Reports', 'Monthly Strategy Reviews'],
      startingPrice: '3,500 SAR/month',
      platforms: ['Facebook', 'Instagram', 'Google', 'TikTok', 'Snapchat'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'brand',
      number: '02',
      icon: '🎨',
      title: 'Branding & Identity',
      shortDesc: 'Logo design, brand guidelines, social media kits, and print materials.',
      fullDesc: 'A brand is more than a logo — it\'s your first impression, your competitive edge, and your promise to customers. We build complete, scalable brand systems that work across every touchpoint.',
      features: ['Logo Design (5 Concepts)', 'Brand Guidelines Document', 'Color & Typography System', 'Business Card & Stationery', 'Social Media Profile Kit', 'Brand Pattern & Illustration', 'All Source Files Included'],
      startingPrice: '4,000 SAR',
      platforms: ['Print', 'Digital', 'Social', 'Environmental'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
      id: 'social',
      number: '03',
      icon: '📱',
      title: 'Social Media Management',
      shortDesc: 'Full page management, content creation, design, and performance analytics.',
      fullDesc: 'We treat your social channels like premium editorial publications — with a consistent visual identity, a strategic content calendar, and a community management team that never sleeps.',
      features: ['Content Strategy & Calendar', 'Post Design & Copywriting', 'Story & Reel Production', 'Community Management', 'Influencer Coordination', 'Monthly Analytics Reports', 'Platform Optimisation'],
      startingPrice: '2,800 SAR/month',
      platforms: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'X (Twitter)'],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80'
    },
    {
      id: 'video',
      number: '04',
      icon: '🎬',
      title: 'Video Production',
      shortDesc: 'Reels, promos, shoots, and professional editing for maximum engagement.',
      fullDesc: 'From storyboard to final cut, we handle everything. Full production crews, professional equipment, licensed music, and cinema-grade colour grading — at prices that make business sense.',
      features: ['Pre-Production & Storyboarding', 'Full Production Crew', '4K Camera & Lighting', 'Professional Editing', 'Colour Grading', 'Licensed Music', 'Multi-Format Export (9:16, 16:9, 1:1)'],
      startingPrice: '5,000 SAR/project',
      platforms: ['Instagram Reels', 'TikTok', 'YouTube', 'Facebook', 'LinkedIn'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80'
    },
    {
      id: 'web',
      number: '05',
      icon: '💻',
      title: 'Web Design & Development',
      shortDesc: 'Stunning, fast, responsive websites — from corporate to full e-commerce.',
      fullDesc: 'We build websites that convert. Performance-first, mobile-optimised, SEO-structured, and fully customised — from corporate brochure sites to complex e-commerce platforms with payment gateway integration.',
      features: ['UX Research & Wireframing', 'Custom UI Design', 'Mobile-Responsive Development', 'SEO Architecture', 'Payment Gateway Integration', 'CMS / Admin Dashboard', 'Speed Optimisation (90+ PageSpeed)'],
      startingPrice: '6,500 SAR',
      platforms: ['Corporate Sites', 'E-Commerce', 'Booking Portals', 'Landing Pages', 'Web Apps'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
    },
    {
      id: 'pos',
      number: '06',
      icon: '🖥️',
      title: 'POS Systems',
      shortDesc: 'Custom cashier, inventory & sales reporting systems for retail businesses.',
      fullDesc: 'Off-the-shelf POS software is built for everyone — which means it\'s perfect for no one. We build custom systems that match your exact workflow, integrate with your suppliers, and give you the reporting clarity you need to run your business.',
      features: ['Custom POS Interface', 'Real-Time Inventory Management', 'Multi-Branch Sync', 'Staff Permission Levels', 'Sales & Profit Reporting', 'Supplier Management', 'Daily Auto-Reports'],
      startingPrice: '8,000 SAR',
      platforms: ['Retail', 'F&B', 'Pharmacy', 'Supermarket', 'Multi-Branch'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    }
  ],

  team: [
    {
      id: '1',
      name: 'Omar Al-Rashidi',
      role: 'CEO & Founder',
      bio: '10+ years in digital marketing. Founded Gotek after building Media Glow into one of Egypt\'s leading digital agencies. Strategic thinker and paid media specialist.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
      initials: 'OR',
      linkedin: '#',
      specialties: ['Strategy', 'Paid Ads', 'Business Development']
    },
    {
      id: '2',
      name: 'Nada Al-Zahraa',
      role: 'Creative Director',
      bio: 'Former art director at JWT Cairo. Leads all brand identity, print, and visual design output. Has designed over 300 brand identities across 12 industries.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=300&q=80',
      initials: 'NZ',
      linkedin: '#',
      specialties: ['Brand Identity', 'Art Direction', 'Print Design']
    },
    {
      id: '3',
      name: 'Khaled Mansour',
      role: 'Head of Performance',
      bio: 'Meta & Google certified ads specialist. Managed over 15M SAR in ad spend across e-commerce, real estate, and healthcare verticals. Data-obsessed.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
      initials: 'KM',
      linkedin: '#',
      specialties: ['Meta Ads', 'Google Ads', 'Analytics', 'CRO']
    },
    {
      id: '4',
      name: 'Yasmine Tarek',
      role: 'Lead Developer',
      bio: 'Full-stack engineer with 7 years of experience building web applications, e-commerce platforms, and custom business software for clients across the GCC.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
      initials: 'YT',
      linkedin: '#',
      specialties: ['Web Development', 'POS Systems', 'API Architecture']
    },
    {
      id: '5',
      name: 'Fares Al-Ahmad',
      role: 'Video Director',
      bio: 'Trained filmmaker with credits across branded content, documentary, and commercial production. Director of photography on 200+ brand campaigns.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
      initials: 'FA',
      linkedin: '#',
      specialties: ['Video Direction', 'DOP', 'Post-Production']
    },
    {
      id: '6',
      name: 'Reem Al-Dosari',
      role: 'Social Media Lead',
      bio: 'Content strategist and community manager. Grew 40+ brand accounts from zero to 10k+ followers. Platform specialist across Meta, TikTok, and LinkedIn.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80',
      initials: 'RD',
      linkedin: '#',
      specialties: ['Content Strategy', 'Community Management', 'Influencer Relations']
    }
  ],

  projectDetails: {
    'al-nakheel': {
      id: 'al-nakheel',
      title: 'Al-Nakheel Construction',
      titleAccent: 'Brand Identity',
      emoji: '🏗️',
      heroBg: 'linear-gradient(135deg,#1a0e06,#2d1800)',
      tags: ['Branding', 'Visual Identity', 'Print'],
      meta: [
        { label: 'Client', value: 'Al-Nakheel Group' },
        { label: 'Industry', value: 'Construction' },
        { label: 'Year', value: '2025' },
        { label: 'Duration', value: '3 Weeks' }
      ],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', bg: 'linear-gradient(135deg,#FDDCCA,#F5AA80)', emoji: '🏗️', label: 'Brand Overview' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', bg: 'linear-gradient(135deg,#F5AA80,#E8620A)', emoji: '🎨', label: 'Logo Variants' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=80', bg: 'linear-gradient(135deg,#E8620A,#C04800)', emoji: '📄', label: 'Stationery Design' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Brand Reveal Video' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80', bg: 'linear-gradient(135deg,#2d1800,#1a0e06)', emoji: '🖼️', label: 'Brand Guidelines' }
      ],
      overview: { title: 'Building a Brand as Strong as Steel', body: ['Al-Nakheel Construction approached Gotek needing a complete brand identity from the ground up. They had years of industry expertise but no visual representation that matched the scale and professionalism of their work.', 'Our task was to craft an identity that communicated trust, strength, and modernity — while remaining distinctly Saudi in character and resonating with enterprise-level clients across the region.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'The client had zero existing brand assets and needed a full identity system ready for a major government tender presentation in 3 weeks — under significant time pressure.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'We deployed a dedicated 4-person brand team working simultaneously on logo concepts, color system, and collateral. We used our proven 3-round revision process to lock in direction fast without sacrificing quality.', full: false },
        { icon: '📦', title: 'Scope of Work', text: 'Logo design (5 concepts → 1 final), brand guidelines document (40 pages), business card, letterhead, envelope, folder, site signage templates, social media profile kits, vehicle wrap template, and pitch deck cover.', full: true }
      ],
      results: [
        { num: '3', label: 'Weeks to Delivery' },
        { num: '5', label: 'Logo Concepts' },
        { num: '40+', label: 'Brand Assets' },
        { num: '✓', label: 'Tender Won' },
        { num: '100%', label: 'Revision Satisfaction' },
        { num: '★★★★★', label: 'Client Rating' }
      ],
      process: [
        { title: 'Discovery Workshop', desc: '2-hour brand strategy session to extract values, target audience, competitive landscape, and visual direction preferences.' },
        { title: 'Concept Development', desc: '5 logo concepts designed across different creative directions — geometric, typographic, emblematic, and hybrid approaches.' },
        { title: 'Client Presentation', desc: 'Structured presentation of all concepts with strategic rationale for each. Client selects primary direction for development.' },
        { title: 'Refinement & System Build', desc: 'Final logo refined and expanded into full system — color palette, typography, spacing rules, and usage guidelines.' },
        { title: 'Collateral Production', desc: 'All print and digital assets designed to spec, including print-ready files for all stationery items.' },
        { title: 'Brand Book Delivery', desc: 'Complete brand guidelines PDF delivered alongside all source files (AI, EPS, PNG, SVG formats).' }
      ],
      testimonial: { text: 'Gotek transformed our company image completely. Before them, we had nothing — after 3 weeks we had a brand that won us a major government contract. The team was fast, professional, and truly understood what we needed.', name: 'Eng. Khalid Al-Nakheel', role: 'Managing Director, Al-Nakheel Group', initials: 'KN' },
      details: [
        { key: 'Service', val: 'Branding', tag: true },
        { key: 'Client', val: 'Al-Nakheel Group' },
        { key: 'Timeline', val: '3 Weeks' },
        { key: 'Budget Range', val: 'Premium Package' },
        { key: 'Deliverables', val: '40+ Assets' },
        { key: 'Status', val: '✓ Completed' }
      ],
      deliverables: ['Logo Design (5 Concepts)', 'Brand Guidelines Document', 'Business Card Design', 'Letterhead & Envelope', 'Corporate Folder', 'Social Media Kit', 'Vehicle Wrap Template', 'Pitch Deck Cover'],
      related: ['techmart', 'bloom', 'sawa']
    },
    'techmart': {
      id: 'techmart',
      title: 'TechMart Retail',
      titleAccent: 'Paid Ad Campaign',
      emoji: '📈',
      heroBg: 'linear-gradient(135deg,#060d1a,#001833)',
      tags: ['Paid Ads', 'Facebook', 'Google', 'Instagram'],
      meta: [
        { label: 'Client', value: 'TechMart Retail Co.' },
        { label: 'Industry', value: 'Electronics Retail' },
        { label: 'Year', value: '2025' },
        { label: 'Duration', value: '3 Months' }
      ],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', bg: 'linear-gradient(135deg,#C8E8FF,#80B8F5)', emoji: '📈', label: 'Campaign Dashboard' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80', bg: 'linear-gradient(135deg,#80B8F5,#4090E0)', emoji: '📊', label: 'ROAS Report' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Ad Creative Preview' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', bg: 'linear-gradient(135deg,#4090E0,#1060C0)', emoji: '🎯', label: 'Audience Targeting' }
      ],
      overview: { title: 'Turning Ad Spend into Serious Revenue', body: ['TechMart came to Gotek frustrated — they were spending 40,000 SAR/month on ads with minimal results, managed by a previous agency that provided no strategy and poor reporting.', 'We audited their entire ad account, rebuilt every campaign from scratch with proper audience segmentation, compelling creative, and rigorous A/B testing protocols.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'Previous campaigns had poor audience targeting, generic ad creatives, no conversion tracking, and zero retargeting strategy — money was being burned with no attribution.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Complete account rebuild: installed proper pixel tracking, built 12 audience segments, designed platform-specific creatives, launched parallel A/B tests, and set up full-funnel retargeting sequences.', full: false },
        { icon: '📦', title: 'Platforms Used', text: 'Meta (Facebook & Instagram), Google Search & Shopping, and supplementary TikTok campaigns targeting the 18–35 tech-savvy segment.', full: true }
      ],
      results: [
        { num: '347%', label: 'Return on Ad Spend' },
        { num: '-60%', label: 'Cost Per Acquisition' },
        { num: '1.2M', label: 'Monthly Reach' },
        { num: '3x', label: 'Revenue Increase' },
        { num: '12', label: 'Audience Segments' },
        { num: '38', label: 'Ad Creatives Tested' }
      ],
      process: [
        { title: 'Full Account Audit', desc: 'Analyzed all historical campaign data, identified wasted spend, and mapped out a new strategy with clear KPIs.' },
        { title: 'Pixel & Tracking Setup', desc: 'Installed Meta Pixel, Google Tag Manager, and conversion events across the entire website funnel.' },
        { title: 'Audience Research', desc: 'Built 12 custom and lookalike audience segments based on customer data, competitor followers, and behavioral interests.' },
        { title: 'Creative Production', desc: 'Designed 38 ad creatives across static, carousel, and video formats tailored to each platform\'s best practices.' },
        { title: 'Campaign Launch & Testing', desc: 'Launched campaigns with structured A/B tests — testing audiences, creatives, and landing pages simultaneously.' },
        { title: 'Optimization & Scaling', desc: 'Weekly analysis and reallocation of budget to top-performing ad sets. Scaled winning combinations 3x.' }
      ],
      testimonial: { text: 'Our previous agency was costing us money. Gotek came in, completely rebuilt everything, and within 6 weeks we saw results we\'d never seen before. The 347% ROAS speaks for itself.', name: 'Ahmed Hassan', role: 'CEO, TechMart Retail', initials: 'AH' },
      details: [
        { key: 'Service', val: 'Paid Ads', tag: true },
        { key: 'Client', val: 'TechMart Retail' },
        { key: 'Duration', val: '3 Months' },
        { key: 'Monthly Budget', val: '40,000 SAR' },
        { key: 'ROAS Achieved', val: '347%' },
        { key: 'Status', val: '✓ Ongoing' }
      ],
      deliverables: ['Full Account Audit Report', 'Audience Strategy Document', '38 Ad Creatives', 'Weekly Performance Reports', 'A/B Testing Results', 'Scaling Roadmap', 'Conversion Tracking Setup'],
      related: ['al-nakheel', 'snap-fashion', 'greenlife']
    },
    'bloom': {
      id: 'bloom',
      title: 'Bloom Store',
      titleAccent: 'E-Commerce Platform',
      emoji: '🛒',
      heroBg: 'linear-gradient(135deg,#061a0e,#003318)',
      tags: ['Web Development', 'E-Commerce', 'UI/UX'],
      meta: [
        { label: 'Client', value: 'Bloom Retail Co.' },
        { label: 'Industry', value: 'Fashion & Lifestyle' },
        { label: 'Year', value: '2025' },
        { label: 'Duration', value: '6 Weeks' }
      ],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80', bg: 'linear-gradient(135deg,#D4F5D4,#80D080)', emoji: '🛒', label: 'Homepage Design' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1512941937938-04bdb7e82ce5?w=1200&q=80', bg: 'linear-gradient(135deg,#80D080,#40B040)', emoji: '📱', label: 'Mobile Experience' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Demo Walkthrough' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80', bg: 'linear-gradient(135deg,#40B040,#208020)', emoji: '🧾', label: 'Checkout Flow' }
      ],
      overview: { title: 'A Store That Sells While You Sleep', body: ['Bloom needed to move their successful physical boutique online. With an extensive product catalog and a loyal customer base, they needed a platform that felt premium, loaded fast, and converted browsers into buyers.', 'We built a fully custom e-commerce experience handling everything from UX design to payment gateway integration to SEO architecture.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'The client had 800+ SKUs, multiple size/color variants, and needed a seamless checkout experience with integration to their existing inventory management system.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Custom-built storefront with faceted search, dynamic product variants, streamlined 2-step checkout, and a real-time inventory sync API.', full: false },
        { icon: '📦', title: 'Tech Stack', text: 'Frontend built with performance-first principles achieving 96/100 Google PageSpeed. Integrated Tamara and Tabby BNPL options alongside Mada, Visa, and Apple Pay.', full: true }
      ],
      results: [
        { num: '96', label: 'PageSpeed Score' },
        { num: '6', label: 'Weeks to Launch' },
        { num: '800+', label: 'Products Listed' },
        { num: '2-Step', label: 'Checkout Flow' },
        { num: '+180%', label: 'Online Revenue M1' },
        { num: '4.9★', label: 'Client Rating' }
      ],
      process: [
        { title: 'Discovery & Wireframing', desc: 'Mapped out the full user journey from homepage to checkout. Created wireframes for all key pages.' },
        { title: 'UI Design', desc: 'Designed a premium, conversion-focused visual design aligned with Bloom\'s brand identity. Mobile-first approach.' },
        { title: 'Development', desc: 'Built the full storefront, product catalog, cart, checkout, account portal, and admin dashboard.' },
        { title: 'Product Upload & SEO', desc: 'Uploaded all 800+ products with optimized titles, descriptions, and image alt tags.' },
        { title: 'QA & Performance', desc: 'Conducted extensive cross-device testing. Optimized all images and code for maximum load speed.' },
        { title: 'Launch & Handover', desc: 'Managed the go-live process and trained the client team on the admin dashboard.' }
      ],
      testimonial: { text: 'We were nervous about going online — our boutique experience was everything. Gotek managed to capture that feeling digitally. In our first month online, we made back the entire development investment.', name: 'Layla Al-Rashidi', role: 'Founder, Bloom', initials: 'LR' },
      details: [
        { key: 'Service', val: 'Web Dev', tag: true },
        { key: 'Client', val: 'Bloom Retail' },
        { key: 'Timeline', val: '6 Weeks' },
        { key: 'Products', val: '800+ SKUs' },
        { key: 'PageSpeed', val: '96/100' },
        { key: 'Status', val: '✓ Live' }
      ],
      deliverables: ['Full E-Commerce Website', 'Mobile-Responsive Design', 'Payment Gateway Integration', 'Inventory Sync API', 'Admin Dashboard', 'SEO Architecture', 'Client Training Sessions', '3-Month Support'],
      related: ['medico', 'al-nakheel', 'al-noor']
    },
    'luxe': {
      id: 'luxe', title: 'Luxe Brand Films', titleAccent: 'Video Production', emoji: '🎬',
      heroBg: 'linear-gradient(135deg,#12061a,#200833)',
      tags: ['Video Production', 'Reels', 'Direction', 'Editing'],
      meta: [{ label: 'Client', value: 'Luxe Lifestyle Brand' }, { label: 'Industry', value: 'Luxury Lifestyle' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '4 Weeks' }],
      media: [
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Hero Brand Film' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80', bg: 'linear-gradient(135deg,#F0D5F5,#C880D0)', emoji: '🎬', label: 'Behind the Scenes' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80', bg: 'linear-gradient(135deg,#C880D0,#9040A0)', emoji: '✨', label: 'Color Grade Preview' }
      ],
      overview: { title: 'Cinematic Content That Stops the Scroll', body: ['Luxe came with a brief: produce 12 premium reels in 4 weeks that feel like high-fashion editorial films, not typical brand content.', 'We assembled a full production crew — director, DOP, stylist, and editor — and shot across 3 locations in 5 days, delivering 12 individually graded, music-licensed final cuts.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: '12 unique reels, 3 locations, 5 shoot days, 4 weeks total. Each piece needed to feel distinct while maintaining a cohesive brand aesthetic.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Pre-production planning was essential. We storyboarded all 12 concepts before a single camera was lifted, ensuring maximum efficiency on shoot days.', full: false },
        { icon: '📦', title: 'Production Specs', text: 'Shot in 4K on Sony FX6, color graded in DaVinci Resolve, licensed music from premium sync libraries. Delivered in both 9:16 and 16:9 formats.', full: true }
      ],
      results: [{ num: '12', label: 'Reels Delivered' }, { num: '80K+', label: 'Avg. Views Per Reel' }, { num: '5', label: 'Shoot Days' }, { num: '3', label: 'Locations' }, { num: '4K', label: 'Resolution' }, { num: '+220%', label: 'Follower Growth' }],
      process: [
        { title: 'Creative Briefing', desc: 'Deep brand immersion session to understand tone, references, and audience.' },
        { title: 'Storyboarding', desc: 'Full storyboard for every reel — shot list, location notes, wardrobe direction, and music mood.' },
        { title: 'Pre-Production', desc: 'Location scouting, talent casting, wardrobe sourcing, equipment booking.' },
        { title: '5-Day Shoot', desc: 'Executed all 12 concepts across 3 locations with a 6-person crew.' },
        { title: 'Post-Production', desc: 'Edit, color grade, sound design, and music licensing for each piece.' },
        { title: 'Delivery & Formatting', desc: 'Final exports in 9:16, 1:1, and 16:9 formats for every piece.' }
      ],
      testimonial: { text: 'Every single reel felt like a short film. Our audience noticed immediately — comments, saves, shares went through the roof. Gotek\'s production quality is genuinely world-class.', name: 'Sara Al-Mansouri', role: 'Creative Director, Luxe', initials: 'SM' },
      details: [{ key: 'Service', val: 'Video', tag: true }, { key: 'Client', val: 'Luxe Brand' }, { key: 'Timeline', val: '4 Weeks' }, { key: 'Output', val: '12 Reels' }, { key: 'Avg. Views', val: '80K+' }, { key: 'Status', val: '✓ Delivered' }],
      deliverables: ['12 Final Reels (3 formats each)', 'Full Storyboard Document', 'Color-Graded Masters', 'Licensed Music Rights', 'Behind-the-Scenes Content', 'Shooting Raw Footage Archive'],
      related: ['al-nakheel', 'greenlife', 'snap-fashion']
    },
    'al-noor': {
      id: 'al-noor', title: 'Al-Noor Stores', titleAccent: 'POS System', emoji: '🖥️',
      heroBg: 'linear-gradient(135deg,#0d1a06,#192d00)',
      tags: ['POS System', 'Tech', 'Multi-Branch'],
      meta: [{ label: 'Client', value: 'Al-Noor Retail Group' }, { label: 'Industry', value: 'Retail' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '8 Weeks' }],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80', bg: 'linear-gradient(135deg,#FFF3C0,#F0D060)', emoji: '🖥️', label: 'POS Interface' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', bg: 'linear-gradient(135deg,#F0D060,#D0A000)', emoji: '📊', label: 'Analytics Dashboard' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'System Demo' }
      ],
      overview: { title: '8 Branches, One Unified System', body: ['Al-Noor operated 8 retail branches using disconnected, off-the-shelf POS software that couldn\'t share inventory data or generate consolidated reports.', 'We built a fully custom, cloud-based POS system from scratch — designed specifically for their product categories, staff workflow, and reporting needs.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: '8 separate branches with no real-time inventory visibility. Stock levels were manually reconciled weekly, leading to overselling and stockouts.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Custom-built web-based POS with real-time cloud sync across all branches. Central admin dashboard for owners and automated daily reports.', full: false },
        { icon: '📦', title: 'System Features', text: 'Barcode scanning, receipt printing, multiple payment methods, returns handling, staff permissions, supplier management, profit/loss reporting, and low-stock alerts.', full: true }
      ],
      results: [{ num: '8', label: 'Branches Connected' }, { num: 'Real-time', label: 'Inventory Sync' }, { num: '-90%', label: 'Manual Work' }, { num: 'Daily', label: 'Auto-Reports' }, { num: '3', label: 'Permission Levels' }, { num: '8 Weeks', label: 'Deployment' }],
      process: [
        { title: 'Requirements Workshop', desc: '3-day deep-dive with management and branch staff to map every workflow and reporting requirement.' },
        { title: 'System Architecture', desc: 'Designed the database schema, API structure, and frontend wireframes.' },
        { title: 'Core Development', desc: 'Built the central cloud backend, branch POS interfaces, inventory engine, and reporting module.' },
        { title: 'Integration & Testing', desc: 'Connected all 8 branch terminals, tested real-time sync under simultaneous usage.' },
        { title: 'Staff Training', desc: 'On-site training at each branch for cashiers and managers with recorded training videos.' },
        { title: 'Go-Live & Support', desc: 'Phased rollout across branches with 24/7 support hotline for the first 30 days.' }
      ],
      testimonial: { text: 'Before Gotek, I had no idea what was selling across my branches until the end of the week. Now I see everything in real-time on my phone. It\'s transformed how I manage my business.', name: 'Mohammed Al-Noor', role: 'Owner, Al-Noor Retail Group', initials: 'MN' },
      details: [{ key: 'Service', val: 'POS System', tag: true }, { key: 'Client', val: 'Al-Noor Group' }, { key: 'Timeline', val: '8 Weeks' }, { key: 'Branches', val: '8 Locations' }, { key: 'Tech', val: 'Custom Web App' }, { key: 'Status', val: '✓ Live' }],
      deliverables: ['Custom POS Interface (8x)', 'Central Admin Dashboard', 'Real-Time Inventory System', 'Daily Auto-Report Engine', 'Staff Training Sessions', 'Training Video Library', '30-Day Post-Launch Support'],
      related: ['bloom', 'medico', 'al-nakheel']
    },
    'greenlife': {
      id: 'greenlife', title: 'GreenLife Brand', titleAccent: 'Social Media Management', emoji: '📱',
      heroBg: 'linear-gradient(135deg,#031a0e,#062d18)',
      tags: ['Social Media', 'Content', 'Management'],
      meta: [{ label: 'Client', value: 'GreenLife Wellness' }, { label: 'Industry', value: 'Health & Wellness' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '6 Months' }],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80', bg: 'linear-gradient(135deg,#D0FFE8,#80E0A0)', emoji: '📱', label: 'Feed Grid Design' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80', bg: 'linear-gradient(135deg,#80E0A0,#30C060)', emoji: '🎨', label: 'Post Templates' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Reels Showcase' }
      ],
      overview: { title: 'From 800 to 15,000 Followers in 6 Months', body: ['GreenLife had a great product and a tiny social media presence. Their Instagram had 800 followers with sporadic, inconsistent posts.', 'We took over full management — strategy, content calendar, design, copy, posting, and community management — and treated their pages like a premium editorial publication.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'No content strategy, inconsistent visual identity on social, and zero engagement. The brand had no clear voice.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Created a full social media brand identity guide, a 30-day content calendar template, and a community management protocol responding to every comment within 2 hours.', full: false },
        { icon: '📦', title: 'Platforms Managed', text: 'Instagram (primary), Facebook, TikTok (new channel launched), and LinkedIn. All channels aligned in brand voice while tailored to each platform.', full: true }
      ],
      results: [{ num: '15K+', label: 'Followers (from 800)' }, { num: '+200%', label: 'Follower Growth' }, { num: '14.2%', label: 'Engagement Rate' }, { num: '25', label: 'Posts/Month' }, { num: '4', label: 'Platforms' }, { num: '2hr', label: 'Avg. Response' }],
      process: [
        { title: 'Social Media Audit', desc: 'Analysed all existing content, follower demographics, and competitor landscape.' },
        { title: 'Strategy & Brand Voice', desc: 'Defined content pillars, visual identity guidelines for social, tone of voice.' },
        { title: 'Content Calendar', desc: 'Monthly 30-day calendar planned and approved in advance.' },
        { title: 'Content Production', desc: 'Weekly design batch of posts, stories, and reels.' },
        { title: 'Community Management', desc: 'Daily monitoring of all platforms with 2-hour response commitment.' },
        { title: 'Monthly Reporting', desc: 'Detailed analytics report each month with growth metrics and next-month recommendations.' }
      ],
      testimonial: { text: 'Gotek took our social media from an afterthought to our #1 sales channel. The content quality is incredible and the team responds faster than our own staff.', name: 'Rania Kamal', role: 'Marketing Manager, GreenLife', initials: 'RK' },
      details: [{ key: 'Service', val: 'Social Media', tag: true }, { key: 'Client', val: 'GreenLife Wellness' }, { key: 'Duration', val: '6 Months' }, { key: 'Platforms', val: '4 Channels' }, { key: 'Growth', val: '+200%' }, { key: 'Status', val: '✓ Ongoing' }],
      deliverables: ['Monthly Content Calendars', '150+ Custom Post Designs', 'Story & Reel Templates', 'Community Management', 'Monthly Analytics Reports', 'Hashtag Strategy', 'Platform Optimization'],
      related: ['techmart', 'luxe', 'snap-fashion']
    },
    'sawa': {
      id: 'sawa', title: 'Sawa Restaurant Group', titleAccent: 'Full Brand System', emoji: '🍽️',
      heroBg: 'linear-gradient(135deg,#1a0a00,#2d1400)',
      tags: ['Branding', 'Print', 'Packaging', 'Environmental'],
      meta: [{ label: 'Client', value: 'Sawa Restaurant Group' }, { label: 'Industry', value: 'F&B / Hospitality' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '5 Weeks' }],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', bg: 'linear-gradient(135deg,#FFE8C8,#F5B870)', emoji: '🍽️', label: 'Brand Overview' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80', bg: 'linear-gradient(135deg,#F5B870,#D08030)', emoji: '📋', label: 'Menu Design' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80', bg: 'linear-gradient(135deg,#D08030,#A05010)', emoji: '🥡', label: 'Packaging' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Brand Launch Film' }
      ],
      overview: { title: 'A Complete Dining Experience, Designed', body: ['Sawa was opening 3 new restaurant locations simultaneously and needed a brand that could scale across menus, packaging, signage, uniforms, and digital touchpoints.', 'We designed a warm, contemporary identity rooted in Saudi hospitality culture while feeling fresh and modern enough to compete in the premium F&B space.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: '3 simultaneous location openings meant all assets needed to be production-ready within 5 weeks.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Built the brand system first in 2 weeks, then produced all touchpoints in parallel using a dedicated 5-person team.', full: false },
        { icon: '📦', title: 'Touchpoints Designed', text: 'Logo, brand book, menus, packaging, cups & bags, staff uniforms, signage, social kit, digital menu boards, and loyalty card.', full: true }
      ],
      results: [{ num: '3', label: 'Locations Opened' }, { num: '60+', label: 'Brand Assets' }, { num: '5', label: 'Weeks' }, { num: '★★★★★', label: 'Opening Reviews' }, { num: '100%', label: 'On-Time Delivery' }, { num: '∞', label: 'Referrals' }],
      process: [
        { title: 'Brand Discovery', desc: 'Understanding the cuisine, target diner, competitive landscape, and emotional experience.' },
        { title: 'Identity Design', desc: 'Logo, color palette, typography, and pattern system. 3 concepts presented.' },
        { title: 'Brand Book', desc: 'Complete usage guidelines covering all touchpoints.' },
        { title: 'Print Collateral', desc: 'All menus, packaging, business cards, and stationery prepared as print-ready files.' },
        { title: 'Environmental & Signage', desc: 'Storefront signage, interior wall graphics, menu boards, and directional signage.' },
        { title: 'Digital & Social Kit', desc: 'Social media profile designs, post templates, and digital menu board versions.' }
      ],
      testimonial: { text: 'Every single detail felt considered — from our menus to our takeaway bags. Guests kept complimenting how beautiful everything looked. Gotek captured the soul of our brand perfectly.', name: 'Chef Hassan Al-Sawa', role: 'Founder, Sawa Restaurant Group', initials: 'HS' },
      details: [{ key: 'Service', val: 'Branding', tag: true }, { key: 'Client', val: 'Sawa Group' }, { key: 'Timeline', val: '5 Weeks' }, { key: 'Locations', val: '3 Branches' }, { key: 'Assets', val: '60+' }, { key: 'Status', val: '✓ Live' }],
      deliverables: ['Logo & Brand Book', 'Dine-In Menu Design', 'Takeaway Packaging', 'Staff Uniform Design', 'Storefront Signage', 'Social Media Kit', 'Digital Menu Boards', 'Loyalty Card Design'],
      related: ['al-nakheel', 'bloom', 'luxe']
    },
    'medico': {
      id: 'medico', title: 'Medico Health', titleAccent: 'Patient Booking Portal', emoji: '🏥',
      heroBg: 'linear-gradient(135deg,#060e1a,#001233)',
      tags: ['Web Development', 'Healthcare', 'Portal', 'UX'],
      meta: [{ label: 'Client', value: 'Medico Health Group' }, { label: 'Industry', value: 'Healthcare' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '10 Weeks' }],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', bg: 'linear-gradient(135deg,#E0F0FF,#B0D8F5)', emoji: '🏥', label: 'Homepage' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80', bg: 'linear-gradient(135deg,#B0D8F5,#70B0E8)', emoji: '📅', label: 'Booking Flow' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'Portal Demo' }
      ],
      overview: { title: 'Healthcare Accessibility, Digitized', body: ['Medico wanted to reduce phone booking dependency by 70% and give patients a seamless online experience for finding doctors and booking appointments.', 'We designed and built a full-stack web portal with patient authentication, doctor search, real-time appointment booking, and a secure patient dashboard.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'Healthcare UX is uniquely complex — patients range from young tech-savvy individuals to elderly first-time internet users.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Conducted 20 user interviews across demographic groups before designing a single pixel. Built an accessibility-first UI with multi-language support (Arabic/English).', full: false },
        { icon: '📦', title: 'Key Features', text: 'Doctor directory with search and filter, real-time appointment booking, patient portal, insurance verification module, automated SMS/email reminders, and admin panel.', full: true }
      ],
      results: [{ num: '-65%', label: 'Phone Booking Reduction' }, { num: '20', label: 'User Interviews' }, { num: '2', label: 'Languages (AR/EN)' }, { num: '10', label: 'Weeks Delivered' }, { num: 'AA', label: 'WCAG Accessibility' }, { num: '98', label: 'PageSpeed Score' }],
      process: [
        { title: 'User Research', desc: '20 patient interviews and 5 doctor workflow sessions to map the full booking journey.' },
        { title: 'Information Architecture', desc: 'Designed the sitemap, user flows, and content hierarchy.' },
        { title: 'UX Wireframing', desc: 'Full wireframes for all screens — tested with real patients using paper prototypes.' },
        { title: 'UI Design', desc: 'Clean, calm, trust-building interface design. Arabic RTL layout designed simultaneously.' },
        { title: 'Full-Stack Development', desc: 'Frontend, backend API, database, authentication system, booking engine, and admin panel.' },
        { title: 'Accessibility & Testing', desc: 'WCAG 2.1 AA compliance testing, cross-browser testing, load testing, and security audit.' }
      ],
      testimonial: { text: 'The portal reduced our reception team\'s workload by 65% in the first month. Patients love it — especially the elderly patients who were initially skeptical. The UX team clearly did their homework.', name: 'Dr. Faisal Al-Hamdan', role: 'CEO, Medico Health Group', initials: 'FH' },
      details: [{ key: 'Service', val: 'Web Dev', tag: true }, { key: 'Client', val: 'Medico Health' }, { key: 'Timeline', val: '10 Weeks' }, { key: 'Languages', val: 'Arabic + English' }, { key: 'Accessibility', val: 'WCAG AA' }, { key: 'Status', val: '✓ Live' }],
      deliverables: ['Full Patient Portal', 'Doctor Directory & Search', 'Appointment Booking Engine', 'Patient Dashboard', 'Admin Management Panel', 'Arabic RTL Version', 'Automated Reminders', 'Accessibility Audit'],
      related: ['bloom', 'al-noor', 'al-nakheel']
    },
    'snap-fashion': {
      id: 'snap-fashion', title: 'Snap Fashion', titleAccent: 'TikTok & Snapchat Campaign', emoji: '👗',
      heroBg: 'linear-gradient(135deg,#1a0612,#2d0020)',
      tags: ['Paid Ads', 'TikTok', 'Snapchat', 'Gen-Z'],
      meta: [{ label: 'Client', value: 'Snap Fashion Co.' }, { label: 'Industry', value: 'Fashion' }, { label: 'Year', value: '2025' }, { label: 'Duration', value: '4 Weeks' }],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80', bg: 'linear-gradient(135deg,#FFD0E8,#F080A0)', emoji: '👗', label: 'Campaign Overview' },
        { type: 'video', embedUrl: 'https://www.youtube.com/embed/KkGVmN68HpY', thumbEmoji: '▶️', label: 'TikTok Ad Preview' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80', bg: 'linear-gradient(135deg,#F080A0,#D04070)', emoji: '📊', label: 'Performance Report' }
      ],
      overview: { title: '2 Million Impressions in 4 Weeks', body: ['Snap Fashion needed to reach Gen-Z shoppers aged 18–28 ahead of their summer collection launch. Traditional Meta ads weren\'t resonating with this demographic.', 'We designed a native-first TikTok and Snapchat campaign — built to feel organic rather than advertorial.'] },
      challenges: [
        { icon: '⚠️', title: 'The Challenge', text: 'Gen-Z scrolls past traditional ads instantly. The creative had to look like organic content — high energy, native to the platform, with zero corporate feel.', full: false },
        { icon: '💡', title: 'Our Solution', text: 'Shot all creatives in a UGC style — handheld camera, authentic environments, trending audio, and text overlays mimicking organic TikTok posts.', full: false },
        { icon: '📦', title: 'Campaign Format', text: 'TikTok In-Feed Ads + TopView, Snapchat Story Ads + Commercials. 24 unique creatives tested. 3 winning variations scaled to full budget.', full: true }
      ],
      results: [{ num: '2M+', label: 'Total Impressions' }, { num: '+14%', label: 'Conversion Uplift' }, { num: '24', label: 'Creatives Tested' }, { num: '4', label: 'Weeks Campaign' }, { num: '0.8%', label: 'CTR (2x Industry Avg)' }, { num: '3', label: 'Winning Variants' }],
      process: [
        { title: 'Audience Mapping', desc: 'Deep TikTok and Snapchat audience research to identify precise segments most likely to convert.' },
        { title: 'Creative Strategy', desc: 'Defined the UGC-native creative approach. Script outlines for all 24 ad variations.' },
        { title: 'Creative Production', desc: 'Shot in 2 days with a lean 3-person crew. All content edited in platform-native style.' },
        { title: 'Campaign Setup', desc: 'Structured A/B test across creatives and audiences with proper conversion tracking.' },
        { title: 'Optimization', desc: 'Daily monitoring and budget reallocation. Paused underperformers, scaled winners.' },
        { title: 'Reporting', desc: 'Full campaign report with creative analysis, audience insights, and next phase recommendations.' }
      ],
      testimonial: { text: 'We tried TikTok ads ourselves and wasted money. Gotek completely changed our approach — their content didn\'t even look like ads, and the results were unlike anything we\'d seen before.', name: 'Nadia Al-Farsi', role: 'Brand Manager, Snap Fashion', initials: 'NF' },
      details: [{ key: 'Service', val: 'Paid Ads', tag: true }, { key: 'Client', val: 'Snap Fashion' }, { key: 'Duration', val: '4 Weeks' }, { key: 'Platforms', val: 'TikTok + Snapchat' }, { key: 'Impressions', val: '2M+' }, { key: 'Status', val: '✓ Completed' }],
      deliverables: ['24 Ad Creatives (UGC Style)', 'Campaign Setup & Tracking', 'Audience Research Report', 'A/B Testing Results', 'Daily Optimization', 'Final Campaign Analysis', 'Next-Phase Recommendations'],
      related: ['techmart', 'greenlife', 'luxe']
    }
  }
};

/* Export for use across pages */
window.GotekAPI = GotekAPI;
window.DUMMY_DATA = DUMMY_DATA;
