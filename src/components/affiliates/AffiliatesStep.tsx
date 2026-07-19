import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const affiliateStepsData: AffiliateStep[] = [
  {
    id: '1',
    stepNumber: 'Step 1',
    icon: 'ns-shape-35',
    title: 'Register as an affiliate',
    description:
      "Join our affiliate program and start earning today! As an affiliate, you'll have the opportunity to promote our products or services",
  },
  {
    id: '2',
    stepNumber: 'Step 2',
    icon: 'ns-shape-12',
    title: 'Get to know our products',
    description:
      'Learn about our products and services to effectively promote them to your audience. We provide comprehensive resources and training materials.',
  },
  {
    id: '3',
    stepNumber: 'Step 3',
    icon: 'ns-shape-3',
    title: 'Earn commissions on every sale',
    description:
      'Start earning generous commissions for every successful referral. Track your performance and earnings through our affiliate dashboard.',
  },
];

const AffiliatesStep = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {affiliateStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
          <div className="col-span-12 space-y-3.5 rounded-[20px] bg-white p-8 md:col-span-6 lg:col-span-4">
            <div className="space-y-11">
              <span className="text-tagline-2 inline-block">{step.stepNumber}</span>
              <div>
                <span className={cn(step.icon, 'text-secondary text-[52px]')} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
              <p className="max-w-[345px]">{step.description}</p>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

AffiliatesStep.displayName = 'AffiliatesStep';
export default AffiliatesStep;
