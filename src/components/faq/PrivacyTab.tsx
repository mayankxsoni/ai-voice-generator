import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is privacy in the digital world?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
  {
    id: 2,
    question: 'Why is online privacy important?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
  {
    id: 3,
    question: 'How can I protect my privacy online?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
  {
    id: 4,
    question: 'Are my messages really private?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
  {
    id: 5,
    question: 'What data do websites collect about me?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
  {
    id: 6,
    question: 'What is a privacy policy?',
    answer:
      'Your online presence can disclose a wealth of personal information—your habits, whereabouts, and even your identity. Safeguarding your privacy is crucial in thwarting identity theft, avoiding unwanted surveillance, and preventing the misuse of your private information.',
  },
];

const PrivacyTab = () => {
  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {faqData.map((item) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item.id}
          value={item.id.toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={item.id.toString()}
            iconType="arrow">
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PrivacyTab;
