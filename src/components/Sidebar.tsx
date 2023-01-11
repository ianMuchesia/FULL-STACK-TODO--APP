import React from "react";
import { useGlobalContext } from "../context";

import { Link } from "react-router-dom";
import { FaRoad } from "react-icons/fa";
import { AiOutlineHome, AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { GiFinishLine } from "react-icons/gi";

import {MdToday } from "react-icons/md";
const Sidebar = () => {
  const { sideBar, setSideBar, handleSideBar } = useGlobalContext() || {};
  console.log(sideBar);
  const handleSelectCategory=()=>{
    setSideBar!(false)
  }
  return (
    <div>
      
      <div className={`bg-[#1616ab] absolute top-0  w-[90%] h-full ml-0  z-[50] overflow-y-scroll  transition-height duration-75 ease-out ${sideBar?" ":"hidden"}`}>
        <div 
          className="flex items-center justify-between px-2">
        <h1 className="text-white">Categories</h1>
      <span onClick={handleSideBar}><AiOutlineCloseCircle size={40}  color={`white`}/></span>
      </div>
      <div className=" grid grid-cols-2 place-items-center">
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28  ">
          <span><AiOutlineHome size={60} color={`white`}/></span>
          Home
        </div>
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><MdToday size={60} color={`white`}/></span>
          Today
        </div>
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><MdOutlinePersonalInjury size={60} color={`white`}/></span>
          Personal
        </div>
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><GrUserWorker size={60} color={`white`}/></span>
          Work
        </div>
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FaRoad size={60} color={`white`}/></span>
          RoadTrip
        </div>
        <div onClick={handleSelectCategory}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><GiFinishLine size={60} color={`white`}/></span>
          Completed
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
