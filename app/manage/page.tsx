'use client';
// import { InstagramLogin } from '@amraneze/react-instagram-login';
// import axios from 'axios';
// import Link from 'next/link';
// import { signIn } from 'next-auth/react';

// components/TwitterPost.js
// components/TwitterPost.js
import { useState, ChangeEvent } from 'react';

const TwitterPost = () => {
	const [tweetText, setTweetText] = useState<string>('');

	const handleTweetChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTweetText(e.target.value);
	};

	const postTweet = async () => {
		const tweetEndpoint = '/api/twitter/post'; // Caminho relativo para a API Route

		try {
			const response = await fetch(tweetEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					status: tweetText,
				}),
			});

			if (response.ok) {
				console.log('Tweet postado com sucesso!');
			} else {
				console.error('Erro ao postar o tweet:', response.statusText);
			}
		} catch (error) {
			console.error('Erro na solicitação:', error);
		}
	};

	return (
		<div>
			<textarea placeholder="Digite seu tweet..." value={tweetText} onChange={handleTweetChange} />
			<button onClick={postTweet}>Postar Tweet</button>
		</div>
	);
};

export default TwitterPost;
