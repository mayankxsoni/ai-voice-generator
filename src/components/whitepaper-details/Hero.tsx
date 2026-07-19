import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';

interface HeroProps {
  badgeText: string;
  content: string;
}

const Hero = ({ badgeText, content }: HeroProps) => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory">{badgeText}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="whitepaper-details-content space-y-4">
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
