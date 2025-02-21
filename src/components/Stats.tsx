
const Stats = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-citrine font-bold text-white mb-2">+500</p>
            <p className="text-accent">Projetos Realizados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-citrine font-bold text-white mb-2">+100</p>
            <p className="text-accent">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-citrine font-bold text-white mb-2">+10</p>
            <p className="text-accent">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-citrine font-bold text-white mb-2">100%</p>
            <p className="text-accent">Projetos Aprovados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
