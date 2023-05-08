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
      className={`pt-20 flex h-auto min-h-screen w-full items-center justify-center -z-10 ${className}`}
      id={id}>
      {children}
    </section>
  );
}
