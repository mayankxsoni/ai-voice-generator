import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="main-w-[850px] mx-auto space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-ivory">Contact</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">Still have questions?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[442px] sm:w-full">
                  If your question isn&apos;t listed here, feel free to contact us or start a live chat with our team.
                  We&apos;re happy to help!
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* form */}
          <RevealAnimation delay={0.5}>
            <div className="contact-form mx-auto max-w-[850px] rounded-[20px] bg-white p-5 sm:p-[42px] md:w-full">
              <form action="/" method="POST">
                {/* full name */}
                <div className="mb-8 space-y-2">
                  <label htmlFor="fullname" className="text-tagline-1 text-secondary block font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    className="shadow-1 border-stroke-10 bg-background-1 text-tagline-1 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                  />
                </div>
                {/* email */}
                <div className="mb-8 space-y-2">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="border-stroke-10 bg-background-1 text-tagline-1 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                  />
                </div>
                {/* message */}
                <div className="mb-4 space-y-2">
                  <label htmlFor="message" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your messages"
                    required
                    className="border-stroke-10 bg-background-1 text-tagline-1 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-1 w-full rounded-xl border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input
                      id="terms"
                      type="checkbox"
                      className="peer sr-only"
                      aria-label="I agree with the terms and conditions"
                      required
                    />
                    <span className="border-stroke-3 after:bg-ns-linen peer-checked:border-ns-linen relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
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
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
