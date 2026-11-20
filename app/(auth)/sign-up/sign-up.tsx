"use client";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function SignUp() {
  const t = useTranslations();

  return (
    <AuthContainer title={t("sign_up")}>
      <form>{/* inputs will go here later */}</form>
    </AuthContainer>
  );
}