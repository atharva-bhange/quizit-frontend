import { PrimaryButton } from "components/Buttons";
import Modal from "components/Modal";
import paths from "components/Navbar/paths";
import { UserContext } from "Navigation/Navigation";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavModal.css";

type Props = React.ComponentPropsWithoutRef<typeof Modal>;

const NavModal: React.FC<Props> = (props) => {
	const navigation = useHistory();
	const user = useContext(UserContext);

	return (
		<Modal {...props}>
			<div className="flex flex-col items-center w-full h-full p-4 rounded-lg bg-primary-500">
				{paths.map(({ path, title, displayMode }, index) => {
					if (user.user && displayMode.includes("OPEN")) return <></>;
					if (!user.user && displayMode.includes("PROTECTED")) return <></>;

					return (
						<NavLink
							className="m-1 text-xl text-secondary-500 hover:text-secondary-400"
							key={index}
							to={path}
							activeClassName="nav-active"
							exact
						>
							{title}
						</NavLink>
					);
				})}
				{user.user ? (
					<div className="m-2">
						<PrimaryButton
							value="Logout"
							onClick={() => navigation.push("/login")}
						/>
					</div>
				) : (
					<div className="m-2">
						<PrimaryButton
							value="Login"
							onClick={() => navigation.push("/login")}
						/>
					</div>
				)}
			</div>
		</Modal>
	);
};

export default NavModal;
