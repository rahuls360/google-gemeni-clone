import {
	MdAdd,
	MdHelpOutline,
	MdOutlineDehaze,
	MdOutlineSettings,
} from "react-icons/md";

export default function Sidebar() {
	return (
		<aside className="flex flex-col h-screen bg-[#1e1f20] text-[#c4c7c5] w-[68px] items-center pt-3 cursor-pointer">
			<div className="flex-1">
				<MdOutlineDehaze />
				<div className="border-r-8 bg-[#1e1f20] mt-[100px]">
					<MdAdd fill="#e3e3e3" />
				</div>
			</div>
			<div className="flex flex-col mb-6">
				<MdHelpOutline />
				<MdOutlineSettings />
			</div>
		</aside>
	);
}
