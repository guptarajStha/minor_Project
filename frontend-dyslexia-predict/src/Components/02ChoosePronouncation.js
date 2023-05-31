import React, { useContext, useState,useEffect } from "react";
import { mContext } from "../MainContext";
import { HiSpeakerWave } from "react-icons/hi2";
const ChoosePronouncation = ({ Pronounce }) => {
  const { question, currentQuestion, setCurrentQuestion, handleConfirm } =
    useContext(mContext);
  const value = [
    { very: ["very", "every"] },
    { could: ["could", "cloud"] },
    { does: ["dose", "does"] },
    { from: ["form", "from"] },
    { was: ["was", "saw"] },
  ];
  const [optionCheck, setOptionCheck] = useState('');
  const [storeAns, setStoreAns] = useState("");
  useEffect(() => {
  setStoreAns('')
  setOptionCheck('')
  }, [currentQuestion]);

  const handlePronounce = (data) => {
    const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
    Pronounce(value1);
    if (value1 === question[currentQuestion]) {
      setStoreAns(1);
    } else {
      setStoreAns(0);
    }
    setOptionCheck(data)
  };

  // const handlePronounce = (data) => {
  //   const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
  //   Pronounce(value1);
  // };
  // const handleOption = (data) => {
  //   const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
    // if (value1 === question[currentQuestion]) {
    //   setStoreAns(1);
    // } else {
    //   setStoreAns(0);
    // }
    // setOptionCheck(data)
  // };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[#BB2D19] w-[40%] lg:w-[50%] h-[4rem] mt-[-20px] rounded-lg flex justify-center items-center text-[15px] md:text-[20px] lg:text-[30px]">
        Choose Pronouncation
      </div>
      <div className="flex mt-10 mb-4 h-[20rem] w-full p-4 space-x-10 ">
        <div className="w-[50%] text-black font-montserrat font-bold bg-[#F6D134] flex justify-center items-center text-[4rem] rounded-lg">
          {question[currentQuestion]}
        </div>
        <div className="w-[50%] bg-[#F6D134] rounded-lg p-4 space-y-5 flex-col flex justify-center items-center">
          <div className="flex space-x-10">
            <div
              className={`${optionCheck===0?"bg-slate-500 text-white":"bg-white text-black hover:bg-gray-200"} h-[3rem] flex justify-center items-center w-[98px] hover:cursor-pointer `}
              // onClick={() => handleOption(0)}
              // onMouseEnter={() => handlePronounce(0)}
              onClick={()=>handlePronounce(0)}
            >
              LISTEN
              <HiSpeakerWave />
            </div>
            <div
              className={`${optionCheck===1?"bg-slate-700 text-white":"bg-white text-black hover:bg-gray-200"} h-[3rem] flex justify-center items-center w-[98px] hover:cursor-pointer `}
              // onClick={() => handleOption(1)}
              // onMouseEnter={() => handlePronounce(1)}
              onClick={()=>handlePronounce(1)}
            >
              LISTEN
              <HiSpeakerWave />
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#1E4363]  w-[110px] h-[50px] flex justify-center text-white rounded-lg hover:cursor-pointer hover:bg-[#22547e]  items-center font-bold text-[1.2rem]" onClick={() => handleConfirm(storeAns)}>Confirm</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChoosePronouncation;
