import React from "react";
import { useGetPoductQuery } from "../../state/productSlice";
import Header from "./Header";
import Product from "./Product";

const HomeKitchen = () => {
     const {data}=useGetPoductQuery()
     console.log(data);
	return (
		<div className="py-[80px] bg-[#F7F8FA]">
			<div className="border-2 w-[80%] mx-auto mb-[100px]">
				<Header />
                    {/* products container */}
                    <div className="grid grid-cols-4 w-full border-2 justify-items-between my-[80px]">
                         {
                              data?.map(product=><Product key={product.id} product={product}/>)
                         }
                    </div>
			</div>
		</div>
	);
};

export default HomeKitchen;
