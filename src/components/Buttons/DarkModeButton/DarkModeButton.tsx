import React, { useEffect, useState } from "react";
import "./DarkModeButton.css";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = React.ComponentPropsWithoutRef<"button">;

const DarkModeButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		const [darkMode, setDarkMode] = useState(() => {
			const localDarkMode = localStorage.getItem("darkMode");
			if (localDarkMode === "true") return true;
			else if (localDarkMode === "false") return false;
			else if (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			) {
				return true;
			}
			return false;
		});

		useEffect(() => {
			const body = document.getElementsByTagName("body")[0];
			if (darkMode) {
				localStorage.setItem("darkMode", "true");
				body.classList.toggle("dark", true);
			} else {
				localStorage.setItem("darkMode", "false");
				body.classList.toggle("dark", false);
			}
		}, [darkMode]);

		return (
			<button
				ref={ref}
				{...props}
				className={`p-1 border border-solid transition-all ease-in-out  rounded-lg ml-6 group ${
					darkMode ? "dark-mode" : "light-mode"
				}`}
				onClick={() => setDarkMode(!darkMode)}
			>
				{darkMode ? (
					<FaSun
						size={34}
						className="text-primary-500 transition-all ease-in-out group-hover:text-secondary-500"
					/>
				) : (
					<FaMoon
						size={34}
						className="text-secondary-500 transition-all ease-in-out  group-hover:text-primary-500"
					/>
				)}
			</button>
		);
	}
);
export default DarkModeButton;
