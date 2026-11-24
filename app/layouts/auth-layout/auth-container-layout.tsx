"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/shared/ui/button";

export function AuthContainer({
  title,
  buttonText,
  onButtonClick,
  footer,
  children,
  showBack = true,
  backFallbackHref = "/login",
}: {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  showBack?: boolean;
  backFallbackHref?: string;
}) {
  const t = useTranslations();

  return (
    <main className="flex min-h-0 w-full flex-1 overflow-y-auto pb-0 md:p-4 md:pb-0">
      <div className="mx-auto mt-auto w-full rounded-t-4xl bg-surface-subtle p-6 py-8 shadow-lg md:my-auto md:max-w-148 md:rounded-4xl md:p-8 md:py-7">
        {showBack && (
          <div className="pb-4">
            <Link
              href={backFallbackHref}
              className="font-inter text-base font-semibold leading-none"
            >
              ← {t("back")}
            </Link>
          </div>
        )}
        <h1 className="w-full text-3xl font-semibold leading-none tracking-normal md:text-4xl">
          {title}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onButtonClick?.();
          }}
        >
          {children}
          <div className="pt-10">
            <Button
              type="submit"
              variant="secondary"
              className="h-17 w-full bg-screen text-lg leading-none tracking-normal text-white hover:bg-screen"
            >
              {buttonText}
            </Button>
          </div>
          {footer && (
            <div className="pt-6 text-center text-lg font-bold leading-none tracking-normal">
              {footer}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
