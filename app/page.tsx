'use client';
import Button from './components/Button';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Image from 'next/image';
import logo from '../public/banner.svg';
import section1 from '../public/section1.svg';
import section2 from '../public/section2.svg';
import section3 from '../public/section3.svg';
import { Calendar, GraphUpArrow, NodePlus } from 'react-bootstrap-icons';
import AdvertisementCard from './components/AdvertisementCard';
import StepsCard from './components/StepsCard';
import AdvertisementBanner from './components/AdvertisementBanner';

export default function Home() {
	return (
		<>
			<Header />
			<div className="h-screen grid grid-cols-2 bg-no-repeat bg-cover bg-fixed bg-center bg-[url('/hero-bg.jpg')]">
				<div className="flex flex-col justify-center items-end">
					<div className="w-2/3">
						<p
							data-aos="fade-right"
							data-aos-delay=""
							className="text-white text-left text-5xl  mb-14"
						>
							Transforme suas redes sociais com a PostHigh
						</p>
						<p
							data-aos="fade-right"
							data-aos-delay="150"
							className="text-white text-justify text-xl  mb-14"
						>
							Sinta o poder da PostHigh e leve sua presença nas redes sociais a novos patamares! Com
							a nossa plataforma web inovadora, você pode publicar no Instagram, Facebook e Twitter
							de maneira simples, ágil e eficaz.
						</p>
						<div data-aos="fade-right" data-aos-delay="100" className="text-left">
							<Button variant="ghost" label="Saiba mais" />
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div data-aos="fade-right" data-aos-delay="150" className="">
						<Image height={600} alt="aa" src={logo} />
					</div>
				</div>
			</div>
			<svg
				className="absolute -bottom-24 w-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#ffffff"
					fillOpacity="1"
					d="M0,128L34.3,138.7C68.6,149,137,171,206,176C274.3,181,343,171,411,149.3C480,128,549,96,617,90.7C685.7,85,754,107,823,112C891.4,117,960,107,1029,85.3C1097.1,64,1166,32,1234,32C1302.9,32,1371,64,1406,80L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
					data-darkreader-inline-fill=""
				></path>
			</svg>
			<div className="h-80 flex flex-col text-5xl items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary justify-center">
				<p className=" ">Publique com</p>
				<p className="">Facilidade e Alcance o </p>
				<p className="">Sucesso!</p>
			</div>
			<div className="grid grid-cols-3 gap-10 mx-64 mb-36">
				<AdvertisementCard
					icon={<Calendar color="white" size={38} />}
					title="Automação de postagens"
					description="Simplifique sua vida digital agendando postagens com antecência. Nossa plataforma
					permite que você programe suas publicações no Instagram e no Facebook, economizando
					tempo e garantindo consistência."
				/>
				<AdvertisementCard
					icon={<GraphUpArrow color="white" size={38} />}
					title="Análise de dados"
					description="Tenha acesso a ferramentas poderosas de análise de dados que ajudam a entender o
						desempenho das suas postagens nas redes sociais. Acompanhe métricas-chave, como
						enganjamento, alcance e impressões, para otimizar sua estratégia."
				/>
				<AdvertisementCard
					icon={<NodePlus color="white" size={38} />}
					title="Criação de conteúdo"
					description="Tenha acesso a recursos e dicas de crfiação de conteúdo que aumentam o envolvimento do
					seu público. Desenvolva postagens atraentes e criativas com a ajuda da PostHigh."
				/>
			</div>
			<div className="flex flex-col mb-32 items-center justify-center">
				<Image alt="aa" height={500} src={section3}></Image>
				<div className="flex flex-row gap-10 mx-64">
					<StepsCard
						number="01"
						title="Entrar"
						description="Para começar, basta você acessar sua conta do Instagram ou Twitter para utilizar a plataforma. Isso torna o processo de entrada rápido e direto, sem a necessidade de criar uma conta separada."
					/>
					<StepsCard
						number="02"
						title="Criar e programar postagem"
						description="Personalize e agende suas postagens de forma eficaz, economizando tempo e otimizando sua estratégia de redes sociais."
					/>
					<StepsCard
						number="03"
						title="Aproveitar a plataforma"
						description="Após realizar a publicação, você pode aproveitar a plataforma de diversas maneiras, como: acessar os insights das publicações, sugestões de conteúdo, análises e tendências do marketing digital."
					/>
				</div>
			</div>
			<Section
				title="Estratégias de crescimento nas redes sociais"
				description="Descubra estratégias comprovadas para aumentar o alcance e o envolvimento nas redes sociais. Aprenda a conquistar seguidores, construir autoridade e alcançar resultados notáveis."
				image={section2}
				buttonLabel="Acessar"
				hasButton
				buttonLink="/strategies"
			/>
			<Section
				title="Dicas para publicações eficientes"
				description="Otimize suas postagens nas redes sociais com dicas práticas. Aprenda a criar conteúdo envolvente, escolher as melhores imagens e escrever legendas cativantes."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton
				buttonLink="/tips"
			/>

			<AdvertisementBanner />
			<Footer />
		</>
	);
}
