// pages/api/postTweet.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Check if the request is authenticated
	const session = await getSession({ req });
	console.error('Error: estamos tentando');
	if (!session) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	const tweetEndpoint = 'https://api.twitter.com/2/tweets';
	const bearerToken =
		'AAAAAAAAAAAAAAAAAAAAAE8MrAEAAAAAK0iZ1RpPRU0Aa2Yv8tTNEUz0074%3DA1lpCU9HrCn9SRHGZZCMWBOJFpL4yy6CpOkAw6Q1fSm67A7qC8';

	try {
		const response = await fetch(tweetEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${bearerToken}`,
			},
			body: JSON.stringify({
				status: req.body.status,
			}),
		});

		const data = await response.json();
		res.json(data);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
