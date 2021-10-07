import React from "react";

type Props = React.ComponentPropsWithoutRef<"button">;

const PrimaryButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		return (
			<button
				ref={ref}
				{...props}
				className="bg-secondary-500 hover:bg-secondary-400 text-xl text-primary-500 rounded-lg py-2 px-8 align-text-top"
			>
				{props.value}
			</button>
		);
	}
);

export default PrimaryButton;
