import React from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
	left?: React.ReactNode;
	right?: React.ReactNode;
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		const { left, right, ...rest } = props;

		return (
			<button
				ref={ref}
				{...rest}
				className="flex items-center justify-between px-8 py-2 text-xl align-text-top rounded-lg bg-secondary-500 hover:bg-secondary-400 text-primary-500"
			>
				{left}
				{props.value}
				{right}
			</button>
		);
	}
);

export default PrimaryButton;
