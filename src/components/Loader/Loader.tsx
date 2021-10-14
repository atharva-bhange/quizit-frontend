import React from "react";
import classNames from "classnames";

interface Props {
	size?: "xs" | "sm" | "md" | "lg";
	thickness?: "sm" | "md" | "lg";
	color?: "accent" | "primary" | "secondary" | "deep";
}

const sizeMap = {
	xs: "w-4 h-4 ",
	sm: "w-6 h-6",
	md: "w-12 h-12",
	lg: "w-16 h-16",
};

const thicknessMap = {
	sm: "border-2",
	md: "border-4",
	lg: "border-8",
};

const colorMap = {
	accent: "border-t-accent",
	primary: "border-t-primary-500",
	secondary: "border-t-secondary-500",
	deep: "border-t-deep",
};

const Loader: React.FC<Props> = ({
	size = "md",
	thickness = "md",
	color = "primary",
}) => {
	return (
		<div className="flex items-center justify-center ">
			<div
				className={classNames(
					"z-20 border-transparent rounded-full animate-spin ",
					thicknessMap[thickness],
					sizeMap[size],
					colorMap[color]
				)}
			/>
			<div
				className={classNames(
					"absolute border-opacity-40 border-solid rounded-full ",
					thicknessMap[thickness],
					sizeMap[size],
					{ "border-primary-500": color === "primary" },
					{ "border-secondary-500": color === "secondary" },
					{ "border-accent": color === "accent" }
				)}
			></div>
		</div>
	);
};

export default Loader;
