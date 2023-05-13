import { AiFillPhone, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

import Content from "../Content";

export default function Contact() {
  return (
    <Content
      id='contact'
      title='Contact Me'
      className='items-center min-h-screen'>
      <p className='text-light w-1/2 text-center text-base'>
        I'm currently finding an opprtunities where I can use my skills and make
        an impact. Interesting in working together? Send me a Message.
      </p>
      <ul className='flex flex-col gap-7 font-bold'>
        <li className='flex items-center gap-3 text-2xl'>
          <AiTwotoneMail />
          <span className='text-xl font-light'>jerome.jalandoon@gmail.com</span>
        </li>
        <li className='flex items-center gap-3 text-2xl'>
          <TiLocation />
          <span className='text-xl font-light'>
            Taguig City, Philippines
          </span>
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
    </Content>
  );
}
