'use client';
import { InstagramLogin } from '@amraneze/react-instagram-login';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Manage() {
	const [user, setUser] = React.useState<any>(null);

	async function getInstafeed() {
		const token =
			'IGQWRNMHE1N00wRkJhRFM3ZADF1OEpXaWVNbEVESE9VMWMyNldTWjFJaUMyZA2psTFR3dk9HallBUEFkWnNJS2tFWVphSmdJUWswWlkyTnQ5cFhyaTd2VUo0eDJVV2laQnNRamx5dk12WWhZAdFFKM3BFUTZAEck5xYUEZD';
		const url = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`;
		const { data } = await axios.get(url);
		setUser(data.username);
		console.log(data.username);
	}

	React.useEffect(() => {
		getInstafeed();
	}, []);

	const responseInstagram = (response: any) => {
		console.log(response);
	};

	return (
		<>
			<div>Usuario logado: {user}</div>
			<InstagramLogin
				clientId="347678657643128"
				buttonText="Login with instagram"
				onSuccess={responseInstagram}
				onFailure={responseInstagram}
				redirectUri="https://www.posthigh.com.br/"
			/>
		</>
	);
}
