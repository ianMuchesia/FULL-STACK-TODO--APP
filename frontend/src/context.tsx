import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
interface AppContextType {
  handleSideBar: () => void;
  sideBar: Boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  tasks?: Task[];
  changeDateFormat:(myDate: Date) => string;
  setCreateTask: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}
const AppProvider: React.FC<Props> = ({ children }) => {
  //sidebar toggle
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
    console.log(sideBar);
  };
  //fetch All tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const { data } = await axios.get<{ tasks: Task[] }>(
          "http://localhost:3000/api/v1/tasks"
        );

        if (isMounted) {
          setTasks(data.tasks);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  //to create a task
  const [createTask, setCreateTask] = useState("")

  //to change date format
  const changeDateFormat = (myDate: Date) => {
    const date = new Date(myDate);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  return (
    <AppContext.Provider value={{ handleSideBar, sideBar, setSideBar, tasks, changeDateFormat, setCreateTask }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
