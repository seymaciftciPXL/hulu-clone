/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./components/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
