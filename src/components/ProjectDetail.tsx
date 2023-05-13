"use client";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

export default function ProjectDetail({
  onCloseModal,
}: {
  onCloseModal: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return createPortal(
    <div className='fixed z-30 flex h-screen w-full items-center justify-center px-5 transition-all lg:px-0'>
      <div className='absolute z-40 h-full w-full bg-gray-700 opacity-40' onClick={onCloseModal}></div>
      <div className='relative z-50 grid h-4/5 w-full max-w-5xl animate-intro-modal grid-cols-1 items-center justify-center gap-7 overflow-y-auto rounded-2xl bg-slate-950 px-14 py-12 opacity-0 shadow-2xl sm:overflow-hidden md:grid-cols-2 lg:h-3/4'>
        <div className='absolute right-5 top-5'>
          <button className='text-3xl' onClick={onCloseModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='flex flex-col gap-5 transition-all'>
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
        <div className='absolute left-0 top-0 -z-50 h-full w-full opacity-10 transition-all md:static md:left-auto md:top-auto md:h-auto md:w-auto md:opacity-100'>
          <img
            src='https://picsum.photos/1024/768'
            className='w-full rounded-xl'></img>
        </div>
      </div>
    </div>,
    document.body
  );
}
