import Image from "next/image";

export default function AuthTheme() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/light-theme.png"
        alt=""
        fill
        priority
        className="object-cover dark:hidden"
      />
      <Image
        src="/dark-theme.png"
        alt=""
        fill
        priority
        className="hidden object-cover dark:block"
      />
    </div>
  );
}
