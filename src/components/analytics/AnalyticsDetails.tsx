import analytics2 from '@public/images/ns-img-368.png';
import analytics3 from '@public/images/ns-img-369.png';
import analytics1 from '@public/images/ns-img-599.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinkV3 from '../shared/SocialLinkV3';

const AnalyticsDetails = () => {
  const social = {
    facebook: 'https://www.facebook.com',
    dribble: 'https://dribbble.com',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
  };
  return (
    <section className="analytics pt-[70px] pb-[100px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-18">
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h5>Built for visibility</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Our real-time dashboard gives you a complete overview of your operations, performance, and growth—at a
                glance.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.1}>
              <li>
                <span className="text-secondary/60">Live KPI tracking</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Visualized trends and comparisons</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Custom widgets and modules</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Customizable for every team</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Every team has different goals. With NextSaaS, you can tailor dashboards by department, role, or
                individual needs.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">
                  <strong className="text-secondary">Finance:</strong>
                  Monitor revenue, expenses, cash flow
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">
                  <strong className="text-secondary">Marketing:</strong>
                  Track conversions, ROAS, campaign reach
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">
                  <strong className="text-secondary">Sales:</strong>
                  Follow pipeline health and deal velocity
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">
                  <strong className="text-secondary">Product:</strong>
                  View feature usage, retention, churn
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">
                  <strong className="text-secondary">Support:</strong>
                  Analyze ticket trends and resolution times
                </span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Drill down, zoom out</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Start with the big picture, then dive into the details. Filter, segment, and compare data over time to
                uncover meaningful insights.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Custom date ranges </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Custom date ranges </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Comparison modes (week over week, month over month)</span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60"> Export to CSV/PDF for sharing</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="grid-column-12 grid gap-y-[50px]">
          <RevealAnimation delay={0.2}>
            <div className="cols-span-12">
              <figure>
                <Image src={analytics1} alt="analytics" className="rounded-[20px]" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="cols-span-12 flex flex-col gap-[50px] md:col-span-6 md:flex-row">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image src={analytics2} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure>
                <Image src={analytics3} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Integrate your data sources</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60">
                Nextsaas connects seamlessly with the tools you already use, so all your insights live in one place.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Stripe, quickbooks, xero </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Google analytics, facebook ads</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60"> Hubspot, salesforce</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Security &amp; control</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                All dashboards are built with privacy in mind. Control access at every level, from personal views to
                organization-wide reports.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Role-based permissions</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60">Encrypted data storage</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60"> Gdpr &amp; soc 2 compliant</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <h5>Share this post</h5>
          </RevealAnimation>
          {/*Social links*/}
          <RevealAnimation delay={0.2}>
            <div className="flex items-center justify-start">
              <SocialLinkV3 social={social} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AnalyticsDetails.displayName = 'AnalyticsDetails';
export default AnalyticsDetails;
