
const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
          Excelência em Engenharia
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up">
          <span className="text-accent">Planeje, projete, proteja.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
        </p>
      </div>
    </section>
  );
};

export default Hero;
