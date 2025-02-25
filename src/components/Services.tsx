
import { Network } from "lucide-react";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
        <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
      </svg>
    ),
    title: "Elaboração e aprovação de Projetos de Prevenção Contra Incêndio",
    description: "Desenvolvimento e aprovação de projetos completos de prevenção contra incêndio.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z" />
        <path d="M9 16h6" />
        <path d="M12 7v-3" />
        <path d="M16 5l-4 -1l4 -1" />
        <path d="M12 4h-3a3 3 0 0 0 -3 3" />
      </svg>
    ),
    title: "Regularização de edificações no Corpo de Bombeiros",
    description: "Processo completo de regularização de edifícios junto ao Corpo de Bombeiros.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3v4a.997 .997 0 0 0 1 1h4" />
        <path d="M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" />
        <path d="M8 9h1" />
        <path d="M8 12.994l3 0" />
        <path d="M8 16.997l2 0" />
        <path d="M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
      </svg>
    ),
    title: "Emissão de Certificado de Vistoria do Corpo de Bombeiros (AVCB)",
    description: "Auxílio na obtenção do AVCB para seu estabelecimento.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
        <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
      </svg>
    ),
    title: "Elaboração de Projetos Complementares de Engenharia",
    description: "Projetos de Instalações Elétricas de Baixa e Média Tensão, Projetos Hidrossanitários, Projetos Estruturais, Projetos de Ar Condicionado e Licenciamento Ambiental.",
  },
  {
    icon: <Network className="w-8 h-8 text-accent" />,
    title: "Documentação complementar para certificado do Corpo de Bombeiros",
    description: "ART de Conformidade Elétrica, ART de Manutenção de Preventivos de Incêndio, Atualização ou Substituição de Projetos Aprovados (PSCIP), Treinamento de Brigada de Incêndio e Assessoria Total para certificação no Corpo de Bombeiros.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-citrine font-bold" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>Serviços</h2>
          <p className="text-primary/60 max-w-2xl mx-auto" style={{ fontVariationSettings: '"wght" 550' }}>
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
                  <p className="text-primary/60" style={{ fontVariationSettings: '"wght" 550' }}>{service.description}</p>
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
