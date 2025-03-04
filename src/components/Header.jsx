import { CiCircleRemove } from "react-icons/ci"; 
import { GiShoppingBag } from "react-icons/gi"; 
import React, { useState } from 'react';
import NikeLogo from "../assets/Nike-Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import Sidebar from "./SideBar";

function Header() {
  const [isMobileShown,setIsMobileIsShown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar
  const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact",
  ];
  return (
    <>
    <nav className="flex flex-wrap z-10 relative items-center justify-between ">
      {/* Logo */}
      <a href="#">
        <img src={NikeLogo} alt="Nike Logo" className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button onClick={()=> setIsMobileIsShown(!isMobileShown)} className=" lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
       {!isMobileShown? <RxHamburgerMenu size={25} />:<CiCircleRemove size={25} />} 
      </button>

       {/* Menu list */}
       {/* part2 */}
       <div className={`${isMobileShown?"": "hidden"} w-full lg:w-auto lg:block`}>
        <ul className=" lg:space-x-9 flex flex-col lg:flex-row lg:bg-transparent  rounded-lg border border-gray-100 lg:border-none bg-gray-50 p-4 text-lg">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` lg:hover:text-blue-500 lg:hover:bg-transparent cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent  lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${(i==3 || i==4) && "lg:text-white"} && `}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="fixed bottom-4 left-4 lg:static ">
      <div className=" flex-center lg:mr-8 cursor-pointer rounded-full shadow-md h-12 w-12 bg-white">
      <TbShoppingBag />

      </div>
     

      </div>
    </nav>
    {/* Sidebar Component */}
    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

    </>


    
    
  );
}
export default Header;