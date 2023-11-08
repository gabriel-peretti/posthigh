import { NextAuthOptions } from 'next-auth';
import InstagramProvider from 'next-auth/providers/instagram';

export const authOptions: NextAuthOptions = {
	// Secret for Next-auth, without this JWT encryption/decryption won't work
	secret: 'VTMRKvZ2pwFyAJLioTWqUTJnAFLDTHC6YKpXLuRUkAw=',

	// Configure one or more authentication providers
	providers: [
		InstagramProvider({
			clientId: '347678657643128',
			clientSecret: '26c13f7878803d696c3909f0eb5e0169',
		}),
	],
};
