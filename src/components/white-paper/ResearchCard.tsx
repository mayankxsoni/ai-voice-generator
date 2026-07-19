import { IWhitePaper } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/Button';

const ResearchCard = ({ item }: { item: IWhitePaper }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <Link href={`/whitepaper/${item.slug}`} aria-label="Read more about the whitepaper">
        <div className="group border-stroke-10 flex h-full flex-col rounded-[20px] border-3 bg-white p-2">
          <figure className="aspect-4/3 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </figure>
          <div className="flex grow flex-col space-y-10 px-5 pt-7 pb-6">
            <div className="grow space-y-2">
              <h2 className="text-heading-6 font-normal">{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div>
              <LinkButton
                href={`/whitepaper/${item.slug}`}
                btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2 "
                aria-label="Read more about the whitepaper">
                Read More
              </LinkButton>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResearchCard;
