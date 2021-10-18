module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class',
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
				google: {
					500: "#EA4335",
					400: "#EE6459",
				},
				facebook: {
					500: "#4267B2",
					400: "#5B7DC2",
				},
			},
			keyframes: {
				"scale-reveal": {
					"0%": { transform: "scale(0)", transformOrigin: "center top" },

					"100%": { transform: "scale(1)" },
				},
			},
			animation: {
				"scale-reveal": "scale-reveal 0.2s ease-in-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
