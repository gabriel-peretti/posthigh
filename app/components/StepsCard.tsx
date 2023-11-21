interface StepsCardProps {
	title: string;
	description: string;
	number: string;
}

export default function StepsCard({ title, description, number }: StepsCardProps) {
	return (
		<div className="border-none flex flex-col p-8 shadow-lg rounded-sm h-72 w-96">
			<p className=" font-bold text-secondary">{number}</p>
			<h2 className="font-bold mt-6 text-xl">{title}</h2>
			<p className="mt-6  text-gray-500">{description}</p>
		</div>
	);
}
