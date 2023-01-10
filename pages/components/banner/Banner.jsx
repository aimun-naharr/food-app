import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
	return (
		<main className="bg-[#0C1712] min-h-[800px] w-full">
			{/* banner wrapper */}
			<div className="w-full md:w-[80%] mx-auto">
				{/* <Navbar/> */}
				<div className="text-white">
					{/* banner text */}
					<div className="max-w-[534px] mt-[200px] px-4">
						<h2 className="text-[60px] w-full min-h-[147px] leading-[1.2] ">
							Authenctic Home <br /> food in UK
						</h2>
						<p className="mt-[20px] mb-[20px]">What2eat is a courier service in which authentic home cook food is delivered to a customer</p>
						<div className="max-w-[398px] rounded h-[58px] border-2 border-[#F3BA00] flex justify-end">
							<input className="w-full p-2 outline-none" type="text" placeholder="Search food you love"/>
							<button className="w-[30%]  flex-end bg-[#F3BA00]">Search</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Banner;
