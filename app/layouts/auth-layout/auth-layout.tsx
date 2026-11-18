import { ChangeLanguage } from "./change-language";
import AuthTheme from "./auth-theme";
import { ThemeToggle } from "./theme-toggle";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-dvh overflow-hidden">
      <AuthTheme />
      <div className="relative z-1 flex h-full flex-col">
        <header className="flex shrink-0 items-center justify-end gap-3 py-8 px-4 md:gap-5 md:py-6 md:px-15">
          <ThemeToggle />
          <ChangeLanguage />
        </header>
        {children}
      </div>
    </div>
  );
}
