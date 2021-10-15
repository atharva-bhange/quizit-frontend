import React, { useContext } from "react";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import Footer from "components/Footer";
import { Link, useHistory } from "react-router-dom";
import { TextInput } from "components/Inputs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { PrimaryButton } from "components/Buttons";
import { FacebookButton, GoogleButton } from "components/Buttons/SocialButtons";
import { Formik, Form } from "formik";
import loginValidation from "./validation";
import PasswordInput from "components/Inputs/PasswordInput";
import { UserContext } from "Navigation/Navigation";
import { useMutation } from "react-query";
import api from "api";
import FormError from "components/Inputs/FormError";

const Login: React.FC = () => {
	const user = useContext(UserContext);

	const history = useHistory();

	const login = useMutation((data: any) => api.post("/user/login", data), {
		onSuccess: (res) => {
			user.setUser({ ...(res.data as any).data.user });
			history.push("/dashboard");
		},
	});

	return (
		<div className="flex flex-col h-screen bg-primary-500 dark:bg-deep">
			<Link to="/" className="flex items-center justify-center pt-2 width-full">
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</Link>
			<div className="flex items-center justify-center flex-grow my-4">
				<Formik
					initialValues={{ email: "", password: "", form: "" }}
					onSubmit={(formData, { setFieldError }) =>
						login.mutate(formData, {
							onError: (err) => {
								setFieldError("form", (err as any).response.data.message);
							},
						})
					}
					validationSchema={loginValidation}
				>
					<Form className="flex flex-col items-center w-4/5 p-2 px-4 bg-white rounded-lg dark:bg-primary-500 md:w-1/2 2xl:w-2/5">
						<span className="text-5xl text-secondary-500">Login</span>
						<div className="w-full m-1">
							<FormError name="form" />
						</div>
						<div className="w-full mb-2">
							<TextInput name="email" label="Email" />
						</div>
						<div className="w-full mb-2">
							<PasswordInput name="password" label="Password" />
						</div>
						<div className="w-full">
							<Link
								to="/forget"
								className=" text-secondary-500 hover:text-accent"
							>
								Forget Password
							</Link>
						</div>
						<div className="my-1 ">
							<PrimaryButton
								value="Login"
								type="submit"
								disabled={login.isLoading}
								loading={login.isLoading}
							/>
						</div>
						<span className="pb-1 my-2 text-secondary-500 ">
							Need a Account?{" "}
							<Link className="hover:text-accent" to="/signup">
								Sign Up.
							</Link>
						</span>
						<div className="p-2 border-t-2 border-solid border-secondary-500">
							<div className="pb-2">
								<GoogleButton
									value="Login with Google"
									left={<FaGoogle size={30} className="mr-2" />}
									full
								/>
							</div>
							<div>
								<FacebookButton
									value="Login with Facebook"
									left={<FaFacebook size={30} className="mr-2" />}
									full
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

export default Login;
