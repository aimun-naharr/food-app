import React from 'react';
import { AiTwotoneContacts,  } from 'react-icons/ai';
import { BiNotepad } from 'react-icons/bi';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { SiMicrodotblog } from 'react-icons/si';
import Link from 'next/link';

const MobileNav = () => {
     const menu = [
          {
               name: "Home",
               path: "/",
               icon: AiFillHome
          },
          {
               name: "About",
               path: "/about",
               icon: AiTwotoneContacts
          },
          {
               name: "Orders",
               path: "/Orders",
               icon: BiNotepad
          },
          {
               name: "Blog",
               path: "/blog",
               icon: SiMicrodotblog
          },
          {
               name: "Contact",
               path: "/contact",
               icon: RiContactsFill
          },
     ];
     return (
          <ul className="md:hidden fixed bg-[#0C1712] w-full bottom-0 left-0 flex justify-between h-[80px] items-center px-4 rounded-tl-full rounded-rl">
             
          {menu.map((item, i) => (
               <Link key={i} href={item.path} className='flex flex-col items-center active:bg-gray-500 p-3 rounded-full'>
               <item.icon className='text-[#F3BA00]/50 '/>
                    <li className='text-gray-500'>{item.name}
                    </li>
               </Link>
          ))}
     </ul>
     );
};

export default MobileNav;