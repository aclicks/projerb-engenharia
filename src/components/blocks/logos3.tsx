
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Nossos Clientes",
  logos = [
    {
      id: "logo-1",
      description: "Energisa",
      image: "/lovable-uploads/3aa28eb0-73ee-4349-b079-e0c68c01a3b6.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-2",
      description: "Fort Atacadista",
      image: "/lovable-uploads/cfafd55c-8bd8-4481-875c-2f9edd7425f5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-3",
      description: "Comper",
      image: "/lovable-uploads/3192bc54-8ecb-4885-944e-39ee3cdb2d3f.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-4",
      description: "Hannah Engenharia",
      image: "/lovable-uploads/1a572f88-ca00-4afb-a3c3-6e3fb01434a5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-5",
      description: "Egelte Engenharia",
      image: "/lovable-uploads/afeb8708-ef4e-44db-bfc9-2da2cf7c8657.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-6",
      description: "Shopping Norte Sul Plaza",
      image: "/lovable-uploads/7a594fa9-db9a-4a35-bc1b-e152c422d3b6.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-7",
      description: "Shopping Bosque dos Ipês",
      image: "/lovable-uploads/9ddfb5b2-30ae-40b4-a152-ef99e75a1add.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-8",
      description: "Casas Bahia",
      image: "/lovable-uploads/9d6b1d76-b074-4e3a-b048-9ca9084edda6.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-9",
      description: "Usina Laguna",
      image: "/lovable-uploads/140781ff-3bb3-4260-9745-df45510ffd41.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-10",
      description: "Autobel",
      image: "/lovable-uploads/3b4c6a26-5976-4c95-a878-b8b3e17d6fe2.png",
      className: "h-16 w-auto",
    }
  ],
}: Logos3Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl font-citrine">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.7 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
