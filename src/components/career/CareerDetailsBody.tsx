import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import CareerDetailsHeading from './CareerDetailsHeading';
import JobOverview from './JobOverview';

const CareerDetailsBody = ({ slug }: { slug: string }) => {
  const position = getMarkDownContent('src/data/career/', slug);

  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <CareerDetailsHeading />
        <div className="grid grid-cols-12 items-start gap-y-[70px] md:gap-x-8 md:gap-y-0 lg:gap-x-[70px] xl:gap-[100px]">
          {/* Career details   */}
          <JobOverview data={position.data} />
          {/* team member description  */}
          <div className="col-span-12 md:col-span-6">
            {/* Job Description markdown */}
            <RevealAnimation delay={0.5}>
              <article className="career-details-body">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{position.content}</ReactMarkdown>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

CareerDetailsBody.displayName = 'CareerDetailsBody';
export default CareerDetailsBody;
