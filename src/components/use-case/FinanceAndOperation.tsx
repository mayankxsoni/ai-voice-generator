import RevealAnimation from '@/components/animation/RevealAnimation';
import OperationCards from './OperationCards';
const FinanceAndOperation = () => {
  return (
    <section className="md:pt[50px] pt-[20px] pb-[100px] md:pb-[150px] lg:pt-[70px] lg:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* finance and operation  */}
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h3>Finance and operation</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                NextSaaS is designed to serve a wide range of teams and industries. Whether you&apos;re managing data,
                scaling operations, optimizing finances, or streamlining customer experiences—NextSaaS is the platform
                that grows with you.
              </p>
            </RevealAnimation>
          </div>
          {/* operation cards  */}
          <OperationCards />
          {/* Product & development teams */}
          <div className="space-y-4">
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h3 className="text-heading-4" id="product-teams">
                  Product &amp; development teams
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  <span className="text-secondary dark:text-accent">
                    Collaborate better. Launch faster. Iterate smarter.
                  </span>
                  <br />
                  From roadmap planning to feature tracking, product teams use NextSaaS to keep everyone aligned and
                  deliver with confidence.
                </p>
              </RevealAnimation>
            </div>
            {/* key benefits  */}
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Key Benefits</h4>
              </RevealAnimation>
              <ul>
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Visual product roadmaps</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Feature release tracking</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Integration with issue management tools</p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          {/* Marketing teams */}
          <div className="space-y-4">
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h3 className="text-heading-4" id="marketing-teams">
                  Marketing teams
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  <span className="text-secondary dark:text-accent">Plan campaigns. Analyze results. Drive ROI.</span>
                  <br />
                  NextSaaS helps marketers connect strategy to results, with built-in analytics and collaborative tools
                  that simplify workflows.
                </p>
              </RevealAnimation>
            </div>
            {/* key benefits  */}
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Key Benefits</h4>
              </RevealAnimation>
              <ul>
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Campaign tracking dashboards</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Lead funnel visibility</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Cross-channel performance analytics</p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          {/*Customer support & success */}
          <div className="space-y-4">
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h3 className="text-heading-4" id="customer-support">
                  Customer support &amp; success
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  <span className="text-secondary dark:text-accent">Deliver great experiences at every stage.</span>
                  <br />
                  Manage onboarding, support interactions, and customer health in one place.
                </p>
              </RevealAnimation>
            </div>
            {/* key benefits  */}
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Key Benefits</h4>
              </RevealAnimation>
              <ul>
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Customer lifecycle tracking</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Shared account notes</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Retention and churn alerts</p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          {/*Founders & executives */}
          <div className="space-y-4">
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h3 className="text-heading-4" id="founders">
                  Founders &amp; executives
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  <span className="text-secondary dark:text-accent">Make data-driven decisions without the noise.</span>
                  <br />
                  NextSaaS gives leadership teams the visibility they need across every department—all in one unified
                  view.
                </p>
              </RevealAnimation>
            </div>
            {/* key benefits  */}
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Key Benefits</h4>
              </RevealAnimation>
              <ul>
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Executive reporting dashboards</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Company-wide metrics overview</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Custom views for stakeholders</p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          {/*Freelancers & small teams */}
          <div className="space-y-4">
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h3 className="text-heading-4" id="freelancers">
                  Freelancers &amp; small teams
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  <span className="text-secondary dark:text-accent">Stay organized. Scale without stress.</span>
                  <br />
                  Even small teams can get big results. Use NextSaaS to manage your pipeline, track progress, and
                  automate repetitive tasks.
                </p>
              </RevealAnimation>
            </div>
            {/* key benefits  */}
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Key Benefits</h4>
              </RevealAnimation>
              <ul>
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Task and client tracking</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Custom workflows</p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span
                      className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <p>Easy setup, no technical skills needed</p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          {/* How to manage or delete your data  */}
          <div className="space-y-6">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4" id="data-management">
                How to manage or delete your data
              </h3>
            </RevealAnimation>

            <ul className="space-y-3">
              <RevealAnimation delay={0.4}>
                <li className="flex items-center gap-2">
                  <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                  <p>You can update your profile details anytime from your account dashboard.</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-2">
                  <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                  <p>
                    To request a complete data deletion or data export, simply send an email to:
                    <span className="text-secondary">support@nextsaas.com</span>
                  </p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

FinanceAndOperation.displayName = 'FinanceAndOperation';
export default FinanceAndOperation;
