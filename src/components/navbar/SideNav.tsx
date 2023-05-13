"use client";

import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";

export default function SideNav({
  toggleSideNav,
}: {
  toggleSideNav: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return createPortal(
    <div className='flex flex-col md:hidden'>
      <div className='fixed right-0 top-0 z-50 h-screen sm:w-1/2 w-full bg-blue-950'>
        <div className='flex h-20 w-full pr-5'>
          <button
            className='ml-auto text-4xl font-bold text-emerald-300'
            onClick={toggleSideNav}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className='flex flex-col gap-10 self-center text-center'>
          <NavItem
            className='text-lime-600 after:bg-lime-600'
            href='/#home'
            toggleSideNav={toggleSideNav}>
            Home
          </NavItem>
          <NavItem
            className='text-sky-500 after:bg-sky-500'
            href='/#about'
            toggleSideNav={toggleSideNav}>
            About Me
          </NavItem>
          <NavItem
            className='text-red-500 after:bg-red-500'
            href='/#project'
            toggleSideNav={toggleSideNav}>
            Projects
          </NavItem>
          <NavItem
            className='text-yellow-300 after:bg-yellow-300'
            href='/#contact'
            toggleSideNav={toggleSideNav}>
            Contact Me
          </NavItem>
        </ul>
      </div>
    </div>,
    document.body
  );
}
