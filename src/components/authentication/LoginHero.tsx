import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialAuth from './SocialAuth';

const LoginHero = () => {
  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-1 mx-auto max-w-[400px] rounded-[20px] px-8 py-14">
            <form className="mb-6">
              <fieldset className="mb-4 space-y-2">
                <label htmlFor="email" className="text-tagline-2 text-secondary block font-medium select-none">
                  Your email
                </label>
                <input type="email" id="email" className="auth-form-input" placeholder="Email address" />
              </fieldset>
              <fieldset className="mb-3 space-y-2">
                <label htmlFor="password" className="text-tagline-2 text-secondary block font-medium select-none">
                  Password
                </label>
                <input type="password" id="password" className="auth-form-input" placeholder="At least 8 characters" />
              </fieldset>
              <div className="flex items-center justify-between">
                <div>
                  <label className="inline-flex cursor-pointer items-center gap-2">
                    <input type="checkbox" name="terms" required className="peer sr-only" />
                    <span className="border-stroke-3 after:bg-ns-linen peer-checked:border-stroke-10 relative size-5 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                    <span className="text-tagline-2 text-secondary font-medium select-none">Remember me</span>
                  </label>
                </div>
                <div>
                  <Link href="#" className="text-tagline-2 text-secondary font-medium underline">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="btn btn-md btn-primary hover:btn-secondary w-full first-letter:uppercase before:content-none">
                  Log In
                </button>
              </div>
            </form>
            <div>
              <p className="text-tagline-2 text-secondary flex items-center justify-center gap-1 text-center font-normal">
                Not registered yet?
                <Link href="/signup" className="text-tagline-1 footer-link-v2 font-medium">
                  Create an Account
                </Link>
              </p>
              <div className="py-8 text-center">
                <p className="text-tagline-2 text-secondary font-normal">Or</p>
              </div>
              <SocialAuth />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LoginHero;
