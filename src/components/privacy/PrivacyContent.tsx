import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Personal information we collect',
  content:
    'When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. Additionally, as you browse the Site, we collect information about the individual pages you view, what websites or search terms referred you to the Site, and how you interact with the Site. We call this automatically-collected information <span class="text-secondary">"Device Information."</span>',
};

const deviceInfoItems: ListItem[] = [
  {
    title: 'Cookies',
    content:
      'Data files placed on your device, often including an anonymous unique identifier. ( Learn more about cookies and how to disable them: <a href="http://www.allaboutcookies.org" class="text-secondary">http://www.allaboutcookies.org</a> )',
  },
  {
    title: 'Log Files',
    content:
      'Track actions on the Site and collect IP address, browser type, ISP, referring/exit pages, and timestamps.',
  },
  {
    title: 'Web Beacons, Tags, and Pixels',
    content: 'Electronic files to monitor site usage and interaction.',
  },
  {
    title: 'Google Analytics and Pixels',
    content: 'Collect traffic-related information and interaction behavior.',
  },
];

const orderInfoText =
  'When you make or attempt to purchase through the Site, we collect information such as your name, email address, billing address, shipping address, payment details, and any other relevant data necessary to process your order.';

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Your name',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    id: 'billing-shipping-addresses',
    name: 'billing-shipping-addresses',
    label: 'Billing and shipping addresses',
    placeholder: 'Billing and shipping addresses',
    type: 'text',
  },
  {
    id: 'payment-information',
    name: 'payment-information',
    label: 'Payment information',
    placeholder: 'credit card, PayPal, or bank details',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'Enter your email address',
    type: 'email',
  },
];

const useInfoSection: ListSection = {
  title: 'How we use your personal information',
  description: 'We use the collected Order Information to:',
  items: [
    { content: 'Process your orders, payments, and generate invoices' },
    { content: 'Communicate with you' },
    { content: 'Screen for potential fraud or risks' },
    {
      content: 'Provide you with information or promotions related to our services, when aligned with your preferences',
    },
  ],
};

const deviceInfoUsage: ListItem[] = [
  { content: 'Improve and optimize the Site experience' },
  { content: 'Analyze customer interactions for performance tracking' },
  { content: 'Screen for potential risk and fraud' },
];

const sharingInfoSection: ListSection = {
  title: 'Sharing your personal information',
  description:
    'We share your Personal Information with trusted third-party service providers to help us operate effectively:',
  items: [
    {
      content:
        'Google Analytics: To understand customer interactions and optimize experience (Learn more: <a href="#" class="text-secondary">Google Privacy Policy</a>)',
    },
    { content: 'Payment processors (PayPal, Stripe)' },
  ],
};

const rightsSection: ListSection = {
  title: 'Your rights',
  description: 'If you are a resident of the European Economic Area (EEA):',
  items: [
    { content: 'You have the right to access, update, or delete your personal information.' },
    {
      content:
        'If you wish to exercise these rights, please contact us at <a href="mailto:support@nextsaas.com" class="text-secondary">support@nextsaas.com</a>',
    },
  ],
};

const simpleSections: PrivacySection[] = [
  {
    title: 'Do not track',
    content:
      'Please note, we do not alter our Site\'s data collection practices when we detect a "Do Not Track" signal from your browser.',
  },
  {
    title: 'Data retention',
    content: 'We will retain your Order Information for our records unless you ask us to delete this information.',
  },
  {
    title: 'Minors',
    content: 'Our Site is not intended for individuals under the age of 18.',
  },
  {
    title: 'Changes',
    content:
      'We may update this Privacy Policy periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          {/* Header Section */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>Data protection guidelines</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                <span className="text-secondary">NextSaaS</span> is a product operated by
                <span className="text-secondary">NextSaaS Technologies LLC</span>. We specialize in property management
                solutions, empowering businesses worldwide to streamline their operations efficiently. We are committed
                to protecting your privacy and handling your information transparently.
              </p>
            </RevealAnimation>
          </div>

          {/* Policy Intro */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>NextSaaS privacy policy</h4>
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you
                visit, subscribe, register, or make a purchase from
                <Link href="https://nextsaas.com" className="text-secondary">
                  https://nextsaas.com
                </Link>
                (the &quot;Site&quot;).
              </p>
            </div>
          </RevealAnimation>
          {/* Personal Information Collection */}
          <div className="space-y-6">
            <RevealAnimation delay={0.4}>
              <div className="space-y-2">
                <h4>{personalInfoSection.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                {deviceInfoItems.map((item, index) => (
                  <li key={index + 1}>
                    <strong className="text-secondary font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
          {/* Order Information Section with Form */}
          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="mb-[70px] text-left">
                    <p className="max-w-[550px]">{orderInfoText}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="w-full max-w-[595px] self-end overflow-hidden rounded-[20px]">
                    <Image src={privacy} className="size-full object-cover" alt="support-contact" />
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="rounded-[20px] bg-white p-6 lg:p-[42px]">
                    {formFields.map((field, index) => (
                      <fieldset key={field.id} className={`space-y-2 ${index < formFields.length - 1 ? 'mb-8' : ''}`}>
                        <label htmlFor={field.id} className="text-tagline-1 text-secondary block font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="border-stroke-10 bg-background-1 focus-visible:outline-ns-linen placeholder:text-tagline-1 placeholder:text-secondary/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                        />
                      </fieldset>
                    ))}
                    <fieldset className="mt-4 mb-4 flex items-center gap-2">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input
                          id="agree-terms"
                          type="checkbox"
                          className="peer sr-only"
                          aria-label="I agree with the terms and conditions"
                          required
                        />
                        <span className="border-stroke-10 after:bg-ns-linen peer-checked:border-ns-linen relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      </label>
                      <label htmlFor="agree-terms" className="text-tagline-3 text-secondary/60 cursor-pointer">
                        I agree with the{' '}
                        <Link href="/terms-conditions" className="text-ns-linen text-tagline-3 underline">
                          terms and conditions
                        </Link>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                      Submit
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* How We Use Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{useInfoSection.title}</h4>
                <p>{useInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                {useInfoSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
              <div>
                <p className="text-secondary">We use the collected Device Information to:</p>
                <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                  {deviceInfoUsage.map((item, index) => (
                    <li key={index + 1}>{item.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Sharing your personal information</h4>
                <p>
                  We share your Personal Information with trusted third-party service providers to help us operate
                  effectively:
                </p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                {sharingInfoSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{rightsSection.title}</h4>
                <p>{rightsSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 list-inside space-y-3 font-normal">
                {rightsSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
