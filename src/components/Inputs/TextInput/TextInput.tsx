import React from "react";

type Props = React.ComponentPropsWithoutRef<"input"> & {
	label?: string;
	right?: React.ReactNode;
};

const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { label, right, ...rest } = props;

	return (
		<div className="relative flex flex-col w-full group">
			<span className="mb-1 ml-1 font-light text-opacity-50 text-secondary-500 group-focus-within:text-opacity-100 ">
				{label}
			</span>
			<input
				{...rest}
				ref={ref}
				className="w-full px-2 py-1 font-sans text-lg font-normal bg-transparent border border-opacity-50 border-solid rounded-lg outline-none focus:border-opacity-100 text-secondary-500 border-secondary-500"
			/>
			<div className="absolute right-2 bottom-1">{right}</div>
		</div>
	);
});

export default TextInput;
