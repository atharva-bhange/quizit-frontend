import React from "react";
import Homepage from "pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navigation = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Navigation;
