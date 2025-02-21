
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from 'react';

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
    align: 'start',
    slidesToScroll: 2
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    // Start the interval
    const interval = setInterval(autoplay, 3000);

    // Stop on user interaction
    const onPointerDown = () => {
      clearInterval(interval);
    };

    emblaApi.on('pointerDown', onPointerDown);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (emblaApi) {
        emblaApi.off('pointerDown', onPointerDown);
      }
    };
  }, [emblaApi]);

  // Create slides with two clients each (one on top of the other)
  const slides = [];
  for (let i = 0; i < clients.length; i += 2) {
    slides.push([
      clients[i],
      i + 1 < clients.length ? clients[i + 1] : null
    ]);
  }

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
                        <span className="text-primary font-semibold text-center">
                          {client}
                        </span>
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
