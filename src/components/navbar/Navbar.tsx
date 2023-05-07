import Nav from "./Nav";
import Title from "./Title";

export default function NavBar() {
  return (
    <div className='flex h-20 items-center px-8'>
      <Title />
      <Nav />
    </div>
  );
}
