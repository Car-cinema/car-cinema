"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckIcon } from "@/shared/icons/check-icon";
import { XIcon } from "@/shared/icons/x-icon";

export function PasswordFields() {
  const t = useTranslations();
  const [password, setPassword] = useState("");

  const rules = [
    { label: t("password_min_length"), valid: password.length >= 8 },
    { label: t("password_uppercase"), valid: /[A-Z]/.test(password) },
    { label: t("password_number"), valid: /[0-9]/.test(password) },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          type="password"
          autoComplete="new-password"
          placeholder={t("create_password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {password.length > 0 && (
          <ul className="flex flex-col gap-1 text-sm font-normal leading-none tracking-normal">
            {rules.map((rule) => (
              <li key={rule.label} className="flex items-center gap-2">
                {rule.valid ? <CheckIcon /> : <XIcon />}
                {rule.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="password"
        autoComplete="new-password"
        placeholder={t("repeat_password")}
      />
    </>
  );
}
