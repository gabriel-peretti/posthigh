'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Header from './components/Header';
import { Sidebar } from 'flowbite-react';
import FacebookUI from './components/Facebook/FacebookUI';
import InstagramUI from './components/Instagram/InstagramUI';
import TwitterUI from './components/Twitter/TwitterUI';
import InstagramInsights from './components/Instagram/InstagramInsights';
import FacebookInsights from './components/Facebook/FacebookInsights';
import { PlusSquareFill, GraphUpArrow, Instagram, Twitter, Facebook } from 'react-bootstrap-icons';
import Image from 'next/image';
import logo from '../../public/logos/logoColor.png';

export default function Manage() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin?callbackUrl=/manage');
		},
	});

	const [activeComponent, setActiveComponent] = useState('home');

	const handleFacebookPostClick = () => {
		setActiveComponent('facebookPost');
	};

	const handleFacebookInsightClick = () => {
		setActiveComponent('facebookInsights');
	};

	const handleInstagramPostClick = () => {
		setActiveComponent('instagramPost');
	};

	const handleInstagramInsightClick = () => {
		setActiveComponent('instagramInsights');
	};

	const handleTwitterClick = () => {
		setActiveComponent('twitter');
	};
	return (
		<div className="flex flex-col h-screen">
			<Header user={session?.user} />
			<div className="flex flex-grow">
				<Sidebar className="h-full w-96 shadow-lg">
					<Sidebar.Items className="">
						<Sidebar.ItemGroup>
							<Sidebar.Collapse icon={Facebook} label="Facebook">
								<Sidebar.Item onClick={handleFacebookPostClick}>
									<div className="flex justify-start items-center">
										<PlusSquareFill color="#0097fe" size={25} />
										<span className="ml-5">Nova publicação</span>
									</div>
								</Sidebar.Item>
								<Sidebar.Item onClick={handleFacebookInsightClick}>
									<div className="flex justify-start items-center">
										<GraphUpArrow color="#0097fe" size={25} />
										<span className="ml-5">Insights</span>
									</div>
								</Sidebar.Item>
							</Sidebar.Collapse>
							<Sidebar.Collapse icon={Instagram} label="Instagram">
								<Sidebar.Item onClick={handleInstagramPostClick}>
									<div className="flex justify-start items-center">
										<PlusSquareFill color="#0097fe" size={25} />
										<span className="ml-5">Nova publicação</span>
									</div>
								</Sidebar.Item>
								<Sidebar.Item onClick={handleInstagramInsightClick}>
									<div className="flex justify-start items-center">
										<GraphUpArrow color="#0097fe" size={25} />
										<span className="ml-5">Insights</span>
									</div>
								</Sidebar.Item>
							</Sidebar.Collapse>
							<Sidebar.Collapse icon={Twitter} label="Twitter">
								<Sidebar.Item onClick={handleTwitterClick}>
									<div className="flex justify-start items-center">
										<PlusSquareFill color="#0097fe" size={25} />
										<span className="ml-5">Novo tweet</span>
									</div>
								</Sidebar.Item>
							</Sidebar.Collapse>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</Sidebar>

				<div className="flex-grow">
					{activeComponent === 'home' && (
						<>
							<div className="h-full items-center flex flex-col justify-center">
								<div className="w-[700px] break-words ">
									<h1 className="text-center text-6xl mb-20">
										Bem vindo a PostHigh,{' '}
										<span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
											{session?.user?.name}
										</span>{' '}
										!
									</h1>
									<h2 className="text-center text-xl">
										Quer decolar nas redes sociais? Acesse o menu lateral e comece suas publicações
										agora mesmo com a PostHigh. Potencialize sua presença online e acompanhe seu
										crescimento. Estamos aqui para ajudar você a alcançar novos patamares de sucesso
										nas redes sociais. Comece sua jornada conosco hoje mesmo!
									</h2>
								</div>
								<Image className="mt-80" width={200} alt="logo" src={logo}></Image>
							</div>
						</>
					)}
					{activeComponent === 'facebookPost' && <FacebookUI />}
					{activeComponent === 'facebookInsights' && <FacebookInsights />}
					{activeComponent === 'instagramPost' && <InstagramUI />}
					{activeComponent === 'instagramInsights' && <InstagramInsights />}
					{activeComponent === 'twitter' && <TwitterUI />}
				</div>
			</div>
		</div>
	);
}
