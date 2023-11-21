import Image from 'next/image';
import defaultImage from '../../../public/icons/default_profile_normal.png';
import { signOut } from 'next-auth/react';

interface HeaderProps {
	user?: {
		image?: string | null;
		name?: string | null;
	};
}

export default function Header({ user }: HeaderProps) {
	return (
		<header className="w-full h-16 grid grid-cols-2 bg-secondary z-10">
			<div className="flex items-center ml-10 text-white font-semibold">
				<h1>ÁREA DO CLIENTE</h1>
			</div>
			<div className="flex justify-end items-center">
				<Image
					className="rounded-full mr-2"
					width={40}
					height={40}
					priority={true}
					src={user?.image ?? defaultImage}
					alt="Profile Pic"
				></Image>
				<span className="text-white mr-7"> {user?.name ?? 'Unknown User'}</span>
				<button
					className="w-20 h-10 mr-10 rounded-md bg-white text-black"
					onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
				>
					Sair
				</button>
			</div>
		</header>
	);
}
