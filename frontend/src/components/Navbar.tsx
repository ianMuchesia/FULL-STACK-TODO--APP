import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { AppContextType } from '../@types/types';

const Navbar = () => {
 const {handleSideBar} = useGlobalContext() as AppContextType

  
  return (
    <header>
      <nav className="flex justify-between items-center px-2">
        <AiOutlineMenu size={50} color={`#ada4a3`} onClick={handleSideBar}/>

        <h2 className="text-[#bebaba] text-2xl">CHORES</h2>
      </nav>
    </header>
  );
};

export default Navbar;
