import React from "react";
import { useGetPoductQuery } from "../../../state/productSlice";

import Header from "./Header";
import Product from "./Product";

const HomeKitchen = () => {
     const {data}=useGetPoductQuery()
    
	return (
		<div className="pt-[100px]  bg-[#F7F8FA] ">
			<div className="w-full md:w-[80%] mx-auto mb-[100px]">
				<Header />
                    {/* products container */}
                    <div className="grid  w-full  justify-center items-center my-[80px]">
                        <div className="grid grid-cols-1 md:grid-cols-4 justify-between items-baseline gap-8">
                        {
                              data?.slice(0, 4).map(product=><Product key={product?.id} product={product}/>)
                         }
                        </div>
                         <button className="border-2 w-[15%] py-2 rounded-md bg-inherit text-gray-400 mt-[80px] mb-[80px] mx-auto border-[#F3BA00] ">+   Load more...</button>
                    </div>
			</div>
		</div>
	);
};

export default HomeKitchen;
