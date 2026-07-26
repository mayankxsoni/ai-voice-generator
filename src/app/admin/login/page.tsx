import { isDatabaseConfigured } from '@/db';
import { Suspense } from 'react';
import LoginForm from '../components/LoginForm';
import SetupNotice from '../components/SetupNotice';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  if (!isDatabaseConfigured) {
    return <SetupNotice />;
  }

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <div className="admin-login-head">
          <h1>Sign in</h1>
          <p>First Pixel admin panel</p>
        </div>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
