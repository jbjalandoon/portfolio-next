import Content from "../Content";

export default function Home() {
  return (
    <Content id='home'>
      <div className='flex h-full w-full max-w-4xl tracking-wider'>
        <div className='flex w-full flex-col gap-6'>
          <p className='text-lg font-light'>Hello, my name is</p>
          <h1 className='text-7xl font-bold'>Jerome,</h1>
          <h1 className='text-6xl'>I'm a Web Developer.</h1>
          <p className='w-4/6 text-lg font-extralight'>
            I'm a graduating student in Polytechnic University of the
            Philippines Taguig (2023). I specialize in Fullstack Development.
            I'm currently focused in building my own projects.
          </p>
          <button className="self-start px-7 font-bold transition-all bg-emerald-300 text-slate-950 hover:bg-transparent duration-1000 hover:text-slate-200 py-4 border-emerald-300 border">Resume</button>
        </div>
      </div>
    </Content>
  );
}
