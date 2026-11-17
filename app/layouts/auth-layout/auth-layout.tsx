import { ChangeLanguage } from "./change-language";
import AuthTheme from "./auth-theme";
import { ThemeToggle } from "./theme-toggle";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AuthTheme />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-end gap-3 p-4 md:gap-5">
          <ThemeToggle />
          <ChangeLanguage />
        </header>
        <main className="flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-container p-6 shadow-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
