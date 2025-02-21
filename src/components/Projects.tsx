
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from 'react';

const clients = [
  "Energisa",
  "Fort Atacadista",
  "Comper",
  "Hannah Engenharia",
  "Egelte Engenharia",
  "Shopping Norte Sul Plaza",
  "Shopping Bosque dos Ipês",
  "Casas Bahia",
  "Usina Laguna (Batayporã)",
  "Autobel",
  "Eletrosul",
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
    containScroll: "trimSnaps",
    align: 'start',
    slidesToScroll: 5
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Create two rows of clients
  const rows = [
    clients.slice(0, Math.ceil(clients.length / 2)),
    clients.slice(Math.ceil(clients.length / 2))
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clientes</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Essas marcas confiam na PROJERB
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex-none min-w-full pl-4">
                  <div className="flex flex-col gap-8">
                    {rows.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex gap-8">
                        {row.map((client, index) => (
                          <div
                            key={index}
                            className="flex-none w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition-transform hover:scale-105"
                          >
                            <span className="text-primary font-semibold text-center">
                              {client}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
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
