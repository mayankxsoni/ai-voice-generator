import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import faqItems from '@/data/json/faq/faq.json';

const ProcessFaq = () => {
  return (
    <section className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[200px]">
      <div className="main-container">
        <div className="mx-auto mb-[70px] max-w-[620px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Commonly asked questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                By offering concise and informative responses, this section helps users find solutions without the need
                to contact customer support, saving time
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <Accordion className="max-w-full space-y-4 sm:mx-auto sm:max-w-[850px]" defaultValue="1" animationDelay={0.1}>
            {faqItems.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="bg-background-1 dark:bg-background-6 rounded-[20px] px-6 sm:px-8"
                value={faq.id.toString()}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6 sm:pt-8 sm:pb-8"
                  value={faq.id.toString()}
                  iconType="arrow">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={faq.id.toString()}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessFaq;
