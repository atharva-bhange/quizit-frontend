import React, { useState } from "react";

import { Dashboard, Homepage, Login, Signup } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export interface User {
	first_name: string;
	last_name: string;
	email: string;
	id: string;
	role: string;
}

export const UserContext = React.createContext<{
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
	user: null,
	setUser: () => {},
});

const Navigation = () => {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<ProtectedRoute exact path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default Navigation;
