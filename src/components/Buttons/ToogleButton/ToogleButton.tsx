import classNames from "classnames";
import React from "react";

type Props = {
	size?: "sm" | "md" | "lg";
	onToggle: () => any;
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

const ToogleButton = React.forwardRef<typeof HTMLInputElement, Props>(
	(props, ref) => {
		const { checked, onToggle, size = "md", ...rest } = props;

		const containerClass = classNames(
			"bg-primary-500 relative p-1 cursor-pointer",
			{ "w-8 h-4 rounded-lg": size === "sm" },
			{ "w-11 h-7 rounded-xl": size === "md" },
			{ "w-20 h-12 rounded-3xl": size === "lg" },
			{ "bg-primary-500": checked },
			{ "bg-gray-400": !checked }
		);

		const indicatorClass = classNames(
			"absolute transition-transform -translate-y-1/2 bg-white rounded-full top-1/2 drop-shadow-2xl",
			{ "translate-x-1/2": checked },
			{ "w-4 h-4 ": size === "sm" },
			{ "w-6 h-6": size === "md" },
			{ "w-12 h-12 ": size === "lg" }
		);

		return (
			<div
				ref={ref as any}
				{...rest}
				className={containerClass}
				onClick={onToggle}
			>
				<div className={indicatorClass} />
			</div>
		);
	}
);

export default ToogleButton;
