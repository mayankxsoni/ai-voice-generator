import supportContact from '@public/images/ns-img-402.jpg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-[100px] pb-[100px] md:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[100px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-[70px] space-y-5 text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-ivory">Contact us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Create a support ticket</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[550px]">
                    Have a question, feedback, or feature request? We’d love to hear from you! Please fill out the form
                    below, and our support team will get back to you as soon as possible.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="w-full overflow-hidden rounded-[20px] lg:max-w-[595px]">
                <Image src={supportContact} className="size-full object-cover" alt="support-contact" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.5}>
              <form className="rounded-[20px] bg-white p-6 lg:p-[42px]">
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="name" className="text-tagline-1 text-secondary block font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="border-stroke-10 bg-background-1 placeholder:text-tagline-1 placeholder:text-secondary/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="email" className="text-tagline-1 text-secondary block font-medium">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="border-stroke-10 bg-background-1 placeholder:text-tagline-1 placeholder:text-secondary/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="space-y-2">
                  <label htmlFor="comment" className="text-tagline-1 text-secondary block font-medium">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Enter your comment"
                    className="border-stroke-10 bg-background-1 placeholder:text-tagline-1 placeholder:text-secondary/60 shadow-1 block min-h-[115px] w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                    defaultValue={''}
                  />
                </fieldset>
                <fieldset className="mt-4 mb-4 flex items-center gap-2">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                    <input
                      id="agree-terms"
                      type="checkbox"
                      className="peer sr-only"
                      aria-label="I agree with the terms and conditions"
                      required
                    />
                    <span className="border-stroke-10 after:bg-ns-linen peer-checked:border-ns-linen relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label htmlFor="agree-terms" className="text-tagline-3 text-secondary/60 cursor-pointer">
                    I agree with the
                    <Link href="/terms-conditions" className="text-ns-linen text-tagline-3 underline">
                      {' '}
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
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

export default Contact;
