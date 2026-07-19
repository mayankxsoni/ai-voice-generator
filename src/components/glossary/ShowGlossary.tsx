import glossaryData from '@/data/json/glossary/glossary.json';
import GlossaryCard from './GlossaryCard';

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

const ShowGlossary = () => {
  const sections = glossaryData as GlossarySection[];

  return (
    <section className="pb-16 xl:pb-28">
      <div className="main-container">
        <div className="space-y-8">
          {sections.map((section) => (
            <GlossaryCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

ShowGlossary.displayName = 'ShowGlossary';
export default ShowGlossary;
