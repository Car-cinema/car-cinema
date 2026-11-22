"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";
import { PasswordFields } from "@/components/(auth)/password-fields";

export default function NewPassword() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <AuthContainer
      title={t("create_new_password")}
      buttonText={t("end")}
      onButtonClick={() => router.push("/login")}
    >
      <div className="flex flex-col gap-4 pt-6.5 pb-8 md:pt-17.5">
        <PasswordFields />
      </div>
    </AuthContainer>
  );
}
