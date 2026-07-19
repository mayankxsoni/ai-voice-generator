import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FAQData {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    id: '1',
    question: 'What is the NextSaaS Affiliate Program?',
    answer:
      'It is a revenue-sharing program where you promote NextSaaS to your audience and earn a commission for every new paying customer you refer. You receive a unique tracking link, marketing assets, and a dedicated dashboard to monitor clicks, conversions, and payouts in real time.',
  },
  {
    id: '2',
    question: 'Who can join the program?',
    answer:
      'Creators, bloggers, newsletter writers, agencies, consultants, and SaaS enthusiasts are welcome. If you have an engaged audience interested in productivity, AI, or business tools, you can apply—no minimum traffic requirements or technical skills needed.',
  },
  {
    id: '3',
    question: 'How much can I earn?',
    answer:
      'You earn up to 35% recurring commission (up to $49.75 per conversion) for every subscriber you bring in. As long as the customer keeps an active plan, you continue to receive payouts on their renewal, so your earnings can compound month over month.',
  },
  {
    id: '4',
    question: 'How do I get my affiliate link?',
    answer:
      'Once your application is approved, you’ll get instant access to the affiliate dashboard. From there, copy your auto-generated referral link or create custom sub-links for specific campaigns. You can also download banners, email copy, and ready-to-share assets.',
  },
  {
    id: '5',
    question: 'When and how are payments made?',
    answer:
      'Commissions are paid out via PayPal or bank transfer on a monthly schedule once you hit the $50 threshold. We operate on a 30-day attribution window with a short holding period to account for refunds, so you can expect predictable, on-time payouts.',
  },
];

const Faq = () => {
  return (
    <section className="py-14 md:py-20 lg:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-center">FAQ for NextSaaS affiliates program</h2>
        </RevealAnimation>

        {/* faq accordion list   */}
        <Accordion
          className="mx-auto mt-10 w-full max-w-[950px] space-y-4 xl:mt-20"
          defaultValue="1"
          enableScrollAnimation={true}
          animationDelay={0.1}>
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} className="border-stroke-10 rounded-[20px] border" value={faq.id}>
              <AccordionTrigger
                iconClassName="size-7 data-[state=open]:bg-secondary text-white data-[state=closed]:bg-ns-linen  accordion-home-38 rounded-full flex items-center justify-center accordion-arrow transition-colors duration-300 ease-in-out"
                titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                className="flex w-full cursor-pointer items-center justify-between p-4 md:p-6 lg:p-8"
                value={faq.id}
                iconType="arrow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={faq.id} className="px-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
