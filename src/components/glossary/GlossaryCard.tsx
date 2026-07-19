import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface GlossaryItem {
  title: string;
  description: string;
  id: string;
}

interface GlossarySection {
  letter: string;
  id: string;
  items: GlossaryItem[];
}

interface GlossaryCardProps {
  section: GlossarySection;
}

const GlossaryCard = ({ section }: GlossaryCardProps) => {
  return (
    <div key={section.letter.toLowerCase()} className="border-b-stroke-10 border-b pb-8 last:border-b-0">
      <div className="flex items-start justify-start gap-x-6 md:gap-x-14">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-3 sticky top-25 w-full max-w-[50px] font-normal md:max-w-[180px] lg:max-w-[467px]">
            {section.letter}
          </h2>
        </RevealAnimation>
        <div>
          {section.items.map((item, itemIndex) => (
            <RevealAnimation key={item.id} delay={0.1 + (itemIndex + 1) * 0.1}>
              <div
                className={cn(
                  'w-full max-w-[467px] space-y-2 px-3 py-4',
                  itemIndex !== section.items.length - 1 && 'border-b-stroke-10 border-b',
                )}>
                <h3 className="text-heading-5 font-normal">{item.title}</h3>
                <p className="text-secondary/80 font-normal">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

GlossaryCard.displayName = 'GlossaryCard';
export default GlossaryCard;
