import { AiFillPhone, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

import Content from "../Content";

export default function Contact() {
  return (
    <Content
      id='contact'
      title='Contact Me'
      className='min-h-screen items-center'>
      <div className='mt-7 grid grid-cols-1 gap-10 text-center transition-all md:mt-0'>
        <p className='text-light flex w-full items-center text-left text-lg md:items-start md:text-center md:text-base'>
          I&apos;m currently finding an opprtunities where I can use my skills and
          make an impact. Interesting in working together? Send me a Message.
        </p>
        <ul className='flex w-full flex-col items-start gap-7 text-center font-bold md:items-center md:justify-center'>
          <li className='flex gap-3 text-center text-2xl '>
            <AiTwotoneMail />
            <span className='text-base font-light sm:text-xl'>
              <a href='mailto:email@sample.com' className="underline underline-offset-4 hover:text-emerald-300 transition-all">email@sample.com</a>
            </span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <AiFillLinkedin />
            <span className='text-base font-light sm:text-xl'>
              <a href='www.linkedin.com' className="underline underline-offset-4 hover:text-emerald-300 transition-all" target='_blank'>
                linkedin.com/in/linkedin/
              </a>
            </span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <TiLocation />
            <span className='text-base font-light sm:text-xl'>
              Manila City, Philippines
            </span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <AiFillPhone />
            <span className='text-base font-light sm:text-xl'>
              +639 123-456-789
            </span>
          </li>
        </ul>
      </div>
    </Content>
  );
}
