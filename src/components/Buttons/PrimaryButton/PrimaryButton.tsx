import React from "react";
import { Button } from "components/Buttons";
import Loader from "components/Loader";

type Props = React.ComponentPropsWithoutRef<typeof Button> & {
	loading?: boolean;
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		const { loading, ...rest } = props;

		return (
			<Button
				className="bg-secondary-500 hover:bg-secondary-400 disabled:bg-secondary-400 disabled:bg-opacity-80"
				left={
					loading ? (
						<div className="mr-2">
							<Loader size="sm" thickness="sm" />
						</div>
					) : undefined
				}
				ref={ref}
				{...rest}
			/>
		);
	}
);

export default PrimaryButton;
