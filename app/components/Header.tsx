import Link from 'next/link';
import Button from './Button';
// import Image from 'next/image';
// import logo from '../../public/logo.png';

export default function Header() {
	return (
		<header className="w-full h-16 grid fixed grid-cols-2 bg-secondary z-10">
			<p className="text-white text-xl flex items-center justify-start ml-6">posthigh</p>
			{/* <Image height={200} className="flex items-center justify-start ml-6 " src={logo}></Image> */}
			<div className="flex flex-row text-white justify-end items-center gap-10 mr-6">
				<Link href={''}>
					<span>Home</span>
				</Link>
				<Link href={''}>
					<span>Sobre nos</span>
				</Link>

				<Link href={''}>
					<span>Contato</span>
				</Link>
				<Link href="/manage">
					<Button variant="ghost" label="AREA DO CLIENTE" />
				</Link>
			</div>
		</header>
	);
}
