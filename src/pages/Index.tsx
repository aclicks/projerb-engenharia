
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
};

export default Index;
