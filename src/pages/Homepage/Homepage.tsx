import React from "react";
import Landing from "components/Homepage/Landing";
import { ReactComponent as Options } from "assets/images/options.svg";
import { ReactComponent as Share } from "assets/images/share.svg";
import InfoText from "components/Homepage/InfoText";

const Homepage = () => {
	return (
		<div className="bg-primary-500 dark:bg-deep">
			<Landing />
			<div className="flex flex-col items-center px-4 mb-6 md:justify-between xl:px-32 md:flex-row-reverse">
				<div className="">
					<Options style={{ width: "350px" }} className="object-scale-down" />
				</div>
				<InfoText
					title="Many question types to choose from!"
					subTitle="We offer Single Correct, Multiple correct MCQ and many more to suite
						your needs."
				/>
			</div>
			<div className="flex flex-col items-center px-4 md:justify-between xl:px-32 md:flex-row">
				<div>
					<Share style={{ width: "350px" }} className="object-scale-down" />
				</div>

				<InfoText
					title="Share your test with one link!"
					subTitle="Share your tests with people with one link with public and restricted access."
				/>
			</div>
		</div>
	);
};

export default Homepage;
