'use client';
import { InstagramLogin } from '@amraneze/react-instagram-login';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';

export default function Manage() {
	const [user, setUser] = React.useState<any>(null);

	async function getInstafeed() {
		const token =
			'IGQWRNS21SZAHhUYVpJaWVUbFVNcThWeVoyNUxoRDk5cUdCTlZAGR0hmNG05S2FvVkFDbTBKRjg4SzAyNU1KQ0hrRUNhZA0tRdl8ycW01RUc2R1JHWC1VdDBTQjBPNFpTeUhkTGViMEdXaFRHSW9OTXZAjQ2RxZAnluNVUZD';
		const url = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`;
		const { data } = await axios.get(url);
		setUser(data.username);
		console.log(data);
	}

	const [caption, setCaption] = React.useState('Teste');

	const handlePost = async () => {
		const accessToken =
			'IGQWRNS21SZAHhUYVpJaWVUbFVNcThWeVoyNUxoRDk5cUdCTlZAGR0hmNG05S2FvVkFDbTBKRjg4SzAyNU1KQ0hrRUNhZA0tRdl8ycW01RUc2R1JHWC1VdDBTQjBPNFpTeUhkTGViMEdXaFRHSW9OTXZAjQ2RxZAnluNVUZD';

		try {
			const response = await axios.post(
				`https://graph.facebook.com/v18.0/17841400008460056/media
				?image_url=https://media.discordapp.net/attachments/441990298394951680/1171675902724296725/post.png?ex=655d8b37&is=654b1637&hm=3bb5b4e17c61519cd568f45c1ce003d71c5e3451a51495fd30d738f84bb73746&=&width=671&height=671
				&caption=${caption}}`
			);

			console.log('Post successful:', response.data);
		} catch (error) {
			console.error('Error posting to Instagram:', error);
		}
	};

	React.useEffect(() => {
		getInstafeed();
	}, []);

	return (
		<>
			<Link
				href={`https://api.instagram.com/oauth/authorize
        ?client_id=347678657643128
        &redirect_uri=https://posthigh.com.br/manage
        &scope=user_profile,user_media
        &response_type=code`}
			>
				<div className="border border-red-500 w-20">login instagram</div>
			</Link>

			<div>Usuario logado: {user}</div>
			<button onClick={handlePost}>Post to Instagram</button>

			<button className="border border-red-500" onClick={() => signIn('instagram')}>
				Sign in
			</button>
		</>
	);
}
