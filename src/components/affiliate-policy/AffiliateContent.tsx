import RevealAnimation from '../animation/RevealAnimation';

interface ContentSection {
  id: string;
  title: string;
  description?: string;
  listItems?: string[];
}

interface PaymentInfo {
  id: string;
  text: string;
}

interface PayoutInfo {
  id: string;
  text: string;
}

const AffiliateContent = () => {
  // Main content sections with simple descriptions
  const contentSections: ContentSection[] = [
    {
      id: 'how-it-works',
      title: 'How does it work?',
      description:
        "As a NextSaaS affiliate, you are part of our extended sales team.\nFor every customer you refer who completes a purchase, you'll earn a commission. The more you refer, the more you can earn — there's no limit!",
    },
    {
      id: 'track-sales',
      title: 'How will I know if I made a sale?',
      description:
        "You'll receive a notification when a referred customer makes a purchase. You can also track your sales and commissions in real-time from your affiliate dashboard.",
    },
    {
      id: 'cookie-duration',
      title: 'Cookie duration',
      description:
        "When a visitor clicks your link, a 30-day cookie is set. If they complete a purchase within that period, you receive the commission — unless another affiliate's link overwrites yours.",
    },
  ];

  // Payment information items
  const paymentItems: PaymentInfo[] = [
    { id: 'paypal', text: 'All payments are processed via PayPal.' },
    { id: 'account-info', text: 'Ensure your PayPal account information is correctly set in your affiliate profile.' },
  ];

  // Payout information items
  const payoutItems: PayoutInfo[] = [
    { id: 'monthly', text: 'Payouts are made at the end of each month.' },
    { id: 'minimum', text: 'Minimum payout threshold: $100.' },
    { id: 'verification', text: 'Commissions must be verified manually before release.' },
    { id: 'example', text: 'For example, commissions earned in May will be paid by June 30.' },
  ];

  return (
    <section className="bg-background-1 dark:bg-background-6 py-28 md:py-36 lg:py-44 2xl:py-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[848px] space-y-[70px]">
          {/* Simple content sections */}
          {contentSections.map((section, index) => (
            <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
              <div className="mt-10 space-y-3">
                <h2 className="text-heading-4">{section.title}</h2>
                <p className="">
                  {section.description?.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < section.description!.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </RevealAnimation>
          ))}

          {/* Payment information section */}
          <RevealAnimation delay={0.3}>
            <div className="mt-10 space-y-3">
              <h2 className="text-heading-4">How do I get paid?</h2>
              <ul className="space-y-2">
                {paymentItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Payout information section */}
          <RevealAnimation delay={0.4}>
            <div className="mt-10 space-y-3">
              <h2 className="text-heading-4">When are payouts made?</h2>
              <ul className="space-y-2">
                {payoutItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AffiliateContent;
