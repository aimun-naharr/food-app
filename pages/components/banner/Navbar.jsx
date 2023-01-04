import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsBagFill } from "react-icons/bs";
import CartModal from "../../global/CartModal";
const menu = [
     {
          name: "Home",
          path: "/",
     },
     {
          name: "About",
          path: "/about",
     },
     {
          name: "Menu",
          path: "/menu",
     },
     {
          name: "Blog",
          path: "/blog",
     },
     {
          name: "Contact",
          path: "/contact",
     },
];
const Navbar = () => {
	const [isCartOpen, setIsCartOpen]=useState(false)
     console.log(isCartOpen);
	return (
		<div className="h-[80px] text-white flex justify-between items-center">
			<img src="https://i.ibb.co/0Jc4jZ7/image-1.png" alt="logo" />
			<ul className="flex gap-4">
				{menu.map((item, i) => (
					<Link key={i} href={item.path}>
						<li>{item.name}</li>
					</Link>
				))}
			</ul>
			<div className="flex gap-4">
				<FiSearch  className="cursor-pointer"/>
				<BsBagFill  className="cursor-pointer" onClick={()=>setIsCartOpen(true)}/>
			</div>
               {
                    isCartOpen && <CartModal setIsCartOpen={setIsCartOpen}/>
               }
		</div>
	);
};

export default Navbar;
