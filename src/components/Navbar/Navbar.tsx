import React from "react";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import Navlist from "./Navlist";

const Navbar = () => {
	return (
		<div className="flex justify-between w-full px-4 py-2 xl:px-32 ">
			<div>
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</div>
			<Navlist />
		</div>
	);
};

export default Navbar;
