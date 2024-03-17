/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				subtext: "#C7C7C7",
				primary: "#D3E97A",
			},
			fontFamily: {
				bebas: ["'Bebas Neue', sans-serif"],
				manrope: ["'Manrope', sans-serif"],
			},
		},
	},
	plugins: [],
};
