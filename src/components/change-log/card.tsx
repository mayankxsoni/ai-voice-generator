'use client';
import Image from 'next/image';
import { forwardRef } from 'react';
import { ChangelogItem } from './content';

const Card = forwardRef<HTMLDivElement, ChangelogItem>(
  ({ id, dataMonth, title, tag, status, summary, highlights, image }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        data-month={dataMonth}
        className="bg-background-2 border-stroke-10 rounded-[20px] border p-5 lg:p-8">
        <div className="mb-14 space-y-4">
          <h3>{title}</h3>
          <span className="bg-ns-ivory border-stroke-10 text-tagline-1 text-secondary inline-flex rounded-full border px-5 py-2 font-normal">
            {tag}
          </span>
        </div>
        <div>
          <p className="text-heading-5 text-secondary mb-3 font-normal">{status}</p>
          <p>{summary}</p>
          <p className="text-heading-6 text-secondary mt-6 mb-4 font-normal">Highlights</p>
          <ul className="mt-4 mb-10.5 space-y-3">
            {highlights.map((highlight, index) => (
              <li className="flex items-center gap-x-2" key={index + 1}>
                <span className="bg-secondary flex size-5 shrink-0 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none">
                    <path
                      d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                      className="fill-accent"
                    />
                  </svg>
                </span>
                <p className="text-secondary/80">{highlight}</p>
              </li>
            ))}
          </ul>
          <figure className="overflow-hidden rounded-[20px]">
            <Image src={image.src} alt={image.alt} className="h-full w-full object-cover" width={869} height={572} />
          </figure>
        </div>
      </div>
    );
  },
);

Card.displayName = 'Card';
export default Card;
