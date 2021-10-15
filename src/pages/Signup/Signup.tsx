import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import { PrimaryButton } from "components/Buttons";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { TextInput } from "components/Inputs";
import { FacebookButton, GoogleButton } from "components/Buttons/SocialButtons";
import Footer from "components/Footer";
import { Form, Formik } from "formik";
import PasswordInput from "components/Inputs/PasswordInput";
import signupValidation from "./validation";
import { useMutation } from "react-query";
import api from "api";
import { UserContext } from "Navigation/Navigation";
import FormError from "components/Inputs/FormError";

const Signup = () => {
	const user = useContext(UserContext);

	const history = useHistory();

	const register = useMutation(
		(data: any) => api.post("/user/register", data),
		{
			onSuccess: (res) => {
				user.setUser({ ...(res.data as any).data.user });
				history.push("/dashboard");
			},
		}
	);

	return (
		<div className="flex flex-col h-auto md:h-screen bg-primary-500 dark:bg-deep">
			<Link to="/" className="flex items-center justify-center pt-2 width-full">
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</Link>
			<div className="flex items-center justify-center flex-grow my-4">
				<Formik
					initialValues={{
						first_name: "",
						last_name: "",
						email: "",
						password: "",
						confirm_password: "",
						form: "",
					}}
					validationSchema={signupValidation}
					onSubmit={(formData, { setFieldError }) =>
						register.mutate(formData, {
							onError: (err) => {
								setFieldError("form", (err as any).response.data.message);
							},
						})
					}
				>
					<Form className="flex flex-col items-center w-4/5 p-2 px-4 bg-white rounded-lg dark:bg-primary-500 md:w-1/2 2xl:w-2/5">
						<span className="text-5xl text-secondary-500">Sign Up</span>
						<div className="w-full m-1">
							<FormError name="form" />
						</div>
						<div className="flex flex-col w-full md:flex-row ">
							<div className="w-full md:mr-2">
								<TextInput
									name="first_name"
									label="First Name"
									disabled={register.isLoading}
								/>
							</div>
							<div className="w-full">
								<TextInput
									name="last_name"
									label="Last Name"
									disabled={register.isLoading}
								/>
							</div>
						</div>
						<div className="w-full mb-2">
							<TextInput
								label="Email"
								name="email"
								disabled={register.isLoading}
							/>
						</div>
						<div className="w-full mb-2">
							<PasswordInput
								name="password"
								label="Password"
								disabled={register.isLoading}
							/>
						</div>
						<div className="w-full mb-2">
							<PasswordInput
								name="confirm_password"
								label="Confirm Password"
								disabled={register.isLoading}
							/>
						</div>
						<div className="my-1 ">
							<PrimaryButton
								value="Signup"
								type="submit"
								disabled={register.isLoading}
								loading={register.isLoading}
							/>
						</div>
						<span className="pb-1 my-2 text-secondary-500 ">
							Already have a Account?{" "}
							<Link className="hover:text-accent" to="/login">
								Login.
							</Link>
						</span>
						<div className="p-2 border-t-2 border-solid border-secondary-500">
							<div className="pb-2">
								<GoogleButton
									type="button"
									value="Continue with Google"
									left={<FaGoogle size={30} className="mr-2" />}
									full
									href={`${process.env.REACT_APP_BACKEND_URL}/v1/auth/google`}
								/>
							</div>
							<div>
								<FacebookButton
									type="button"
									value="Continue with Facebook"
									left={<FaFacebook size={30} className="mr-2" />}
									full
									href={`${process.env.REACT_APP_BACKEND_URL}/v1/auth/facebook`}
								/>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
			<Footer />
		</div>
	);
};

export default Signup;
