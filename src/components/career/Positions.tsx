import LinkButton from '@/components/ui/button/Button';
import { IPosition } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';

const Positions = () => {
  const positions = getMarkDownData<IPosition & { [key: string]: unknown }>('src/data/career');

  return (
    <section className="py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">Open Positions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Become part of the
              <br className="hidden md:block" />
              dream-team
            </h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {positions?.map((singlePost) => (
            <RevealAnimation delay={0.3} key={singlePost?.slug}>
              <div>
                <div className="bg-background-1 border-stroke-10 space-y-8 rounded-[20px] border-3 p-11">
                  <div className="flex items-center gap-2">
                    {singlePost?.employmentType?.map((type) => (
                      <span className="badge badge-ivory" key={type}>
                        {type}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">{singlePost?.title}</h3>
                    <p>{singlePost?.shortDescription}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/career/${singlePost?.slug}`}
                      btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
                      Read more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;
