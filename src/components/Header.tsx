"use client";

import { useEffect, useState } from "react";
import NavBar from "./navbar/Navbar";

export default function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setHideHeader(true);
      } else {
        // if scroll up show the navbar
        setHideHeader(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`z-10 left-auto w-full animate-intro-ascend opacity-0 fixed flex-col items-center flex justify-center bg-inherit shadow-2xl transition-all duration-700 ${
        hideHeader ? "-top-20" : "top-0"
      }`}>
      <NavBar />
    </div>
  );
}
