import React, { useContext, useState } from "react";
import { mContext } from "../MainContext";
import { HiSpeakerWave } from "react-icons/hi2";
const ListeningTyping = ({ Pronounce }) => {
  const { question, currentQuestion, setCurrentQuestion, handleConfirm } =
    useContext(mContext);
  const [inputValue, setInputValue] = useState({
    val12: "",
    val13: "",
    val14: "",
    val15: "",
    val16: "",
  });
  const handleChange =(event)=>{
    setInputValue(prevVal=>({
      ...prevVal,[`val${currentQuestion+1}`]:event.target.value
    }))
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[#BB2D19] w-[60%] lg:w-[70%] h-[4rem] mt-[-20px] rounded-lg flex justify-center items-center text-[15px] md:text-[20px] lg:text-[30px]">LISTENING AND TYPING TEST</div>
      <div className="flex mt-10 mb-4 h-[20rem] w-full p-4 space-x-10 ">
        <div className="w-[50%] text-black font-montserrat font-bold bg-[#F6D134] flex justify-center items-center text-[4rem] rounded-lg hover:cursor-pointer" onClick={() => Pronounce(`${question[currentQuestion]}`)}>
          <HiSpeakerWave />
        </div>
        <div className="w-[50%] space-y-4 bg-[#F6D134] rounded-lg p-4 flex-col flex justify-center items-center text-black">
          <input
            className="bg-white w-[200px] p-4 text-center h-[2.5rem] flex justify-center items-center text-[1.5rem]"
            type="text"
            value={inputValue[`val${currentQuestion + 1}`]}
            name={`val${currentQuestion + 1} `}
            onChange={handleChange}
          />
        <div><button  className="bg-[#1E4363]  w-[110px] h-[50px] flex justify-center text-white rounded-lg hover:cursor-pointer hover:bg-[#22547e]  items-center font-bold text-[1.2rem]" onClick={()=>handleConfirm(inputValue[`val${currentQuestion+1}`])}>Confirm</button></div>
        </div>
    
      </div>
    </div>
  );
};

export default ListeningTyping;
