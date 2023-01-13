import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AppContextType, Task } from "./@types/types";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}


const AppProvider: React.FC<Props> = ({ children }) => {
  //sidebar toggle
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
    console.log(sideBar);
  };
  //to trigger useEffect
  const [refresh, setRefresh] = useState(false)

    //fetch All tasks
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
      let isMounted = true;
      const fetchData = async () => {
        try {
          const { data } = await axios.get<{ tasks: [] }>(
            "http://localhost:3000/api/v1/tasks"
          );
  
          if (isMounted) {
            setTasks(data.tasks)
            console.log(data.tasks);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      return () => {
        isMounted = false;
      };
    }, [refresh]);

  //to create a task
  const [createTask, setCreateTask] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectCategory, setSelectCategory] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [alert, setAlert] = useState({
    error: "",
    status: false,
  });

  const reverseDate = (date: string) => {
    const dateArr = date.split("/");
    const formattedDate = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    return formattedDate;
  };

  const handleCreateTask = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (dueDate.length < 1) {
      setAlert({ error: "please enter your date", status: true });
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/tasks", {
        name: createTask,
        category: selectCategory,
        date: reverseDate(dueDate),
      });
     setRefresh(prevState=>!prevState)
    } catch (error) {
      console.log(error);
    }
    setCreateTask("");
    setDueDate("");
    setAlert({ error: "", status: false });
    setShowModal(false);
  };


  //deleteTask
  const handleDelete=async(id: string)=>{
    console.log("here")
    try {
      const filteredOut = tasks.filter(task=>task._id!==id)
      setTasks(filteredOut)
      await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`)
      
      setRefresh(prevState=>!prevState)
    } catch (error) {
      console.log(error)
    } 
  }

  //edit Task



  //checked and completed task
    //to change date format
    const changeDateFormat = (myDate: Date) => {
      const date = new Date(myDate);
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    };

  const [checked, setChecked] = useState(false);
  return (
    <AppContext.Provider
      value={{
        handleSideBar,
        sideBar,
        setSideBar,
        tasks,
        createTask,
        setCreateTask,
        showModal,
        setShowModal,
        selectCategory,
        setSelectCategory,
        dueDate,
        setDueDate,
        alert,
        setAlert,
        handleCreateTask,
        checked,
        setChecked,
        handleDelete,
        changeDateFormat,
        reverseDate,
        setTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
