
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
          Engineering Excellence
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up">
          Building Tomorrow's <br />
          <span className="text-accent">Engineering Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          We combine innovative thinking with cutting-edge technology to solve complex engineering challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button className="btn-primary flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 text-primary hover:text-accent transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
