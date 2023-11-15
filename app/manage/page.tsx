'use client';
// import { InstagramLogin } from '@amraneze/react-instagram-login';
// import axios from 'axios';
// import Link from 'next/link';
// import { signIn } from 'next-auth/react';

import React, { useState, ChangeEvent } from 'react';

const TwitterPost: React.FC = () => {
	const [tweetText, setTweetText] = useState<string>('');

	const handleTweetChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTweetText(e.target.value);
	};

	const postTweet = async () => {
		const tweetEndpoint = '/api/:path*';

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
				console.log('Tweet posted successfully!');
			} else {
				console.error('Error posting tweet:', response.statusText);
			}
		} catch (error) {
			console.error('Request error:', error);
		}
	};

	return (
		<div>
			<textarea placeholder="Enter your tweet..." value={tweetText} onChange={handleTweetChange} />
			<button onClick={postTweet}>Post Tweet</button>
		</div>
	);
};

export default TwitterPost;
