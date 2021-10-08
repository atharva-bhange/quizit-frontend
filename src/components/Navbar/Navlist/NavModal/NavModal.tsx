import { PrimaryButton } from "components/Buttons";
import Modal from "components/Modal";
import paths from "components/Navbar/paths";
import React from "react";
import { Link } from "react-router-dom";

type Props = React.ComponentPropsWithoutRef<typeof Modal>;

const NavModal: React.FC<Props> = (props) => {
	return (
		<Modal {...props}>
			<div className="flex flex-col items-center w-full h-full p-4 rounded-lg bg-primary-500">
				{paths.map(({ path, title }, index) => (
					<Link
						className="m-1 text-xl text-secondary-500 hover:text-secondary-400"
						key={index}
						to={path}
					>
						{title}
					</Link>
				))}
				<div className="m-2">
					<PrimaryButton value="SignUp" />
				</div>
			</div>
		</Modal>
	);
};

export default NavModal;
