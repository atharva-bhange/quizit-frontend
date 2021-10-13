import * as Yup from "yup";

const loginValidation = Yup.object({
	email: Yup.string()
		.email("Please give a valid email.")
		.required("Email is required."),
	password: Yup.string()
		.min(8, "Password should be more than 8 characters long.")
		.required("Password is required."),
});

export default loginValidation;
