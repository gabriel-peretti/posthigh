import AdvertisementBanner from '../components/AdvertisementBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import section1 from '../../public/section1.svg';
import section2 from '../../public/section2.svg';

export default function Tips() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col items-center justify-center bg-primary">
				<span className="text-white">Dicas para publicações eficientes</span>
				<span className="text-white">
					Otimize suas postagens nas redes sociais com dicas práticas. Aprenda a criar conteúdo
					envolvente, escolher as melhores imagens e escrever legendas cativantes.
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
				title="Conteúdo visual cativante"
				description="Use imagens e vídeos de alta qualidade para atrair a atenção do seu público. Uma imagem vale mais que mil palavras, e um vídeo pode contar uma história envolvente."
				image={section2}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Legendas criativas"
				description="Crie legendas que complementem sua imagem ou vídeo. Seja conciso e conte uma história relevante para envolver os seguidores"
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<Section
				title="Hashtags estratégicas"
				description="Pesquise e use hashtags relacionadas ao seu conteúdo para alcançar um público mais amplo. Mas evite o exagero; algumas hashtags relevantes são mais eficazes do que muitas irrelevantes."
				image={section1}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Postagens programadas"
				description="Agende suas postagens para os horários em que seu público está mais ativo. Use a PostHigh para automatizar o processo."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<Section
				title="Interaja com seguidores"
				description="Responda a comentários, mensagens e interaja com seus seguidores. Construir relacionamentos é fundamental."
				image={section1}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<Section
				title="Explore recursos de histórias"
				description="Use histórias do Instagram e Facebook para compartilhar atualizações diárias, bastidores e conteúdo efêmero que mantenha seu público engajado."
				image={section1}
				buttonLabel="Acessar"
				inverted
				hasButton={false}
			/>
			<Section
				title="Acompanhe tendências"
				description="Esteja atento às tendências e eventos atuais. Participar de conversas populares pode aumentar sua visibilidade."
				image={section1}
				buttonLabel="Acessar"
				hasButton={false}
			/>
			<AdvertisementBanner />
			<Footer />
		</>
	);
}
