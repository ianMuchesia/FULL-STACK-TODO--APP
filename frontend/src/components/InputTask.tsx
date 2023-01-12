import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const InputTask = () => {



  return (
    <form className="relative mx-10 mt-4 grid place-items-center">
      <input 
      type="text"
      placeholder="Add Item"
      className="w-full placeholder-gray-200 bg-[#3c3c7a] border-none h-14 rounded-2xl text-white  text-lg pl-4" />
      <button className="absolute top-2 right-0  text-white rounded-full  bg-[#2563eb] border-none animate-slide-fwd">
        <AiOutlinePlusCircle  size={40} color={``}/>
      </button>
    </form>
  );
};

export default InputTask;
