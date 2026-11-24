"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/shared/lib/cn";
import { GeorgiaIcon } from "@/shared/icons/georgia-icon";
import { EngIcon } from "@/shared/icons/eng-icon";

const languages = [
  { label: "ქარ", value: "ka", Icon: GeorgiaIcon },
  { label: "Eng", value: "en", Icon: EngIcon },
];

type Props = { classNames?: { selectTrigger?: string } };

export const ChangeLanguage = ({ classNames }: Props) => {
  const locale = useLocale() || "ka";
  const router = useRouter();
  const currentLanguage =
    languages.find((lang) => lang.value === locale) ?? languages[0];
  const pathname = usePathname();
  const handleChange = (next: string | null) => {
    if (!next || next === locale) {
      return;
    }
    router.replace(pathname, {
      locale: next as (typeof routing.locales)[number],
    });
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className={cn(
          "w-fit h-10 pl-3 pr-0 gap-2 justify-end cursor-pointer border-none shadow-none focus:ring-0 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent data-[state=open]:bg-transparent",
          classNames?.selectTrigger,
        )}
      >
        <SelectValue placeholder={currentLanguage.label}>
          <span className="flex items-center gap-2">
            <currentLanguage.Icon className="w-5 h-auto" />
            <span className="text-sm font-medium">{currentLanguage.label}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        align="end"
        className="w-45 p-1 py-2 rounded-xl bg-container shadow-md border-none overflow-hidden mt-1.5 "
      >
        <SelectGroup className="w-full p-0 flex flex-col gap-1">
          {languages.map(({ Icon, label, value }) => {
            return (
              <SelectItem
                className="w-full h-10 px-3 py-1 flex items-center gap-2 transition-colors cursor-pointer rounded-lg text-foreground"
                key={value}
                value={value}
              >
                <Icon className="w-5 h-auto" />
                <span className="text-sm font-medium">{label}</span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
