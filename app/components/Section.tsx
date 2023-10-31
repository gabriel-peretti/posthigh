import Image, { StaticImageData } from 'next/image';
import Button from './Button';

interface SectionProps {
	title: string;
	description: string;
	image: StaticImageData;
	inverted?: boolean;
	buttonLabel: string;
}

export default function Section({
	title,
	description,
	image,
	inverted,
	buttonLabel,
}: SectionProps) {
	return (
		<div className=" grid grid-cols-2 flex-col-reverse white">
			<div
				className={`flex items-center justify-center flex-col ${
					inverted ? 'order-last' : 'order-first'
				}`}
			>
				<div className={`${inverted ? 'mr-32' : 'ml-32'} w-1/2`}>
					<h2 className="text-3xl mb-5">{title}</h2>
					<p className="mb-5 text-lg">{description}</p>
					<Button size="sm" label={buttonLabel}></Button>
				</div>
			</div>
			<div
				className={`flex items-center ${
					inverted ? 'ml-28 mr-10' : 'mr-28 ml-10'
				} justify-center my-10`}
				data-aos={inverted ? 'fade-right' : 'fade-left'}
				data-aos-delay="200"
			>
				<Image width={500} alt="section image" src={image}></Image>
			</div>
		</div>
	);
}
