"use client";
import { useTranslations } from "next-intl";
import { ChangeLanguage } from "@/app/layouts/auth-layout/change-language";

export default function Login() {
  const t = useTranslations();

  return (
    <div>
      <div className="flex justify-end p-4">
        <ChangeLanguage />
      </div>

      <form>
        <h1>{t("Hello")}</h1>
      </form>
    </div>
  );
}