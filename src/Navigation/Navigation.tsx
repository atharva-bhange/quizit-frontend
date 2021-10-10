import React from "react";

import { Homepage, Login } from "pages";
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
			</Switch>
		</BrowserRouter>
	);
};

export default Navigation;
