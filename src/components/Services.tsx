
import { Cog, Network, Settings } from "lucide-react";

const services = [
  {
    icon: <Cog className="w-8 h-8 text-accent" />,
    title: "Elaboração e aprovação de Projetos de Prevenção Contra Incêndio",
    description: "Desenvolvimento e aprovação de projetos completos de prevenção contra incêndio.",
  },
  {
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: "Regularização de edificações no Corpo de Bombeiros",
    description: "Processo completo de regularização de edifícios junto ao Corpo de Bombeiros.",
  },
  {
    icon: <Network className="w-8 h-8 text-accent" />,
    title: "Emissão de Certificado de Vistoria do Corpo de Bombeiros (AVCB)",
    description: "Auxílio na obtenção do AVCB para seu estabelecimento.",
  },
  {
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: "Elaboração de Projetos Complementares de Engenharia",
    description: "Projetos de Instalações Elétricas de Baixa e Média Tensão, Projetos Hidrossanitários, Projetos Estruturais, Projetos de Ar Condicionado e Licenciamento Ambiental.",
  },
  {
    icon: <Cog className="w-8 h-8 text-accent" />,
    title: "Documentação complementar para certificado do Corpo de Bombeiro",
    description: "ART de Conformidade Elétrica, ART de Manutenção de Preventivos de Incêndio, Atualização ou Substituição de Projetos Aprovados (PSCIP), Treinamento de Brigada de Incêndio, e Assessoria Total para certificação no Corpo de Bombeiros.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-citrine font-bold" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>Serviços</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Soluções especializadas em segurança contra incêndio e engenharia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:transform hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-citrine font-bold mb-4" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>{service.title}</h3>
                  <p className="text-primary/60">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
