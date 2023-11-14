// pages/api/twitter/post/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	const { body } = req;
	const tweetEndpoint = 'https://api.twitter.com/2/tweets';
	const bearerToken = '1724274340009566208-lamRqcWzM2BFGT2FHrB47cNCD6pYBm';

	try {
		const response = await fetch(tweetEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${bearerToken}`,
			},
			body,
		});

		const data = await response.json();

		res.status(response.status).json(data);
	} catch (error) {
		console.error('Erro na solicitação:', error);
		res.status(500).json({ error: 'Erro na solicitação' });
	}
}
