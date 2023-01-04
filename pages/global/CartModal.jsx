import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../state/cartSlice";
import Link from "next/link";
const CartModal = ({ setIsCartOpen }) => {
     const cart=useSelector(state=>state.cart.cart)
     const dispatch=useDispatch()
	return (
		<div className="w-full absolute h-screen bg-black/60 left-0 top-0  text-black ">
			{/* modal */}
			<div className="z-40 min-w-[400px] bg-white min-h-screen top-0 right-0 absolute py-6  px-8 ">
				
                    <div className="w-full flex justify-between items-center">
					<h1 className="text-2xl">Order list ({cart.length})</h1>
					<RxCross2 className="cursor-pointer" onClick={() => setIsCartOpen(false)} />
				</div>
                    {
                         (cart.length===0 )? <p>please add some food</p> :  <div className="my-6 flex flex-col gap-8">
                              {
                                   cart.map(item=><div key={item.id} className='flex items-start  gap-2'>
                                        <img src={item.image} alt={item.name} className='h-20 w-20 rounded-full object-cover'/>
                                        <div className="flex w-full justify-between items-center">
                                        <div className="flex flex-col ">
                                             <h1 className="font-medium pt-2">{item.name}</h1>
                                             
                                             <p className="text-xs text-gray-400">max quantity: {item.quantity_available}</p>
                                        </div>
                                        {/* price */}
                                        <div className="flex flex-col items-center gap-2"><p >${item.price * item.quantity}</p>
                                        <div className="flex items-center gap-2"><button className='bg-[#F7F8FA] p-2' onClick={()=>dispatch(decreaseQuantity(item))}><AiOutlineMinus/></button><span>{item.quantity}</span> <button className='bg-[#F7F8FA] p-2' onClick={()=>dispatch(increaseQuantity(item))}><AiOutlinePlus/></button></div></div>
                                        </div>
                                        
                                   </div>)
                              }
                             <Link href='/Checkout'> <button className="w-full bg-black text-white py-3 rounded">Checkout</button></Link>
                         </div>
                    }
			</div>
		</div>
	);
};

export default CartModal;
