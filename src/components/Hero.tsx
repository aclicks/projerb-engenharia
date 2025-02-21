
const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in" style={{ fontFamily: '"citrine-variable", sans-serif' }}>
          REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up" style={{ fontFamily: '"citrine-variable", sans-serif' }}>
          <span className="text-primary" style={{ fontFamily: '"citrine-variable", sans-serif' }}>Planeje, </span>
          <span className="text-primary" style={{ fontFamily: '"citrine-variable", sans-serif' }}>projete, </span>
          <span style={{ fontFamily: '"citrine-variable", sans-serif', color: '#0060E6' }}>proteja.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary mb-8 max-w-4xl mx-auto animate-fade-up" style={{ fontFamily: '"citrine-variable", sans-serif', animationDelay: "0.2s" }}>
          A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
        </p>
      </div>
    </section>
  );
};

export default Hero;
