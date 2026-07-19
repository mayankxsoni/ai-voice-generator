import gradientImg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container mb-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2>Welcome to the NextSaaS documentation</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>Find everything you need to set up, customize, and master your NextSaaS platform.</p>
          </RevealAnimation>
        </div>
      </div>
      <div className="main-container">
        <div className="documentation space-y-[70px]">
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h4>Documentation sections (main categories)</h4>
            </RevealAnimation>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <RevealAnimation delay={0.4}>
                <div className="relative z-10 space-y-3 overflow-hidden rounded-[20px] bg-white px-[42px] py-14">
                  {/* right gradient img  */}
                  <RevealAnimation delay={0.5} direction="right" offset={100}>
                    <figure className="absolute top-[-127px] right-[-225px] h-[328px] w-[479px] rotate-12 overflow-hidden">
                      <Image src={gradientImg} alt="multilingual & multi-accent voices" className="size-full" />
                    </figure>
                  </RevealAnimation>
                  <h5>Getting started</h5>
                  <ul className="text-tagline-1 text-secondary/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Introduction to NextSaaS
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Account setup
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Dashboard overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        First steps after signup
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="relative z-10 space-y-3 overflow-hidden rounded-[20px] bg-white px-[42px] py-14">
                  {/* right gradient img  */}
                  <RevealAnimation delay={0.6} direction="right" offset={100}>
                    <figure className="absolute top-[-127px] right-[-225px] h-[328px] w-[479px] rotate-12 overflow-hidden">
                      <Image src={gradientImg} alt="multilingual & multi-accent voices" className="size-full" />
                    </figure>
                  </RevealAnimation>
                  <h5>User management</h5>
                  <ul className="text-tagline-1 text-secondary/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Adding and managing users
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Role-based access control
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Setting permissions
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        Managing teams and groups
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        First steps after signup
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Billing and subscription</h4>
                <p>Handle your billing, subscriptions, and invoices easily.</p>
              </div>

              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    How to subscribe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Managing your subscription plan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Payment methods
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Viewing and downloading invoices
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Canceling or upgrading plans
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Settings & customization</h4>
                <p>Tailor NextSaaS to fit your business needs.</p>
              </div>

              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    General settings overview
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Customize your branding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Notification settings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Language and localization options
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Custom fields and filters
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Reporting and analytics</h4>
                <p>Gain insights and grow with detailed reports.</p>
              </div>

              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Understanding the analytics dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Exporting reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Setting up custom reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    KPI and metrics guide
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.9}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Troubleshooting & FAQs</h4>
                <p>Solutions for common issues and frequent questions.</p>
              </div>

              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Login issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Error messages and solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    Data sync issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors duration-500 ease-in-out">
                    General FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DocsContent;
