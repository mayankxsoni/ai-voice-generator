import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';

export interface StepData {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  mainImage: StaticImageData;
  overlayImage?: StaticImageData;
  overlayImagePosition?: 'right' | 'center';
}

interface StepCardProps {
  step: StepData;
  cardRef?: (el: HTMLDivElement | null) => void;
}

const StepCard = ({ step, cardRef }: StepCardProps) => {
  return (
    <div
      ref={cardRef}
      id={step.id}
      className="step-card bg-ns-ivory relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl p-6 sm:w-[350px] md:h-[476px] md:w-[400px] xl:w-[442px]"
      data-step={step.stepNumber}>
      <figure className="bg-ns-linen relative z-10 rounded-[20px] p-2">
        <Image src={step.mainImage} alt={`step ${step.stepNumber}`} className="size-full object-cover" />

        {step.overlayImage && (
          <Image
            src={step.overlayImage}
            alt={`step ${step.stepNumber}`}
            className={cn(
              'absolute z-20 object-cover',
              step.overlayImagePosition === 'right' && 'top-[100px] right-[-11px] md:top-[149px]',
              step.overlayImagePosition === 'center' && 'top-[149px] left-1/2 -translate-x-1/2',
            )}
          />
        )}
      </figure>

      {/* gradient color  */}
      <div
        className="pointer-events-none absolute bottom-[77px] left-1/2 z-30 h-[262px] w-[641px] -translate-x-1/2 rotate-180 md:bottom-[52px] xl:bottom-[22px]"
        style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #f4efe7 37.44%)' }}
      />

      {/* text  */}
      <div className="relative z-33 mt-16 space-y-3 md:mt-14 lg:mt-6">
        <h2 className="text-heading-5 lg:text-heading-4 font-normal">{step.title}</h2>
        <p className="text-tagline-2">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;
