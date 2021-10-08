import React from "react";
import { ReactComponent as LightLogo } from "assets/images/logo-light.svg";
import FooterList from "./FooterList";

const Footer: React.FC = () => {
	return (
		<div className="flex flex-col items-center w-full px-4 py-2 rounded-t-lg md:justify-between bg-secondary-500 md:flex-row md:items-center xl:px-32">
			<div className="mb-3 md:mb-0">
				<LightLogo />
			</div>
			<FooterList />
		</div>
	);
};

export default Footer;
