"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function Login() {
  const t = useTranslations();

  return (
    <AuthContainer
      title={t("login")}
      buttonText={t("enter")}
      showBack={false}
      footer={<Link href="/sign-up">{t("sign_up")}</Link>}
    >
      <div className="flex flex-col gap-4 pt-6.5 md:pt-17.5">
        <input name="email" type="email" placeholder={t("email")} />
        <input name="password" type="password" placeholder={t("password")} />
      </div>

      <div className="flex items-center justify-between pt-5.5 font-inter text-base font-semibold leading-none tracking-normal">
        <label className="flex items-center gap-2">
          <input name="remember" type="checkbox" />
          {t("remember_me")}
        </label>
        <Link href="/reset-password">{t("forgot_password")}</Link>
      </div>
    </AuthContainer>
  );
}
