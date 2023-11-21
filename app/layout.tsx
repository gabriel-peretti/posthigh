import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import { AOSInit } from './components/AOS';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PostHigh - Publique posts nas redes sociais',
	description: 'A melhor plataforma para gerenciar suas redes sociais!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<AOSInit></AOSInit>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
