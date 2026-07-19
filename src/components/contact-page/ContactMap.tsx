import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';

const ContactMap = () => {
  return (
    <section className="pb-[100px] md:pt-[80px] md:pb-[150px] lg:pt-[100px] lg:pb-[200px]" aria-label="Location Map">
      <div className="main-container">
        <RevealAnimation>
          <div className="dark:bg-background-6 bg-ns-oatmeal/70 rounded-[20px] p-2.5">
            <div className="h-[300px] w-full overflow-hidden rounded-2xl lg:h-[566px]">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactMap;
