import React from "react";
import Image from "next/image";
const Product = ({ product }) => {
	const { image, name, price } = product;
	return (
		<div className="w-[277px] text-[#1B1C21]">
			<img src={image} alt={name} className="w-[277px] h-[250px] object-cover" />
			{/* bottom section */}
			<div className="bg-[#ffffff] p-3">
				<div className="flex justify-between mb-[10px] ">
					<h1 className="font-medium">{name}</h1>
					<h1 className="font-bold">${price}</h1>
				</div>
				<div className="flex justify-between items-center">
					<div className="text-xs flex gap-2">
						<span className="bg-[#F7F8FA] rounded py-2 px-3">★ 4.7</span>
						<span className="bg-[#F7F8FA] rounded py-2 px-3">50-70min</span>
					</div>
					<div className="cursor-pointer   rounded ">
						<p className="font-bold text-white text-xl bg-[#F3BA00] h-[20px] w-[20px] justify-center flex items-center">+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
