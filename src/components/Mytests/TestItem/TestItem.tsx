import { ToggleButton } from "components/Buttons";
import Menu from "components/Menu";
import MenuItem from "components/Menu/MenuItem";
import React, { useState } from "react";
import { FaEdit, FaEllipsisV, FaShareAlt, FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TestItem = () => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const open = Boolean(anchorEl);
	const onClick = (event: React.MouseEvent) => {
		setAnchorEl(event.currentTarget);
	};
	const onClose = () => {
		setAnchorEl(null);
	};

	const [active, setActive] = useState(false);

	return (
		<div className="flex items-center w-full p-3 my-4 rounded-lg bg-secondary-500 text-primary-500 group">
			<div className="flex flex-col flex-grow overflow-hidden md:items-center md:flex-row overflow-ellipsis whitespace-nowrap">
				<div
					style={{ width: "20ch" }}
					className="overflow-hidden text-3xl overflow-ellipsis whitespace-nowrap"
				>
					Test Title
				</div>
				<div
					style={{ flex: 2 }}
					className="overflow-hidden text-sm font-light overflow-ellipsis whitespace-nowrap"
				>
					Tempor velit in amet non minim ullamco eu aliquip est. Mollit nisi
					reprehenderit ea sunt et cupidatat labore deserunt tempor consectetur
					ex ad sit. Cupidatat proident adipisicing occaecat proident mollit
					eiusmod nulla irure magna. Velit cupidatat mollit officia excepteur
					sit velit tempor in officia pariatur occaecat mollit ut. Quis officia
					labore est duis fugiat nostrud occaecat.
				</div>
			</div>
			<div className="flex flex-col-reverse md:flex-row">
				<div className="flex ">
					<div className="block mx-2 cursor-pointer md:hidden group-hover:block ">
						<FaEdit size={30} />
					</div>
					<div className="block mx-2 cursor-pointer md:hidden group-hover:block">
						<FaShareAlt size={30} />
					</div>
				</div>
				<div className="flex items-center justify-between mb-2 md:mb-0">
					<ToggleButton onToggle={() => setActive(!active)} checked={active} />
					<div className="mx-2 cursor-pointer" onClick={onClick}>
						<FaEllipsisV size={25} />
					</div>
				</div>
			</div>
			<Menu
				anchorElement={anchorEl}
				open={open}
				onClose={onClose}
				position="left"
			>
				<MenuItem
					left={<FaUserEdit size={25} className="mr-1" />}
					className="text-center"
				>
					Manage Access
				</MenuItem>
				<MenuItem
					left={<MdDeleteOutline size={25} className="mr-2" />}
					className="text-center"
				>
					Delete
				</MenuItem>
			</Menu>
		</div>
	);
};

export default TestItem;
