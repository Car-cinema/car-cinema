"use client";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations();

  return (
    <form>
      <h1>{t("Hello")}</h1>
    </form>
  );
}
