'use client';

import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { loginAction, type LoginState } from '../actions/auth';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="admin-btn admin-btn-primary" disabled={pending} style={{ width: '100%' }}>
      {pending ? 'Signing in…' : 'Sign in'}
    </button>
  );
};

const LoginForm = () => {
  const params = useSearchParams();
  const next = params.get('next') ?? '/admin';
  const [state, formAction] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <form action={formAction} className="admin-form">
      <input type="hidden" name="next" value={next} />

      {state.error && (
        <p className="admin-alert admin-alert-error" role="alert">
          {state.error}
        </p>
      )}

      <div className="admin-field">
        <label className="admin-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="admin-input"
          placeholder="you@firstpixel.media"
        />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="admin-input"
          placeholder="••••••••••"
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default LoginForm;
