import AdvertisementBanner from '../components/AdvertisementBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import section1 from '../../public/section1.svg';
import section2 from '../../public/section2.svg';

export default function Strategies() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col items-center justify-center bg-primary">
				<span className="text-white text-left text-5xl  mb-14">
					Estratégias de crescimento nas redes Sociais
				</span>
				<span className="text-white">
					Descubra estratégias comprovadas para aumentar o alcance e o envolvimento nas redes
					sociais. Aprenda a conquistar seguidores, construir autoridade e alcançar resultados
					notáveis.
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
				title="Identifique seu público-alvo"
				description="Imagine que você está administrando uma loja de roupas online que vende roupas de alta qualidade para mulheres jovens. Ao identificar seu público-alvo, você descobre que seu público ideal é composto por mulheres com idades entre 25 e 35 anos, com um interesse especial em moda sustentável e design exclusivo. Com essa compreensão, você pode criar conteúdo direcionado para atender às necessidades e preferências desse grupo demográfico."
				image={section2}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Crie conteúdo de valor"
				description="Suponha que você administra um blog de culinária. Em vez de simplesmente compartilhar receitas, você cria postagens informativas que explicam técnicas culinárias, dão dicas sobre ingredientes de alta qualidade e fornecem insights sobre a história de pratos tradicionais. Essas postagens educativas atraem leitores interessados em aprender mais sobre culinária, construindo uma base de seguidores fiéis."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<Section
				title="Estabeleça consistência"
				description="Se você é um influenciador de viagens no Instagram, manter uma programação consistente de postagens é essencial. Publicar uma foto ou história todos os dias às 10h, por exemplo, cria expectativas em seus seguidores, que esperam ansiosamente seu conteúdo diário. Essa regularidade ajuda a manter seu público envolvido."
				image={section1}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Use hashtags estrategicamente"
				description="Se você é um fotógrafo de paisagens, usar hashtags relevantes pode ampliar o alcance de suas fotos. Ao adicionar hashtags como #Natureza #Viagem #Aventura em suas postagens, você permite que pessoas interessadas em tópicos relacionados descubram seu conteúdo, aumentando a visibilidade."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<Section
				title="Engaje com seus seguidores"
				description="Suponha que você gerencia a página de uma pequena empresa local no Facebook. Responder prontamente a comentários e mensagens dos clientes, agradecendo pelos elogios e resolvendo preocupações, constrói relacionamentos sólidos com sua base de clientes e aumenta a fidelidade à marca."
				image={section1}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Colabore com outros"
				description="Se você é um vlogger de fitness no Instagram, colaborar com outros vloggers de saúde e bem-estar pode ser uma estratégia eficaz. Parcerias podem incluir entrevistas cruzadas, compartilhamento de vídeos ou desafios colaborativos, aumentando a exposição para ambos os canais e atraindo novos seguidores."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<AdvertisementBanner />
			<Footer />
		</>
	);
}
