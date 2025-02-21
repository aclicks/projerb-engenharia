
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
    logo: "/lovable-uploads/fa471d15-8c03-4fd7-af82-251684916000.png"
  },
  {
    name: "Comper",
    logo: "/lovable-uploads/3192bc54-8ecb-4885-944e-39ee3cdb2d3f.png"
  },
  "Hannah Engenharia",
  "Egelte Engenharia",
  "Shopping Norte Sul Plaza",
  "Shopping Bosque dos Ipês",
  {
    name: "Casas Bahia",
    logo: "/lovable-uploads/e16912ff-db61-4ed8-a1c2-9a381cf3d0c6.png"
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
  "Jooy",
  "Fogo Caipira",
  "Rede Pires",
  "Projebio (Jaraguari)",
  "Tecar Automóveis",
  "Condomínio Riviera Dourados",
  "JAT Transportadora",
  "Lojas Torra",
  "Autódromo Internacional de Campo Grande",
  "Atacadão",
  {
    name: "Escolas Harmonia",
    logo: "/lovable-uploads/9a5f2714-7705-46fd-b8c7-dfa6629428ce.png"
  },
  "Cultivar Agrícola",
  {
    name: "Spoleto",
    logo: "/lovable-uploads/70d58f82-62a2-4e35-998c-134e16c0cfc2.png"
  },
  {
    name: "Imbauba",
    logo: "/lovable-uploads/ef2c8a66-5423-4091-9c1f-7f69fc77c2b7.png"
  },
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
        className="w-32 h-16 object-contain"
      />
    );
  };

  return (
    <section id="clientes" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clientes</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Essas marcas confiam na PROJERB
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
