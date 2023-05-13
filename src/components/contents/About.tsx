import Content from "../Content";
import Stack from "../Stack";
import AboutSVG from "../svg/AboutSVG";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function About() {
  return (
    <Content id='about' title='About Me' className='min-h-screen p-20'>
      <div className='flex flex-col justify-center gap-0 md:gap-10'>
        <div className='grid h-full w-full md:grid-cols-2 grid-cols-1 tracking-wider'>
          <div className='flex flex-col gap-5 px-4 pt-4 text-md text-light'>
            <p>
              Hello, My name is Jerome and I enjoy web development. The interest
              in web development started when I was a graduating student at (University) where I created a web application for my capstone
              project.
            </p>
            <p>
              I&apos;m a consistent academic achiever during my college where I always
              achieve President&apos;s Lister every school year. My capstone team is
              also the best capstone in the batch 2021.
            </p>
            <p>
              Currently, I&apos;m working in my personal projects and I&apos;m open to job
              opportunities where I can contribute, grow, and learn. if you have
              a good opportunities that I can contribute then don&apos;t hesitate to
              contact me.
            </p>
          </div>
          <div className='md:flex w-full items-start px-14 pt-14 opacity-75 hidden'>
            <AboutSVG />
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-8 mt-3'>
          <h3 className='text-xl font-bold'>SKILLS</h3>
          <div className='flex flex-wrap gap-10 justify-center'>
            <Stack Svg={FaHtml5} name='HTML' />
            <Stack Svg={FaCss3Alt} name='CSS' />
            <Stack Svg={SiJavascript} name='Javascript' />
            <Stack Svg={FaReact} name='React' />
            <Stack Svg={FaNodeJs} name='nodeJS' />
            <Stack Svg={SiTailwindcss} name='tailwind' />
            <Stack Svg={TbBrandNextjs} name='nextJS' />
          </div>
        </div>
      </div>
    </Content>
  );
}
