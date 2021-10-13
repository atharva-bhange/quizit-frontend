import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoDark } from "assets/images/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/images/logo-light.svg";
import { PrimaryButton } from "components/Buttons";
import { FaEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { TextInput } from "components/Inputs";
import { FacebookButton, GoogleButton } from "components/Buttons/SocialButtons";
import Footer from "components/Footer";

const Signup = () => {
	return (
		<div className="flex flex-col h-auto md:h-screen bg-primary-500 dark:bg-deep">
			<Link to="/" className="flex items-center justify-center pt-2 width-full">
				<LogoDark className="dark:hidden" />
				<LogoLight className="hidden dark:block" />
			</Link>
			<div className="flex items-center justify-center flex-grow my-4">
				<div className="flex flex-col items-center w-4/5 p-1 px-4 bg-white rounded-lg dark:bg-primary-500 md:w-1/2 2xl:w-2/5">
					<span className="text-5xl text-secondary-500">Sign Up</span>
					<div className="flex flex-col w-full md:flex-row ">
						<div className="w-full md:mr-2">
							<TextInput label="First Name" />
						</div>
						<div className="w-full">
							<TextInput label="Last Name" />
						</div>
					</div>
					<div className="w-full mb-2">
						<TextInput label="Email" />
					</div>
					<div className="w-full mb-2">
						<TextInput
							label="Password"
							type="password"
							right={<FaEye size={30} />}
						/>
					</div>
					<div className="w-full mb-2">
						<TextInput
							label="Confirm Password"
							type="password"
							right={<FaEye size={30} />}
						/>
					</div>
					<div className="my-1 ">
						<PrimaryButton value="Signup" />
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
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Signup;
