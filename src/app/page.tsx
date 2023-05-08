import About from "@/components/contents/About";
import Contact from "@/components/contents/Contact";
import Home from "@/components/contents/Home";
import Projects from "@/components/contents/Projects";

export default function Page() {
  return (
    <div className='flex w-full items-center justify-center flex-col'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
