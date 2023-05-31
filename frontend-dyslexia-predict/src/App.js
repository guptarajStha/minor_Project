import React from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Pages from "./Pages/Pages";
import Navbar from "./Components/Navbar";
import background from '../src/Images/header.png'

function App() {
  return (
    <Browser>
    <div className='font-[Montserrat] text-white'>
      <Navbar />
      <div className='w-full h-[100vh]  bg-cover text-white' style={{backgroundImage:`url(${background})`}}
      >
        <Pages />
      </div>
    
    </div>
   
      </Browser>
    // {/* <div className="App flex w-[100vw] h-[100vh] justify-center content-center items-center text-center bg-gray-300">
    //     <Pages />
    // </div> */}
  );
}

export default App;
