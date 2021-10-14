import { UserContext } from "Navigation/Navigation";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";

type Props = React.ComponentProps<typeof Route>;

const ProtectedRoute: React.FC<Props> = (props) => {
	const { component, ...rest } = props;

	const user = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				user.user ? (
					React.createElement(component!, props)
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

export default ProtectedRoute;
