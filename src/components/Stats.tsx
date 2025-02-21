
const stats = [
  { number: "70+", label: "Projetos em todo o Brasil" },
  { number: "124.000+", label: "m² de área protegida" },
];

const Stats = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2 text-accent font-citrine"
                style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-white/80 font-citrine"
                style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
