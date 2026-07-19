import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
const ProcessStep = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'create-account',
      stepNumber: 'Step 1',
      title: 'Create your account',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-36',
      features: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    },
    {
      id: 'customize-workspace',
      stepNumber: 'Step 2',
      title: 'Customize your workspace',
      description: 'Use templates to set up your team, workflows, integrations, and brand.',
      icon: 'ns-shape-8',
      features: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    },
    {
      id: 'automate-collaborate',
      stepNumber: 'Step 3',
      title: 'Automate & collaborate',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-2',
      features: ['Drag-and-drop automation', 'Task routing & approvals', 'Notifications & real-time sync'],
    },
    {
      id: 'create-account-2',
      stepNumber: 'Step 4',
      title: 'Create your account',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-36',
      features: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    },
    {
      id: 'customize-workspace-2',
      stepNumber: 'Step 5',
      title: 'Customize your workspace',
      description: 'Use templates or build your own dashboards, workflows, and integrations that reflect',
      icon: 'ns-shape-8',
      features: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    },
  ];

  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[72px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[552px]">From sign-up to success in just a few steps</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[692px]">
              We make it easy to Get started, simple to scale, and seamless to succeed. Whether you&apos;re using one
              feature or the full suite, NextSaaS is built to support you every step of the way.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8">
          {processSteps.map((step, index) => {
            return (
              <div
                key={step.id}
                className={cn('col-span-12 md:col-span-6 lg:col-span-4', index === 3 && 'lg:col-start-3')}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="bg-background-1 border-stroke-10 flex h-full flex-col space-y-8 rounded-[20px] border p-5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-tagline-2 text-secondary">{step.stepNumber}</p>
                      <span className={`${step.icon} text-secondary text-[52px]`} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p>{step.description}</p>
                      <ul className="text-tagline-1 text-secondary/60 list-inside list-disc space-y-2 font-normal">
                        {step.features.map((feature, featureIndex: number) => (
                          <li key={featureIndex + 1}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
