import React from "react";
import Navigation from "Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Navigation />
			</QueryClientProvider>
		</>
	);
}

export default App;
