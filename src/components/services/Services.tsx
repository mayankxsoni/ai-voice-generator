import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Services = () => {
  const servicesData = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(0, 6);

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-ivory">Our Services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="mx-auto max-w-[878px]">Leading companies around the globe rely on nexSaas.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[700px]">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                Latin, though it looks like it, and it actually has no meaning.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-ns-ivory dark:bg-background-7 grid items-center justify-center space-y-6 rounded-[20px] px-6 py-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="mx-auto line-clamp-3 max-w-[361px]">{service.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/services/${service.slug}`}
                      btnClass="btn-v2-white group-hover/btn-v2:btn-secondary-v2   btn-md-v2">
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

export default Services;
