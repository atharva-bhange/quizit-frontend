import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";

import paths from "../paths";
import { DarkModeButton, PrimaryButton } from "components/Buttons";
import "./Navlist.css";
import NavModal from "./NavModal";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "Navigation/Navigation";
import Menu from "components/Menu";
import MenuItem from "components/Menu/MenuItem";

const Navlist = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const navigation = useHistory();
	const user = useContext(UserContext);

	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="flex items-center">
			{paths.map(({ path, title, displayMode }, index) => {
				if (displayMode.includes("MODAL")) return <></>;
				if (user.user && displayMode.includes("OPEN")) return <></>;
				if (!user.user && displayMode.includes("PROTECTED")) return <></>;
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
			{user.user ? (
				<span
					onClick={handleClick}
					className="hidden p-2 px-3 text-2xl leading-6 rounded-full cursor-pointer md:block text-primary-500 dark:text-secondary-500 bg-secondary-500 dark:bg-primary-500"
				>
					{user.user.first_name[0].toUpperCase()}
				</span>
			) : (
				<span className="hidden md:block">
					<PrimaryButton
						value="Login"
						onClick={() => navigation.push("/login")}
					/>
				</span>
			)}
			<DarkModeButton />
			<FaBars
				className="nav-bars"
				size="34"
				onClick={() => setIsNavOpen(true)}
			/>
			<NavModal isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
			<Menu
				anchorElement={anchorEl}
				open={open}
				onClose={handleClose}
				position="bottom"
				crossOffset={-50}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default Navlist;
