import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

// The service detail pages were removed — every "services" link scrolls to the
// services section on the home page instead.
export const SERVICES_HREF = '/#services';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'our-team', label: 'Our Team', href: './team' },
      { id: 'career', label: 'Career', href: './career' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: './why-choose-us' },
      { id: 'our-manifesto', label: 'Our Manifesto', href: './our-manifesto' },
      { id: 'contact-us', label: 'Contact Us', href: './contact-us' },
      { id: 'press', label: 'Press', href: './press' },
    ],
  },

  {
    id: 'services',
    title: 'Services',
    submenu: [{ id: 'all-services', label: 'All Services', href: SERVICES_HREF }],
  },

  {
    id: 'work',
    title: 'Our Work',
    submenu: [
      { id: 'case-studies', label: 'Case Studies', href: './case-study' },
      { id: 'success-stories', label: 'Success Stories', href: './success-stories' },
      { id: 'testimonials', label: 'Testimonials', href: './testimonial' },
      { id: 'customers', label: 'Customers', href: './customer' },
      { id: 'use-cases', label: 'Use Cases', href: './use-case' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: './pricing' },
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'support', label: 'Support', href: './support' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: './refund-policy' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Career', href: '/career' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Animated Explainer Video', href: SERVICES_HREF },
      { label: 'Product Launch Videos', href: SERVICES_HREF },
      { label: 'App Demo Videos', href: SERVICES_HREF },
      { label: 'Feature Launch Videos', href: SERVICES_HREF },
      { label: 'Product Demo Videos', href: SERVICES_HREF },
      { label: 'Animated Promo Video Ads', href: SERVICES_HREF },
      { label: 'AI Powered Video Ads', href: SERVICES_HREF },
      { label: 'Tutorial Video', href: SERVICES_HREF },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
    ],
  },
];
