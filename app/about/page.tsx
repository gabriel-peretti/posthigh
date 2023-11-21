import AdvertisementBanner from '../components/AdvertisementBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import section1 from '../../public/about/about1.svg';
import section2 from '../../public/about/about2.svg';
import section3 from '../../public/about/about3.svg';
import section4 from '../../public/about/about4.svg';
import Section from '../components/Section';

export default function About() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-fixed bg-center bg-[url('/banner/hero-bg.jpg')]">
				<span className="text-white text-7xl font-bold">Sobre nós</span>
				<span className="text-white text-center text-2xl mt-10 w-2/3">
					Na PostHigh, nossa paixão é capacitar indivíduos e empresas a prosperar nas redes sociais.
					Somos uma equipe de especialistas em marketing digital e tecnologia, dedicados a
					simplificar o gerenciamento de conteúdo nas plataformas de mídia social.
				</span>
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
			<Section
				title="Nossa missão"
				description="Nossa missão é fornecer uma solução abrangente e eficaz para o gerenciamento de redes sociais. Queremos ajudar nossos clientes a alcançar o sucesso online, oferecendo ferramentas intuitivas e recursos de ponta para impulsionar sua presença nas redes sociais."
				image={section1}
				hasButton={false}
			/>
			<Section
				title="Nossa visão"
				description="Nossa visão é ser a principal escolha quando se trata de simplificar o marketing nas redes sociais. Queremos ver nossos clientes alcançando seus objetivos e prosperando em um mundo digital em constante evolução."
				image={section2}
				inverted
				hasButton={false}
			/>
			<Section
				title="O que fazemos"
				description="Publicação Simplificada: Permitimos que você publique facilmente conteúdo no Facebook, Instagram e Twitter com apenas alguns cliques, economizando tempo e esforço. Análise de Dados Avançada: Fornecemos análises detalhadas para que você possa entender o desempenho de suas postagens e tomar decisões informadas. Estratégia de Marketing: Oferecemos insights e orientações sobre estratégias de marketing digital para maximizar seu impacto online. Suporte Excepcional: Nosso compromisso com o sucesso de nossos clientes se reflete em nosso suporte amigável e ágil."
				image={section3}
				hasButton={false}
			/>
			<Section
				title="Por que escolher a PostHigh"
				description="Na PostHigh, acreditamos que o sucesso nas redes sociais não deve ser complicado. Nossa plataforma foi projetada para ser acessível a todos, desde empreendedores individuais a equipes de marketing experientes. Oferecemos uma maneira simples e eficaz de conquistar o mundo das redes sociais."
				image={section4}
				inverted
				hasButton={false}
			/>
			<AdvertisementBanner />
			<Footer />
		</>
	);
}
