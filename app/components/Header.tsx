import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';

export default function Header() {
	return (
		<header className="w-full h-16 grid fixed grid-cols-2 bg-secondary z-10">
			<div className="flex items-center justify-start ml-20">
				<Link href={'/'}>
					<Image alt="header logo" width={150} src={logo}></Image>
				</Link>
			</div>
			<div className="flex flex-row text-white justify-end items-center gap-10 mr-6">
				<Link href={'/'}>
					<span>Home</span>
				</Link>
				<Link href={'/about'}>
					<span>Sobre nós</span>
				</Link>

				<Link href={'/contact'}>
					<span>Contato</span>
				</Link>
				<Link href="/manage">
					<Button variant="ghost" label="ÁREA DO CLIENTE" />
				</Link>
			</div>
		</header>
	);
}
