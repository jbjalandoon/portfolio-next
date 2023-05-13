"use client";

import { BiCodeBlock, BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";

export default function Project({
  id,
  title,
  description,
  technologies,
  link,
  github,
}: {
  id: number;
  title: string;
  description: string;
  technologies: Array<string>;
  link: string;
  github: string;
}) {
  const [opened, setOpened] = useState(false);

  const closeModalHandler = () => {
    setOpened(false);
  };

  return (
    <>
      <div className='flex h-96 w-full flex-col gap-7 rounded-2xl bg-slate-800 px-8 py-5 shadow-xl'>
        <div className='flex items-center'>
          <div className='text-5xl font-bold'>
            <BiCodeBlock />
          </div>
          <div className='ml-auto flex gap-3 text-2xl'>
            <a href={link} target='_blank'>
              <BiLinkExternal />
            </a>
            <a href={github} target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='mb-3 overflow-hidden text-sm font-extralight line-clamp-3'>
          {description}
        </p>
        <button
          onClick={() => {
            setOpened(true);
          }}
          className='w-44 self-center border border-emerald-300 py-2 font-bold transition-colors duration-500 hover:bg-emerald-300 hover:text-slate-900'>
          See More
        </button>
        <div className='mt-auto flex gap-4 self-center'>
          {technologies.map((e) => (
            <span className='text-xs font-extralight'>{e}</span>
          ))}
        </div>
      </div>
      {opened && <ProjectDetail onCloseModal={closeModalHandler}/>}
    </>
  );
}
