import { ChangeLanguage } from "./change-language"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="flex justify-end p-4">
        <ChangeLanguage />
      </header>
      <main>{children}</main>
    </div>
  )
}