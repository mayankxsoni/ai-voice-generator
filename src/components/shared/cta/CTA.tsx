import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import CTACheckList from './CTACheckList';
import CtaInputForm from './CtaInputForm';

interface CTAV1Props {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  listTextClass?: string;
  inputFieldClass?: string;
  checkListVariant?: 'default' | 'gray';
}

const CTA = ({
  className,
  badgeClass,
  ctaHeading,
  spanText,
  description,
  ctaBtnText,
  badgeText,
  descriptionClass,
  headingClass,
  listTextClass,
  inputFieldClass,
  checkListVariant = 'default',
}: CTAV1Props) => {
  return (
    <section className={cn('py-[50px] md:py-20 lg:py-28', className)} aria-label="cta section">
      <div className="main-container">
        <div className="xl :gap-0 flex flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {badgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-ivory', badgeClass)}>{badgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
              <RevealAnimation delay={badgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {ctaHeading}
                  {spanText && <span className="text-ns-oatmeal"> {spanText} </span>}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={badgeText ? 0.5 : 0.4}>
                <p aria-label="cta-description" className={cn(descriptionClass)}>
                  {description}
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* newsletter form  */}
          <div
            className={cn('w-full max-w-[562px] space-y-6 lg:pl-9', badgeText && 'mt-[40px] space-y-6 lg:mt-[67px]')}>
            <CtaInputForm ctaBtnText={ctaBtnText} inputFieldClass={inputFieldClass} />
            <CTACheckList
              className="gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0 xl:justify-start"
              ctaCheckListData={[
                {
                  id: '1',
                  text: 'No credit card required',
                },
                {
                  id: '2',
                  text: '14-Day free trial',
                },
              ]}
              listTextClass={cn(listTextClass, 'text-secondary')}
              checkListVariant={checkListVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
