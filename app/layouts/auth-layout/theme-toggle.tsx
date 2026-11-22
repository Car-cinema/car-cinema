"use client";
import { useTheme } from "next-themes";
import { DarkThemeIcon } from "@/shared/icons/dark-theme-icon";
import { LightThemeIcon } from "@/shared/icons/light-theme-icon";
import { Button } from "@/shared/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div
      aria-label="Theme"
      className="grid h-10 w-19 grid-cols-2 items-center rounded-full bg-container p-1"
    >
      <Button
        variant="tertiary"
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
        className="h-full px-0 hover:bg-transparent dark:bg-surface-active dark:text-white-base dark:hover:bg-surface-active/90"
      >
        <DarkThemeIcon />
      </Button>
      <Button
        variant="tertiary"
        onClick={() => setTheme("light")}
        aria-label="Light theme"
        className="h-full bg-surface-active px-0 text-black-base hover:bg-surface-active/90 dark:bg-transparent dark:hover:bg-transparent"
      >
        <LightThemeIcon />
      </Button>
    </div>
  );
}
