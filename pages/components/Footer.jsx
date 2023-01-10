import React from "react";
import NavMenu from "../global/NavMenu";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
	return (
		<div className="bg-[#1AC073] mt-[40px] text-white py-10">
			<div className="md:w-[80%] w-full mx-auto">
				<div className="flex justify-between md:flex-row flex-col items-center mb-4">
					<h1 className="font-serif uppercase text-3xl">What2eat</h1>
					<NavMenu />
					<div className="flex gap-2">
						<FaFacebookF className="bg-[#FFFFFF] text-[#929292] text-xl p-1 rounded cursor-pointer" />
						<RiInstagramFill className=" bg-[#FFFFFF] text-[#929292] text-xl p-1 rounded cursor-pointer" />
					</div>
				</div>
                    <div className="h-[1px] w-full bg-[#FFFFFF] mb-4"/>
                    <p className="text-center text-xs">Copyright @2021 What2eat</p>
			</div>
		</div>
	);
};

export default Footer;
