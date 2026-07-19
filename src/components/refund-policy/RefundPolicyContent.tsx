import RevealAnimation from '../animation/RevealAnimation';

interface PolicySection {
  title: string;
  content: string;
}

interface RefundStep {
  step: number;

  title: string;
  description: string;
}

interface ListSection {
  title: string;
  description: string;
  items: string[];
}

const policySections: PolicySection[] = [
  {
    title: 'Return and refund guidelines',
    content:
      'At NextSaaS, we are committed to providing you with the best possible service and experience. However, if for any reason our platform does not meet your expectations, we offer a simple and hassle-free refund policy.',
  },
  {
    title: '14-Day money-back guarantee',
    content:
      'We are confident that you will love using NextSaaS. Still, if you are not fully satisfied, we offer a full refund within 14 days of your original purchase — no questions asked.',
  },
];

const refundSteps: RefundStep[] = [
  {
    step: 1,
    title: 'Submit a support ticket through our [Contact Page].',
    description:
      "If you're experiencing any issues or need assistance, our support team is here to help. Simply visit our [Contact Page] and fill out the support ticket form with the relevant details.",
  },
  {
    step: 2,
    title: 'Share your order ID, email, and a quick description.',
    description:
      'Once we receive this information, our team will review it and get back to you as soon as possible. Thank you for your cooperation!',
  },
  {
    step: 3,
    title: 'Our team will review and process your refund request.',
    description:
      "Thank you for reaching out. We've received your refund request and our team is currently reviewing the details.",
  },
];

const conditionsForRefund: ListSection = {
  title: 'Conditions for refund',
  description: 'You are eligible for a full refund if',
  items: [
    'You request a refund within 14 days from the date of purchase.',
    'You can provide a valid reason if requested (optional but helps us improve).',
    'You request a refund after the 14-day period.',
    'You have violated our Terms and Conditions.',
    'You simply decide not to use the product anymore without a valid issue.',
    'You requested a refund for issues already resolved by our support team.',
  ],
};

const nonRefundableSituations: ListSection = {
  title: 'Non-refundable situations',
  description:
    'NextSaaS reserves the right to suspend or terminate any user account without prior notice for reasons including but not limited to',
  items: [
    'Purchases made through unauthorized sources.',
    'Requests based on lack of features not available in the product description.',
    'Downgrades from a higher-tier plan after extensive usage.',
  ],
};

const additionalSections: PolicySection[] = [
  {
    title: 'Refund processing time',
    content:
      'Once your refund is approved, it may take 5–10 business days for the amount to reflect in your bank statement, depending on your payment provider.',
  },
  {
    title: 'We appreciate your feedback',
    content:
      'If you choose to request a refund, we would be grateful if you could let us know why. Your feedback helps us improve NextSaaS for future users!',
  },
];

const RefundPolicyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 md:pb-[200px] xl:pt-[180px]">
      <div className="main-container">
        <div className="refund-policy space-y-[70px]">
          {/* Initial Policy Sections */}
          {policySections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.3 + index * 0.1}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </RevealAnimation>
          ))}

          {/* Conditions for Refund */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h2>{conditionsForRefund.title}</h2>
              <p>{conditionsForRefund.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {conditionsForRefund.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* How to Request a Refund */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-3">
              <h2>How to request a refund</h2>
              <p>Simply follow these easy steps</p>
              <ol className="mt-8 mb-6 space-y-8">
                {refundSteps.map((step, index) => (
                  <li key={step.step}>
                    <RevealAnimation delay={0.5 + index * 0.1}>
                      <div className="bg-ns-ivory dark:bg-background-6 flex max-w-[596px] items-start gap-4 rounded-2xl px-7 py-5 sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6">
                        <div className="bg-ns-linen text-tagline-1 flex size-10 shrink-0 items-center justify-center rounded-full font-semibold text-white">
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <p className="text-tagline-1 text-secondary dark:text-accent leading-[27px] font-medium sm:text-lg">
                            {step.title}
                          </p>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </li>
                ))}
              </ol>
              <RevealAnimation delay={0.7}>
                <p>
                  Refunds will be issued to the{' '}
                  <span className="text-secondary dark:text-accent">original payment method</span> used at checkout.
                </p>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          {/* Non-refundable Situations */}
          <RevealAnimation delay={0.9}>
            <div className="space-y-3">
              <h2>{nonRefundableSituations.title}</h2>
              <p>{nonRefundableSituations.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {nonRefundableSituations.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Additional Sections */}
          {additionalSections.map((section) => (
            <RevealAnimation key={section.title} delay={0.8}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyContent;
