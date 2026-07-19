import { cn } from '@/utils/cn';
import { ComponentType } from 'react';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

// Define the achievement item interface
interface AchievementItem {
  id?: string;
  icon: ComponentType<{ className?: string }>;
  number: number;
  suffix?: string;
  label: string;
  bgColor: string;
  speed?: number;
  interval?: number;
  rooms?: number;
  space?: number;
}

// Define the component props
interface OurAchievementsProps {
  achievements: AchievementItem[];
  delay?: number;
  instant?: boolean;
  className?: string;
}

const OurAchievements = ({
  achievements,

  delay = 0.9,
  instant = true,
  className,
}: OurAchievementsProps) => {
  return (
    <RevealAnimation delay={delay} instant={instant}>
      <div className={cn('bg-ns-linen dark:bg-background-6 rounded-[20px] py-6', className)}>
        <div className="flex flex-col items-center md:flex-row">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`not-last:border-stroke-10 flex flex-1/3 flex-col items-center justify-center gap-6 py-[22px] max-md:border-b md:not-last:border-r ${
                index === achievements.length - 1 ? 'border-b-0 md:not-last:border-r-0' : ''
              }`}>
              <div className={cn(achievement.bgColor, 'w-fit rounded-full bg-white px-7 py-3.5')}>
                <achievement.icon />
              </div>
              <h6 className="flex items-center gap-1 text-white">
                <div className="font-inherit flex items-center text-white">
                  <NumberAnimation
                    number={achievement.number}
                    speed={achievement.speed || 2000}
                    interval={achievement.interval || 280}
                    space={achievement.space || 12}
                    rooms={achievement.rooms || 2}>
                    <span className="font-inherit">{achievement.suffix || ''}</span>
                  </NumberAnimation>
                </div>
                {achievement.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default OurAchievements;
