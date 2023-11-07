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
		const url = `https://graph.instagram.com/me?fields=id,username&access_token=${search}`;
		const { data } = await axios.get(url);
		setUser(data.username);
		console.log(data.username);
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
