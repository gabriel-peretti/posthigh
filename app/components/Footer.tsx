export default function Footer() {
	return (
		<footer className="bg-white ">
			<div className="w-full justify-center mb-10">
				<div className="flex gap-56 mt-10 mb-10">
					<div className="flex w-96 flex-col ml-64 items-center">
						<span className="text-left  font-semibold text-md ">Sobre a PostHigh</span>
						<p className="text-left text-sm">
							Na PostHigh, nossa paixão é capacitar indivíduos e empresas a prosperar nas redes
							sociais. Somos uma equipe de especialistas em marketing digital e tecnologia,
							dedicados a simplificar o gerenciamento de conteúdo nas plataformas de mídia social.
						</p>
						<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
							<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
								<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
									<svg
										className="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 8 19"
									>
										<path
											fillRule="evenodd"
											d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="sr-only">Facebook page</span>
								</a>
								<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
									<svg
										className="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 21 16"
									>
										<path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
									</svg>
									<span className="sr-only">Discord community</span>
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-20">
						<div>
							<h2 className="mb-6 text-md font-semibold text-gray-900 ">Institucional</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li>
									<a href="https://flowbite.com/" className="hover:underline">
										Home
									</a>
								</li>
								<li>
									<a href="https://tailwindcss.com/" className="hover:underline">
										Sobre nós
									</a>
								</li>
								<li>
									<a href="https://tailwindcss.com/" className="hover:underline">
										Contato
									</a>
								</li>
								<li>
									<a href="https://tailwindcss.com/" className="hover:underline">
										Área do cliente
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-md font-semibold text-gray-900">Links uteis</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li>
									<a href="https://github.com/themesberg/flowbite" className="hover:underline ">
										Estratégias de crescimento
									</a>
								</li>
								<li>
									<a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
										Dicas de Postagens
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<span className="text-sm text-gray-500 text-center">
						&copy; Copyright PostHigh. Todos os direitos reservados.
					</span>
					<div className="text-sm text-gray-500">
						Designed by{' '}
						<a className="text-black" href="https://bootstrapmade.com/">
							Gabriel Peretti Ferreira
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
