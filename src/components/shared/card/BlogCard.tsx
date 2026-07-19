import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../../ui/button/Button';

interface BlogCardProps {
  blog: IBlogPost;
  className?: string;
}

const BlogCard = ({ blog, className }: BlogCardProps) => {
  return (
    <article>
      <div
        className={cn(
          'bg-background-1 border-ns-ivory relative scale-100 overflow-hidden rounded-[20px] border-4 transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]',
          className,
        )}>
        <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
          <Image
            src={blog?.thumbnail}
            width={409}
            height={250}
            alt="Illustration representing electronic prescription in finance sector"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="space-y-6 p-6">
          <div className="flex items-center gap-2">
            <span className="badge badge-ivory mr-1">
              <Link href={`/blog?category=${blog?.tag.toLowerCase()}`}>{blog?.tag}</Link>
            </span>
            <span rel="author" className="text-tagline-3 text-secondary/60 font-normal">
              {blog?.author}
            </span>
            <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
            <time dateTime="2025-03-20" className="text-tagline-3 text-secondary/60 font-normal">
              {blog?.publishDate}
            </time>
          </div>
          <div>
            <h3 className="sm:text-heading-5 text-heading-6 mb-2 line-clamp-2 font-normal">
              <Link href={`/blog/${blog.slug}`} aria-label="Read more about electronic prescription in finance sector">
                {blog?.title}
              </Link>
            </h3>
            <p className="text-tagline-1 text-secondary/60 line-clamp-2 font-normal">{blog?.description}</p>
          </div>
          <div className="flex justify-start md:block">
            <LinkButton
              href={`/blog/${blog.slug}`}
              btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-md-v2 text-white w-full sm:w-auto"
              aria-label="Read full article about electronic prescription">
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
