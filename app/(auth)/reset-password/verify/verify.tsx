"use client";
import { useRouter } from "next/navigation";
import VerifyCode from "@/components/(auth)/verify-code";

export default function Verify() {
  const router = useRouter();

  return (
    <VerifyCode onButtonClick={() => router.push("/reset-password/new-password")} />
  );
}