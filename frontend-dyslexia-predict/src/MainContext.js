import React, { useState, createContext } from "react";
import App from "./App";

export const mContext = createContext();
const MainContext = () => {
  const [result,setResult] = useState('')
  const question = [
    "bedbug",
    "adverb",
    "newmew",
    "forbid",
    "liquor",
    "universe",
    "very",
    "could",
    "does",
    "from",
    "was",
    "school",
    "lion",
    "help",
    "hospital",
    "wednesday",
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer,setAnswer]=useState({
    Q01: "",
    Q02: "",
    Q03: "",
    Q04: "",
    Q05: "",
    Q06: "",
    Q07: "",
    Q08: "",
    Q09: "",
    Q10: "",
    Q11: "",
    Q12: "",
    Q13: "",
    Q14: "",
    Q15: "",
    Q16: "",
  })
  const [ans,setAns] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",

  })
  const [checkConfirm, setCheckConfirm] = useState(0);
  const handleConfirm=(value)=>{
      if(currentQuestion<6){
        const removeDot = value.replace(/\./g,"");
        const removeSpaces = removeDot.replace(/\s/g,"")
        if(question[currentQuestion]===removeSpaces.toLowerCase()){
          setAns(prevAns=>({
            ...prevAns,[`A${currentQuestion+1}`]:removeSpaces.toLowerCase()
          }))
          setAnswer(prevAnswer=>({
            ...prevAnswer,[`Q0${currentQuestion+1}`]:1
          }))
          setCheckConfirm(1)
        }
        else
        {
          setAns(prevAns=>({
            ...prevAns,[`A${currentQuestion+1}`]:removeSpaces.toLowerCase()
          }))
          setAnswer(prevAnswer=>({
            ...prevAnswer,[`Q0${currentQuestion+1}`]:0
          }))
          setCheckConfirm(1)
        }
      }
      else if(currentQuestion<11){
        if(currentQuestion<9){
          setAnswer(prevAnswer=>({...prevAnswer,[`Q0${currentQuestion+1}`]:value}))
        }
        else{
          setAnswer(prevAnswer=>({...prevAnswer,[`Q${currentQuestion+1}`]:value}))
        }
      }
      else{
        if(value===question[currentQuestion]){
          setAnswer((prevAnswer) => ({
            ...prevAnswer,
            [`Q${currentQuestion + 1}`]: 1,
          }));
        }
        else{
          setAnswer((prevAnswer) => ({
            ...prevAnswer,
            [`Q${currentQuestion + 1}`]:0,
          }));
        }
      }
  }
  return <div>
    <mContext.Provider value={{question,currentQuestion,setCurrentQuestion,answer,setAnswer,handleConfirm,checkConfirm,setCheckConfirm,ans,result,setResult}}>
        <App />
    </mContext.Provider>
  </div>;
};

export default MainContext;
