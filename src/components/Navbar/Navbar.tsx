import React from "react";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import Navlist from "./Navlist";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 flex justify-between w-full px-4 py-2 xl:px-32 bg-primary-500 dark:bg-deep">
			<div>
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</div>
			<Navlist />
		</div>
	);
};

export default Navbar;
