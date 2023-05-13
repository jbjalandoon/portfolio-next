"use client";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

export default function ProjectDetail({
  onCloseModal,
}: {
  onCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return createPortal(
    <div className='fixed z-30 flex h-screen w-full items-center justify-center'>
      <div className='absolute z-40 h-full w-full bg-gray-700 opacity-40'></div>
      <div className='relative z-50 grid h-3/4 w-full max-w-5xl animate-intro-modal grid-cols-2 items-center justify-center gap-7 rounded-2xl bg-slate-950 px-14 py-12 opacity-0 shadow-2xl'>
        <div className='absolute right-5 top-5'>
          <button className='text-3xl' onClick={onCloseModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='mb-4 text-3xl font-bold'>My Portfolio</h1>
          <p className='mb-4 text-base font-thin'>
            Incididunt est quis labore tempor. Mollit consectetur nisi excepteur
            commodo quis fugiat ullamco et excepteur est id sit duis ad. Nostrud
            ea est incididunt Lorem esse aute aliquip pariatur labore labore
            aliquip dolore excepteur.
          </p>
          <div className='mb-4 flex gap-4 text-4xl'>
            <a>
              <BiLinkExternal />
            </a>
            <a>
              <FaGithub />
            </a>
          </div>
          <div className='self=center flex flex-wrap gap-4 text-sm font-light'>
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
        </div>
        <div>
          <img
            src='https://picsum.photos/1024/768'
            className='w-full rounded-xl'></img>
        </div>
      </div>
    </div>,
    document.body
  );
}
