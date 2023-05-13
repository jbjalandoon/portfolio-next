import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function NavItem({
  children,
  href,
  className,
  toggleSideNav,
}: {
  children: React.ReactNode;
  href: Url;
  className: String;
  toggleSideNav?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <li
      className={`relative text-lg font-semibold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded-lg after:transition-all after:duration-700 hover:after:scale-100 ${className}`}>
      <Link href={href} scroll={false} onClick={toggleSideNav}>
        {children}
      </Link>
    </li>
  );
}
