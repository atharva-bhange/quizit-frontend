import React from "react";
import { Button } from "components/Buttons";

type Props = React.ComponentPropsWithoutRef<typeof Button>;

const FacebookButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		return (
			<Button
				className="bg-facebook-500 hover:bg-facebook-400"
				ref={ref}
				{...props}
			/>
		);
	}
);

export default FacebookButton;
