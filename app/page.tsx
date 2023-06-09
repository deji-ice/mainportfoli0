import "./globals.css";
import bg from "../Assets/stacked-peaks-haikei (3).png";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";


export default function Home() {
  return (
    
    <div
      id="page"
      className="font-programme antialiased text-slate-900 snap-mandatory snap-y z-0  text-4xl
     overflow-x-hidden
     bg-[#FAF9F6] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <section></section>
    </div>
  );
}
