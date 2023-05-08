import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function NavItem({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: Url;
  className: String;
}) {
  return (
    <li
      className={`font-semibold hover:after:scale-100 relative text-lg after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded-lg after:transition-all after:duration-700 ${className}`}>
      <Link href={href} scroll={false}>{children}</Link>
    </li>
  );
}
