import Link from "next/link";
import NavBar from "./Navbar";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div className='ml-auto'>
      <ul className='flex gap-10'>
        <NavItem className='text-lime-600 after:bg-lime-600' href='#'>Home</NavItem>
        <NavItem className='text-sky-500 after:bg-sky-500' href='#'>About Me</NavItem>
        <NavItem className='text-red-500 after:bg-red-500' href='#'>Projects</NavItem>
        <NavItem className='text-yellow-300 after:bg-yellow-300' href='#'>Contact Me</NavItem>
      </ul>
    </div>
  );
}
