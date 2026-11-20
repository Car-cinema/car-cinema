export function AuthContainer({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="flex min-h-0 w-full flex-1 overflow-y-auto pb-0 md:p-4 md:pb-34.5">
      <div className="mx-auto mt-auto w-full rounded-t-4xl bg-surface-subtle p-6 py-8 shadow-lg md:max-w-148 md:rounded-4xl md:p-8 md:py-7">
        <h1 className="w-full text-[34px] font-semibold leading-none tracking-normal md:text-[37px]">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}
