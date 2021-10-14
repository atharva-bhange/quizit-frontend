import Loader from "components/Loader";
import React from "react";

const Dashboard = () => {
	return (
		<div className="w-screen h-screen bg-primary-500">
			<Loader thickness="md" color="accent" />
		</div>
	);
};

export default Dashboard;
