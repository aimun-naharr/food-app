import React, { useState } from "react";
import { useSelector } from "react-redux";

import toast, { Toaster } from 'react-hot-toast';
import { usePostProductMutation } from "../state/productSlice";

const Checkout = () => {
	const cart = useSelector((state) => state.cart.cart);
	const subTotal = cart.reduce((total, item) => {
		return total + item.quantity * item.price;
	}, 0);
	const vat = Math.ceil(
		cart.reduce((total, item) => {
			return total + (item.vat / 100) * subTotal;
		}, 0)
	);
	const total = subTotal + vat;
	const initialState = {
		customer: {
			name: "",
			phone: "",
			address: "",
		},
		calculation: {
			price: subTotal,
			vat: vat,
			total: total,
		},
		items: [...cart],
	};
	const [formData, setFormData] = useState(initialState);
	console.log(formData);
	const inputStyles = "w-full border-2 border-[#F3BA00] p-2 outline-none rounded";
	const [addProduct, {isLoading, isError, isSuccess, status}] = usePostProductMutation();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(!formData.customer.name && !formData.customer.phone && !formData.customer.address){
			return
		}
		addProduct(formData)
		setFormData(initialState)
	};
	if(status === 'fulfilled'){
			toast.success('Order has been placed.')
		}
	
	return (
		<div className="w-[80%] mx-auto  mt-[80px]">
			<div className="flex gap-8 flex-col w-3/4 items-center justify-start  mx-auto">
				<h1 className="uppercase text-justify text-3xl mb-[10px]">Your order</h1>
				<div className="grid grid-cols-3 w-full gap-4">
					<form className="flex flex-col  gap-3 col-span-2">
						<div className="flex w-full gap-4">
							<input
								className={inputStyles}
								type="text"
								name="name"
								placeholder="Your name"
								value={formData.customer.name}
								onChange={(e) => setFormData({ ...formData, customer: { ...formData.customer, name: e.target.value } })}
								required
							/>
							<input
								className={inputStyles}
								type="tel"
								name="phone"
								placeholder="Phone number"
								value={formData.customer.phone}
								onChange={(e) => setFormData({ ...formData, customer: { ...formData.customer, phone: e.target.value } })}
								required
							/>
						</div>
						<div className="w-full">
							<input
								className={`${inputStyles} h-14`}
								type="text"
								name="address"
								placeholder="Address"
								value={formData.customer.address}
								onChange={(e) => setFormData({ ...formData, customer: { ...formData.customer, address: e.target.value } })}
								required
							/>
						</div>
						<button disabled={isLoading} type="submit" onClick={handleSubmit} className={`bg-black text-white w-full py-2 rounded ${isLoading && 'bg-gray-400'}`}>
							{isLoading? 'Please wait...': 'Place order'}
						</button>
					</form>
					<div className="col-span-1 bg-[#F7F8FA] p-3 rounded">
						<h2 className="flex justify-between border-b-2 pb-2 mb-2 border-b-gray-200">
							<span>Subtotal:</span> <span>${subTotal}</span>
						</h2>
						<h2 className="flex justify-between border-b-2 pb-2 mb-2 border-b-gray-200">
							<span>Vat:</span> <span>${vat}</span>
						</h2>
						<h2 className="flex text-3xl justify-between  pb-2 mb-2 border-b-gray-200">
							<span>Total:</span> <span>${total}</span>
						</h2>
						
					</div>
				</div>
			</div>
			   <Toaster />
		</div>
	);
};

export default Checkout;
