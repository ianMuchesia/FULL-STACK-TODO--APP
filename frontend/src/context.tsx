import React, { useContext, useState, useEffect } from "react";

interface AppContextType {
  handleSideBar: () => void;
  sideBar:Boolean;
  setSideBar:React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<AppContextType|undefined >(undefined);

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
    //sidebar toggle
    const [sideBar , setSideBar] = useState(false)
    const handleSideBar=()=>{
        setSideBar(prevState=>!prevState)
        console.log(sideBar)
    }
  return (
    <AppContext.Provider value={{handleSideBar , sideBar, setSideBar}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext =()=>
{
    return useContext(AppContext)
}

export { AppContext, AppProvider }
