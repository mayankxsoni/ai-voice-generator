import faqData from '@/data/json/faq/faq.json';
import faqImg from '@public/images/ns-img-612.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  return (
    <section
      className="bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-0">
          <div className="flex-1 space-y-8 md:space-y-10 lg:space-y-14">
            <div className="space-y-5 text-center lg:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-ivory">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="max-w-[439px]" id="faq-heading">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>
            {/* faq  */}
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion
                  className="w-full max-w-[576px] space-y-2"
                  defaultValue="1"
                  enableScrollAnimation={true}
                  animationDelay={0.1}>
                  {faqData.map((item) => (
                    <AccordionItem className="rounded-[20px] bg-white px-4" key={item.id} value={item.id.toString()}>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary"
                        className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                        value={item.id.toString()}
                        iconType="arrow">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <figure className="relative mx-auto max-w-[450px] flex-1 lg:max-w-[684px]">
              <Image src={faqImg} alt="Business agency services illustration" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
