import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  return (
    <section className="pt-[140px] pb-16 md:pt-[170px] md:pb-20 xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-2 mx-auto w-full max-w-[1340px] space-y-[60px] rounded-3xl px-5 py-[80px] md:px-8 lg:px-12 shadow-sm border border-[#eef0f3]">
          
          {/* Header */}
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
                Transparent Pricing
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h1 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Select the SaaS explainer package for your needs
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/70 text-base">
                End-to-end video production with fixed pricing, no surprise fees, and 100% commercial rights included.
              </p>
            </RevealAnimation>
          </div>

          {/* Feature Matrix Grid / Cards */}
          <div className="grid grid-cols-12 gap-8">
            
            {/* Column 1: Feature Labels */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4}>
                <div>
                  <div className="md:h-[195px] md:w-[260px] flex flex-col justify-end pb-4">
                    <h3 className="text-lg font-bold text-secondary">Compare Deliverables</h3>
                    <p className="text-xs text-secondary/60">Everything included in your video package.</p>
                  </div>
                  <div className="space-y-2">
                    <ul>
                      <li className="text-secondary/70 text-xs sm:text-sm border-b border-[#eef0f3] py-4 font-medium">
                        Video Duration
                      </li>
                      <li className="text-secondary/70 text-xs sm:text-sm border-b border-[#eef0f3] py-4 font-medium">
                        Scriptwriting & Hook
                      </li>
                      <li className="text-secondary/70 text-xs sm:text-sm border-b border-[#eef0f3] py-4 font-medium">
                        Motion Design Style
                      </li>
                      <li className="text-secondary/70 text-xs sm:text-sm border-b border-[#eef0f3] py-4 font-medium">
                        Studio Voiceover
                      </li>
                      <li className="text-secondary/70 text-xs sm:text-sm border-b border-[#eef0f3] py-4 font-medium">
                        Production Turnaround
                      </li>
                      <li className="text-secondary/70 text-xs sm:text-sm py-4 font-medium">
                        Commercial Rights
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Column 2: Essential Plan */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.5}>
                <div>
                  <div className="bg-white border border-[#eef0f3] space-y-6 rounded-[20px] p-6 shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">Essential</p>
                      <h3 className="text-3xl font-extrabold text-secondary">$1,499</h3>
                      <p className="text-xs text-secondary/60 mt-1">Ideal for hero headers & launch day</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-secondary hover:btn-primary btn-md w-full text-center rounded-full font-semibold text-xs transition-all"
                    >
                      Get Started →
                    </Link>
                  </div>
                  <div className="bg-white rounded-[20px] mt-4 border border-[#eef0f3] shadow-sm">
                    <ul>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-semibold text-secondary">60 Seconds</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">ICP Positioning Hook</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">2D Motion Graphics</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">Native Studio Voice</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">2–3 Weeks</p>
                      </li>
                      <li className="py-4 text-center">
                        <p className="text-xs font-semibold text-emerald-600">100% Commercial Rights</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Column 3: Growth Plan (Most Popular) */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.6}>
                <div>
                  <div className="bg-white border-2 border-primary-500 space-y-6 rounded-[20px] p-6 shadow-md relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                    <div>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">Growth Explainer</p>
                      <h3 className="text-3xl font-extrabold text-secondary">$2,499</h3>
                      <p className="text-xs text-secondary/60 mt-1">Full SaaS walkthrough & trial boost</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-primary-v2 btn-md w-full text-center rounded-full font-semibold text-xs transition-all shadow-md shadow-primary-500/20"
                    >
                      Book Strategy Call →
                    </Link>
                  </div>
                  <div className="bg-white rounded-[20px] mt-4 border border-primary-200 shadow-sm">
                    <ul>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-semibold text-secondary">90 Seconds</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">Objection Handling Script</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">2D + 3D UI Motion</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">Premium Voice + Audio Mix</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-semibold text-primary-600">2-Week Rush Delivery</p>
                      </li>
                      <li className="py-4 text-center">
                        <p className="text-xs font-semibold text-emerald-600">100% Rights + AE Source</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Column 4: Enterprise Plan */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.7}>
                <div>
                  <div className="bg-white border border-[#eef0f3] space-y-6 rounded-[20px] p-6 shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">Enterprise Suite</p>
                      <h3 className="text-3xl font-extrabold text-secondary">$3,999</h3>
                      <p className="text-xs text-secondary/60 mt-1">Multi-product suite & video ad pack</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-secondary hover:btn-primary btn-md w-full text-center rounded-full font-semibold text-xs transition-all"
                    >
                      Talk to Creative Lead →
                    </Link>
                  </div>
                  <div className="bg-white rounded-[20px] mt-4 border border-[#eef0f3] shadow-sm">
                    <ul>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-semibold text-secondary">120s + 3x Video Ads</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">Multi-Channel Ad Strategy</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">3D Product Renders</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-medium text-secondary/70">Multi-Language Voiceovers</p>
                      </li>
                      <li className="border-b border-[#eef0f3] py-4 text-center">
                        <p className="text-xs font-semibold text-primary-600">7-Day Express Delivery</p>
                      </li>
                      <li className="py-4 text-center">
                        <p className="text-xs font-semibold text-emerald-600">Full Broadcast + Stems</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>

          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
