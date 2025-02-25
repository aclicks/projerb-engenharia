
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <section id="sobre">
      <AuroraBackground>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen section-padding gap-8">
          <div className="max-w-3xl mx-auto text-center md:text-left md:w-1/2">
            <span className="inline-block px-4 py-2 bg-[#0060E6] text-white rounded-full text-base font-bold mb-6 animate-fade-in font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              <span className="text-black dark:text-white">Planeje, </span>
              <span className="text-black dark:text-white">projete, </span>
              <span className="text-[#0060E6]">proteja.</span>
            </h1>
            <p className="text-lg md:text-xl text-black dark:text-white mb-8 max-w-4xl mx-auto animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 550', animationDelay: "0.2s" }}>
              A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <img 
              src="/lovable-uploads/835d269c-6903-406b-9072-0790ea61e9ab.png" 
              alt="Sistema de prevenção contra incêndio" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
