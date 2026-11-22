"use client";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useTranslations } from "next-intl";
import { AuthContainer } from "@/app/layouts/auth-layout/auth-container-layout";
import { Button } from "@/shared/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/ui/input-otp";

export default function VerifyCode({
  onButtonClick,
}: {
  onButtonClick?: () => void;
}) {
  const t = useTranslations();

  return (
    <AuthContainer
      title={t("enter_code")}
      buttonText={t("enter")}
      onButtonClick={onButtonClick}
    >
      <div className="flex flex-col items-center pt-6.5 md:pt-17.5">
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <p className="pt-9 text-center text-xl font-medium leading-none tracking-normal">
          {t("code_not_received")}
        </p>
        <div className="pt-1">
          <Button
            type="button"
            variant="secondary"
            className="h-auto px-0 text-md font-medium leading-none tracking-normal text-screen bg-transparent hover:bg-transparent active:bg-transparent"
          >
            {t("resend_code")}
          </Button>
        </div>
      </div>
    </AuthContainer>
  );
}
