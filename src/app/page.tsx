import About from "@/components/contents/About";
import Contact from "@/components/contents/Contact";
import Home from "@/components/contents/Home";
import Projects from "@/components/contents/Projects";

export default function Page() {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
