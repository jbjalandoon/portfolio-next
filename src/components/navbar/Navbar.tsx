import Nav from "./Nav";
import Title from "./Title";

export default function NavBar() {
  return (
    <div className='flex w-full max-w-7xl h-20 items-center px-8'>
      <Title />
      <Nav />
    </div>
  );
}
