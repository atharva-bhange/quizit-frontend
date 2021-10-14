import { useField } from "formik";
import React from "react";

const FormError: React.FC<{ name: string }> = ({ name }) => {
	const field = useField(name);

	return (
		<>
			{field[1].error && (
				<div className="text-sm text-center text-red-500">{field[1].error}</div>
			)}
		</>
	);
};

export default FormError;
