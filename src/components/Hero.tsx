
const Hero = () => {
  return (
    <section 
      id="sobre" 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat section-padding"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1578645510447-e20b4311e3ce')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default Hero;
