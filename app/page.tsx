import Login from "./(auth)/login/login";
import { AuthLayout } from "./layouts/auth-layout/auth-layout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}