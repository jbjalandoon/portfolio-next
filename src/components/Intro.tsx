"use client";

import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const targetTitle = "{JEROME}";
  const underScore: any = useRef(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (currentTitleIndex < targetTitle.length) {
      let delay = 70;
      if (isFirstLoad) delay = 1000;
      const timeout = setTimeout(() => {
        setIsFirstLoad(false);
        setCurrentTitle(
          (prevState) => prevState + targetTitle[currentTitleIndex]
        );
        setCurrentTitleIndex((prevState) => prevState + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentTitleIndex, currentTitle]);

  useEffect(() => {
    setTimeout(() => {
      if (underScore.current !== null) underScore.current.remove();
    }, 3000);
  }, []);

  return (
    <div className='fixed h-screen z-50 left-0 top-0 flex w-full items-center animate-title justify-center text-6xl'>
      <span>{currentTitle}</span>
      <span className='animate-twinkle' ref={underScore}>
        _
      </span>
    </div>
  );
}