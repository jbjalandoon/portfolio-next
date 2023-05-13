"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function NavItem({
  children,
  href,
  className,
  setActiveLink,
}: {
  children: React.ReactNode;
  href: Url;
  className: String;
  setActiveLink?: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <li
      className={`relative w-fit text-lg font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-0 after:rounded-lg after:transition-all after:duration-700 hover:text-emerald-400 hover:after:scale-100 ${className}`}>
      <Link href={href} scroll={false} onClick={setActiveLink}>
        {children}
      </Link>
    </li>
  );
}
