import Button from './Button';

export default function AdvertisementBanner() {
	return (
		<div className="h-72 grid grid-cols-2 bg-gradient-to-r from-secondary to-primary">
			<div className="flex items-center ml-64">
				<p className="text-5xl w-full text-white font-semibold">
					Publique nas redes sociais com a PostHigh
				</p>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="secondary" label="Comecar agora mesmo"></Button>
			</div>
		</div>
	);
}
