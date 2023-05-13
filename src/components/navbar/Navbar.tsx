import Nav from "./Nav";
import Title from "./Title";

export default function NavBar() {
  return (
    <div className='flex h-20 w-full max-w-7xl items-center px-5 transition-all md:px-14'>
      <Title />
      <Nav />
    </div>
  );
}
