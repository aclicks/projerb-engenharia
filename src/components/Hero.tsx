
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <section id="sobre" className="w-full">
      <AuroraBackground>
        <div 
          className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full"
          style={{
            backgroundImage: 'url("/lovable-uploads/8aee9633-df84-471a-a782-fa2ae5cfdc7e.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay - increased from 65% to 75% opacity */}
          <div className="absolute inset-0 bg-black/75 z-0"></div>
          
          <div className="relative z-20 max-w-3xl mx-auto text-center px-4">
            <span className="inline-block px-4 py-2 bg-[#0060E6] text-white rounded-full text-base font-bold mb-6 animate-fade-in font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              <span className="text-white">Planeje, </span>
              <span className="text-white">projete, </span>
              <span className="text-[#0060E6]">proteja.</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-4xl mx-auto animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 550', animationDelay: "0.2s" }}>
              A Projerb Engenharia é uma empresa especializada em projetos de prevenção contra incêndio e projetos complementares. Além disso, oferece gestão de projetos, abrangendo planejamento, elaboração e compatibilização, para entregar aos clientes um pacote otimizado, com menos conflitos e melhor execução da obra.
            </p>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
