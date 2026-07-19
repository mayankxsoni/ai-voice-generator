# AI Voice Generator - NextSaaS Template

A modern, production-ready Next.js 16 SaaS template built for AI-powered voice generation tools. Features a complete set of pages, components, and functionality with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **40+ Pages** - Comprehensive page collection for AI Voice Generator SaaS
- ✅ **200+ Components** - Reusable React components with TypeScript
- ✅ **Markdown Support** - Blog posts, whitepapers, case studies, services, and more
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Built-in metadata and optimization

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Markdown Content**: Easy content management with gray-matter

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5.0
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.13.0, Lenis 1.3.8
- **Icons**: Custom icon font system
- **Maps**: Leaflet for interactive maps
- **Carousels**: Swiper for sliders and carousels
- **Theming**: next-themes for dark mode support

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 20.0.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 2. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ai-voice-generator-ns-next/
├── public/                     # Static assets
│   ├── images/                 # Images (285 files: PNG, SVG, JPG)
│   └── fonts/                  # Custom icon fonts (EOT, SVG, TTF, WOFF)
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── about/              # About page
│   │   ├── affiliate-policy/   # Affiliate policy page
│   │   ├── affiliates/         # Affiliates program page
│   │   ├── analytics/          # Analytics page
│   │   ├── blog/               # Blog pages
│   │   │   └── [slug]/         # Dynamic blog post pages
│   │   ├── brandkit/           # Brand kit page
│   │   ├── career/             # Career pages
│   │   │   └── [slug]/         # Dynamic job pages
│   │   ├── case-study/         # Case study pages
│   │   │   └── [slug]/         # Dynamic case study pages
│   │   ├── changelog/          # Changelog page
│   │   ├── contact-us/         # Contact page
│   │   ├── customer/           # Customer pages
│   │   │   └── [slug]/         # Dynamic customer pages
│   │   ├── documentation/      # Documentation page
│   │   ├── download/           # Download page
│   │   ├── faq/                # FAQ page
│   │   ├── features/           # Features page
│   │   ├── gdpr/               # GDPR page
│   │   ├── glossary/           # Glossary page
│   │   ├── integration/        # Integration page
│   │   ├── legal/              # Legal notice page
│   │   ├── login/              # Login page
│   │   ├── our-manifesto/      # Our manifesto page
│   │   ├── our-services/       # Our services pages
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── press/              # Press page
│   │   ├── pricing/            # Pricing page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── process/            # Process page
│   │   ├── referral-program/   # Referral program page
│   │   ├── refund-policy/      # Refund policy page
│   │   ├── security/           # Security page
│   │   ├── services/           # Services pages
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── signup/             # Signup page
│   │   ├── success-stories/    # Success stories page
│   │   ├── support/            # Support page
│   │   ├── team/               # Team pages
│   │   │   └── [slug]/         # Dynamic team member pages
│   │   ├── terms-conditions/   # Terms & conditions page
│   │   ├── testimonial/        # Testimonial page
│   │   ├── tutorial/           # Tutorial page
│   │   ├── use-case/           # Use case page
│   │   ├── whitepaper/         # Whitepaper pages
│   │   │   └── [slug]/         # Dynamic whitepaper pages
│   │   ├── why-choose-us/      # Why choose us page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components (200+)
│   │   ├── about/              # About page components
│   │   ├── affiliate-policy/   # Affiliate policy components
│   │   ├── affiliates/         # Affiliates components
│   │   ├── analytics/          # Analytics components
│   │   ├── animation/          # Animation components
│   │   ├── authentication/     # Auth components
│   │   ├── blog/               # Blog components
│   │   ├── blog-details/       # Blog detail components
│   │   ├── brand-kit/          # Brand kit components
│   │   ├── career/             # Career components
│   │   ├── case-study/         # Case study components
│   │   ├── change-log/         # Changelog components
│   │   ├── contact-page/       # Contact components
│   │   ├── customer/           # Customer components
│   │   ├── customer-details/   # Customer detail components
│   │   ├── documentation/      # Documentation components
│   │   ├── download/           # Download components
│   │   ├── faq/                # FAQ components
│   │   ├── features/           # Features components
│   │   ├── gdpr/               # GDPR components
│   │   ├── glossary/           # Glossary components
│   │   ├── home/               # Homepage components
│   │   ├── integration/        # Integration components
│   │   ├── legal-notice/       # Legal notice components
│   │   ├── our-manifesto/      # Manifesto components
│   │   ├── press/              # Press components
│   │   ├── pricing/            # Pricing components
│   │   ├── privacy/            # Privacy components
│   │   ├── process/            # Process components
│   │   ├── referral-program/   # Referral components
│   │   ├── refund-policy/      # Refund policy components
│   │   ├── security-compliance/# Security components
│   │   ├── service-details/    # Service detail components
│   │   ├── services/           # Services components
│   │   ├── shared/             # Shared/reusable components
│   │   │   ├── cta/            # CTA components
│   │   │   ├── footer/         # Footer components
│   │   │   ├── mobile-menu/    # Mobile menu components
│   │   │   ├── navbar/         # Navigation components
│   │   │   ├── reviews/        # Review components
│   │   │   └── testimonial/    # Testimonial components
│   │   ├── success-stories/    # Success stories components
│   │   ├── support/            # Support components
│   │   ├── team/               # Team components
│   │   ├── team-details/       # Team detail components
│   │   ├── terms-conditions/   # Terms components
│   │   ├── testimonial/        # Testimonial page components
│   │   ├── tutorial/           # Tutorial components
│   │   ├── ui/                 # Core UI components
│   │   ├── use-case/           # Use case components
│   │   ├── white-paper/        # Whitepaper components
│   │   ├── whitepaper-details/ # Whitepaper detail components
│   │   └── why-choose-us/      # Why choose us components
│   ├── context/                # React contexts
│   │   ├── AppContext.tsx      # Main app context
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                   # Static data and content
│   │   ├── blogs/              # 28 Markdown blog posts
│   │   ├── career/             # 6 Markdown job listings
│   │   ├── case-study/         # 16 Markdown case studies
│   │   ├── customer/           # 11 Markdown customer stories
│   │   ├── services/           # 7 Markdown service descriptions
│   │   ├── team/               # 16 Markdown team member profiles
│   │   ├── whitepaper/         # 13 Markdown whitepapers
│   │   ├── json/               # JSON data files
│   │   │   ├── changelog/      # Changelog data
│   │   │   ├── faq/            # FAQ data
│   │   │   ├── glossary/       # Glossary data
│   │   │   └── testimonials/   # Testimonials data
│   │   ├── achievements.ts     # Achievements data
│   │   └── faq.ts              # FAQ data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useActiveSection.ts
│   │   ├── useDividerExpand.ts
│   │   ├── useMobileMenu.ts
│   │   ├── useModal.ts
│   │   ├── useScrollHeader.ts
│   │   └── useWordAnimation.ts
│   ├── icons/                  # Icon components
│   │   ├── index.tsx
│   │   └── menu-icon/
│   ├── interface/              # TypeScript interfaces
│   │   └── index.ts
│   ├── styles/                 # CSS modules and styles
│   │   ├── badge.css
│   │   ├── base.css
│   │   ├── button.css
│   │   ├── common.css
│   │   ├── custom-swiper.css
│   │   ├── header.css
│   │   ├── icon-font.css
│   │   ├── lenis.css
│   │   ├── number-animation.css
│   │   ├── typography.css
│   │   ├── variables.css
│   │   └── vendor/             # Third-party styles
│   └── utils/                  # Utility functions
│       ├── cn.ts               # Class name utility
│       ├── font.ts             # Font configuration
│       ├── generateMetaData.ts # SEO metadata generator
│       ├── generateTOC.ts      # Table of contents generator
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       └── springer.ts         # Animation springs
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint 9**: JavaScript/TypeScript linting
- **Prettier 3**: Code formatting with Tailwind CSS plugin

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Tailwind**: Update Tailwind configuration for design tokens

### Content Management

| Content Type    | Location                      | Count |
| --------------- | ----------------------------- | ----- |
| Blog Posts      | `src/data/blogs/`             | 28    |
| Services        | `src/data/services/`          | 7     |
| Team Members    | `src/data/team/`              | 16    |
| Case Studies    | `src/data/case-study/`        | 16    |
| Whitepapers     | `src/data/whitepaper/`        | 13    |
| Customers       | `src/data/customer/`          | 11    |
| Career Listings | `src/data/career/`            | 6     |
| FAQ Data        | `src/data/json/faq/`          | -     |
| Changelog       | `src/data/json/changelog/`    | -     |
| Glossary        | `src/data/json/glossary/`     | -     |
| Testimonials    | `src/data/json/testimonials/` | -     |

### Adding New Pages

1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Add `page.tsx` file with your page component
3. Create corresponding components in `src/components/`
4. Update navigation data if needed in `src/data/navbar-data.ts`

Example:

```tsx
// src/app/new-page/page.tsx
import NewPageComponent from '@/components/new-page/NewPageComponent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'New Page - AI Voice Generator',
  description: 'Description of the new page',
};

const NewPage = () => {
  return (
    <main>
      <NewPageComponent />
    </main>
  );
};

export default NewPage;
```

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Build Output

- Static assets are optimized and compressed
- JavaScript is minified and tree-shaken
- CSS is purged and optimized
- Images are automatically optimized by Next.js
- Static pages are pre-rendered for better performance

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **SEO Optimization**: Built-in metadata and Open Graph support
- **Turbopack**: Fast development builds

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**: Static site deployment with automatic builds
- **Railway**: Full-stack deployment with database support
- **DigitalOcean**: App Platform with automatic scaling
- **AWS**: Amplify or EC2 for enterprise solutions

### Deployment Steps

1. **Build the project**: Run `npm run build` locally to test
2. **Choose platform**: Select your preferred hosting provider
3. **Configure environment**: Set up any required environment variables
4. **Deploy**: Follow platform-specific deployment instructions

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Support

For support and questions:

- **Email**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days

---

**Made with ❤️ by [Pixel71](mailto:hello@pixel71.com)**

_Happy coding!_
