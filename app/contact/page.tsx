import AdvertisementBanner from '../components/AdvertisementBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col items-center justify-center bg-primary">
				<span className="text-white">Entre em contato!</span>
				<span className="text-white">
					Tem alguma pergunta, sugestão ou precisa de suporte? Estamos aqui para ajudar.
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
			<div className="h-screen grid grid-cols-2">
				<div className="flex flex-col items-center justify-center">
					<h2>Formulario de contato</h2>
					<span>
						Esperamos ansiosamente ouvir de você e estamos dedicados a fornecer assistência
						excepcional para todas as suas necessidades.
					</span>
					<form className="space-y-4">
						<div className="flex space-x-4">
							<div className="flex flex-col">
								<label htmlFor="field1">Nome</label>
								<input
									id="field1"
									type="text"
									className="border-2 border-gray-300 p-2 rounded-md"
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="field2">E-mail</label>
								<input
									id="field2"
									type="text"
									className="border-2 border-gray-300 p-2 rounded-md"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="field3">Assunto</label>
							<input id="field3" type="text" className="border-2 border-gray-300 p-2 rounded-md" />
						</div>
						<div className="flex flex-col">
							<label htmlFor="textbox">Mensagem</label>
							<textarea id="textbox" className="border-2 border-gray-300 h-32 p-2 rounded-md" />
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Enviar mensagem
							</button>
						</div>
					</form>
				</div>
				<div className="flex flex-col items-center justify-center">
					<span className="font-bold">Endereço</span>
					<span>Rua Teste, 489, Bairro Teste - Encantado/RS</span>
					<span className="font-bold">Telefone</span>
					<span>(51) 99492.8389</span>
					<span className="font-bold">E-mail</span>
					<span>contato@posthigh.com.br</span>
				</div>
			</div>
			<AdvertisementBanner />
			<Footer />
		</>
	);
}
