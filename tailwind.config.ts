import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1e96fb',
				secondary: '#3937be',
				'instagram-primary': '#405DE6',
				'instagram-secondary': '#5851DB',
				'instagram-yellow': '#EE2A7B',
				'instagram-red': '#FD1D1D',
			},
			backgroundImage: {
				'instagram-gradient': 'linear-gradient(to right, #405DE6, #5851DB, #EE2A7B, #FD1D1D)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			backgroundClip: {
				text: 'text',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
export default config;
