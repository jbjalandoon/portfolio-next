import { AiFillPhone, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

import Content from "../Content";

export default function Contact() {
  return (
    <Content
      id='contact'
      title='Contact Me'
      className='min-h-screen items-center'>
      <div className='mt-7 grid grid-cols-2 gap-10 text-center transition-all md:mt-0 md:grid-cols-1'>
        <p className='text-light flex w-full items-center text-center text-lg md:items-start md:text-base'>
          I'm currently finding an opprtunities where I can use my skills and
          make an impact. Interesting in working together? Send me a Message.
        </p>
        <ul className='flex w-full flex-col items-start gap-7 text-center font-bold md:items-center md:justify-center'>
          <li className='flex gap-3 text-center text-2xl '>
            <AiTwotoneMail />
            <span className='text-xl font-light'>
              jerome.jalandoon@gmail.com
            </span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <TiLocation />
            <span className='text-xl font-light'>Taguig City, Philippines</span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <AiFillLinkedin />
            <span className='text-xl font-light'>
              linkedin.com/in/jbjalandoon/
            </span>
          </li>
          <li className='flex items-center gap-3 text-2xl'>
            <AiFillPhone />
            <span className='text-xl font-light'>+639 673-104-255</span>
          </li>
        </ul>
      </div>
    </Content>
  );
}
