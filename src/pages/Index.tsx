
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 overflow-hidden">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Index;
