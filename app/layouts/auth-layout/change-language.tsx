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
import { setLocale } from "@/app/actions/set-locale";

import { cn } from "@/shared/lib/cn";

const languages = [
  { label: "ქარ", value: "ka" },
  { label: "Eng", value: "en" },
];

type ClassNames = { selectTrigger?: string };
type Props = { classNames?: ClassNames };

export const ChangeLanguage = ({ classNames }: Props) => {
  const locale = useLocale() || "ka";

  const currentLanguage =
    languages.find((lang) => lang.value === locale) ?? languages[0];

  return (
    <Select
      onValueChange={async (nextLocale) => {
        if (!nextLocale || nextLocale === locale) {
          return;
        }
        await setLocale(nextLocale);
      }}
      value={locale}
    >
      <SelectTrigger
        className={cn(
          "w-fit h-10 px-3 bg-transparent  border-none shadow-none focus:ring-0 focus:ring-offset-0 hover:bg-transparent  flex items-center justify-end gap-2",
          classNames?.selectTrigger,
        )}
      >
        <SelectValue placeholder={currentLanguage.label}>
          <span className="text-sm font-medium">{currentLanguage.label}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        align="end"
        className="w-[180px] p-1 py-2 rounded-[12px] bg-container shadow-md border-none overflow-hidden mt-1.5"
        style={{ transform: "translateX(-12px)" }}
      >
        <SelectGroup className="w-full p-0 flex flex-col gap-1">
          {languages.map((item) => {
            return (
              <SelectItem
                className="w-full h-10 px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer rounded-lg text-foreground"
                key={item.value}
                value={item.value}
              >
                <span className="text-sm font-medium">{item.label}</span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
