export interface ClientShowcase {
  name: string;
  tag: string;
  meta: string;
}

export interface ServiceDetail {
  slug: string;
  badge: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  description: string;
  videoUrl: string;
  stats: {
    clients: string;
    coffee: string;
    satisfaction: string;
    views: string;
  };
  clientShowcase: ClientShowcase[];
  portfolioHeadline: string;
  portfolioSubheadline: string;
  testimonial: {
    quote: string;
    highlightedText: string;
    author: string;
    role: string;
    company: string;
  };
}

export const servicesDataMap: Record<string, ServiceDetail> = {
  'animated-explainer': {
    slug: 'animated-explainer',
    badge: 'Explainer Videos',
    titlePrefix: 'High-Converting SaaS ',
    highlightedTitle: 'Animated Explainer',
    titleSuffix: ' Videos',
    description:
      'Stop losing users to complicated onboarding. We are a premium explainer video agency that turns complex software features into clear, compelling product explainer videos that turn cold traffic into loyal users.',
    videoUrl: '/videos/services/explainer.mp4',
    stats: {
      clients: '200+',
      coffee: '1000+',
      satisfaction: '98%',
      views: '2M+',
    },
    clientShowcase: [
      { name: 'Fostra AI', tag: 'AI Infrastructure', meta: 'Fort Worth, USA → Raised $1.2M+' },
      { name: 'GenPage', tag: 'SaaS', meta: 'Delaware, USA → Raised $1.5M+' },
      { name: 'VetRec', tag: 'Health Tech', meta: 'Seattle, WA → 50k+ Doctors' },
      { name: 'Kavia AI', tag: 'Agentic AI', meta: 'San Francisco, US → Raised $1.5M+' },
      { name: 'TestParty', tag: 'Compliance Tech', meta: 'NY, United States → Raised $4M+' },
      { name: 'Investmates', tag: 'Fintech', meta: 'Delaware, USA → 100k+ Customers' },
      { name: 'Braiv', tag: 'SaaS', meta: 'Sydney, Australia → 100k+ Users' },
    ],
    portfolioHeadline: 'Our Proven Work: The Best Animated Explainer Videos That Drive Growth',
    portfolioSubheadline:
      'Check out our production showcase. We design customized visual assets that captivate your target ICP and improve your funnel metrics.',
    testimonial: {
      quote:
        'Working with First Pixel was a pleasure! Taha and the team made the SaaS explainer video production process smooth and efficient.',
      highlightedText: 'The final SaaS explainer videos were high-quality, engaging, and delivered on time.',
      author: 'Melody Roth',
      role: 'Executive Director',
      company: 'árhasi',
    },
  },
  'product-launch': {
    slug: 'product-launch',
    badge: 'Product Launch',
    titlePrefix: 'High-Impact ',
    highlightedTitle: 'Product Launch',
    titleSuffix: ' Videos',
    description:
      'Build viral pre-launch momentum and turn launch day into a massive signup surge. We design cinematic product launch videos that articulate your unique value before users even touch the keyboard.',
    videoUrl: '/videos/services/feature-launch.mp4',
    stats: {
      clients: '150+',
      coffee: '850+',
      satisfaction: '99%',
      views: '3.5M+',
    },
    clientShowcase: [
      { name: 'FinTrack', tag: 'Fintech', meta: 'San Francisco → 3x Free Trial Conversion' },
      { name: 'HRFlow', tag: 'HR SaaS', meta: 'Austin, TX → $2M+ Seed Raised' },
      { name: 'AdStack', tag: 'MarTech', meta: 'New York → Product Hunt #1 Product of Day' },
      { name: 'BrightBoard', tag: 'EdTech', meta: 'London, UK → 80k Active Users' },
      { name: 'ScaleAI', tag: 'AI Tech', meta: 'San Jose, CA → 250k Views in 48 Hours' },
      { name: 'PocketPay', tag: 'Payments', meta: 'Boston → 2.5x Demo Signup Lift' },
      { name: 'CloudOps', tag: 'DevOps', meta: 'Seattle → 500+ Enterprise Leads' },
    ],
    portfolioHeadline: 'Launch Campaigns That Break Through The Noise',
    portfolioSubheadline:
      'Explore launch videos that helped SaaS startups hit #1 on Product Hunt and raise millions in venture capital.',
    testimonial: {
      quote:
        'First Pixel delivered our product launch video in just 10 days. The engagement on LinkedIn and Twitter surpassed all our expectations.',
      highlightedText: 'Our demo request rate jumped by 240% during launch week.',
      author: 'Ravi M.',
      role: 'Founder & CEO',
      company: 'HRFlow',
    },
  },
  'app-demo': {
    slug: 'app-demo',
    badge: 'App Demo',
    titlePrefix: 'Interactive ',
    highlightedTitle: 'App Demo',
    titleSuffix: ' Videos',
    description:
      'Showcase your mobile or web app interface with crisp motion graphics and flawless UI walkthroughs. Eliminate user friction and turn app store browsers into active daily users.',
    videoUrl: '/videos/services/app-demo.mp4',
    stats: {
      clients: '180+',
      coffee: '920+',
      satisfaction: '97%',
      views: '1.8M+',
    },
    clientShowcase: [
      { name: 'MobilePay', tag: 'Fintech', meta: 'Chicago, IL → 100k App Downloads' },
      { name: 'HealthPulse', tag: 'Health', meta: 'Boston, MA → 4.9 Star Rating' },
      { name: 'TaskSync', tag: 'Productivity', meta: 'Denver, CO → 40% Onboarding Boost' },
      { name: 'FitGraph', tag: 'Fitness', meta: 'Austin, TX → 50k Active Subscribers' },
      { name: 'ReadFlow', tag: 'EdTech', meta: 'Toronto, CA → 200k Downloads' },
      { name: 'SmartCam', tag: 'IoT', meta: 'San Diego, CA → Featured on App Store' },
      { name: 'PocketBank', tag: 'Banking', meta: 'London, UK → 150k+ Signups' },
    ],
    portfolioHeadline: 'App Walkthroughs Built to Maximize Downloads & Engagement',
    portfolioSubheadline:
      'We bring actual app interfaces to life with fluid motion design, highlight overlays, and intuitive visual storytelling.',
    testimonial: {
      quote:
        'Our app conversion rates soared after replacing static screenshots with First Pixel app demo video.',
      highlightedText: 'App Store conversion increased by 45% in the first month alone.',
      author: 'Sarah K.',
      role: 'Head of Growth',
      company: 'Finlo App',
    },
  },
  'feature-launch': {
    slug: 'feature-launch',
    badge: 'Feature Launch',
    titlePrefix: 'Engaging ',
    highlightedTitle: 'Feature Launch',
    titleSuffix: ' Videos',
    description:
      'Announce product updates and new feature drops with high-energy motion design. Drive immediate feature adoption among existing users while attracting new leads.',
    videoUrl: '/videos/services/feature-launch.mp4',
    stats: {
      clients: '160+',
      coffee: '780+',
      satisfaction: '98%',
      views: '1.5M+',
    },
    clientShowcase: [
      { name: 'DataPulse', tag: 'Analytics', meta: 'Seattle, WA → 85% Feature Adoption' },
      { name: 'WorkMesh', tag: 'Collaboration', meta: 'San Francisco → 2x Upgrade Rate' },
      { name: 'SecureID', tag: 'Security', meta: 'Austin, TX → 40k Monthly Active Users' },
      { name: 'BotCraft', tag: 'AI', meta: 'Boston, MA → 12k New Beta Users' },
      { name: 'LeadFuse', tag: 'Sales Tech', meta: 'Chicago, IL → 3x Engagement Lift' },
      { name: 'MetricsAI', tag: 'Data', meta: 'New York, NY → Featured in TechCrunch' },
      { name: 'SyncStack', tag: 'Dev Tools', meta: 'Denver, CO → 95% User Renewal' },
    ],
    portfolioHeadline: 'Feature Drop Videos That Keep Users Hooked & Upgrading',
    portfolioSubheadline:
      'Show your users why your newest release is a game-changer with targeted 30-60 second feature spotlight videos.',
    testimonial: {
      quote:
        'First Pixel helped us launch our AI Assistant feature with a 45-second video that explained the value effortlessly.',
      highlightedText: 'Feature activation reached 78% within 14 days of release.',
      author: 'Liam B.',
      role: 'Co-Founder',
      company: 'BrightBoard',
    },
  },
  'product-demo': {
    slug: 'product-demo',
    badge: 'Product Demo',
    titlePrefix: 'Conversion-First ',
    highlightedTitle: 'Product Demo',
    titleSuffix: ' Videos',
    description:
      'Replace boring sales calls and static slide decks with a dynamic, always-on product demo video that pitch-perfectly demonstrates your software 24/7.',
    videoUrl: '/videos/services/product-demo.mp4',
    stats: {
      clients: '220+',
      coffee: '1100+',
      satisfaction: '99%',
      views: '4.2M+',
    },
    clientShowcase: [
      { name: 'Acme SaaS', tag: 'Enterprise', meta: 'San Jose, CA → 50% Shorter Sales Cycle' },
      { name: 'FormFlow', tag: 'No-Code', meta: 'San Francisco → 3.2x Lead Conversion' },
      { name: 'DevHub', tag: 'Developer Tools', meta: 'Seattle, WA → 100k Developer Users' },
      { name: 'PayScale', tag: 'Payroll', meta: 'Dallas, TX → $10M+ ARR Growth' },
      { name: 'CRMPro', tag: 'Sales', meta: 'Atlanta, GA → 40% Demo Booking Increase' },
      { name: 'InsightCloud', tag: 'BI Analytics', meta: 'Boston, MA → 1M+ Demo Views' },
      { name: 'TeamSync', tag: 'HR', meta: 'Toronto, CA → 2.8x Pipeline Velocity' },
    ],
    portfolioHeadline: 'Product Demos That Do The Heavy Lifting For Your Sales Team',
    portfolioSubheadline:
      'Our product demo videos explain complex architecture, key workflows, and financial ROI in under 2 minutes.',
    testimonial: {
      quote:
        'Our enterprise prospects understand our product before they even jump on a sales call now.',
      highlightedText: 'Demo-to-deal close rate improved by 35% after adding the video to our landing page.',
      author: 'Nora J.',
      role: 'CEO',
      company: 'AdStack',
    },
  },
  'promo-ads': {
    slug: 'promo-ads',
    badge: 'Animated Promo Ads',
    titlePrefix: 'High-ROI ',
    highlightedTitle: 'Animated Promo',
    titleSuffix: ' Video Ads',
    description:
      'Capture immediate attention on LinkedIn, Meta, and YouTube with scroll-stopping animated ad creatives engineered for direct response marketing.',
    videoUrl: '/videos/services/ai-ads.gif',
    stats: {
      clients: '210+',
      coffee: '950+',
      satisfaction: '98%',
      views: '5.0M+',
    },
    clientShowcase: [
      { name: 'ClickFlow', tag: 'AdTech', meta: 'Miami, FL → 4.2x ROAS' },
      { name: 'GrowthScale', tag: 'Agency', meta: 'Los Angeles → 60% Lower CPA' },
      { name: 'Subify', tag: 'E-commerce', meta: 'New York, NY → $500k Ad Revenue' },
      { name: 'SocialAI', tag: 'Marketing', meta: 'Austin, TX → 3.8% CTR' },
      { name: 'MetricAds', tag: 'Analytics', meta: 'Chicago, IL → 250k Impressions' },
      { name: 'FunnelPro', tag: 'SaaS', meta: 'Seattle, WA → 50k Trial Users' },
      { name: 'AdVibe', tag: 'Creative', meta: 'San Francisco → 2x Conversion Rate' },
    ],
    portfolioHeadline: 'Scroll-Stopping Video Ads That Lower Customer Acquisition Cost',
    portfolioSubheadline:
      'Direct response animated creatives designed to grab attention in the first 3 seconds and drive clicks.',
    testimonial: {
      quote:
        'First Pixel ads cut our cost per acquisition in half on LinkedIn. The animation quality is unmatched.',
      highlightedText: 'Our ad click-through rate jumped from 0.9% to 3.4% instantly.',
      author: 'David Chen',
      role: 'VP of Marketing',
      company: 'ClickFlow',
    },
  },
  'ai-ads': {
    slug: 'ai-ads',
    badge: 'AI Video Ads',
    titlePrefix: 'Next-Gen ',
    highlightedTitle: 'AI Powered Video',
    titleSuffix: ' Ads',
    description:
      'Leverage cutting-edge AI video generation and automated motion workflows to deploy multiple ad variations at scale without burning marketing budget.',
    videoUrl: '/videos/services/ai-ads.gif',
    stats: {
      clients: '140+',
      coffee: '750+',
      satisfaction: '97%',
      views: '3.0M+',
    },
    clientShowcase: [
      { name: 'GenAI', tag: 'AI Engine', meta: 'San Francisco → 100+ Ad Variations' },
      { name: 'PromptStudio', tag: 'AI Tools', meta: 'Seattle → 5x Creative Output' },
      { name: 'NeuralAds', tag: 'AdTech', meta: 'Boston → 4.5x Direct ROAS' },
      { name: 'AutoCreative', tag: 'Marketing', meta: 'Austin → 70% Production Time Saved' },
      { name: 'CopyAI', tag: 'SaaS', meta: 'New York → 1M+ Views Across Platforms' },
      { name: 'SynthMedia', tag: 'Media', meta: 'London → 30k Leads Generated' },
      { name: 'DeepVid', tag: 'Video AI', meta: 'Toronto → 3x Campaign Scalability' },
    ],
    portfolioHeadline: 'AI-Generated Ad Creatives Built For Speed & Performance',
    portfolioSubheadline:
      'We combine human creative strategy with AI motion workflows to iterate high-converting video ad concepts faster than ever.',
    testimonial: {
      quote:
        'First Pixel delivered 15 ad variations for our campaign in under a week using their AI workflows.',
      highlightedText: 'We tested 5x more creatives and found 3 clear winner ad hooks.',
      author: 'Elena Rostova',
      role: 'Head of Growth',
      company: 'PromptStudio',
    },
  },
  tutorial: {
    slug: 'tutorial',
    badge: 'Tutorial Video',
    titlePrefix: 'Step-by-Step ',
    highlightedTitle: 'SaaS Tutorial',
    titleSuffix: ' Videos',
    description:
      'Transform complex user guides into engaging, crystal-clear tutorial videos. Reduce support tickets, improve user retention, and turn new signups into power users.',
    videoUrl: '/videos/services/explainer.mp4',
    stats: {
      clients: '190+',
      coffee: '980+',
      satisfaction: '99%',
      views: '2.4M+',
    },
    clientShowcase: [
      { name: 'DocuSync', tag: 'Document Management', meta: 'Seattle → 65% Support Ticket Drop' },
      { name: 'CodeAcademy', tag: 'EdTech', meta: 'New York → 500k Course Views' },
      { name: 'UserGuide', tag: 'Customer Success', meta: 'San Francisco → 80% Completion Rate' },
      { name: 'HelpHub', tag: 'Support Tech', meta: 'Austin → 3.5x Onboarding Speed' },
      { name: 'LearnFlow', tag: 'LMS SaaS', meta: 'Chicago → 90k Trained Users' },
      { name: 'WorkflowPro', tag: 'Automation', meta: 'Boston → 50% Reduction in Churn' },
      { name: 'DevDoc', tag: 'Developer Support', meta: 'Denver → 4.9 Star User Rating' },
    ],
    portfolioHeadline: 'Onboarding & Tutorial Videos Users Actually Enjoy Watching',
    portfolioSubheadline:
      'Clear, friendly, and beautifully animated walkthroughs that turn customer confusion into product mastery.',
    testimonial: {
      quote:
        'Our support team received 50% fewer basic onboarding tickets after we embedded First Pixel tutorial videos in our knowledge base.',
      highlightedText: 'User 30-day retention rate increased by 28% across all new accounts.',
      author: 'Marcus Vance',
      role: 'Director of Customer Success',
      company: 'DocuSync',
    },
  },
};

export const defaultServiceDetail = servicesDataMap['animated-explainer'];
