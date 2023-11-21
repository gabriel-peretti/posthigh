import { Client, auth } from 'twitter-api-sdk';

class TwitterAuthClientFactory {
	static instance = null;

	build(token) {
		if (!TwitterAuthClientFactory.instance) {
			console.log('new instance');
			const authClient = new auth.OAuth2User({
				client_id: 'Z19ZUnROTGFJNHQzRWtzVkJpdVQ6MTpjaQ',
				client_secret: 'chqoIcp3se-TU-Cfv2EZ0DKh0EgEtpo8D-0PG_YC25tXoVIJO7',
				callback: 'http://localhost:3000/callback',
				scopes: ['tweet.read', 'users.read', 'tweet.write', 'offline.access'],
				token: {
					access_token: token.accessToken,
					refresh_token: token.refreshToken,
				},
			});

			TwitterAuthClientFactory.instance = authClient;
		}

		return TwitterAuthClientFactory.instance;
	}
}

class TwitterClient {
	constructor(token) {
		this.authClient = new TwitterAuthClientFactory().build(token);
		this.client = new Client(this.authClient);
	}

	async createTweet(text) {
		this.#verifyToken();

		await this.client.tweets.createTweet({ text });
	}

	#verifyToken() {
		console.log('verifying token');
		if (this.authClient.isAccessTokenExpired()) {
			console.log('token expired');
			this.authClient.requestAccessToken();
		}
	}
}

export default TwitterClient;
