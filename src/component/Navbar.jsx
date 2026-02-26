import React, { useState } from "react";
import logo from "../assets/JT.png"
import { Menu, MoveRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  const [navOpen,setNavOpen]=useState(false)
  const MenuToggler=()=>{
    setNavOpen((prev)=>!prev)
  }
  return (
    <div className="container flex items-start my-5 justify-between m-auto relative">
      <div className="flex gap-2 items-center "><span className="bg-gradient-to-r from-[#1b72e8] to-[#4831c7] JT-logo">JT</span><span>Solutions</span></div>
      {/* <img src={logo} alt="logo" width="128.51px" height="48px" className=" border border-red-600" /> */}
      <nav className="flex items-center absolute  left-1/2 -translate-x-1/2 hidden md:block ">
        <div className="menu">
          <ul className="flex flex-col items-center gap-[25px] md:flex-row">
              <li><Link>Our Story</Link></li>
              <li><Link>About Us</Link></li>
              <li><Link>Services</Link></li>
              <li><Link>Contact Us</Link></li>
              <button className="flex items-center btn-primary ">
                <span>Get Started</span><span className="bg-white rounded-full w-[26px] ml-[5px]"><MoveRight className="text-black w-[18px] m-auto" /></span>
              </button>
          </ul>
        </div>
       
      </nav>
      <button className="flex items-center btn-primary hidden">
          <span>Get Started</span><span className="bg-white rounded-full w-[26px] ml-[5px]"><MoveRight className="text-black w-[18px] m-auto" /></span>
        </button>
        {navOpen?<X className=" cursor-pointer" onClick={()=>MenuToggler()}/>:<Menu className="cursor-pointer" onClick={()=>MenuToggler()}/>}
    </div>
  );
};

export default Navbar;