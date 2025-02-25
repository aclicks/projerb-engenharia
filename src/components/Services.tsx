
import { cn } from "@/lib/utils";
import {
  Icon24Hours,
  IconClipboardList,
  IconFileCheck,
  IconShieldLock,
  IconTools
} from "@tabler/icons-react";

const services = [
  {
    title: "Elaboração e aprovação de Projetos de Prevenção Contra Incêndio",
    description: "Desenvolvimento e aprovação de projetos completos de prevenção contra incêndio.",
    icon: <IconShieldLock className="w-8 h-8" />,
  },
  {
    title: "Regularização de edificações no Corpo de Bombeiros",
    description: "Processo completo de regularização de edifícios junto ao Corpo de Bombeiros.",
    icon: <IconFileCheck className="w-8 h-8" />,
  },
  {
    title: "Emissão de Certificado de Vistoria do Corpo de Bombeiros (AVCB)",
    description: "Auxílio na obtenção do AVCB para seu estabelecimento.",
    icon: <IconClipboardList className="w-8 h-8" />,
  },
  {
    title: "Elaboração de Projetos Complementares de Engenharia",
    description: "Projetos de Instalações Elétricas de Baixa e Média Tensão, Projetos Hidrossanitários, Projetos Estruturais, Projetos de Ar Condicionado e Licenciamento Ambiental.",
    icon: <IconTools className="w-8 h-8" />,
  },
  {
    title: "Documentação complementar para certificado do Corpo de Bombeiro",
    description: "ART de Conformidade Elétrica, ART de Manutenção de Preventivos de Incêndio, Atualização ou Substituição de Projetos Aprovados (PSCIP), Treinamento de Brigada de Incêndio, e Assessoria Total para certificação no Corpo de Bombeiros.",
    icon: <Icon24Hours className="w-8 h-8" />,
  }
];

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r py-10 relative group/feature dark:border-neutral-800",
        index === 0 && "border-l dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-accent">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#0060E6] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
          {title}
        </span>
      </div>
      <p className="text-sm text-primary/60 max-w-xs relative z-10 px-10" style={{ fontVariationSettings: '"wght" 550' }}>
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-[95vw] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-citrine font-bold" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>Serviços</h2>
          <p className="text-primary/60 max-w-2xl mx-auto" style={{ fontVariationSettings: '"wght" 550' }}>
            Soluções especializadas em segurança contra incêndio e engenharia
          </p>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar">
          {services.map((service, index) => (
            <div key={service.title} className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] flex-shrink-0">
              <Feature
                {...service}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
