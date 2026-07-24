import gradientImg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  return (
    <section className="pt-32 pb-[160px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container mb-[60px]">
        <div className="space-y-3 text-center max-w-[760px] mx-auto">
          <RevealAnimation delay={0.1}>
            <div>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs mb-2">
                Agency Documentation
              </span>
              <h1 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                First Pixel Video Production Documentation
              </h1>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/70 text-base sm:text-lg">
              Find everything you need to prepare assets, review storyboards, and optimize your explainer video for maximum conversion.
            </p>
          </RevealAnimation>
        </div>
      </div>

      <div className="main-container">
        <div className="documentation space-y-[60px]">
          
          {/* Main Sections */}
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h3 className="text-2xl font-bold text-secondary">Production Guidelines & Workflows</h3>
            </RevealAnimation>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              
              {/* Box 1 */}
              <RevealAnimation delay={0.4}>
                <div className="relative z-10 space-y-4 overflow-hidden rounded-[24px] border border-[#eef0f3] bg-white p-8 sm:p-10 shadow-sm">
                  <RevealAnimation delay={0.5} direction="right" offset={100}>
                    <figure className="absolute top-[-127px] right-[-225px] h-[328px] w-[479px] rotate-12 overflow-hidden opacity-30">
                      <Image src={gradientImg} alt="gradient decoration" className="size-full" />
                    </figure>
                  </RevealAnimation>
                  <h4 className="text-xl font-bold text-secondary">01. Onboarding & Asset Preparation</h4>
                  <ul className="text-sm text-secondary/70 list-inside list-disc space-y-2.5 font-normal">
                    <li>How to export high-res UI screenshots & Figma files</li>
                    <li>Logo file requirements (SVG or EPS vector formats)</li>
                    <li>Brand color palette & typography token intake</li>
                    <li>Product demo access & sandbox credentials</li>
                    <li>Target ICP profile & key value propositions</li>
                  </ul>
                </div>
              </RevealAnimation>

              {/* Box 2 */}
              <RevealAnimation delay={0.5}>
                <div className="relative z-10 space-y-4 overflow-hidden rounded-[24px] border border-[#eef0f3] bg-white p-8 sm:p-10 shadow-sm">
                  <RevealAnimation delay={0.6} direction="right" offset={100}>
                    <figure className="absolute top-[-127px] right-[-225px] h-[328px] w-[479px] rotate-12 overflow-hidden opacity-30">
                      <Image src={gradientImg} alt="gradient decoration" className="size-full" />
                    </figure>
                  </RevealAnimation>
                  <h4 className="text-xl font-bold text-secondary">02. Script & Storyboard Review Flow</h4>
                  <ul className="text-sm text-secondary/70 list-inside list-disc space-y-2.5 font-normal">
                    <li>Async script feedback via Google Docs & Loom</li>
                    <li>Frame-by-frame visual storyboard approvals</li>
                    <li>Selecting native voiceover artists & accent samples</li>
                    <li>Unlimited script revision policy before animation</li>
                    <li>Motion pace & animation style guidelines</li>
                  </ul>
                </div>
              </RevealAnimation>

            </div>
          </div>

          {/* Section 2 */}
          <RevealAnimation delay={0.6}>
            <div className="rounded-[24px] border border-[#eef0f3] bg-white p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-secondary">03. Video Export Formats & Website Embedding</h4>
                <p className="text-sm text-secondary/60">Guidelines for integrating your explainer video seamlessly into Webflow, Framer, and React applications.</p>
              </div>

              <ul className="text-sm text-secondary/70 space-y-3 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Webflow & Framer:</strong> Embedding via Wistia, Vimeo, or HTML5 native video tags for zero lag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Aspect Ratios:</strong> 16:9 Widescreen (Homepage Hero), 1:1 Square (LinkedIn Ads), 9:16 Vertical (TikTok/Reels).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Compression Settings:</strong> H.264 MP4 & WebM delivery at optimal bitrate for lightning-fast site speeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Lottie Animations & GIFs:</strong> Micro-animations delivered as lightweight JSON files for interactive web elements.</span>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Section 3 */}
          <RevealAnimation delay={0.7}>
            <div className="rounded-[24px] border border-[#eef0f3] bg-white p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-secondary">04. Commercial Licensing & Rights Handoff</h4>
                <p className="text-sm text-secondary/60">Complete clarity on intellectual property and commercial broadcast rights.</p>
              </div>

              <ul className="text-sm text-secondary/70 space-y-3 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>100% Ownership:</strong> Full commercial rights transferred to your company upon final delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Voiceover & Music Buyout:</strong> Worldwide perpetual usage rights included for digital, paid social, and web.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span><strong>Source File Package:</strong> Optional handoff of After Effects project files, vector graphics, and audio stems.</span>
                </li>
              </ul>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

DocsContent.displayName = 'DocsContent';
export default DocsContent;
