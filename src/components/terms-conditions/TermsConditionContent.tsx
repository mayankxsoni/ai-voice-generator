import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Terms &amp; conditions</h2>
            <div className="space-y-7">
              <p>
                This site, nextsaas.com (hereafter referred to as NextSaaS, site, or website) is owned and operated by
                NextSaaS Technologies LLC (hereafter referred to as NextSaaS, we, or company).
              </p>
              <p>
                Please carefully read, review, and understand our Terms and Conditions before using any services or
                products from nextsaas.com. Your access to and use of this website and its products indicate that you
                accept and agree to be bound by these terms and conditions.
              </p>
              <p>
                If you do not agree with these terms, you should leave the site immediately and not use any of the
                materials or services available here.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Limitation of liability</h3>
              <p>
                Under no circumstances shall NextSaaS be liable for any direct, indirect, incidental, special, or
                consequential damages, including but not limited to loss of data, profits, or business interruption,
                arising out of the use, or inability to use, the materials on this site, even if NextSaaS or an
                authorized representative has been advised of the possibility of such damages.
              </p>
              <p>
                If your use of materials from this site results in the need for servicing, repair, or correction of
                equipment or data, you assume all associated costs.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. License</h3>
              <p>
                NextSaaS services, platforms, and tools are provided under a commercial license agreement. Each
                subscription or license purchased includes access to updates and support for 365 days from the
                completion of the order.
              </p>
              <p>
                License activation is necessary to receive updates and premium support. You are not permitted to resell,
                redistribute, or offer NextSaaS products or services, modified or unmodified, without our written
                consent.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Ownership and liability</h3>
              <p>
                All NextSaaS products, solutions, and materials remain the intellectual property of NextSaaS
                Technologies LLC. You may not claim ownership of our services, whether modified or unmodified.
              </p>
              <p>
                Our products and services are provided &quot;as is&quot; without warranty of any kind, expressed or
                implied. NextSaaS is not liable for any losses or damages resulting from the use or inability to use its
                products.
              </p>
              <p>
                User accounts and product licenses are
                <strong className="!text-secondary dark:!text-accent font-bold"> non-transferable </strong>. For
                agencies and development partners: Please ensure your clients purchase their own licenses if they
                require direct support access.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. Refund policy</h3>
              <p>
                We believe you&apos;ll love NextSaaS! Still, if you&apos;re not satisfied, we offer a 14-day
                no-questions-asked refund policy. Simply contact our support team within 14 days of your original
                purchase, and we&apos;ll issue a full refund. We might ask for feedback to help us improve, but
                you&apos;re under no obligation to share.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div>
              <LinkButton
                href="/refund-policy"
                btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 ">
                Learn more about our refund policy
              </LinkButton>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Warranty</h3>
              <p>
                NextSaaS services are provided without any warranty, either expressed or implied. We do not guarantee
                full compatibility with all browsers, devices, third-party plugins, or external systems. Before
                purchasing, you may review demos or contact our support team to verify compatibility with your setup.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Account termination and suspension</h3>
              <p>
                NextSaaS reserves the right to suspend or terminate any user account without prior notice for reasons
                including but not limited to
              </p>
              <ul>
                <li>Abusive, defamatory, or malicious behavior towards NextSaaS staff or customers</li>
                <li>Spreading false information or misleading reviews</li>
                <li>Unauthorized resale, distribution, or promotion of competitor products</li>
                <li>Involvement in hacking, spamming, piracy, or illegal activities</li>
                <li>Security threats due to account compromise or unauthorized sharing</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>7. Privacy policy</h3>
              <p>
                We value your privacy. NextSaaS does not sell, rent, or share your personal information with third
                parties. Your data is used solely for purposes such as
              </p>
              <ul>
                <li>Order processing</li>
                <li>Account management</li>
                <li>Billing disputes</li>
                <li>Fraudulent activities</li>
                <li>Legal compliance</li>
              </ul>
              <p>
                By using NextSaaS services, you consent to the collection and use of your data by our Privacy Policy.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div>
              <LinkButton
                href="/privacy-policy"
                btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 ">
                Read our detailed privacy policy
              </LinkButton>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
