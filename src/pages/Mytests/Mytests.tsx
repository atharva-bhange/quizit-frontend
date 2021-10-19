import { PrimaryButton } from "components/Buttons";
import Footer from "components/Footer";
import TestItem from "components/Mytests/TestItem";
import Navbar from "components/Navbar";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Mytests = () => {
	return (
		<div className="flex flex-col w-full bg-primary-500 dark:bg-deep">
			<Navbar />
			<div
				className="flex flex-col flex-grow px-4 xl:px-32"
				style={{ marginTop: "103px" }}
			>
				<div className="w-full">
					<div className="flex justify-between w-full">
						<div className="text-3xl font-light text-accent md:text-5xl">
							My Tests
						</div>
						<PrimaryButton
							value="Create"
							right={<AiOutlinePlus className="ml-1" size={24} />}
						/>
					</div>
					<div style={{ minHeight: "80vh" }} className="w-full my-5">
						<TestItem />
						<TestItem />
						<TestItem />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Mytests;
