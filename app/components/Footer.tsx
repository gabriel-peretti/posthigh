'use client';
import Link from 'next/link';
import { Instagram, Facebook } from 'react-bootstrap-icons';

export default function Footer() {
	return (
		<footer className="bg-white ">
			<div className="w-full justify-center mb-10">
				<div className="flex gap-56 mt-10 mb-10 justify-center pr-60">
					<div className="flex w-96 flex-col items-start">
						<span className="text-left mb-6 font-semibold text-md ">Sobre a PostHigh</span>
						<p className="text-left text-md text-gray-500">
							Na PostHigh, nossa paixão é capacitar indivíduos e empresas a prosperar nas redes
							sociais. Somos uma equipe de especialistas em marketing digital e tecnologia,
							dedicados a simplificar o gerenciamento de conteúdo nas plataformas de mídia social.
						</p>
						<div className="flex mt-4 space-x-5">
							<Link href={'https://www.facebook.com/profile.php?id=61552727470443'}>
								<div className="flex items-center justify-center rounded-full p-3 bg-gray-200">
									<Facebook />
								</div>
							</Link>
							<Link href={'https://www.instagram.com/posthigh.com.br/'}>
								<div className="flex items-center justify-center rounded-full p-3 bg-gray-200">
									<Instagram />
								</div>
							</Link>
						</div>
					</div>
					<div className="flex flex-row gap-20">
						<div>
							<h2 className="mb-6 text-md font-semibold text-gray-900">Institucional</h2>
							<ul className=" text-gray-900 font-medium space-y-2">
								<li>
									<Link href="/" className="hover:underline">
										Home
									</Link>
								</li>
								<li>
									<Link href="/about" className="hover:underline">
										Sobre nós
									</Link>
								</li>
								<li>
									<Link href="/contact" className="hover:underline">
										Contato
									</Link>
								</li>
								<li>
									<Link href="/manage" className="hover:underline">
										Área do cliente
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-md font-semibold text-gray-900">Links uteis</h2>
							<ul className="text-gray-900 font-medium space-y-2">
								<li>
									<Link href="/strategies" className="hover:underline ">
										Estratégias de crescimento
									</Link>
								</li>
								<li>
									<Link href="/tips" className="hover:underline">
										Dicas de Postagens
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<span className="text-md text-gray-500 text-center">
						&copy; Copyright PostHigh. Todos os direitos reservados.
					</span>
					<div className="text-md text-gray-500">
						Designed by{' '}
						<a className="text-black" href="https://highagencia.com.br/">
							Gabriel Peretti Ferreira
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
