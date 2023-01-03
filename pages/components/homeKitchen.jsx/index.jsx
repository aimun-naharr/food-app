import React from "react";
import { useGetPoductQuery } from "../../state/productSlice";
import Header from "./Header";
import Product from "./Product";

const HomeKitchen = () => {
     const {data}=useGetPoductQuery()
     console.log(data);
	return (
		<div className="mt-[80px] ">
			<div className="border-2 w-[80%] mx-auto mb-[100px]">
				<Header />
                    <div>
                         {
                              data.map(product=><Product key={product.id} product={product}/>)
                         }
                    </div>
			</div>
		</div>
	);
};

export default HomeKitchen;
