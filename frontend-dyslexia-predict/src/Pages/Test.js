import React, { Component, useContext } from "react";
import { mContext } from "../MainContext";
import SpellLetter from "../Components/01SpellLetter";
import ChoosePronouncation from "../Components/02ChoosePronouncation";
import ListeningTyping from "../Components/03ListeningTyping";
import { useNavigate } from 'react-router-dom';
const Test = () => {
  const navigate = useNavigate()
  const {
    question,
    currentQuestion,
    setCurrentQuestion,
    answer,
    setCheckConfirm,
    setResult,
  } = useContext(mContext);
  const Pronounce = (value) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(value);
    synth.speak(utterance);
  };
  const handleNext = () => {
    if (currentQuestion < 16) {
      if (currentQuestion < 9) {
        if (answer[`Q0${currentQuestion + 1}`] !== "") {
          setCurrentQuestion((prevValue) => prevValue + 1);
        } else {
          if (currentQuestion < 6) {
            Pronounce("Please, Spell each letter");
          } else if (currentQuestion < 11) {
            Pronounce("Please,Select Option");
          } else {
            Pronounce("Please, Input the word");
          }
        }
      } else {
        if (answer[`Q${currentQuestion + 1}`] !== "") {
          setCurrentQuestion((prevValue) => prevValue + 1);
        } else {
          if (currentQuestion < 6) {
            Pronounce("Please, Spell each letter");
          } else if (currentQuestion < 11) {
            Pronounce("Please,Select Option");
          } else {
            Pronounce("Please, Input the word");
          }
        }
      }
    }
    setCheckConfirm(0);
  };
  const handleSubmit = (event) => {
    if (answer[`Q${currentQuestion + 1}`] !== "") {
      event.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        Q01: answer["Q01"],
        Q02: answer["Q02"],
        Q03: answer["Q03"],
        Q04: answer["Q04"],
        Q05: answer["Q05"],
        Q06: answer["Q06"],
        Q07: answer["Q07"],
        Q08: answer["Q08"],
        Q09: answer["Q09"],
        Q10: answer["Q10"],
        Q11: answer["Q11"],
        Q12: answer["Q12"],
        Q13: answer["Q13"],
        Q14: answer["Q14"],
        Q15: answer["Q15"],
        Q16: answer["Q16"],
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/scoreJson", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          const dyslexicValue = result.dyslexic;
          setResult(dyslexicValue)
          console.log(dyslexicValue);
        })
        .catch((error) => console.log("error", error));
      alert("submitted");
      navigate('/result/')
      
    } else {
      Pronounce("Please, Input the word");
    }
  };
  return (
    // <div className="h-[60vh] rounded-[2rem] w-[70vw] bg-green-200 flex-col">
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-[40px]">TEST</div>
      <div className="w-[80%] lg:w-[70%] h-[70%] bg-opacity-80 bg-[#FFFFFF] rounded-lg mt-[15px]">
        {currentQuestion < question.length ? (
          <div>
            {currentQuestion < 6 ? (
              <SpellLetter />
            ) : (
              <div>
                {currentQuestion < 11 ? (
                  <ChoosePronouncation Pronounce={Pronounce} />
                ) : (
                  <ListeningTyping Pronounce={Pronounce} />
                )}
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        <div>
          {/* {currentQuestion} */}
          {/* <div>
          <button onClick={handleConfirm}>Confirm</button>
        </div> */}
          <div className="flex justify-center items-center">
            {currentQuestion >= 15 ? (
              <button
                className="bg-[#4587c1]  w-[200px] h-[62px] flex justify-center text-white rounded-lg hover:cursor-pointer text-[40px] hover:bg-[#22547e]  items-center font-bold "
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-[#1E4363]  w-[200px] h-[62px] flex justify-center text-white rounded-lg hover:cursor-pointer text-[40px] hover:bg-[#22547e]  items-center font-bold "
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
