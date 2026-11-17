import Image from "next/image";

export default function AuthTheme() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/light-theme.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <Image
        src="/dark-theme.png"
        alt=""
        fill
        priority
        className="object-cover opacity-0 transition-opacity duration-700 ease-in-out dark:opacity-100"
      />
    </div>
  );
}