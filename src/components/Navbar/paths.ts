interface PathObjects {
	title: string;
	path: string;
	displayMode: "PROTECTED" | "OPEN" | "BOTH";
}

const paths: PathObjects[] = [
	{ title: "Explore", path: "/explore", displayMode: "BOTH" },
	{ title: "About", path: "/about", displayMode: "OPEN" },
	{ title: "Contact", path: "/contact", displayMode: "OPEN" },
	{ title: "My Tests", path: "/mytests", displayMode: "PROTECTED" },
	{ title: "Attempts", path: "/attempts", displayMode: "PROTECTED" },
];

export default paths;
