import React from "react";
import classnames from "classnames";

type Props = React.ComponentPropsWithoutRef<"button"> & {
	left?: React.ReactNode;
	right?: React.ReactNode;
	full?: boolean;
	href?: string;
};

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const { left, right, full = false, href, ...rest } = props;

	const classes = classnames(
		"flex",
		"items-center",
		"justify-center",
		"px-8",
		"py-2",
		"text-xl",
		"align-text-top",
		"rounded-lg",
		"text-primary-500",
		{ "w-full": full },
		rest.className
	);

	return (
		<a href={href}>
			<button ref={ref} {...rest} className={classes}>
				{left}
				{props.value}
				{right}
			</button>
		</a>
	);
});

export default Button;
