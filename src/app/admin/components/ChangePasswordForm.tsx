'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { changePasswordAction, type UserFormState } from '../actions/users';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="admin-btn admin-btn-primary" disabled={pending}>
      {pending ? 'Updating…' : 'Update password'}
    </button>
  );
};

const ChangePasswordForm = () => {
  const [state, formAction] = useActionState<UserFormState, FormData>(changePasswordAction, {});

  return (
    <form action={formAction} className="admin-form">
      {state.error && (
        <p className="admin-alert admin-alert-error" role="alert">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="admin-alert admin-alert-success" role="status">
          {state.success}
        </p>
      )}

      <div className="admin-field">
        <label className="admin-label" htmlFor="currentPassword">
          Current password
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          autoComplete="current-password"
          required
          className="admin-input"
        />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="newPassword">
          New password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          autoComplete="new-password"
          required
          minLength={10}
          className="admin-input"
        />
        <span className="admin-hint">At least 10 characters.</span>
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="confirmPassword">
          Confirm new password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          className="admin-input"
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default ChangePasswordForm;
