
const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center section-padding relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/7a594fa9-db9a-4a35-bc1b-e152c422d3b6.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-2 bg-[#0060E6] text-white rounded-full text-base font-bold mb-6 animate-fade-in font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
          REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
          <span className="text-white">Planeje, </span>
          <span className="text-white">projete, </span>
          <span className="text-[#0060E6]">proteja.</span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-4xl mx-auto animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 550', animationDelay: "0.2s" }}>
          A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
        </p>
      </div>
    </section>
  );
};

export default Hero;
