import React from "react";
import { FaBars } from "react-icons/fa";

import { DarkModeButton, PrimaryButton } from "components/Buttons";
import "./Navlist.css";

const Navlist = () => {
	return (
		<div className="flex items-center">
			<span className="nav-link">Explore</span>
			<span className="nav-link">About</span>
			<span className="nav-link">Contact</span>
			<span className="hidden md:block">
				<PrimaryButton value="Signup" />
			</span>
			<DarkModeButton />
			<FaBars className="nav-bars" size="34" />
		</div>
	);
};

export default Navlist;
