
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from 'react';

const clients = [
  {
    name: "Energisa",
    logo: "/lovable-uploads/3aa28eb0-73ee-4349-b079-e0c68c01a3b6.png"
  },
  {
    name: "Fort Atacadista",
    logo: "/lovable-uploads/5c530835-4b6f-466a-a060-a2555d09b306.png"
  },
  {
    name: "Comper",
    logo: "/lovable-uploads/3192bc54-8ecb-4885-944e-39ee3cdb2d3f.png"
  },
  {
    name: "Hannah Engenharia",
    logo: "/lovable-uploads/1a572f88-ca00-4afb-a3c3-6e3fb01434a5.png"
  },
  {
    name: "Egelte Engenharia",
    logo: "/lovable-uploads/b1df1e88-1015-4515-973f-556b33966645.png"
  },
  {
    name: "Shopping Norte Sul Plaza",
    logo: "/lovable-uploads/dd6a89d1-4f9b-4374-a406-b64184ac48b4.png"
  },
  {
    name: "Shopping Bosque dos Ipês",
    logo: "/lovable-uploads/5c211bcb-66ad-4b3a-ab1f-305ff672fe8f.png"
  },
  {
    name: "Casas Bahia",
    logo: "/lovable-uploads/9d6b1d76-b074-4e3a-b048-9ca9084edda6.png"
  },
  "Usina Laguna (Batayporã)",
  "Autobel",
  {
    name: "Eletrosul",
    logo: "/lovable-uploads/731f990a-306b-464a-a20f-bd298c7c11d0.png"
  },
  "Rotele",
  "Lojas Americanas",
  "Universidade Anhanguera",
  {
    name: "Jooy",
    logo: "/lovable-uploads/81a6ee5e-de51-4557-8b89-c03c4868fcd7.png"
  },
  "Fogo Caipira",
  "Rede Pires",
  "Projebio (Jaraguari)",
  "Tecar Automóveis",
  "Condomínio Riviera Dourados",
  "JAT Transportadora",
  "Lojas Torra",
  "Autódromo Internacional de Campo Grande",
  "Atacadão",
  "Escolas Harmonia",
  "Cultivar Agrícola",
  "Spoleto",
  "Imbauba",
  "Alphaville 4",
  "Festival da Carne",
  "Doces Momentos"
];

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    slidesToScroll: 2
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 3000);

    const onPointerDown = () => {
      clearInterval(interval);
    };

    emblaApi.on('pointerDown', onPointerDown);

    return () => {
      clearInterval(interval);
      if (emblaApi) {
        emblaApi.off('pointerDown', onPointerDown);
      }
    };
  }, [emblaApi]);

  const slides = [];
  for (let i = 0; i < clients.length; i += 2) {
    slides.push([
      clients[i],
      i + 1 < clients.length ? clients[i + 1] : null
    ]);
  }

  const renderClient = (client: string | { name: string; logo: string }) => {
    if (typeof client === 'string') {
      return (
        <span className="text-primary font-semibold text-center">
          {client}
        </span>
      );
    }
    return (
      <img 
        src={client.logo} 
        alt={client.name} 
        className="h-12 object-contain"
      />
    );
  };

  return (
    <section id="clientes" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-citrine font-bold" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>Clientes</h2>
          <p className="text-primary/60 max-w-2xl mx-auto font-citrine" style={{ fontVariationSettings: '"wght" 500' }}>
            Estas marcas confiam na PROJERB
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex-none mx-4 flex flex-col gap-4">
                  {slide.map((client, index) => (
                    client && (
                      <div
                        key={`${slideIndex}-${index}`}
                        className="w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition-transform hover:scale-105"
                      >
                        {renderClient(client)}
                      </div>
                    )
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
