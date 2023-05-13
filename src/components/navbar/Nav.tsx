"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import SideNav from "./SideNav";

export default function Nav() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNavHandler = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    <div className='ml-auto'>
      <ul className='hidden gap-10 md:flex'>
        <NavItem className='text-lime-600 after:bg-lime-600' href='/#home'>
          Home
        </NavItem>
        <NavItem className='text-sky-500 after:bg-sky-500' href='/#about'>
          About Me
        </NavItem>
        <NavItem className='text-red-500 after:bg-red-500' href='/#project'>
          Projects
        </NavItem>
        <NavItem
          className='text-yellow-300 after:bg-yellow-300'
          href='/#contact'>
          Contact Me
        </NavItem>
      </ul>
      <button
        className='relative inline-block h-12 md:hidden'
        onClick={toggleSideNavHandler}>
        <div className='h-0.5 w-10 bg-emerald-300 before:absolute before:right-0 before:top-2 before:h-0.5 before:w-12 before:bg-emerald-300 after:absolute after:bottom-2 after:right-0 after:h-0.5 after:w-8 after:bg-emerald-300'></div>
      </button>
      {showSideNav && <SideNav toggleSideNav={toggleSideNavHandler} />}
    </div>
  );
}
