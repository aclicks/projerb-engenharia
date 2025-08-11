import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";

const clients = [
	{
		name: "Energisa",
		logo: "./lovable-uploads/3aa28eb0-73ee-4349-b079-e0c68c01a3b6.png",
	},
	{
		name: "Fort Atacadista",
		logo: "./lovable-uploads/cfafd55c-8bd8-4481-875c-2f9edd7425f5.png",
	},
	{
		name: "Comper",
		logo: "./lovable-uploads/3192bc54-8ecb-4885-944e-39ee3cdb2d3f.png",
	},
	{
		name: "Hannah Engenharia",
		logo: "./lovable-uploads/1a572f88-ca00-4afb-a3c3-6e3fb01434a5.png",
	},
	{
		name: "Egelte Engenharia",
		logo: "./lovable-uploads/afeb8708-ef4e-44db-bfc9-2da2cf7c8657.png",
	},
	{
		name: "Shopping Norte Sul Plaza",
		logo: "./lovable-uploads/7a594fa9-db9a-4a35-bc1b-e152c422d3b6.png",
	},
	{
		name: "Shopping Bosque dos Ipês",
		logo: "./lovable-uploads/9ddfb5b2-30ae-40b4-a152-ef99e75a1add.png",
	},
	{
		name: "Casas Bahia",
		logo: "./lovable-uploads/9d6b1d76-b074-4e3a-b048-9ca9084edda6.png",
	},
	{
		name: "Usina Laguna",
		logo: "./lovable-uploads/140781ff-3bb3-4260-9745-df45510ffd41.png",
	},
	{
		name: "Autobel",
		logo: "./lovable-uploads/3b4c6a26-5976-4c95-a878-b8b3e17d6fe2.png",
	},
	{
		name: "Eletrosul",
		logo: "./lovable-uploads/731f990a-306b-464a-a20f-bd298c7c11d0.png",
	},
	{
		name: "Rotele",
		logo: "./lovable-uploads/b38b1e26-2680-4663-a184-ec25a32d0986.png",
	},
	{
		name: "Lojas Americanas",
		logo: "./lovable-uploads/7ce3289b-ecfe-4d7a-8297-e96a3fb54415.png",
	},
	{
		name: "Universidade Anhanguera",
		logo: "./lovable-uploads/414ee17b-3d6c-43d4-8a1d-baf2e11ae37b.png",
	},
	{
		name: "Jooy",
		logo: "./lovable-uploads/4de488d0-8d47-4b4e-a9b5-d19c2d2dcbd3.png",
	},
	{
		name: "Fogo Caipira",
		logo: "./lovable-uploads/e19fae46-22f0-4588-84d2-be9af57c355a.png",
	},
	{
		name: "Rede Pires",
		logo: "./lovable-uploads/47053daf-5326-4e42-931c-d6ea3690976e.png",
	},
	{
		name: "Projebio",
		logo: "./lovable-uploads/da45265b-a7c6-43b6-baa4-8e9cb824b473.png",
	},
	{
		name: "Tecar Automóveis",
		logo: "./lovable-uploads/b7dac9c9-cc01-45dc-b5a9-b99537282d5e.png",
	},
	{
		name: "Condomínio Riviera Dourados",
		logo: "./lovable-uploads/95ffd0af-d4e1-455b-a31b-8a698f19c24d.png",
	},
	{
		name: "JAT Transportadora",
		logo: "./lovable-uploads/1de16650-5459-4f12-bbfb-2446b9eab39b.png",
	},
	{
		name: "Lojas Torra",
		logo: "./lovable-uploads/7798f774-2afc-487e-a4dc-5da414d14935.png",
	},
	{
		name: "Autódromo Internacional de Campo Grande",
		logo: "./lovable-uploads/11aba6e0-502b-41e9-b2e4-c61db446fbb7.png",
	},
	{
		name: "Atacadão",
		logo: "./lovable-uploads/b72d708e-05bd-436a-9ab1-11db9f508573.png",
	},
	{
		name: "Escolas Harmonia",
		logo: "./lovable-uploads/a69cc83b-5df3-47f0-9442-2066162c4a40.png",
	},
	{
		name: "Cultivar Agrícola",
		logo: "./lovable-uploads/abc83a41-6bb3-4682-89ae-4d7dbe3e6326.png",
	},
	{
		name: "Spoleto",
		logo: "./lovable-uploads/1b807556-8fe2-4516-9ca3-15b694f168c5.png",
	},
	{
		name: "Imbauba",
		logo: "./lovable-uploads/fec7a67f-eb29-4338-a0b0-5b6c83c50126.png",
	},
	{
		name: "Alphaville 4",
		logo: "./lovable-uploads/13abba6c-9a0f-4e71-bc8c-72dddc7040f9.png",
	},
	{
		name: "Festival da Carne",
		logo: "./lovable-uploads/84fbd242-8aa8-4e8a-bbd7-beb33b0cd19e.png",
	},
	{
		name: "Doces Momentos",
		logo: "./lovable-uploads/2c9e0492-2424-4f58-bc8d-6fc5ad17b7d3.png",
	},
	{
		name: "Postos Mirian",
		logo: "./lovable-uploads/c5d450b6-82ce-45a8-9255-555dbc6ebc90.png",
	},
	{
		name: "MS Extintores",
		logo: "./lovable-uploads/MSExtintores.png",
	},
	{
		name: "Fazenda Caiman",
		logo: "./lovable-uploads/Fazendacaiman.png",
	},
	{
		name: "Bluefit",
		logo: "./lovable-uploads/bluefit.png",
	},
	{
		name: "Casa Cor MS",
		logo: "./lovable-uploads/casacorms.png",
	},
	{
		name: "Soldamaq",
		logo: "./lovable-uploads/soldamaq.png",
	},
	{
		name: "Vibra Energia",
		logo: "./lovable-uploads/vibraenergia.jpg",
	},
	{
		name: "Viação Cruzeiro do Sul",
		logo: "./lovable-uploads/cruzeirodosul.png",
	},
	{
		name: "Comunidade Cristã Aliançados",
		logo: "./lovable-uploads/aliancados.png",
	},
	{
		name: "Hospital Adventista do Pênfigo",
		logo: "./lovable-uploads/penfigo.png",
	},
	{
		name: "Hospital São Julião",
		logo: "./lovable-uploads/saojuliao.png",
	},
	{
		name: "Ministério Atos de Justiça",
		logo: "./lovable-uploads/atosdejustica.png",
	},
	{
		name: "FEMSA",
		logo: "./lovable-uploads/Coca-Cola_Femsa_Logo.png",
	},
	{
		name: "Instituto FHN (Fernando Henrique Novaes)",
		logo: "./lovable-uploads/institutofhn.png",
	},
	{
		name: "Paróquia Imaculado Coração de Maria",
		logo: "./lovable-uploads/imaculadocoracaodemaria.png",
	},
	{
		name: "BRD Distribuidora",
		logo: "./lovable-uploads/brddistribuidora.png",
	},
	{
		name: "Flor de Araça Espaço de Eventos",
		logo: "./lovable-uploads/flordearaca.png",
	},
	{
		name: "Vepesa Pneus",
		logo: "./lovable-uploads/vepesapneus.png",
	},
];

const Projects = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if device is mobile
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);

		return () => {
			window.removeEventListener("resize", checkIsMobile);
		};
	}, []);

	// Configure carousel options based on device type
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		dragFree: true,
		align: "start",
		slidesToScroll: 1,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	// Continuous scrolling functionality
	const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
	const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

	const startContinuousScroll = useCallback(
		(direction: "prev" | "next") => {
			// Clear any existing intervals
			if (scrollIntervalRef.current) {
				clearInterval(scrollIntervalRef.current);
				scrollIntervalRef.current = null;
			}
			if (autoplayIntervalRef.current) {
				clearInterval(autoplayIntervalRef.current);
				autoplayIntervalRef.current = null;
			}

			// Immediate first scroll for responsiveness
			if (direction === "prev") {
				scrollPrev();
			} else {
				scrollNext();
			}

			// Start continuous scrolling with consistent timing
			scrollIntervalRef.current = setInterval(() => {
				if (direction === "prev") {
					scrollPrev();
				} else {
					scrollNext();
				}
			}, 500); // Scroll every 500ms for smooth continuous movement
		},
		[scrollPrev, scrollNext]
	);

	const stopContinuousScroll = useCallback(() => {
		if (scrollIntervalRef.current) {
			clearInterval(scrollIntervalRef.current);
			scrollIntervalRef.current = null;
		}
	}, []);

	// Cleanup interval on unmount
	useEffect(() => {
		return () => {
			if (scrollIntervalRef.current) {
				clearInterval(scrollIntervalRef.current);
			}
			if (autoplayIntervalRef.current) {
				clearInterval(autoplayIntervalRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		const autoplay = () => {
			// Don't autoplay if continuous scrolling is active
			if (scrollIntervalRef.current) return;

			if (emblaApi.canScrollNext()) {
				emblaApi.scrollNext();
			} else {
				emblaApi.scrollTo(0);
			}
		};

		const interval = setInterval(autoplay, 3000);
		autoplayIntervalRef.current = interval;

		const onPointerDown = () => {
			clearInterval(interval);
			autoplayIntervalRef.current = null;
		};

		emblaApi.on("pointerDown", onPointerDown);

		return () => {
			clearInterval(interval);
			autoplayIntervalRef.current = null;
			if (emblaApi) {
				emblaApi.off("pointerDown", onPointerDown);
			}
		};
	}, [emblaApi]);

	// Prepare slides - for mobile show 1 per slide, for desktop show 2 per slide
	const prepareSlides = () => {
		if (isMobile) {
			return clients.map((client) => [client]);
		} else {
			const slides = [];
			for (let i = 0; i < clients.length; i += 2) {
				slides.push([
					clients[i],
					i + 1 < clients.length ? clients[i + 1] : null,
				]);
			}
			return slides;
		}
	};

	const slides = prepareSlides();

	const renderClient = (client: { name: string; logo: string } | null) => {
		if (!client) return null;

		return (
			<img
				src={client.logo}
				alt={client.name}
				className="w-full h-full object-contain"
			/>
		);
	};

	return (
		<section id="clientes" className="section-padding bg-secondary">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-citrine font-bold"
						style={{
							fontFamily: "citrine-variable",
							fontVariationSettings: '"wght" 700',
						}}
					>
						Clientes
					</h2>
					<p
						className="text-primary/60 max-w-2xl mx-auto font-citrine"
						style={{ fontVariationSettings: '"wght" 600' }}
					>
						Empresas que confiam e tiveram projetos realizados pela PROJERB
						Engenharia
					</p>
				</div>

				<div className="relative px-8 md:px-16">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{slides.map((slide, slideIndex) => (
								<div
									key={slideIndex}
									className={`flex-none mx-2 md:mx-4 flex ${
										isMobile ? "w-64" : ""
									} flex-col gap-4`}
									style={{ flex: isMobile ? "0 0 auto" : "" }}
								>
									{slide.map(
										(client, index) =>
											client && (
												<div
													key={`${slideIndex}-${index}`}
													className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition-transform hover:scale-105"
													style={{ width: isMobile ? "100%" : "12rem" }}
												>
													{renderClient(client)}
												</div>
											)
									)}
								</div>
							))}
						</div>
					</div>

					<button
						onClick={scrollPrev}
						onMouseDown={() => startContinuousScroll("prev")}
						onMouseUp={stopContinuousScroll}
						onMouseLeave={stopContinuousScroll}
						onTouchStart={() => startContinuousScroll("prev")}
						onTouchEnd={stopContinuousScroll}
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-6 h-6 text-primary" />
					</button>

					<button
						onClick={scrollNext}
						onMouseDown={() => startContinuousScroll("next")}
						onMouseUp={stopContinuousScroll}
						onMouseLeave={stopContinuousScroll}
						onTouchStart={() => startContinuousScroll("next")}
						onTouchEnd={stopContinuousScroll}
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
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
