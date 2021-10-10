import React from "react";
import { Button } from "components/Buttons";

type Props = React.ComponentPropsWithoutRef<typeof Button>;

const GoogleButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		return (
			<Button
				className="bg-google-500 hover:bg-google-400"
				ref={ref}
				{...props}
			/>
		);
	}
);

export default GoogleButton;
