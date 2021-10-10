import React from "react";
import { ReactComponent as LightLogo } from "assets/images/logo-light.svg";
import FooterList from "./FooterList";

const Footer: React.FC = () => {
	return (
		<div className="flex flex-col items-center w-full px-4 py-4 rounded-t-lg md:justify-between bg-secondary-500 md:flex-row md:items-center xl:px-32">
			<div className="flex items-center justify-center ">
				<LightLogo className="md:w-3/5 h-3/5" />
			</div>
			<FooterList />
		</div>
	);
};

export default Footer;
