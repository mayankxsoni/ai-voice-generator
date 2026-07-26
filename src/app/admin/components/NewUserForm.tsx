'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createUserAction, type UserFormState } from '../actions/users';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="admin-btn admin-btn-primary" disabled={pending}>
      {pending ? 'Creating…' : 'Create admin'}
    </button>
  );
};

const NewUserForm = () => {
  const [state, formAction] = useActionState<UserFormState, FormData>(createUserAction, {});

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
        <label className="admin-label" htmlFor="new-name">
          Name
        </label>
        <input id="new-name" name="name" required className="admin-input" placeholder="Mayank Soni" />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="new-email">
          Email
        </label>
        <input
          id="new-email"
          name="email"
          type="email"
          required
          className="admin-input"
          placeholder="mayank@firstpixel.media"
        />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="new-password">
          Temporary password
        </label>
        <input
          id="new-password"
          name="password"
          type="text"
          required
          minLength={10}
          className="admin-input"
          placeholder="at least 10 characters"
        />
        <span className="admin-hint">Share it with them; they can change it under My account.</span>
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="new-role">
          Role
        </label>
        <select id="new-role" name="role" defaultValue="editor" className="admin-select">
          <option value="editor">Editor — manage posts and enquiries</option>
          <option value="owner">Owner — also manages admin users</option>
        </select>
      </div>

      <SubmitButton />
    </form>
  );
};

export default NewUserForm;
