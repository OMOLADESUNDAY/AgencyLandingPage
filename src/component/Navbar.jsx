import React, { useState } from "react";
import logo from "../assets/JT.png"
import { Menu, MoveRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  const [navOpen,setNavOpen]=useState(false)
  const [showNav,setShowNav]=useState(false)
  const MenuToggler=()=>{
    setNavOpen((prev)=>!prev)
    setShowNav((prev)=>!prev)
    // if(navOpen){
    //   setShowNav('block')
    //   console.log('block')
    // }
    // else{
    //   setShowNav('hidden')
    //   console.log('hidden')
    // }
  }
  return (
    <div className="container flex items-start my-5 justify-between m-auto relative md:items-center">
      <div className="flex gap-2 items-center z-30 "><span className="bg-gradient-to-r from-[#1b72e8] to-[#4831c7] JT-logo text-white md:text-black">JT</span><span className="text-white md:text-black">Solutions</span></div>
      {/* <img src={logo} alt="logo" width="128.51px" height="48px" className=" border border-red-600" /> */}
      {/* <nav className={navOpen?"flex items-center bg-indigo-800 w-[100%] h-[100vh] absolute -top-5  pt-5 left-1/2 -translate-x-1/2 flex-col md:flex-row":"flex items-center absolute  left-1/2 -translate-x-1/2 flex-col hidden md:flex-row"}> */}
      <nav className={showNav?"flex items-center bg-indigo-800 w-[105%]  h-[100vh] absolute -top-5 -left-5  pt-5  flex-col block md:block":"flex items-center absolute  left-1/2 -translate-x-1/2 flex-col hidden md:block"}>
        <div className="menu">
          <ul className="flex flex-col items-center text-white gap-[25px] md:text-black md:flex-row">
              <li><Link>Our Story</Link></li>
              <li><Link>About Us</Link></li>
              <li><Link>Services</Link></li>
              <li><Link>Contact Us</Link></li>
              
          </ul>
        </div>
        <button className="flex items-center mt-3 btn-primary md:hidden">
                <span>Get Started</span><span className="bg-white rounded-full w-[26px] ml-[5px]"><MoveRight className="text-black w-[18px] m-auto" /></span>
        </button>
       
      </nav>
      <button className="flex items-center btn-primary hidden md:flex">
          <span>Get Started</span><span className="bg-white rounded-full w-[26px] ml-[5px]"><MoveRight className="text-black w-[18px] m-auto" /></span>
        </button>
        {navOpen?<X className=" cursor-pointer text-white md:hidden z-20" onClick={()=>MenuToggler()}/>:<Menu className="cursor-pointer md:hidden z-20" onClick={()=>MenuToggler()}/>}
    </div>
  );
};

export default Navbar;