import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsBagFill } from "react-icons/bs";
import CartModal from "../../global/CartModal";
import NavMenu from "../../global/NavMenu";
import { useSelector } from "react-redux";

const Navbar = () => {
	const [isCartOpen, setIsCartOpen]=useState(false)
     const cart=useSelector(state=>state.cart.cart)
	return (
		<div className="h-[80px] text-white flex justify-between items-center  w-full px-3 md:px-0">
			<img src="https://i.ibb.co/0Jc4jZ7/image-1.png" alt="logo" />
               {/* navMenu */}
			<NavMenu/>
			<div className="flex gap-4">
				<FiSearch  className="cursor-pointer"/>
                    <div className="cursor-pointer relative" onClick={()=>setIsCartOpen(true)}>
                    <BsBagFill   />
                    <span className="absolute h-4 w-4 bg-[#F3BA00] text-xs p-1 rounded-full top-[-10px] right-[-10px] flex items-center justify-center">{cart.length}</span>
                    </div>
				
			</div>
               {
                    isCartOpen && <CartModal setIsCartOpen={setIsCartOpen}/>
               }
		</div>
	);
};

export default Navbar;
