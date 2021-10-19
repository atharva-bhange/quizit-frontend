import classNames from "classnames";
import React from "react";

type Props = React.ComponentPropsWithoutRef<"div"> & {
	left?: React.ReactNode;
	right?: React.ReactNode;
};

const MenuItem: React.FC<Props> = ({
	children,
	className,
	left,
	right,
	...rest
}) => {
	return (
		<div
			{...rest}
			className="flex px-3 py-1 text-lg cursor-pointer text-primary-500 dark:text-secondary-500 dark:hover:bg-primary-400 hover:bg-secondary-400"
		>
			{left}
			<div className={classNames(className, "flex-grow")}>{children}</div>
			{right}
		</div>
	);
};

export default MenuItem;
