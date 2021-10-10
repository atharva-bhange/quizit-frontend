import React from "react";
import { Button } from "components/Buttons";

type Props = React.ComponentPropsWithoutRef<typeof Button>;

const PrimaryButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		return (
			<Button
				className="bg-secondary-500 hover:bg-secondary-400"
				ref={ref}
				{...props}
			/>
		);
	}
);

export default PrimaryButton;
