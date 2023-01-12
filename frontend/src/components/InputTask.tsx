import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useGlobalContext } from "../context";
const InputTask = () => {
  const { setCreateTask,setShowModal, createTask }:any = useGlobalContext() || {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateTask(e.target.value);
  };
  const handleClick=()=>{
    if(createTask.length<1)return;
    setShowModal(true)
  }

  return (
    <div className="relative mx-10 mt-4 grid place-items-center">
      <input
        type="text"
        placeholder="Add Item"
        onChange={handleChange}
        className="w-full placeholder-gray-200 bg-[#3c3c7a] border-none h-14 rounded-2xl text-white  text-lg pl-4"
      />
      <button onClick={handleClick} className="absolute top-2 right-0  text-white rounded-full  bg-[#2563eb] border-none animate-slide-fwd">
        <AiOutlinePlusCircle size={40} color={``} />
      </button>
    </div>
  );
};

export default InputTask;
