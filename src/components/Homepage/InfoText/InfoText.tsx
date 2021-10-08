import React from "react";

interface Props {
	title: string;
	subTitle: string;
}

const InfoText: React.FC<Props> = ({ title, subTitle }) => {
	return (
		<div className="flex flex-col justify-center">
			<span
				style={{ width: "20ch" }}
				className="text-3xl font-medium lg:text-5xl text-accent "
			>
				{title}
			</span>
			<span
				style={{ width: "25ch" }}
				className="text-base font-light lg:text-3xl dark:text-primary-500"
			>
				{subTitle}
			</span>
		</div>
	);
};

export default InfoText;
