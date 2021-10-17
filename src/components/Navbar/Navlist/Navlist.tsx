import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";

import paths from "../paths";
import { DarkModeButton, PrimaryButton } from "components/Buttons";
import "./Navlist.css";
import NavModal from "./NavModal";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "Navigation/Navigation";

const Navlist = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const navigation = useHistory();
	const user = useContext(UserContext);

	return (
		<div className="flex items-center">
			{paths.map(({ path, title, displayMode }, index) => {
				if (user.user && displayMode === "OPEN") return <></>;
				if (!user.user && displayMode === "PROTECTED") return <></>;
				return (
					<NavLink
						className="nav-link"
						activeClassName="nav-active"
						exact
						to={path}
						key={index}
					>
						{title}
					</NavLink>
				);
			})}
			<span className="hidden md:block">
				<PrimaryButton
					value="Login"
					onClick={() => navigation.push("/login")}
				/>
			</span>
			<DarkModeButton />
			<FaBars
				className="nav-bars"
				size="34"
				onClick={() => setIsNavOpen(true)}
			/>
			<NavModal isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
		</div>
	);
};

export default Navlist;
