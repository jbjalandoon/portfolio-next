"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import SideNav from "./SideNav";

export default function Nav() {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleSideNavHandler = () => {
    setShowSideNav((prevState) => !prevState);
  };

  const navClickHandler = (e: { currentTarget: HTMLElement }) => {
    setActiveLink(e.currentTarget.getAttribute("href"));
    setShowSideNav(false);
  };

  return (
    <div className='ml-auto'>
      <ul className='hidden gap-10 md:flex'>
        <NavItem
          className={`text-slate-200 after:bg-slate-200 ${
            activeLink === "/#home" ? "active" : ""
          }`}
          href='/#home'
          setActiveLink={navClickHandler}>
          Home
        </NavItem>
        <NavItem
          className={`text-slate-200 after:bg-slate-200 ${
            activeLink === "/#about" ? "active" : ""
          }`}
          href='/#about'
          setActiveLink={navClickHandler}>
          About Me
        </NavItem>
        <NavItem
          className={`text-slate-200 after:bg-slate-200 ${
            activeLink === "/#project" ? "active" : ""
          }`}
          href='/#project'
          setActiveLink={navClickHandler}>
          Projects
        </NavItem>
        <NavItem
          className={`text-slate-200 after:bg-slate-200 ${
            activeLink === "/#contact" ? "active" : ""
          }`}
          href='/#contact'
          setActiveLink={navClickHandler}>
          Contact Me
        </NavItem>
      </ul>
      <button
        className='relative inline-block h-12 md:hidden'
        onClick={toggleSideNavHandler}>
        <div className='h-0.5 w-10 bg-emerald-300 before:absolute before:right-0 before:top-2 before:h-0.5 before:w-12 before:bg-emerald-300 after:absolute after:bottom-2 after:right-0 after:h-0.5 after:w-8 after:bg-emerald-300'></div>
      </button>
      {showSideNav && (
        <SideNav toggleSideNav={navClickHandler} setActiveLink={navClickHandler} activeLink={activeLink} />
      )}
    </div>
  );
}
