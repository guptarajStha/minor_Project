import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {useLocation, Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [currentPath, setCurrentPath] = useState('');
  const location = useLocation()
  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, [location.pathname]);
  return (
    <div className="fixed md:flex md:items-center w-full bg-black h-[4rem] text-white z-20">
      <div 
        to={"/"}
        // offset={-100}
        // duration={1000}
        // smooth={true}
      className="text-[17px] lg:text-[25px] md:text-[20px] ml-10 md:ml-20 sm:flex sm:items-center sm:mt-3">
        <Link to={"/"} className='text-[#F6D134] flex justify-center items-center  cursor-pointer '>
          DYSLE<span className='text-[#BB2D19] lg:text-[50px] md:text-[35px] text-[30px]'>X</span>IA <span className='ml-2'>CHECK</span>
        </Link>
      </div>
      <div
        className="cursor-pointer  flex md:hidden absolute top-3 right-10 text-[34px]"
        // onClick={()=>{
        //     setOpen(!open)
        // }}
        onMouseEnter={() => {
          setOpen(true);
        }}
      >
        {!open ? (
          <GiHamburgerMenu />
        ) : (
          <AiOutlineClose className="text-white" />
        )}
      </div>

      <div
        className={`text-[18px] md:mr-20  flex ml-auto mr-5 md:space-x-10 absolute md:static bg-black/90 md:bg-transparent right-[-20px] top-16 w-1/2 md:w-auto p-4 md:p-0 space-y-4 md:space-y-0 flex-col md:flex-row items-center 
         rounded-b-lg ${
           open
             ? "transition-all ease-in-out duration-500"
             : "top-[-500px] transition-all ease-in-out duration-500"
         }`}
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        <Link
          // activeClass="border-b-2"
          // spy={true}
          to={"/"}
          className={`${location.pathname==='/'?'text-gray-400 border-b-2':""}cursor-pointer  hover:text-gray-400  hover:border-b-2`}
          // offset={-100}
          // duration={1000}
          // smooth={true}
        >
          Home
        </Link>
        <Link
          // activeClass="border-b-2"
          // spy={true}
          to={'/test/'}
          className= {`${location.pathname==='/test/'?'text-gray-400 border-b-2 ':''}  cursor-pointer hover:text-gray-400 hover:border-b-2`}
          // offset={-100}
          // duration={1000}
          // smooth={true}
        >
          Test
        </Link>
        <Link
          // activeClass="border-b-2"
          // spy={true}
          to={"/resource/"}
          className="cursor-pointer hover:text-gray-400 hover:border-b-2"
          // offset={-100}
          // duration={1000}
          // smooth={true}
        >
          Resources
        </Link>
        <Link
          // activeClass="border-b-2"
          // spy={true}
          to="about"
          className="cursor-pointer hover:text-gray-400 hover:border-b-2"
          // offset={-100}
          // duration={1000}
          // smooth={true}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
