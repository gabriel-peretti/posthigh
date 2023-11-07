'use client';
import { NextApiRequest } from 'next';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

interface SearchProps {
	searchParams: NextApiRequest['query'];
}

export default function Manage({ searchParams }: SearchProps) {
	const search = searchParams.code;
	console.log(search);
	const [user, setUser] = React.useState<any>(null);

	const postData = {
		client_id: '347678657643128',
		client_secret: '26c13f7878803d696c3909f0eb5e0169',
		grant_type: 'authorization_code',
		redirect_uri: 'https://www.posthigh.com.br/manage',
		code: search,
	};

	async function getInstafeed() {
		axios
			.post('https://api.instagram.com/oauth/access_token', postData)
			.then((response) => {
				console.log('Access Token Response:', response.data);
				setUser(response.data.username);
			})
			.catch((error) => {
				console.error('Error fetching access token:', error);
			});
	}

	React.useEffect(() => {
		getInstafeed();
	}, []);

	return (
		<>
			<Link
				href={`https://api.instagram.com/oauth/authorize?client_id=347678657643128&redirect_uri=https://www.posthigh.com.br/manage&scope=user_profile,user_media&response_type=code`}
			>
				<div className="border border-red-500 w-20">login instagram</div>
			</Link>

			<div>Usuario logado: {user}</div>
			<div>{search}</div>
		</>
	);
}
