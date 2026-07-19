import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - AI Voice Generator || NextSaaS',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="bg-white"
        badgeText="Get started"
        ctaBtnText="Contact us"
        ctaHeading="Get in touch"
        description="We're here to help you with your inquiries and needs. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible."
      />
    </main>
  );
};

export default ContactUs;
