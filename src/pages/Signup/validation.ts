import * as Yup from "yup";

const signupValidation = Yup.object({
	email: Yup.string()
		.email("Please give a valid email.")
		.required("Email is required."),
	password: Yup.string()
		.min(8, "Password should be more than 8 characters long.")
		.required("Password is required."),
	confirmPassword: Yup.string()
		.min(8, "Password should be more than 8 characters long.")
		.required("Password is required.")
		.oneOf([Yup.ref("password")], "Passwords do not match"),
	firstName: Yup.string().required("First Name is required."),
	lastName: Yup.string().required("Last Name is required."),
});

export default signupValidation;
