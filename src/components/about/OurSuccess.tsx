import { projectAchievements } from '@/data/achievements';
import RevealAnimation from '../animation/RevealAnimation';
import OurAchievements from '../shared/OurAchievements';

const OurSuccess = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Over a decade of experience in this field.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[744px]">
              With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill, and
              trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies, and
            </p>
          </RevealAnimation>
        </div>
        <OurAchievements achievements={projectAchievements} />
      </div>
    </section>
  );
};
OurSuccess.displayName = 'OurSuccess';
export default OurSuccess;
