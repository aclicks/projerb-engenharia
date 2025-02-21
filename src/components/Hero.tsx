
const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/82d40a3b-bfec-4b52-b35c-25f676b35f61.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <span 
            className="inline-block px-4 py-2 bg-[#0060E6] text-white rounded-full text-base font-bold mb-6 animate-fade-in font-citrine" 
            style={{ fontVariationSettings: '"wght" 700' }}
          >
            REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up">
            <span className="text-white font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>Planeje, </span>
            <span className="text-white font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>projete, </span>
            <span className="text-[#0060E6] font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>proteja.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-white mb-8 max-w-4xl mx-auto animate-fade-up font-citrine" 
            style={{ 
              animationDelay: "0.2s",
              fontVariationSettings: '"wght" 400'
            }}
          >
            A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
