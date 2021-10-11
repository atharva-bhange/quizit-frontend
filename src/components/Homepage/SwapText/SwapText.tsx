import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const SwapText = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			2000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	const TEXTS = ["Creat", "Shar"];

	return (
		<div>
			<TextTransition
				text={TEXTS[index % TEXTS.length]}
				springConfig={presets.default}
				inline
			/>
			e
		</div>
	);
};

export default SwapText;
