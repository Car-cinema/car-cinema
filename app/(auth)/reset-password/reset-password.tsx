"use client";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function RessetPassword() {
  const t = useTranslations();

  return (
    <AuthContainer title={t("reset_password")}>
      <form>{/* inputs will go here later */}</form>
    </AuthContainer>
  );
}