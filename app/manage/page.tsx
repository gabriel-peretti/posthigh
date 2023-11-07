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

	async function getInstafeed() {
		const insta_form = new URLSearchParams();
		insta_form.append('client_id', '347678657643128');
		insta_form.append('client_secret', '26c13f7878803d696c3909f0eb5e0169');
		insta_form.append('grant_type', 'authorization_code');
		insta_form.append('redirect_uri', 'https://www.posthigh.com.br/manage');
		insta_form.append('code', `${search}`);

		await axios({
			method: 'POST',
			url: 'https://api.instagram.com/oauth/access_token',
			data: insta_form,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.response);
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
