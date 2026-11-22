"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type BackButtonProps = {
  fallbackHref?: string;
  className?: string;
};

export function BackButton({ fallbackHref = "/", className }: BackButtonProps) {
  const router = useRouter();
  const t = useTranslations();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={className ?? "font-inter text-base font-semibold leading-none"}
    >
      ← {t("back")}
    </button>
  );
}
