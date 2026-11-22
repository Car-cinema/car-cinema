"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";

export default function SignUp() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <AuthContainer
      title={t("sign_up")}
      buttonText={t("continue")}
      onButtonClick={() => router.push("/sign-up/credentials")}
    >
      <div className="flex flex-col gap-4 pt-6.5 pb-8 md:pt-17.5">
        <input
          name="name"
          type="text"
          autoComplete="given-name"
          placeholder={t("name")}
        />
        <input
          name="surname"
          type="text"
          autoComplete="family-name"
          placeholder={t("surname")}
        />
      </div>
    </AuthContainer>
  );
}
