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
      { id: 'animated-explainer', label: 'Animated Explainer Video', href: '/services/animated-explainer' },
      { id: 'product-launch', label: 'Product Launch Videos', href: '/services/product-launch' },
      { id: 'app-demo', label: 'App Demo Videos', href: '/services/app-demo' },
      { id: 'feature-launch', label: 'Feature Launch Videos', href: '/services/feature-launch' },
      { id: 'product-demo', label: 'Product Demo Videos', href: '/services/product-demo' },
      { id: 'promo-ads', label: 'Animated Promo Video Ads', href: '/services/promo-ads' },
      { id: 'ai-ads', label: 'AI Powered Video Ads', href: '/services/ai-ads' },
      { id: 'tutorial', label: 'Tutorial Video', href: '/services/tutorial' },
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
      { label: 'Animated Explainer Video', href: '/services/animated-explainer' },
      { label: 'Product Launch Videos', href: '/services/product-launch' },
      { label: 'App Demo Videos', href: '/services/app-demo' },
      { label: 'Feature Launch Videos', href: '/services/feature-launch' },
      { label: 'Product Demo Videos', href: '/services/product-demo' },
      { label: 'Animated Promo Video Ads', href: '/services/promo-ads' },
      { label: 'AI Powered Video Ads', href: '/services/ai-ads' },
      { label: 'Tutorial Video', href: '/services/tutorial' },
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
