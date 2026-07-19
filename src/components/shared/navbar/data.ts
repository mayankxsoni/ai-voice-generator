import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

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
    submenu: [
      { id: 'explainer-videos', label: 'Explainer Videos', href: './services' },
      { id: 'motion-graphics', label: 'Motion Graphics', href: './services' },
      { id: 'script-writing', label: 'Script Writing', href: './services' },
      { id: 'brand-videos', label: 'Brand Videos', href: './services' },
      { id: 'social-cuts', label: 'Social Cuts', href: './services' },
      { id: 'process', label: 'Our Process', href: './process' },
    ],
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
      { label: 'Explainer Videos', href: '/services' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Our Process', href: '/process' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '/support' },
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
