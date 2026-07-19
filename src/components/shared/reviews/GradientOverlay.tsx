import gradient9 from '@public/images/ns-img-501.png';
import Image from 'next/image';

const GradientOverlay = () => {
  return (
    <div className="gradient-overlay pointer-events-none absolute -top-[180px] -left-[180px] -z-10 h-full w-full opacity-0 transition-opacity duration-300 select-none max-md:h-[300px] max-md:w-[350px] md:-top-[190px] md:-left-[190px] lg:-top-[150px] lg:-left-[150px] xl:-top-[220px] xl:-left-[220px]">
      <Image src={gradient9} alt="Decorative gradient background overlay" className="-rotate-[90deg]" />
    </div>
  );
};

export default GradientOverlay;
