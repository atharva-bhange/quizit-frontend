import { PrimaryButton } from "components/Buttons";
import Modal from "components/Modal";
import paths from "components/Navbar/paths";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavModal.css";

type Props = React.ComponentPropsWithoutRef<typeof Modal>;

const NavModal: React.FC<Props> = (props) => {
	const navigation = useHistory();

	return (
		<Modal {...props}>
			<div className="flex flex-col items-center w-full h-full p-4 rounded-lg bg-primary-500">
				{paths.map(({ path, title }, index) => (
					<NavLink
						className="m-1 text-xl text-secondary-500 hover:text-secondary-400"
						key={index}
						to={path}
						activeClassName="nav-active"
						exact
					>
						{title}
					</NavLink>
				))}
				<div className="m-2">
					<PrimaryButton
						value="Login"
						onClick={() => navigation.push("/login")}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default NavModal;
