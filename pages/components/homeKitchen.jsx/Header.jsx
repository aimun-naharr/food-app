import React from "react";

const Header = () => {
	const tabButtons = ["All", "Button", "Free Delivery", "New", "Coming"];
	return (
		<div>
			<h1 className="text-2xl mb-[20px]">Home Kitchen</h1>
			<div className="w-full md:w-[60%] rounded border-2 border-[#F3BA00] flex md:flex-row flex-col overflow-hidden">
				{tabButtons.map((button, i) => (
					<button
						className="w-full first:bg-[#F3BA00] first:font-bold first:text-black md:last:border-r-0 text-gray-400 py-2 px-4  md:border-x-[1px] border-[#F3BA00]"
						key={i}
					>
						{button}
					</button>
				))}
			</div>
			<div className="md:w-[20%] w-[80%] mt-[30px] rounded-md border-2 border-gray-300 bg-[#ffffff] flex justify-between px-3">
				<input type="text" placeholder="Filters" className="p-2 outline-none" />
				<select name="Filters" id="" className="border-0 cursor-pointer outline-none"></select>
			</div>
		</div>
	);
};

export default Header;
