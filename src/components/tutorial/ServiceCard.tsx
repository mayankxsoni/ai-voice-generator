import { cn } from '@/utils/cn';
import gradient28 from '@public/images/ns-img-516.png';
import Image from 'next/image';

export interface ServiceStat {
  label: string;
  value: string;
  description: string;
}

interface ServiceCardProps {
  stat: ServiceStat;
  isFirst?: boolean;
}

const ServiceCard = ({ stat, isFirst = false }: ServiceCardProps) => (
  <div
    className={cn(
      'bg-ns-ivory hover:bg-secondary group relative z-0 flex min-h-[270px] min-w-[360px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] p-8 transition-all duration-700 ease-in-out',
      isFirst && 'ml-8',
    )}>
    <figure className="pointer-events-none absolute inset-0 -top-[210%] -right-[160%] -z-10 rotate-[-78deg] transform opacity-0 transition-all duration-1000 ease-in-out select-none group-hover:scale-110 group-hover:opacity-100">
      <Image src={gradient28} alt="review-bg" className="h-full w-full object-cover" />
    </figure>
    <div className="transform transition-all duration-700 ease-in-out group-hover:translate-y-[4px]">
      <p className="text-secondary/60 mb-2 text-lg transition-colors duration-700 ease-in-out group-hover:text-white">
        {stat.label}
      </p>
      <h3 className="group-hover:text-ns-yellow text-secondary transition-colors duration-700 ease-in-out">
        {stat.value}
      </h3>
    </div>
    <p className="group-hover:text-accent/60 text-secondary/60 transform transition-all duration-700 ease-in-out group-hover:translate-y-[-6px] group-hover:opacity-90">
      {stat.description}
    </p>
  </div>
);

export default ServiceCard;
