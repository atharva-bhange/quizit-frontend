import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import paths from "../paths";
import { DarkModeButton, PrimaryButton } from "components/Buttons";
import "./Navlist.css";
import NavModal from "./NavModal";
import { Link } from "react-router-dom";

const Navlist = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center">
			{paths.map(({ path, title }, index) => (
				<Link className="nav-link" to={path} key={index}>
					{title}
				</Link>
			))}
			<span className="hidden md:block">
				<PrimaryButton value="Signup" />
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
