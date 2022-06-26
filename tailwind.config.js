/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./components/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				"3xl": "2000px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
