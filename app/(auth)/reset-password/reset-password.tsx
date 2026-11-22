"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function ResetPassword() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <AuthContainer
      title={t("reset_password")}
      buttonText={t("continue")}
      onButtonClick={() => router.push("/reset-password/verify")}
    >
      <div className="pt-6.5 pb-8 md:pt-17.5">
        <input type="email" autoComplete="email" placeholder={t("email")} />
      </div>
    </AuthContainer>
  );
}