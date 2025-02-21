
const stats = [
  { number: "250+", label: "Projetos Concluídos" },
  { number: "50+", label: "Engenheiros Especialistas" },
  { number: "15+", label: "Anos de Experiência" },
  { number: "99%", label: "Satisfação dos Clientes" },
];

const Stats = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
