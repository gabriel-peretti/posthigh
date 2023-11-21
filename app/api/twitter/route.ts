import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { Client, auth } from 'twitter-api-sdk';

export async function POST(request: Request) {
	const body = await request.json();
	const { tweetText } = body;
	const token = await getToken({ req: request as unknown as NextApiRequest });
	const { accessToken, refreshToken } = token || {};

	const authClient = new auth.OAuth2User({
		client_id: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID as string,
		client_secret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET as string,
		callback: 'http://localhost:3000/callback',
		scopes: ['tweet.read', 'users.read', 'tweet.write', 'offline.access'],
		token: {
			access_token: accessToken as string,
			refresh_token: refreshToken as string,
			token_type: 'Bearer',
		},
	});

	const client = new Client(authClient);

	await client.tweets.createTweet({ text: tweetText });

	return NextResponse.json({ status: 'ok' });
}
