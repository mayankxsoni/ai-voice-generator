'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactAction, type ContactState } from '@/app/actions/contact';

const inputClass =
  'border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none disabled:cursor-not-allowed disabled:opacity-60">
      {pending ? 'Sending…' : 'Submit'}
    </button>
  );
};

const ContactForm = () => {
  const [state, formAction] = useActionState<ContactState, FormData>(submitContactAction, {});
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the fields once the message is safely stored.
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-8">
      {state.error && (
        <p role="alert" className="text-tagline-2 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-red-700">
          {state.error}
        </p>
      )}
      {state.success && (
        <p
          role="status"
          className="text-tagline-2 rounded-2xl border border-green-200 bg-green-50 px-5 py-3 text-green-700">
          {state.success}
        </p>
      )}

      {/* name and phone number  */}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="w-full space-y-2 lg:max-w-[364px]">
          <label htmlFor="fullname" className="text-tagline-2 text-secondary block font-medium">
            Your name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="w-full max-w-[364px] space-y-2">
          <label htmlFor="number" className="text-tagline-2 text-secondary block font-medium">
            Your number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Enter your number"
            autoComplete="tel"
            className={inputClass}
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
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      {/* subject  */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-tagline-2 text-secondary block font-medium">
          Subject
        </label>
        <input type="text" id="subject" name="subject" placeholder="Enter your subject" className={inputClass} />
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
          required
          className="border-stroke-10 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-ns-linen placeholder:text-tagline-2 w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
        />
      </div>

      {/* honeypot — hidden from people, irresistible to bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {/* terms checkbox */}
      <fieldset className="mb-4 flex items-center gap-2">
        <label className="flex items-center gap-x-3">
          <input id="terms" type="checkbox" className="peer sr-only" required />
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

      <SubmitButton />
    </form>
  );
};

export default ContactForm;
