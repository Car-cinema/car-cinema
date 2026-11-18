"use client";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function Login() {
  const t = useTranslations();

  return (
    <AuthContainer title={t("login")}>
      <form>{/* inputs will go here later */}</form>
    </AuthContainer>
  );
}