import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are PixelBot, the AI Sales & Support Assistant for First Pixel (https://ai-voice-generator-eight.vercel.app), a premier B2B SaaS Explainer Video & Product Demo Agency.

Your goal is to answer questions about First Pixel's services, pricing, turnaround time, production process, and industry expertise with professionalism, clarity, and helpfulness. Always encourage prospects to book a 20-minute strategy call or reach out via /contact-us.

ABOUT FIRST PIXEL AGENCY:
- Core Specialty: We produce high-converting 60-120s animated explainer videos, product demo videos, launch videos, and paid video ads exclusively for B2B SaaS companies.
- Proven Results: Helped 50+ SaaS companies achieve average conversion lifts of 30% to 180%, boost free trial activations by 42%, and reduce demo sales cycles from 45 days to 18 days.

THE 8 AGENCY SERVICES:
1. Animated Explainer Video (/#services): 60–120s videos that translate complex SaaS workflows into instant visual clarity.
2. Product Launch Videos (/#services): Build viral hype and drive signups on Product Hunt or launch day.
3. App Demo Videos (/#services): Showcase desktop/mobile UI in action and reduce trial friction.
4. Feature Launch Videos (/#services): Announce new product features that actually drive feature adoption.
5. Product Demo Videos (/#services): Replace dry live sales demos with a polished, 24/7 video asset.
6. Animated Promo Video Ads (/#services): Short-form animated video ads for LinkedIn, Meta, and X (Twitter).
7. AI Powered Video Ads (/#services): Scale ad creatives fast with AI-assisted motion design.
8. Tutorial Video (/#services): Onboard users faster with step-by-step interactive video guides.

OUR 7 SAAS INDUSTRY VERTICALS & EXPERTISE:
- AI & ML (/expertise/ai-ml): Autonomous agents, LLMs, neural networks, and RAG pipelines simplified.
- SaaS Platforms (/expertise/saas): B2B workflows, dashboards, analytics, and self-serve product tours.
- FinTech (/expertise/fintech): Payment gateways, banking ledgers, trading tools, and SOC2/compliance clarity.
- Healthcare / HealthTech (/expertise/healthcare): HIPAA-compliant clinical workflows, EHR integrations, and patient care portals.
- Ed-Tech (/expertise/edtech): LMS platforms, courseware, and interactive university/school learning tools.
- Cyber Security (/expertise/cybersecurity): Zero-trust architectures, cloud security telemetry, and IAM platforms.
- Web3 & Crypto (/expertise/web3): DeFi protocols, smart contract tools, dApps, and blockchain infrastructure.

PRODUCTION PROCESS & TIMELINE:
- Turnaround Time: Standard production cycle is 2 to 3 weeks from kickoff to final delivery.
- 4-Step Process:
  Step 01: Deep-Dive Discovery & ICP Positioning Hook
  Step 02: Objection-Focused Script & Frame-by-Frame Storyboard
  Step 03: Custom Motion Graphics, UI Animation & Native Voiceover
  Step 04: Final Sound Mix, 4K Export & Web Embedding (Webflow/Framer/React)
- Client Effort: Only requires a single 30-minute kickoff call. All reviews are handled async via Google Docs & Loom.
- Revisions: Unlimited script and storyboard revisions before animation, plus 2 rounds of motion polish.
- Commercial Rights: 100% full commercial rights, voiceover buyout, and licensed music rights transferred to client.

PRICING & CONTACT:
- Flexible packages tailored to video length and motion complexity.
- Contact Page: /contact-us or click "Schedule Call" to book a 20-minute strategy session with our creative director.

TONE & STYLE:
- Professional, confident, concise, and helpful. Do not use emojis in replies.
- Keep answers under 3-4 paragraphs. Use bullet points for readability when appropriate.
- Always include direct links to relevant services or /contact-us when helpful.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;

    if (apiKey) {
      try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'grok-beta',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
            temperature: 0.7,
            max_tokens: 600,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices[0]?.message?.content || 'Thank you for reaching out to First Pixel!';
          return NextResponse.json({ reply, provider: 'api' });
        }
      } catch (err) {
        console.error('API call failed, falling back to intelligent knowledge engine:', err);
      }
    }

    // Fallback Intelligent Knowledge Engine if key is not configured
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    let reply = '';

    if (lastUserMessage.includes('service') || lastUserMessage.includes('what do you do') || lastUserMessage.includes('offer')) {
      reply = `First Pixel produces high-converting explainer videos and product demos for B2B SaaS companies. Here are our core 8 agency services:\n\n` +
        `- Animated Explainer Video: 60–120s videos that turn complex SaaS into instant clarity.\n` +
        `- Product Launch Videos: Build hype for launch day on Product Hunt or X.\n` +
        `- App Demo Videos: Showcase your desktop/mobile UI in action.\n` +
        `- Feature Launch Videos: Announce new features that actually drive adoption.\n` +
        `- Product Demo Videos: Replace live sales demos with a 24/7 video asset.\n` +
        `- Animated Promo Ads: High-performing short-form video ads for LinkedIn & Meta.\n` +
        `- AI Powered Video Ads: Scale ad creatives fast with AI motion graphics.\n` +
        `- Tutorial Videos: Step-by-step visual guides to onboard users fast.\n\n` +
        `You can explore all options on our [Services Page](/#services) or [Book a Strategy Call](/contact-us).`;
    } else if (lastUserMessage.includes('price') || lastUserMessage.includes('cost') || lastUserMessage.includes('pricing') || lastUserMessage.includes('rate')) {
      reply = `Our video packages are customized based on video duration (60s, 90s, or 120s) and animation complexity.\n\n` +
        `Every package includes:\n` +
        `- Full scriptwriting & ICP positioning\n` +
        `- Frame-by-frame storyboard\n` +
        `- Native studio voiceover & licensed music\n` +
        `- Custom UI motion design matching your design tokens\n` +
        `- 100% full commercial rights & 4K exports\n\n` +
        `Visit our [Pricing Page](/pricing) or [Contact Us](/contact-us) to get a custom quote.`;
    } else if (lastUserMessage.includes('time') || lastUserMessage.includes('turnaround') || lastUserMessage.includes('how long') || lastUserMessage.includes('timeline')) {
      reply = `Our standard turnaround time is 2 to 3 weeks from initial kickoff to final 4K video delivery.\n\n` +
        `Production breakdown:\n` +
        `- Week 1: Discovery, ICP Scriptwriting & Storyboard approval.\n` +
        `- Week 2: Custom UI Motion Graphics & Native Voiceover recording.\n` +
        `- Week 3: Animation polish, sound design mix, and final 4K delivery.\n\n` +
        `We also offer 7-day express production upon request.`;
    } else if (lastUserMessage.includes('vertical') || lastUserMessage.includes('industry') || lastUserMessage.includes('ai') || lastUserMessage.includes('fintech') || lastUserMessage.includes('saas') || lastUserMessage.includes('crypto')) {
      reply = `We specialize across 7 core SaaS verticals with tailored scripts and motion styles:\n\n` +
        `- AI & ML: Autonomous agents, LLMs, and RAG pipelines simplified.\n` +
        `- B2B SaaS: Workflows, dashboards, and self-serve onboarding.\n` +
        `- FinTech: Payment gateways, ledgers, and SOC2 compliance.\n` +
        `- Healthcare: HIPAA workflows, EHR integrations, and patient care.\n` +
        `- EdTech: LMS platforms, courseware, and university tools.\n` +
        `- Cyber Security: Zero-trust, cloud telemetry, and IAM tools.\n` +
        `- Web3 & Crypto: DeFi protocols, smart contracts, and dApps.\n\n` +
        `Check out our specialized [Expertise Pages](/expertise) to see examples.`;
    } else if (lastUserMessage.includes('contact') || lastUserMessage.includes('book') || lastUserMessage.includes('call') || lastUserMessage.includes('meeting') || lastUserMessage.includes('hello') || lastUserMessage.includes('hi')) {
      reply = `Hello. Welcome to First Pixel. I am PixelBot, your AI assistant.\n\n` +
        `We help B2B SaaS companies create animated explainer videos that turn visitors into demo requests.\n\n` +
        `How can I assist you today?\n` +
        `- Learn about Services\n` +
        `- Check Production Timelines\n` +
        `- View Industry Expertise\n` +
        `- Book a 20-Min Strategy Call ([/contact-us](/contact-us))`;
    } else {
      reply = `Thank you for reaching out. At First Pixel, we create high-converting animated explainer videos and product demos for B2B SaaS companies.\n\n` +
        `Our videos help SaaS founders turn complex product features into instant clarity, boosting conversion rates by up to 180%.\n\n` +
        `Would you like to check our [Services](/#services), view our [Industry Expertise](/expertise), or [Schedule a 20-Min Strategy Call](/contact-us)?`;
    }

    return NextResponse.json({ reply, provider: 'knowledge-engine' });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { reply: 'Sorry, I ran into a temporary connection issue. Please feel free to reach out directly at /contact-us.' },
      { status: 500 }
    );
  }
}
