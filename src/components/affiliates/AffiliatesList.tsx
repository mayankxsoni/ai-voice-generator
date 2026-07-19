import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const affiliateSectionsData: AffiliateSection[] = [
  {
    id: '1',
    title: 'Affiliate benefits',
    description:
      "Joining our affiliate program comes with a host of valuable perks designed to reward your efforts and grow with your success. As an affiliate, you'll earn competitive commissions for every sale you refer, with no caps on your potential earnings.",
    items: [
      'Earn up to $200 from a single sale',
      'Ready-to-use creatives (banners, social media kits, templates)',
      'Mentorship from affiliate marketing experts',
      'Weekly tips and updates via email',
      'Exclusive offers and promotional campaigns',
      'Real-time sales tracking dashboard',
      'Dedicated support for affiliates',
    ],
  },
  {
    id: '2',
    title: 'What you can do',
    description:
      'No matter where you are or what your background is, there are meaningful ways to make a difference. Start by educating yourself on the issues that matter to you. Stay informed, and speak up, and make others aware.',
    items: [
      'Engage with business and tech communities and recommend valuable solutions',
      'Share blogs, tutorials, or product reviews (social/podcast)',
      'Share product comparisons, demos, and videos',
      'Your guide to community and use cases on your channels',
    ],
  },
  {
    id: '3',
    title: 'What you cannot do',
    description:
      "While we offer flexibility in how we can be promoted, it's just as important to recognize our limitations. Understanding what you can't do isn't a sign of weakness—it's a step toward growth, responsibility and clarity.",
    items: [
      'Spam links in irrelevant discussions',
      'Use incorrect URLs or expired promotional methods',
      'Spread false or exaggerated information about NextSaaS',
      'Promote NextSaaS alongside direct competitors',
      'List our deals on coupon/discount-only websites',
    ],
  },
];

const AffiliatesList = () => {
  return (
    <article className="space-y-10 pt-14 md:space-y-[70px] md:pt-16 lg:pt-[88px] xl:pt-[100px]">
      {affiliateSectionsData.map((section, index) => (
        <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
          <div>
            <h3 className="text-heading-6 md:text-heading-5 mb-3 font-normal">{section.title}</h3>
            <p className="mb-8">{section.description}</p>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex + 1}
                  className={`text-tagline-1 text-secondary/60 dark:text-accent/60 before:relative before:left-0 before:mr-3 before:h-5 before:w-5 before:content-[url('/images/icons/checkmark-white.svg')] before:max-md:top-0 dark:before:content-[url('/images/icons/checkmark-white.svg')] before:md:top-1${
                    itemIndex === 0 ? 'before:inline-block' : ''
                  }`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      ))}
    </article>
  );
};

AffiliatesList.displayName = 'AffiliatesList';
export default AffiliatesList;
