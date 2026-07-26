import { Suspense } from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
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
