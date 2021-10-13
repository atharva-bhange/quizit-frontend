import React from "react";

import { Homepage, Login, Signup } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navigation = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Navigation;
