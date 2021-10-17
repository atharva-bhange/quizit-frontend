import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const SwapText = () => {
	const [index, setIndex] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(!index),
			2000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, [index]);

	const TEXTS = ["Creat", "Shar"];

	return (
		<div>
			<TextTransition
				text={index ? TEXTS[0] : TEXTS[1]}
				springConfig={presets.default}
				inline
			/>
			e
		</div>
	);
};

export default SwapText;
