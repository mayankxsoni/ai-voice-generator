import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

const FeaturedBlog = () => {
  const allBlogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  const featuredBlogs: IBlogPost[] = allBlogs.filter((blog) => blog.featured === true).slice(0, 3);

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[700px] text-center text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-secondary">
              Latest Insights & Articles
            </h2>
          </RevealAnimation>
          <FeaturedBlogSwiper featuredBlogs={featuredBlogs} />
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
