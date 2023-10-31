import { Card } from 'flowbite-react';

interface StepsCardProps {
	title: string;
	description: string;
	number: string;
}

export default function StepsCard({ title, description, number }: StepsCardProps) {
	return (
		<Card className="border-none shadow-lg rounded-sm">
			<div className="flex flex-col">
				<p className=" font-bold text-secondary">{number}</p>
				<h2 className="font-bold mt-6 text-xl">{title}</h2>
				<p className="mt-6  text-gray-500">{description}</p>
			</div>
		</Card>
	);
}
