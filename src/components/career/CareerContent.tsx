import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>
              We&apos;re building the future of NextSaaS— <br className="hidden md:block" />
              come build It with us.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>Become part of a passionate community fueled by common interests.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra
              vulputate curabitur est.
            </p>
            <p>
              Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed
              accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium.
              Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            </p>
            <p>
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus
              magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec
              auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam
              enim eu. Adipiscing viverra vulputate curabitur est.
            </p>
            <p>
              Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed
              accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium.
              Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            </p>
            <p>
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus
              magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec
              auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam
              enim eu. Adipiscing viverra vulputate curabitur est.
            </p>
            <p>
              Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed
              accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium.
              Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            </p>
            <p>
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus
              magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec
              auctor nibh vel mi blandit.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
