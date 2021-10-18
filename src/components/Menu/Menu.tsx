import React, { useMemo } from "react";

type Props = React.ComponentPropsWithoutRef<"div"> & {
	anchorElement: Element | null;
	open: boolean;
	onClose: () => any;
	position?: "right" | "left" | "bottom" | "top";
	offset?: number;
	crossOffset?: number;
};

const Menu = React.forwardRef<typeof HTMLDivElement, Props>((props, ref) => {
	const {
		anchorElement,
		open,
		onClose,
		position = "bottom",
		offset = 8,
		crossOffset = 0,
		children,
	} = props;

	const styleObject = useMemo<React.CSSProperties>(() => {
		if (!anchorElement) return {};
		const { left, top, right, bottom } = anchorElement.getBoundingClientRect();
		switch (position) {
			case "bottom":
				return {
					top: bottom + offset,
					left: left + crossOffset,
				};
			case "left":
				return {
					top: top + crossOffset,
					right: window.innerWidth - left - offset,
				};
			case "right":
				return {
					top: top + crossOffset,
					left: right + offset,
				};
			case "top":
				return {
					bottom: window.innerHeight - top + offset,
					left: left + crossOffset,
				};
		}
	}, [position, anchorElement, offset, crossOffset]);
	if (!open || !anchorElement) return <></>;

	return (
		<div className={"fixed top-0 bottom-0 left-0 right-0"} onClick={onClose}>
			<div
				style={styleObject}
				className="absolute z-40 flex flex-col py-2 rounded-lg bg-secondary-500 animate-scale-reveal dark:bg-primary-500"
			>
				{children}
			</div>
		</div>
	);
});

export default Menu;
