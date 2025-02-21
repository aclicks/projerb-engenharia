
import { Cog, Network, Settings } from "lucide-react";

const services = [
  {
    icon: <Cog className="w-8 h-8 text-accent" />,
    title: "Engenharia Mecânica",
    description: "Soluções inovadoras para sistemas e produtos mecânicos complexos.",
  },
  {
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: "Engenharia Elétrica",
    description: "Projeto e implementação de sistemas elétricos avançados.",
  },
  {
    icon: <Network className="w-8 h-8 text-accent" />,
    title: "Soluções de Software",
    description: "Desenvolvimento de software personalizado para aplicações em engenharia.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Soluções completas de engenharia adaptadas às suas necessidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-primary/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
