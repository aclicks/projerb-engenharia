import { useEffect, useMemo, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

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

	useEffect(() => {
		const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);
		return () => window.removeEventListener("resize", checkIsMobile);
	}, []);

	const { pages, gridColsClass } = useMemo(() => {
		const columns = 5; // always 5 columns per your request
		const rows = 2; // always 2 rows as requested
		const pageSize = columns * rows;

		const pages: { name: string; logo: string }[][] = [];
		for (let i = 0; i < clients.length; i += pageSize) {
			pages.push(clients.slice(i, i + pageSize));
		}

		return {
			pages,
			gridColsClass: "grid-cols-5",
		};
	}, [isMobile]);

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

				<div className="relative px-4 md:px-8">
					<Carousel
						opts={{ loop: true, align: "start", dragFree: false }}
						className="w-full"
					>
						<CarouselContent>
							{pages.map((page, pageIndex) => (
								<CarouselItem key={pageIndex} className="basis-full">
									<div className={`grid ${gridColsClass} grid-rows-2 gap-4`}>
										{page.map((client, idx) => (
											<div
												key={`${pageIndex}-${idx}`}
												className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 transition-transform hover:scale-105"
											>
												<img
													src={client.logo}
													alt={client.name}
													className="w-full h-full object-contain"
												/>
											</div>
										))}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 bg-white text-primary shadow-md hover:bg-gray-50" />
						<CarouselNext className="right-0 top-1/2 -translate-y-1/2 bg-white text-primary shadow-md hover:bg-gray-50" />
					</Carousel>
				</div>
			</div>
		</section>
	);
};

export default Projects;
