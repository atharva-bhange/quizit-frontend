import React from "react";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import Navlist from "./Navlist";

const Navbar = () => {
	return (
		<div className="w-full flex justify-between px-4 lg:px-32 py-2 ">
			<div>
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</div>
			<Navlist />
		</div>
	);
};

export default Navbar;
