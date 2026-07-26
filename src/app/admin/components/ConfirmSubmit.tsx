'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

/** Submit button that asks for confirmation before running a destructive action. */
const ConfirmSubmit = ({
  children,
  message,
  className,
}: {
  children: ReactNode;
  message: string;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={className}
      disabled={pending}
      onClick={(event) => {
        if (!window.confirm(message)) {
          event.preventDefault();
        }
      }}>
      {pending ? 'Working…' : children}
    </button>
  );
};

export default ConfirmSubmit;
