import { IPosition } from '@/interface';
import gradientBg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const JobOverview = ({ data }: { data: Partial<IPosition> }) => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="bg-background-1 relative col-span-12 overflow-hidden rounded-[20px] p-11 md:col-span-6">
        {/* bg gradient img  */}
        <RevealAnimation delay={0.4} duration={1.2} direction="right" offset={90}>
          <figure className="pointer-events-none absolute top-[-27%] right-[-77%] size-[500px] overflow-hidden select-none max-[377px]:right-[-90%] md:top-[-27%] md:right-[-83%] lg:top-[-49%] lg:right-[-102%] lg:size-[800px] xl:top-[-60%] xl:right-[-99%] xl:size-[1000px]">
            <Image src={gradientBg} alt="career-details-bg-gradient-img" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="space-y-8">
          <div>
            <h5 className="mb-8">Job Overview</h5>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Date Posted</p>
              <p className="text-lg leading-[150%]">{data?.datePosted}</p>
            </div>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Expiration date</p>
              <p className="text-lg leading-[150%]">{data?.expirationDate}</p>
            </div>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Location</p>
              <p className="text-lg leading-[150%]">{data?.location}</p>
            </div>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Offered Salary</p>
              <p className="text-lg leading-[150%]">{data?.offeredSalary}</p>
            </div>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Experience</p>
              <p className="text-lg leading-[150%]">{data?.experience}</p>
            </div>
            <div className="border-stroke-10 border-b py-4">
              <p className="text-secondary text-xl leading-[150%]">Qualification</p>
              <p className="text-lg leading-[150%]">{data?.qualification}</p>
            </div>
          </div>
          <div>
            <h5 className="mb-8">Job Skills</h5>
            <div className="flex flex-wrap items-center gap-3">
              {data?.jobSkills?.map((skill) => (
                <span
                  key={skill}
                  className="bg-background-1 border-stroke-10 text-secondary font-base inline-block rounded-full border p-[9px] px-[18px] leading-[150%] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Link
              href="#"
              className="hover:btn-secondary btn btn-primary btn-md w-full first-letter:uppercase before:content-none">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

JobOverview.displayName = 'JobOverview';
export default JobOverview;
