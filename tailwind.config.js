module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Ubuntu", "sans-serif"],
		},
		extend: {
			colors: {
				primary: { 500: "#A8DADC", 400: "#D0EFF0" },
				accent: "#E63946",
				secondary: { 500: "#1D3557", 400: "#264673" },
				deep: "#09101A",
			},
		},
	},
	variants: {
		extend: { display: ["dark"] },
	},
	plugins: [],
};
