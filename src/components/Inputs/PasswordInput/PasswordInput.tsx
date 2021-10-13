import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TextInput } from "..";

type Props = React.ComponentPropsWithoutRef<typeof TextInput>;

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
	(props, ref) => {
		const [showPassword, setShowPassword] = useState(false);

		return (
			<TextInput
				ref={ref}
				{...props}
				type={showPassword ? "text" : "password"}
				right={
					showPassword ? (
						<FaEye
							size={30}
							className="cursor-pointer text-secondary-500 hover:text-secondary-400"
							onClick={() => setShowPassword(!showPassword)}
						/>
					) : (
						<FaEyeSlash
							size={30}
							className="cursor-pointer text-secondary-500 hover:text-secondary-400"
							onClick={() => setShowPassword(!showPassword)}
						/>
					)
				}
			/>
		);
	}
);

export default PasswordInput;
