
import { Cog, Network, Circuit } from "lucide-react";

const services = [
  {
    icon: <Cog className="w-8 h-8 text-accent" />,
    title: "Mechanical Engineering",
    description: "Innovative solutions for complex mechanical systems and products.",
  },
  {
    icon: <Circuit className="w-8 h-8 text-accent" />,
    title: "Electrical Engineering",
    description: "Advanced electrical systems design and implementation.",
  },
  {
    icon: <Network className="w-8 h-8 text-accent" />,
    title: "Software Solutions",
    description: "Custom software development for engineering applications.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to your needs
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
