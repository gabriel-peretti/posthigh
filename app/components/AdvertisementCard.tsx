interface AdvertisementCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export default function AdvertisementCard({ title, description, icon }: AdvertisementCardProps) {
	return (
		<div className="flex flex-col items-center">
			<div className="bg-secondary rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-neutral-400">
				{icon}
			</div>
			<h2 className="font-bold mt-6 text-xl">{title}</h2>
			<p className="mt-6 text-center text-gray-500">{description}</p>
		</div>
	);
}
