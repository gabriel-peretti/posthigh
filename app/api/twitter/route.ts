import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import TwitterClient from '../../lib/twitter_client';
import { NextApiRequest } from 'next';

export async function POST(request: Request) {
	const body = await request.json();
	const { tweetText } = body;
	const token = await getToken({ req: request as unknown as NextApiRequest });

	const client = new TwitterClient(token);
	client.createTweet(tweetText);

	return NextResponse.json({ status: 'ok' });
}
