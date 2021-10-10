import paths from "components/Footer/paths";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row">
			{paths.map(({ title, path }, index) => (
				<Link
					className="mx-2 my-1 text-base text-center md:text-xl text-primary-500 hover:text-primary-400"
					key={index}
					to={path}
				>
					{title}
				</Link>
			))}
		</div>
	);
};

export default Footer;
