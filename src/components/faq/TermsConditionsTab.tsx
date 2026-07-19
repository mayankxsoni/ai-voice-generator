import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What are terms & conditions?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
  {
    id: 2,
    question: 'Why do i need to accept the terms & conditions?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
  {
    id: 3,
    question: 'Can the terms & conditions change?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
  {
    id: 4,
    question: 'What happens if I violate the terms & conditions?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
  {
    id: 5,
    question: 'Where can I read the full terms & conditions?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
  {
    id: 6,
    question: 'What kind of activities are prohibited under your terms?',
    answer:
      'Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.',
  },
];

const TermsConditionsTab = () => {
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

export default TermsConditionsTab;
