
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
