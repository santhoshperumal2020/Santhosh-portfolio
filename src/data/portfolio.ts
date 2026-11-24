export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Creative", href: "#creative" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "811,006", label: "Impressions", source: "Techietet · Meta Ads" },
  { value: "468,098", label: "Reach", source: "Techietet · Meta Ads" },
  { value: "29,861", label: "Engagements", source: "Techietet · Meta Ads" },
  { value: "124", label: "WhatsApp leads", source: "Techietet · Meta Ads" },
  { value: "517", label: "Messaging conversations", source: "MD Solution · 5 campaigns" },
  { value: "₹15.70", label: "Average cost / conversation", source: "MD Solution · Meta Ads" },
  { value: "3,259", label: "Google Ads clicks", source: "Merfish · 2.39% CTR" },
  { value: "35–40%", label: "Monthly install growth", source: "MyStreakBook · resume-reported" },
];

export const projects = [
  { name: "MD Solution FZC", category: "Paid media · UAE", tags: ["Meta Ads", "Tourism", "Recruitment", "Software", "Study abroad"], description: "Managed and analyzed Meta campaigns, reviewed delivery and cost per result, and optimized audiences, creatives and budgets.", result: "517 conversations · ₹8,115.54 spend · ₹15.70 average cost", accent: "cyan" },
  { name: "Techietet", category: "Performance marketing · India", tags: ["Meta Ads", "Google Ads", "SEO"], description: "Worked on engagement and WhatsApp lead-generation campaigns, keyword research, on-page SEO, metadata and content updates.", result: "811K impressions · 468K reach · 29,861 engagements", accent: "blue" },
  { name: "MyStreakBook", category: "App growth", tags: ["App campaigns", "Meta promotions", "ASO"], description: "Supported app growth through Google App Campaigns, Meta promotions, Apple Search Ads and store listing optimization.", result: "35–40% reported month-over-month install growth", accent: "violet" },
  { name: "Merfish", category: "Admissions & clinical services", tags: ["Google Ads", "Meta Lead Ads", "SEO"], description: "Supported BASLP admissions and clinical service campaigns through search advertising, keyword research and on-page SEO.", result: "136,352 impressions · 3,259 clicks · 2.39% CTR", accent: "sky" },
  { name: "Tonercycle", category: "Social content & creative", tags: ["Instagram", "Reels", "Posters"], description: "Created and supported social media content references documented in the work report.", result: "10 Instagram reel and poster references", accent: "teal" },
];

export const screenshots = [
 {src:"/screenshots/md-solution-meta-overview.png",title:"MD Solution · Meta Ads overview",type:"Meta Ads",detail:"517 messaging conversations across five campaigns. ₹8,115.54 spend and ₹15.70 average cost per conversation."},
 {src:"/screenshots/md-solution-campaign-analysis.png",title:"MD Solution · Campaign review",type:"Meta Ads",detail:"Eleven campaigns reviewed for results, cost per result, spend, reach and delivery issues."},
 {src:"/screenshots/md-solution-campaign-dashboard.png",title:"MD Solution · Campaign dashboard",type:"Meta Ads",detail:"Campaign-level dashboard evidence from the submitted report."},
 {src:"/screenshots/techietet-meta-ads-summary.png",title:"Techietet · Meta Ads summary",type:"Meta Ads",detail:"811,006 impressions, 468,098 reach, 29,861 engagements and 124 WhatsApp leads."},
 {src:"/screenshots/google-ads-ad-preview.png",title:"Merfish · Google Ads preview",type:"Google Ads",detail:"BASLP admissions search ad preview; report summary records 136,352 impressions, 3,259 clicks and 2.39% CTR."},
 {src:"/screenshots/google-ads-schedule.png",title:"Google Ads · Ad schedule",type:"Google Ads",detail:"Day-and-hour delivery pattern review."},
 {src:"/screenshots/google-ads-demographics.png",title:"Google Ads · Demographics",type:"Google Ads",detail:"Age and gender reporting view."},
 {src:"/screenshots/google-ads-devices.png",title:"Google Ads · Devices",type:"Google Ads",detail:"Device distribution across cost, impressions and clicks."},
 {src:"/screenshots/google-ads-networks.png",title:"Google Ads · Networks",type:"Google Ads",detail:"Google Search and search partner contribution."},
 {src:"/screenshots/google-ads-keywords.png",title:"Google Ads · Keyword report",type:"Google Ads",detail:"BASLP, paramedical courses and audiology-related keyword performance."},
 {src:"/screenshots/google-ads-performance.png",title:"Google Ads · Performance",type:"Google Ads",detail:"Campaign performance reporting screenshot included in the work report."},
 {src:"/screenshots/google-ads-report-header.png",title:"Google Ads · Report evidence",type:"Google Ads",detail:"Google Ads reporting screenshot from the supplied report."},
 {src:"/screenshots/seo-keyword-research.png",title:"SEO · Keyword discovery",type:"SEO",detail:"Search themes around BASLP courses, colleges and speech therapy programs."},
 {src:"/screenshots/seo-gemini-overview.png",title:"SEO · Gemini AI Overview",type:"SEO",detail:"SEO optimization objective: improve BASLP Course page visibility in Google Gemini AI Overview results."},
 {src:"/screenshots/seo-basp-colleges.png",title:"SEO · BASLP college research",type:"SEO",detail:"Search research around BASLP colleges and related admission information."},
 {src:"/screenshots/seo-admissions-research.png",title:"SEO · Admissions research",type:"SEO",detail:"Additional search and admissions research screenshot from the report."},
 {src:"/screenshots/seo-ai-overview-results.png",title:"SEO · AI Overview research",type:"SEO",detail:"AI Overview research evidence included in the report."},
 {src:"/screenshots/seo-search-visibility.png",title:"SEO · Search visibility",type:"SEO",detail:"Search visibility and related research screenshot from the report."},
];

const insta = (id: string, kind: "reel" | "p" = "reel") => `https://www.instagram.com/${kind}/${id}/`;
export const creativeGroups = [
 { company: "Merfish", description: "Admissions and clinical services marketing", items: [
   {url:insta("DT0WDvAkjJn"),type:"Reel"},{url:insta("DTu8x2zkiJ7"),type:"Reel"},{url:insta("DONimLJEgDo"),type:"Reel"},
   {url:insta("DRoschUEgi4","p"),type:"Carousel"},{url:insta("DRmdBwMklCZ","p"),type:"Carousel"}
 ]},
 { company: "MyStreakBook", description: "App growth and social content", items: [
   ...["DNAPkEJg99P","DNIp--5xtlD","DNPxMFYA9W-","DNpmCPbA11R","DN8QWD7EZs_","DOJDueSk6u9","DOOOZuxgG8A","DOiFO_QgAGr","DOqi48hj6R1"].map(id=>({url:insta(id),type:"Reel"})),
   {url:insta("DPBthiSkXF1","p"),type:"Post"},
   ...["DPqtDyHAASr","DQHRl8YAWpX","DQWxIu7gbH9","DQgeaMqkQbv","DQwW2ZAETI6","DREVVawEe-n","DRUayBikfPk","DSMM2Q3kXGT","DSxFgifkkSS","DTaSJTbkt1T","DUDdzMpke0i","DULEaoYEZq4","DUvQweQEZ6s","DU3LWHkjOV2","DU-wnqaCMF1","DVLkkqIEexf","DVdmx5hCCp7"].map(id=>({url:insta(id),type:"Reel"}))
 ]},
 { company: "Tonercycle", description: "Instagram reels and poster creatives", items: [
   {url:insta("DOz_sjzEgNb","p"),type:"Post"},{url:insta("DPL2WXtktnP","p"),type:"Post"},{url:insta("DQJ4BSOEfQK"),type:"Reel"},
   {url:insta("DRRzMBTkgAE","p"),type:"Post"},{url:insta("DRe4VzujCAv"),type:"Reel"},{url:insta("DS1bAqtEnAq","p"),type:"Post"},
   {url:insta("DS2PGUhEpDZ"),type:"Reel"},{url:insta("DS4EoCKkiWB","p"),type:"Post"},{url:insta("DT22AloEjKt"),type:"Reel"},{url:insta("DVLlMz5Eklq"),type:"Reel"}
 ]},
];
export const resourceLinks = [
 {title:"Pinterest infographics", company:"Techietet · MyStreakBook",url:"https://pin.it/2Sep2kB63",description:"Infographic and poster references shared in the work report."},
 {title:"Medium articles",company:"Techietet · MyStreakBook · Merfish · Tonercycle",url:"https://medium.com/@naveen20520",description:"Blog and article collection referenced in the submitted work report."},
];
export const expertise = [
 {title:"Paid advertising",icon:"target",description:"Campaign planning, setup, audience targeting, budget allocation and optimization.",tools:["Meta Ads Manager","Google Ads","Lead generation"]},
 {title:"Search engine optimization",icon:"search",description:"Improve organic discoverability through research, page-level improvements and content.",tools:["Keyword research","On-page SEO","Metadata","Internal linking"]},
 {title:"Analytics & reporting",icon:"chart",description:"Read campaign signals, evaluate efficiency and translate performance data into next steps.",tools:["Google Analytics 4","Google Search Console","Performance reporting"]},
 {title:"Social media marketing",icon:"social",description:"Plan content, support publishing and improve audience engagement across social platforms.",tools:["SMM","Content planning","Audience engagement"]},
 {title:"Creative production",icon:"creative",description:"Develop visual and short-form content assets for campaigns and social channels.",tools:["Canva","Video editing","Promotional creatives"]},
 {title:"Platforms & growth",icon:"platform",description:"Support app acquisition and website content workflows across marketing platforms.",tools:["WordPress","Apple Search Ads","App campaigns"]},
];
export const experience = [
 {date:"JUN 2026 — PRESENT",role:"Digital Marketing Executive",company:"MD Solution FZC · Dubai, UAE",desc:"Plan, launch and optimize Meta Ads campaigns for tourism, recruitment, software sales and study-abroad services. Create social creatives and short-form edits; perform website SEO and monitor campaign performance."},
 {date:"JUN 2025 — MAY 2026",role:"Digital Marketing Analyst",company:"Techietet · Chennai, India",desc:"Executed Google Ads campaigns and optimized CTR, CPC, conversions and lead quality. Improved website visibility through keyword research, on-page SEO, metadata, internal linking and content updates."},
 {date:"FEB 2025 — MAY 2025",role:"Digital Marketing Intern",company:"Why Global Service · Chennai, India",desc:"Supported social media publishing, content planning and audience engagement, alongside Google Ads, Meta Ads, SEO and Google Analytics reporting."},
];
