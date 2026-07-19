import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import BlogTabContent from './BlogTabContent';
import BlogTabList from './BlogTabList';

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-6 py-14 md:py-[100px]">
        <div className="main-container">
          <TabProvider defaultValue={0}>
            <BlogTabList />
            <BlogTabContent />
          </TabProvider>
          <RevealAnimation delay={0.2}>
            <div className="mt-14 text-center">
              <LinkButton href="/blog" btnClass="btn-md-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                Explore the blog
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;
