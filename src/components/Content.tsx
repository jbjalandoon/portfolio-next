import { HTMLAttributes, ReactElement } from "react";

export default function Content({
  children,
  id,
  className,
  title,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  title: string;
}) {
  return (
    <section
      className={`flex h-auto w-full max-w-6xl flex-col gap-3 px-5 pt-20 transition-all md:gap-10 md:px-20 ${className}`}
      id={id}>
      <div className='transition-all mt-5 flex w-full items-center justify-center whitespace-nowrap text-center text-xl sm:text-2xl font-semibold before:relative before:-z-50 before:mr-5 before:h-0.5 before:w-full before:bg-slate-600 after:relative after:-z-50 after:ml-5 after:h-0.5 after:w-full after:bg-slate-600 md:text-3xl'>
        {title}
      </div>
      {children}
    </section>
  );
}
