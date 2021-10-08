import { PrimaryButton } from "components/Buttons";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "components/Navbar";
import { ReactComponent as LandingImage } from "assets/images/landing.svg";
import React from "react";

const Landing = () => {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="relative flex flex-col justify-center flex-grow px-4 overflow-x-hidden xl:px-32">
				<div>
					<div className="mb-2 text-5xl font-bold md:text-6xl text-accent">
						Create
					</div>
					<div
						style={{ width: "25ch" }}
						className="mb-4 text-base font-medium md:text-3xl text-secondary-500 dark:text-primary-500"
					>
						tests with MCQ, Numerical and True-False questions with our awesome
						test builder.
					</div>
					<PrimaryButton
						value="Get Started"
						right={<FaArrowRight size={26} className="ml-2" />}
					/>
				</div>
				<div style={{ left: "48%" }} className="absolute">
					<LandingImage />
				</div>
			</div>
		</div>
	);
};

export default Landing;
