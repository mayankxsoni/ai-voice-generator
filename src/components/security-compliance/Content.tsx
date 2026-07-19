import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

interface ListItem {
  text: string;
}

interface ContentSection {
  id: string;
  title: string;
  description: string;
  listItems?: ListItem[];
  additionalText?: string;
}

const contentSections: ContentSection[] = [
  {
    id: '1',
    title: 'Customer trust comes first',
    description:
      "At NextSaaS, protecting your data is more than a promise it's a foundation. Every product decision starts with one question: Is this secure for our customers? We take your privacy, integrity, and business data protection seriously.",
  },
  {
    id: '2',
    title: 'Built for enterprise-grade security',
    description:
      "Our infrastructure is designed with end-to-end encryption, zero-trust access, and multi-layer defense systems that meet modern compliance standards. Whether you're a startup or global enterprise, NextSaaS ensures your operations run safely and confidently.",
  },
  {
    id: '3',
    title: 'Our Commitment to Security',
    description: 'We continuously improve our systems through:',
    listItems: [
      {
        text: 'Dedicated Security Experts monitoring and managing platform integrity 24/7.',
      },
      {
        text: 'Regular Compliance Audits aligned with industry standards such as ISO 27001, SOC 2, and GDPR.',
      },
      {
        text: 'Advanced Threat Detection powered by AI to identify and neutralize risks before they escalate.',
      },
    ],
    additionalText:
      "Our cloud platform's infrastructure and operations are certified compliant with the following industry best practice standards and frameworks:",
  },
  {
    id: '4',
    title: 'Transparency & trust',
    description:
      'We believe in full transparency. Every customer gets access to our updated security whitepapers, audit results, and incident response procedures—so you always know how your data is protected.',
  },
  {
    id: '5',
    title: 'Secure cloud Infrastructure',
    description:
      'NextSaaS operates on trusted global cloud partners with built-in redundancy, encrypted backups, and continuous uptime monitoring. Our team ensures operational resilience, no matter the scale or complexity of your business.',
  },
];

const Content = () => {
  return (
    <section className="pb-16 lg:pb-20 xl:pb-28">
      <div className="main-container">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start gap-y-5 lg:flex-row lg:gap-x-5">
          <RevealAnimation delay={0.1}>
            <div className="sticky top-28 w-full max-w-[350px] space-y-2">
              <p className="text-secondary dark:text-accent">Customer trust comes first</p>
              <p>Form 8937</p>
            </div>
          </RevealAnimation>
          <div className="space-y-6">
            {contentSections.map((section, index) => {
              const delay = (index + 2) * 0.1;

              return (
                <RevealAnimation key={section.id} delay={delay}>
                  <div className={section.listItems ? '' : 'space-y-2'}>
                    <h2 className="text-heading-5 mb-2 font-normal">{section.title}</h2>
                    <p>{section.description}</p>
                    {section.listItems && (
                      <>
                        <ul className="mt-4 mb-6 space-y-3">
                          {section.listItems.map((item) => (
                            <li key={item.text} className="flex items-center gap-x-2">
                              <span className="bg-secondary dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                                <CheckIcon className="fill-accent dark:fill-secondary" />
                              </span>
                              <p className="text-secondary/80 dark:text-accent/80">{item.text}</p>
                            </li>
                          ))}
                        </ul>
                        {section.additionalText && <p>{section.additionalText}</p>}
                      </>
                    )}
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
