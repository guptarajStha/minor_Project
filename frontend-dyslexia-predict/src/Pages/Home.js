import React from "react";
import { Link } from "react-router-dom";
import test from "../Images/test.png";
const Home = () => {
  return (
    <div className=" h-full w-full font-bold items-center flex  flex-col justify-center text-center ">
      <div className="w-full h-[50px] space-y-4">
        <div className="text-[30px] lg:text-[40px] xl:text-[50px] font-bold">
          Dyslexia cnac maek raeding sow, hdrad, nad fsnautrtig.
        </div>
        <div className="text-[25px] lg:text-[35px] xl:text-[45px] text-[#ACACAC]">
          Dyslexia can make reading slow, hard, and fustrating.
        </div>
      </div>
      <Link to={'/test/'} className=' hover:cursor-pointer h-auto absolute bottom-[100px] md:bottom-8 flex flex-col justify-center items-center'>
        <img src={test}  className='w-[13vh] md:w-[50%] mb-4' />
        <div>Take A Test Now</div>
      </Link>
    </div>

    // <div className="h-[60vh] rounded-[2rem] w-[70vw] bg-green-200 p-10 flex justify-center items-center">
    //   <div className="flex-col">
    //     <div>Description</div>
    //     <div className="bg-blue-500 w-[200px] h-[50px] flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center">
    //       <Link className="w-full h-full flex justify-center items-center" to={"/test/"}>Take Test</Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
