import React, { useState } from "react";

import { Dashboard, Homepage, Login, Mytests, Signup } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "components/Loader";
import { useQuery } from "react-query";
import api from "api";

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

	const { status, error } = useQuery(
		"isAuthenticated",
		() => api.get("/user/login"),
		{
			retry: false,
			onSuccess: (data) => {
				if (data.status === 200 && !user) {
					setUser({ ...(data.data as any).data.user });
				}
			},
			refetchOnWindowFocus: false,
		}
	);

	if (status === "loading")
		return (
			<div className="flex items-center justify-center w-screen h-screen bg-primary-500 dark:bg-deep">
				<Loader color="accent" />
			</div>
		);

	if (status === "error" && !(error as any).response)
		return (
			<div className="flex items-center justify-center w-screen h-screen bg-primary-500 dark:bg-deep">
				Backend Servers are offline.
			</div>
		);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<ProtectedRoute
						exact
						path="/login"
						component={Login}
						unauthenticated
					/>
					<ProtectedRoute
						exact
						path="/signup"
						component={Signup}
						unauthenticated
					/>
					<ProtectedRoute exact path="/dashboard" component={Dashboard} />
					<ProtectedRoute exact path="/mytests" component={Mytests} />
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default Navigation;
