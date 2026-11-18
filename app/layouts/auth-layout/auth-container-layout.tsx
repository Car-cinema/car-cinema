export function AuthContainer({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full items-end justify-center pb-0 md:p-4 md:pb-34.5">
      <div className="w-full rounded-t-4xl bg-surface-subtle p-6 py-8 shadow-lg md:max-w-148 md:rounded-4xl md:p-8 md:py-7">
        <h1 className="w-full max-w-78 break-words pr-4 text-[34px] font-semibold leading-none tracking-normal md:text-[37px]">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}