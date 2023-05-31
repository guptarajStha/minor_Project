import React,{useContext} from "react";
import { mContext } from "../MainContext";
const Reports = () => {
    const {result} = useContext(mContext);
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col">
      <div className="w-[80%] lg:w-[70%] h-[70%] bg-opacity-80 bg-[#FFFFFF] rounded-lg  flex  items-center flex-col space-y-5  justify-evenly">
        <div className="bg-[#BB2D19] mt-[-2%] lg:mt-[-2%] w-[40%] lg:w-[30%] h-[4rem] rounded-lg flex justify-center items-center text-[15px] md:text-[20px] lg:text-[30px]">
          Result
        </div>
        <div className="w-full h-full flex flex-col space-y-4 justify-center items-center">

        <div className="text-[25px] text-[#1E4363]">DYSLEXIC CHANCE</div>
        <div className="h-[150px] w-[150px] bg-[#1E4363] rounded-[100%] flex justify-center items-center text-[35px]">
          {(result*100).toFixed(2)}%
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
