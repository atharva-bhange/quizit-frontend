import React from "react";

const MenuItem: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
	children,
	...rest
}) => {
	return (
		<div
			{...rest}
			className="px-3 text-lg cursor-pointer text-primary-500 dark:text-secondary-500 dark:hover:bg-primary-400 hover:bg-secondary-400"
		>
			{children}
		</div>
	);
};

export default MenuItem;
