import { HTMLAttributes, ReactElement } from "react";

export default function Content({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section
      className={`flex h-auto min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-20 lg:pt-0 pt-20 ${className}`}
      id={id}>
      <div className='flex items-center justify-center whitespace-nowrap text-center text-3xl font-semibold before:relative before:-z-50 before:mr-5 before:h-0.5 before:w-full before:bg-slate-600 after:relative after:-z-50 after:ml-5 after:h-0.5 after:w-full after:bg-slate-600'>
        Welcome to my portfolio
      </div>
      <div>{children}</div>
    </section>
  );
}
