import React from "react";
import { useGetOrderedPoductsQuery } from "./state/productSlice";

const Orders = () => {
     const {data, isLoading}=useGetOrderedPoductsQuery()
	
   if(isLoading){
	return <p>please wait....</p>
   }
	
	return (
		<div className="flex flex-col justify-center items-center h-full w-full ">
			<div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
				<header className="px-5 py-4 border-b border-gray-100">
					<div className="font-semibold text-gray-800">Orders</div>
				</header>

				<div className="overflow-x-auto p-3">
					<table className="table-auto w-full">
						<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
							<tr>
								<th></th>
								<th className="p-2">
									<div className="font-semibold text-left">Customer Name</div>
								</th>
								<th className="p-2">
									<div className="font-semibold text-left">Phone</div>
								</th>
								<th className="p-2">
									<div className="font-semibold text-left">Address</div>
								</th>
								<th className="p-2">
									<div className="font-semibold text-left">Total</div>
								</th>
								
							</tr>
						</thead>

						<tbody className="text-sm divide-y divide-gray-100">
							{data?.map((item) => 
								<tr key={item._id}>
									<td className="p-2">
										<input type="checkbox" className="w-5 h-5" value="id-1" />
									</td>
									<td className="p-2">
										<div className="font-medium text-gray-800">{item.customer.name}</div>
									</td>
									<td className="p-2">
										<div className="text-left capitalize">{item.customer.phone}</div>
									</td>
									<td className="p-2">
                                             <div className="text-left capitalize">{item.customer.address}</div>
									</td>
									<td className="p-2">
										<div className="text-left font-medium text-indigo-500">{item.calculation.total}</div>
									</td>
									
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Orders;
