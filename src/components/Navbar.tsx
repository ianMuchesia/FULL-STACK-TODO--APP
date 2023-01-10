import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-2">
        <AiOutlineMenu size={50} color={`#ada4a3`} />

        <h2 className="text-[#bebaba] text-2xl">CHORES</h2>
      </nav>
    </header>
  );
};

export default Navbar;
