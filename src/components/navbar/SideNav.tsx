"use client";

import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";

export default function SideNav({
  toggleSideNav,
  setActiveLink,
  activeLink,
}: {
  toggleSideNav: (event: React.MouseEvent<HTMLElement>) => void;
  setActiveLink: (event: React.MouseEvent<HTMLElement>) => void;
  activeLink: string | null;
}) {
  return createPortal(
    <div className='flex flex-col md:hidden'>
      <div className='fixed right-0 top-0 z-50 h-screen w-1/2 bg-blue-950'>
        <div className='flex h-20 w-full pr-5'>
          <button
            className='ml-auto text-4xl font-bold text-emerald-300'
            onClick={toggleSideNav}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className='flex flex-col gap-10 self-center items-center text-center'>
          <NavItem
            className={`text-slate-200 after:bg-slate-200 ${
              activeLink === "/#home" ? "active" : ""
            }`}
            href='/#home'
            setActiveLink={setActiveLink}>
            Home
          </NavItem>
          <NavItem
            className={`text-slate-200 after:bg-slate-200 ${
              activeLink === "/#about" ? "active" : ""
            }`}
            href='/#about'
            setActiveLink={setActiveLink}>
            About Me
          </NavItem>
          <NavItem
            className={`text-slate-200 after:bg-slate-200 ${
              activeLink === "/#project" ? "active" : ""
            }`}
            href='/#project'
            setActiveLink={setActiveLink}>
            Projects
          </NavItem>
          <NavItem
            className={`text-slate-200 after:bg-slate-200 ${
              activeLink === "/#contact" ? "active" : ""
            }`}
            href='/#contact'
            setActiveLink={setActiveLink}>
            Contact Me
          </NavItem>
        </ul>
      </div>
    </div>,
    document.body
  );
}
