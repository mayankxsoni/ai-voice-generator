import { ICustomer } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import defaultBanner from '@public/images/ns-img-428.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import DetailsBlock from './DetailsBlock';

const Content = ({ slug }: { slug: string }) => {
  const customer: ICustomer = getMarkDownContent('src/data/customer/', slug).data as ICustomer;
  return (
    <section
      className="pt-32 pb-24 sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-28"
      aria-label="customer details info section">
      <div className="main-container space-y-14">
        {/* customer details info content */}
        <div className="flex flex-col justify-between gap-y-4 md:flex-row md:gap-x-16 lg:gap-x-10">
          <RevealAnimation delay={0.1}>
            <figure>
              <Image
                src={customer.lightImage}
                alt="customer details info 1"
                className="sticky top-25"
                width={129}
                height={145}
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-8 lg:max-w-[808px]">
              <h1 className="text-heading-5 md:text-heading-4 lg:text-heading-3">{customer.detailsTitle}</h1>
              <figure className="overflow-hidden rounded-[30px]">
                <Image src={defaultBanner} alt="customer details info" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
        {/* customer details Overview */}
        <div className="flex flex-col justify-between gap-y-4 md:flex-row md:gap-x-16 lg:gap-x-10">
          <RevealAnimation delay={0.1}>
            <div>
              <p className="text-heading-4 md:text-heading-5 text-secondary sticky top-20">
                {customer.overview.titleOne}
              </p>
            </div>
          </RevealAnimation>
          <div className="space-y-8 lg:max-w-[808px]">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3 md:max-w-[700px]">
                {customer.overview.titleTwo}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{customer.overview?.description}</p>
            </RevealAnimation>
          </div>
        </div>
        <DetailsBlock blockData={customer.problemBlock} />
        <DetailsBlock blockData={customer.solutionBlock} />
        <DetailsBlock blockData={customer.resultBlock} />
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
