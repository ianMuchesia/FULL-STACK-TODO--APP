import React from "react";
import { useGlobalContext } from "../context";

import { Link } from "react-router-dom";
import { FaRoad } from "react-icons/fa";
import { FcSportsMode, FcReading, FcPrivacy, FcShop , FcCollaboration} from "react-icons/fc";
import {  AiOutlineCloseCircle } from "react-icons/ai";

import { AppContextType } from '../@types/types';

import {MdToday } from "react-icons/md";
const Sidebar = () => {
  const { sideBar, setSideBar, handleSideBar, categorizeTasks } = useGlobalContext() as AppContextType;
  //console.log(sideBar);
  const handleSelectCategory=()=>{
    setSideBar(false)
  }
  return (
    
      
      <div className={`bg-[#525288] absolute top-0  w-[90%] h-full ml-0  z-[1] overflow-y-scroll    ${sideBar?"animate-slide-in duration-2000 ease-in-out ":"hidden"}`}>
        <div 
          className="flex items-center justify-between px-2 ">
        <h1 className="text-white">Categories</h1>
      <span onClick={handleSideBar}><AiOutlineCloseCircle size={40}  color={`white`}/></span>
      </div>
      <div className=" grid grid-cols-2 place-items-center">
        <Link to="/" onClick={()=>{categorizeTasks('Home')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28  ">
          <span><FcShop size={60} color={`white`}/></span>
          Home
        </Link>
        <Link to="/Category" onClick={()=>{categorizeTasks('Exercise')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FcSportsMode size={60} color={`white`}/></span>
          Exercise
        </Link>
        <Link to="/Category" onClick={()=>{categorizeTasks('Personal')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FcPrivacy size={60} color={`white`}/></span>
          Personal
        </Link>
        <Link to="/Category" onClick={()=>{categorizeTasks('Work')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FcCollaboration size={60} color={`white`}/></span>
          Work
        </Link>
        <Link to="/Category" onClick={()=>{categorizeTasks('RoadTrip')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FaRoad size={60} color={`white`}/></span>
          RoadTrip
        </Link>
        <Link to="/Category" onClick={()=>{categorizeTasks('Study')}}
          className="flex items-center gap-2 categoryMorphism flex-col justify-center px-5 text-white py-4 m-4 h-32 w-28 ">
          <span><FcReading size={60} color={`white`}/></span>
          Study
        </Link>
      </div>
      </div>
    
  );
};

export default Sidebar;
