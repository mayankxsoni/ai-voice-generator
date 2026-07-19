import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export const faqData = [
  {
    id: 1,
    question: 'What is a changelog?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
  {
    id: 2,
    question: 'How often is the changelog updated?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
  {
    id: 3,
    question: 'Where can I view the latest changelog?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
  {
    id: 4,
    question: 'Am I get notified when something changes?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
  {
    id: 5,
    question: 'What types of updates are included?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
  {
    id: 6,
    question: 'Are minor fixes always included in the changelog?',
    answer:
      'We diligently update the changelog each time we roll out new features, implement enhancements, or address bugs. This process usually occurs on a biweekly or monthly schedule, ensuring that our users are always informed about the latest improvements and fixes.',
  },
];

const ChangelogTab = () => {
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

export default ChangelogTab;
