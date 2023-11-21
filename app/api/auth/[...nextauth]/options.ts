import type { NextAuthOptions } from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import InstagramProvider from 'next-auth/providers/instagram';
import FacebookProvider from 'next-auth/providers/facebook';

export const options: NextAuthOptions = {
	providers: [
		TwitterProvider({
			clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET as string,
			version: '2.0',
			authorization: {
				url: 'https://twitter.com/i/oauth2/authorize',
				params: {
					scope: 'users.read tweet.read tweet.write offline.access like.read list.read',
				},
			},
		}),
		InstagramProvider({
			clientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET as string,
		}),
		FacebookProvider({
			clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
		}),
	],

	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
				token.scope = account.scope;
			}
			return token;
		},
		async session({ session }) {
			return session;
		},
	},
};
