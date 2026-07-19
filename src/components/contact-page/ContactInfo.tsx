import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Our Address',
    content: '2464 Royal Ln. Mesa, New Jersey 45463',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    icon: mailIcon,
    title: 'Email Us',
    content: 'hello@nextsaaS.com',
    link: 'mailto:hello@nextsaaS.com',
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'Call Us',
    content: '+391 (0)35 2568 4593',
    link: 'tel:+391035256845933',
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const ContactInfo = () => {
  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Reach out to our support team for help.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Whether you have a question, need technical assistance, or just want some guidance, our support team is
                here to help. We&apos;re available around the clock to provide quick and friendly support.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* contact info cards  */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary relative w-full space-y-6 overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                    {/* bg overlay  */}
                    <figure
                      className={`pointer-events-none absolute size-[350px] overflow-hidden select-none ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto size-10 overflow-hidden">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/60">
                          <Link href={item.link}>{item.content}</Link>
                        </p>
                      ) : (
                        <p className="text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* contact form  */}
            <RevealAnimation
              delay={0.3}
              className="mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              <form action="#" method="POST" className="space-y-8">
                {/* name and phone number  */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                  {/*  name */}
                  <div className="w-full space-y-2 lg:max-w-[364px]">
                    <label htmlFor="fullname" className="text-tagline-2 text-secondary block font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your name"
                      required={true}
                      autoComplete="name"
                      className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                  {/* number */}
                  <div className="w-full max-w-[364px] space-y-2">
                    <label htmlFor="number" className="text-tagline-2 text-secondary block font-medium">
                      Your number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Enter your number"
                      required={true}
                      autoComplete="tel"
                      className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-tagline-2 text-secondary block font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required={true}
                    autoComplete="email"
                    className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* subject  */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-tagline-2 text-secondary block font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter your subject"
                    required={true}
                    className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-tagline-2 text-secondary block font-medium">
                    Write message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Enter your messages"
                    required={true}
                    className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="peer sr-only" required={true} />
                    <span className="border-stroke-3 after:bg-ns-linen peer-checked:border-stroke-10 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                    <span className="sr-only">Agree to the terms and conditions</span>
                  </label>
                  <label htmlFor="terms" className="text-tagline-3 text-secondary/60 cursor-pointer">
                    I agree with the
                    <Link href="/terms-conditions" className="text-ns-linen text-tagline-3 underline">
                      {' '}
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                  Submit
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
