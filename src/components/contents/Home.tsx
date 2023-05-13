import Content from "../Content";

export default function Home() {
  return (
    <Content id='home' title='Welcome to my Portfolio' className="min-h-screen justify-center">
      <div className='flex h-full w-full max-w-4xl tracking-wider'>
        <div className='flex w-full flex-col gap-6 transition-all'>
          <p className='text-lg font-light'>Hello, my name is</p>
          <h1 className='md:text-7xl text-5xl font-bold'>Jerome,</h1>
          <h1 className='md:text-6xl text-4xl'>I'm a Web Developer.</h1>
          <p className='md:w-4/6 w-full md:text-lg text-base font-extralight'>
            I'm a graduating student in Polytechnic University of the
            Philippines Taguig (2023). I specialize in Fullstack Development.
            I'm currently focused in building my own projects.
          </p>
          <button className='self-start border border-emerald-300 bg-emerald-300 px-7 py-4 font-bold text-slate-950 transition-all duration-1000 hover:bg-transparent hover:text-slate-200'>
            Resume
          </button>
        </div>
      </div>
    </Content>
  );
}
