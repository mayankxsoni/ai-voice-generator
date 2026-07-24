export interface ExpertiseDetail {
  slug: string;
  badge: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  description: string;
  videoUrl: string;
  stats: {
    clients: string;
    conversionLift: string;
    satisfaction: string;
    views: string;
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    highlightedText: string;
    author: string;
    role: string;
    company: string;
  };
}

export const expertiseDataMap: Record<string, ExpertiseDetail> = {
  'ai-ml': {
    slug: 'ai-ml',
    badge: 'AI & ML Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'AI & ML Software',
    titleSuffix: ' Explainer Videos',
    description:
      'Skip the neural network jargon. We translate autonomous AI agents, LLM architectures, and machine learning models into clear, high-converting product videos that buyers understand instantly.',
    videoUrl: '/videos/services/ai-ads.gif',
    stats: {
      clients: '35+',
      conversionLift: '3.4x',
      satisfaction: '99%',
      views: '4.5M+',
    },
    keyFeatures: [
      {
        title: 'Simplify Technical Jargon',
        description: 'We translate complex RAG pipelines and model parameters into tangible business ROI for non-technical buyers.',
      },
      {
        title: 'Show Real UI & Agent Outputs',
        description: 'Demonstrate your autonomous agents in action with sleek motion graphics overlaying your actual app interface.',
      },
      {
        title: 'Address Security & Hallucination Concerns',
        description: 'Proactively resolve enterprisewide security, data privacy, and accuracy objections right in the script.',
      },
    ],
    testimonial: {
      quote:
        'AI is complex to explain. First Pixel turned our autonomous agent workflow into a 90-second video that doubled our enterprise demo requests.',
      highlightedText: 'Our demo conversion rate jumped from 2.1% to 5.4% during our Series A launch.',
      author: 'Dr. Alex Mercer',
      role: 'Chief Scientist',
      company: 'NeuralAgents AI',
    },
  },
  saas: {
    slug: 'saas',
    badge: 'SaaS Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'B2B SaaS Platform',
    titleSuffix: ' Explainer Videos',
    description:
      'Stop losing prospects to lengthy onboarding guides. We build custom animated product walkthroughs and explainer videos that turn cold traffic into active daily users.',
    videoUrl: '/videos/services/explainer.mp4',
    stats: {
      clients: '60+',
      conversionLift: '2.8x',
      satisfaction: '98%',
      views: '6.2M+',
    },
    keyFeatures: [
      {
        title: 'Highlight Core Workflows',
        description: 'Focus on the single "Aha!" moment that makes your software indispensable within the first 30 seconds.',
      },
      {
        title: 'Reduce Free Trial Churn',
        description: 'Onboard users with clarity so they reach value fast, cutting 30-day drop-offs significantly.',
      },
      {
        title: 'Custom Brand Motion System',
        description: 'Every frame, cursor animation, and text highlight strictly matches your product design tokens.',
      },
    ],
    testimonial: {
      quote:
        'First Pixel delivered our SaaS explainer in just 2 weeks. It is embedded right on our homepage and remains our #1 lead generator.',
      highlightedText: 'Self-serve signups increased by 42% in the first 30 days after launch.',
      author: 'Jessica Lin',
      role: 'Head of Product Marketing',
      company: 'FlowStack SaaS',
    },
  },
  fintech: {
    slug: 'fintech',
    badge: 'FinTech Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'FinTech & Payments',
    titleSuffix: ' Explainer Videos',
    description:
      'Build trust and compliance confidence instantly. We craft crisp explainer videos for payment gateways, banking APIs, and treasury management platforms that turn skepticism into adoption.',
    videoUrl: '/videos/services/product-demo.mp4',
    stats: {
      clients: '40+',
      conversionLift: '3.1x',
      satisfaction: '99%',
      views: '5.1M+',
    },
    keyFeatures: [
      {
        title: 'Instill Institutional Trust',
        description: 'Visually communicate bank-grade security, SOC2 compliance, and encryption without boring the viewer.',
      },
      {
        title: 'Simplify Payment Flows',
        description: 'Show multi-party reconciliation, ledger settlements, and instant payouts in clear visual animations.',
      },
      {
        title: 'Accelerate Sales Cycles',
        description: 'Arm your enterprise sales team with a 2-minute video deck that closes compliance officers faster.',
      },
    ],
    testimonial: {
      quote:
        'Fintech compliance is dry, but First Pixel made our cross-border payment API feel seamless and exciting to enterprise CFOs.',
      highlightedText: 'Reduced our sales demo cycle from 45 days down to 18 days.',
      author: 'Marcus Thorne',
      role: 'VP of Commercial Banking',
      company: 'PayVault Global',
    },
  },
  healthcare: {
    slug: 'healthcare',
    badge: 'HealthTech Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'HealthTech & MedTech',
    titleSuffix: ' Explainer Videos',
    description:
      'Humanize your digital health platform. We design HIPAA-compliant explainer videos for clinical workflows, EHR integrations, and patient care platforms that resonate with medical directors.',
    videoUrl: '/videos/services/app-demo.mp4',
    stats: {
      clients: '25+',
      conversionLift: '2.5x',
      satisfaction: '97%',
      views: '3.8M+',
    },
    keyFeatures: [
      {
        title: 'Patient-Centric Storytelling',
        description: 'Balance clinical accuracy with human empathy to show the real-world impact of your healthcare software.',
      },
      {
        title: 'HIPAA & EHR Integration Clarity',
        description: 'Demonstrate effortless data syncing between Epic, Cerner, and your web/mobile portal.',
      },
      {
        title: 'Doctor & Patient Adoption',
        description: 'Onboard healthcare providers effortlessly with patient-friendly video guides.',
      },
    ],
    testimonial: {
      quote:
        'First Pixel captured both the technical precision and care empathy our medical platform needed. Doctors love the clarity.',
      highlightedText: 'Used by over 50,000 physicians across our clinic partner network.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Medical Officer',
      company: 'VetRec Health',
    },
  },
  edtech: {
    slug: 'edtech',
    badge: 'EdTech Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'EdTech & Learning',
    titleSuffix: ' Explainer Videos',
    description:
      'Engage educators, students, and administrators alike. We build vibrant explainer videos for LMS platforms, virtual classrooms, and corporate training tools.',
    videoUrl: '/videos/services/feature-launch.mp4',
    stats: {
      clients: '30+',
      conversionLift: '2.9x',
      satisfaction: '98%',
      views: '4.1M+',
    },
    keyFeatures: [
      {
        title: 'High-Energy Motion Design',
        description: 'Keep learners and institution buyers hooked with engaging character animation and fluid UI transitions.',
      },
      {
        title: 'Showcase Interactive Features',
        description: 'Highlight live quizzes, grading rubrics, and student progress analytics in actionable visual clips.',
      },
      {
        title: 'District & Institutional Sales',
        description: 'Craft pitch videos tailored for university boards and school district procurement leads.',
      },
    ],
    testimonial: {
      quote:
        'Our LMS adoption grew exponentially after embedding First Pixel explainer videos in our onboarding sequence.',
      highlightedText: 'Course completion rates increased by 36% in the first academic term.',
      author: 'David Vance',
      role: 'VP of Product',
      company: 'BrightBoard Learning',
    },
  },
  cybersecurity: {
    slug: 'cybersecurity',
    badge: 'Cyber Security Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'Cyber Security Software',
    titleSuffix: ' Explainer Videos',
    description:
      'Demystify zero-trust architectures and threat prevention. We craft sleek cybersecurity explainer videos that demonstrate how your software safeguards cloud assets without fear-mongering.',
    videoUrl: '/videos/services/product-demo.mp4',
    stats: {
      clients: '28+',
      conversionLift: '3.3x',
      satisfaction: '99%',
      views: '4.8M+',
    },
    keyFeatures: [
      {
        title: 'Visualize Threat Intelligence',
        description: 'Turn complex telemetry, SOC logs, and automated remediation into clean 2D/3D motion graphics.',
      },
      {
        title: 'CISO & DevSecOps Focus',
        description: 'Speak directly to security leads with scripts built around compliance, latency, and agent overhead.',
      },
      {
        title: 'Zero-Trust Workflow Demos',
        description: 'Show identity access management and endpoint protection working seamlessly in the background.',
      },
    ],
    testimonial: {
      quote:
        'First Pixel made our zero-trust access control platform crystal clear to CISOs. The video is central to our enterprise pipe.',
      highlightedText: 'Direct inbound enterprise demo requests increased by 180%.',
      author: 'Kenji Takahashi',
      role: 'Head of Security Product',
      company: 'SecureID Cloud',
    },
  },
  web3: {
    slug: 'web3',
    badge: 'Web3 & Crypto Vertical',
    titlePrefix: 'High-Converting ',
    highlightedTitle: 'Web3 & DeFi Protocol',
    titleSuffix: ' Explainer Videos',
    description:
      'Bridging crypto complexity with mainstream user adoption. We produce high-octane motion graphics videos for DeFi protocols, NFT marketplaces, smart contract tools, and Layer-2 networks.',
    videoUrl: '/videos/services/ai-ads.gif',
    stats: {
      clients: '45+',
      conversionLift: '3.6x',
      satisfaction: '98%',
      views: '7.5M+',
    },
    keyFeatures: [
      {
        title: 'DeFi & Staking Simplified',
        description: 'Explain liquidity pools, yield farming, and gasless transactions without overwhelming non-crypto natives.',
      },
      {
        title: 'Wallet & App Onboarding',
        description: 'Walk users through Web3 auth, seed phrase safety, and token swaps with friendly visual step-by-step guides.',
      },
      {
        title: 'Community & Investor Hype',
        description: 'Build viral Twitter and Discord engagement with launch teasers designed for token announcements.',
      },
    ],
    testimonial: {
      quote:
        'Our protocol TVL surged after launching First Pixel explainer video. They simplified cross-chain bridge security effortlessly.',
      highlightedText: 'Reached 1M+ views on X (Twitter) within 72 hours of protocol launch.',
      author: 'Satoshi N.',
      role: 'Core Contributor',
      company: 'DeFiBridge Protocol',
    },
  },
};

export const defaultExpertiseDetail = expertiseDataMap['saas'];
