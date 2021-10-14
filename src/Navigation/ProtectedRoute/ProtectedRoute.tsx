import { UserContext } from "Navigation/Navigation";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";

type Props = React.ComponentProps<typeof Route> & {
	unauthenticated?: boolean;
};

const ProtectedRoute: React.FC<Props> = (props) => {
	const { component, unauthenticated = false, ...rest } = props;

	const user = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				user.user ? (
					unauthenticated ? (
						<Redirect to="/" />
					) : (
						React.createElement(component!, props)
					)
				) : unauthenticated ? (
					React.createElement(component!, props)
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

export default ProtectedRoute;
