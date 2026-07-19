import { IWhitePaper } from '@/interface';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/Button';

const FeaturedCard = ({ card }: { card: IWhitePaper }) => {
  return (
    <div className="col-span-12">
      <div className="group border-stroke-10 flex w-full flex-col items-start justify-between gap-5 rounded-4xl border-3 bg-white p-2 md:flex-row">
        <Link href={`/whitepaper/${card?.slug}`} aria-label="Read more">
          <div className="flex h-full w-full max-w-[472px] flex-col items-start justify-between gap-y-5 p-5 md:min-h-[405px]">
            <div>
              <h2 className="text-heading-5 font-normal">{card?.title}</h2>
              <p>{card?.description}</p>
            </div>
            <div>
              <LinkButton
                href={`/whitepaper/${card?.slug}`}
                btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2 "
                aria-label="Read more">
                Read More
              </LinkButton>
            </div>
          </div>
        </Link>
        <figure className="w-full overflow-hidden rounded-[20px] md:min-h-[405px] md:max-w-[613px]">
          <Link href={`/whitepaper/${card?.slug}`} aria-label="Read more">
            <Image
              width={613}
              height={405}
              src={card?.img as StaticImageData}
              alt={card?.title || ''}
              className="h-full w-full rounded-[20px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105 md:min-h-[405px]"
            />
          </Link>
        </figure>
      </div>
    </div>
  );
};

FeaturedCard.displayName = 'FeaturedCard';
export default FeaturedCard;
