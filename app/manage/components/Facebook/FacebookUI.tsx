import { Card } from 'flowbite-react';
import CarrossselLogo from '../../../../public/cards/Carrossel.png';
import FeedLogo from '../../../../public/cards/Feed.png';
import ReelsLogo from '../../../../public/cards/Reels.png';
import StoryLogo from '../../../../public/cards/Story.png';
import Image from 'next/image';

export default function FacebookUI() {
	return (
		<>
			<div className="h-full items-center flex flex-col">
				<h1 className="mt-20 mb-20 text-xl">
					As funcionalidades do
					<span className="text-blue-500 font-bold"> Facebook </span>
					estão desabilitadas no momento!
				</h1>
				<div className="flex flex-col-2 gap-20">
					<div className="flex flex-col gap-20">
						<Card className="border-none shadow-lg rounded-sm h-60">
							<div className="flex flex-col items-center">
								<Image width={80} alt="feedLogo" src={FeedLogo} />
								<h2 className="font-bold mt-6 text-xl">Feed</h2>
								<p className="mt-6 text-gray-500">Poste uma imagem ou vídeo de até 1 minuto</p>
							</div>
						</Card>
						<Card className="border-none shadow-lg rounded-sm h-60">
							<div className="flex flex-col items-center">
								<Image width={80} alt="feedLogo" src={CarrossselLogo} />

								<h2 className="font-bold mt-6 text-xl">Carrossel</h2>
								<p className="mt-6 text-gray-500">
									Compartilhe sequências de até 10 fotos e/ou vídeos
								</p>
							</div>
						</Card>
					</div>
					<div className="flex flex-col gap-20">
						<Card className="border-none shadow-lg rounded-sm h-60">
							<div className="flex flex-col items-center">
								<Image width={80} alt="feedLogo" src={StoryLogo} />

								<h2 className="font-bold mt-6 text-xl">Story</h2>
								<p className="mt-6 text-gray-500">Poste fotos ou vídeos que somem após 24h</p>
							</div>
						</Card>
						<Card className="border-none shadow-lg rounded-sm h-60">
							<div className="flex flex-col items-center">
								<Image width={80} alt="feedLogo" src={ReelsLogo} />

								<h2 className="font-bold mt-6 text-xl">Reels</h2>
								<p className="mt-6 text-gray-500">Crie vídeos de até 15 minutos</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
