import React from 'react';

import { RxCross2 } from "react-icons/rx";
const CartModal = ({setIsCartOpen}) => {
     return (
          <div className='w-full absolute h-screen bg-black/60 left-0 top-0 text-black'>
               {/* modal */}
              <div className='min-w-[400px] bg-white h-full top-0 right-0 absolute py-6 px-3'>
<div className='w-full flex justify-between items-center'>
     <h1 className='text-2xl'>Order list </h1>
<RxCross2 className='cursor-pointer' onClick={()=>setIsCartOpen(false)}/>
</div>
              </div>
          </div>
     );
};

export default CartModal;