// pages/api/twitter.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method, body } = req;

	const tweetEndpoint = 'https://api.twitter.com/2/tweets';
	const bearerToken = 'Y1724274340009566208-lamRqcWzM2BFGT2FHrB47cNCD6pYBm';

	try {
		const response = await fetch(tweetEndpoint, {
			method,
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
