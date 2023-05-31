import React, { useContext,useEffect } from "react";
import { mContext } from "../MainContext";
import {FaMicrophone,FaMicrophoneSlash} from 'react-icons/fa'
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpellLetter = () => {
  const { question, currentQuestion, answer,setCurrentQuestion, handleConfirm,checkConfirm ,setCheckConfirm,setAnswer,ans} =
    useContext(mContext);
  const {
    listening,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    resetTranscript();
  }, [currentQuestion, resetTranscript, checkConfirm]);
  if (!browserSupportsSpeechRecognition) {
    return <span>Does not Support Speech Recognition</span>;
  }
 
  const handleReset=()=>{
    resetTranscript()
    setCheckConfirm(0)
    setAnswer(prevAnswer=>({
      ...prevAnswer,[`Q${currentQuestion+1}`]:''
    }))
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[#BB2D19] w-[40%] lg:w-[50%] h-[4rem] mt-[-20px] rounded-lg flex justify-center items-center text-[15px] md:text-[20px] lg:text-[30px]">
        PRONOUNCE WORD
      </div>
      <div className="flex mt-10 mb-4 h-[20rem] w-full p-4 space-x-10 ">
        <div className="w-[50%] text-black font-montserrat font-bold bg-[#F6D134] flex justify-center items-center text-[4rem] rounded-lg">
          {question[currentQuestion]}
        </div>
        <div className="w-[50%] bg-[#F6D134] rounded-lg p-4 flex-col flex justify-center items-center">
          <div className="flex flex-col space-y-4 justify-center items-center">
            <button
              className="bg-[#1E4363] w-[50px] h-[53px] text-[30px] flex justify-center text-white rounded-lg hover:cursor-pointer hover:bg-[#22547e] items-center font-bold"
              onClick={SpeechRecognition.startListening}
            >
              {listening?<FaMicrophone />:<FaMicrophoneSlash />}
            </button>
            <div className="bg-white w-[200px]  h-[2.5rem] flex justify-center items-center text-[1.5rem]">
              {transcript}
              {checkConfirm ===1? ans[`A${currentQuestion + 1}`]:""} 
            </div>
        <div className="flex space-x-4">

            <button
              className="bg-[#1E4363]  w-[110px] h-[50px] flex justify-center text-white rounded-lg hover:cursor-pointer hover:bg-[#22547e]  items-center font-bold text-[1.2rem]"
              onClick={() => handleConfirm(transcript)}
            >
              Confirm
            </button>

            <button
              className="bg-[#1E4363]  w-[110px] h-[50px] flex justify-center text-white rounded-lg hover:cursor-pointer hover:bg-[#22547e]  items-center font-bold text-[1.2rem]"
              onClick={handleReset}
            >
              Reset
            </button>
        </div>
          </div>
          {/* <div>
            <div className="bg-white">{transcript}</div>
            <div>
              <button onClick={() => handleConfirm(transcript)}>Confirm</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpellLetter;
