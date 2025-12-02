/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#e60012',
				secondary: '#333333',
			},
			fontFamily: {
				sans: ['var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
