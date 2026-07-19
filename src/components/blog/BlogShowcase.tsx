import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';

const BlogShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Our recent <span className="text-ns-linen inline-block">news &amp; insights</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Our recent news and insights highlight the latest developments, achievements, and thought leadership
              shaping our journey forward. From product innovations and strategic partnerships to industry trends
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
