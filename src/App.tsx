import React, { useEffect } from "react";
import Navigation from "Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const queryClient = new QueryClient();

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		const localDarkMode = localStorage.getItem("darkMode");
		if (localDarkMode === "true") body.classList.toggle("dark", true);
		else if (localDarkMode === "false") body.classList.toggle("dark", false);
		else if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			body.classList.toggle("dark", true);
			localStorage.setItem("darkMode", "true");
		}
	}, []);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Navigation />
			</QueryClientProvider>
		</>
	);
}

export default App;
