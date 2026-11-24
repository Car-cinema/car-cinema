"use client";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";
import { PasswordFields } from "@/components/(auth)/password-fields";

export default function Credentials() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <AuthContainer
      title={t("details")}
      buttonText={t("continue")}
      onButtonClick={() => router.push("/sign-up/verify")}
      backFallbackHref="/sign-up"
    >
      <div className="flex flex-col gap-4 pt-6.5 pb-8 md:pt-17.5">
        <input type="email" autoComplete="email" placeholder={t("email")} />
        <PasswordFields />
      </div>
    </AuthContainer>
  );
}
