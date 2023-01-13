import React from 'react'
import { FiEdit} from "react-icons/fi";
import { FcCalendar} from "react-icons/fc";
import { MdDeleteOutline} from "react-icons/md";
import { useGlobalContext } from '../context';
import { AppContextType, Task } from '../@types/types';
import { Link } from 'react-router-dom';
const styles={
    checkbox:`w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`
}

const Tasks = () => {
  const {tasks,checked, setChecked, handleDelete, changeDateFormat}= useGlobalContext() as AppContextType

  //incomplete task
  const todo = tasks!.filter((task: any)=>!task.complete)
  
  const handleChecked=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setChecked((prevChecked: boolean)=>!prevChecked)
  }
  
  return (
    <div className='mt-7 mx-4 '>
        <h1 className='text-gray-200'>Todo</h1>
   {todo.map((task:any)=>{
    return(
      <div className='classMorphism' key={task._id}>
        <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleChecked}/>
        <p className={`ml-2 w-[60%] text-lg text-gray-300 ${checked?"line-through":""}`}>{task.name}</p>
        <Link to={`/${task._id}`}>
        <span className='mx-2 coursor-pointer'>
            <FiEdit size={30} color={"orange"}/>
        </span>
        </Link>
        <span className='mx-2 coursor-pointer' onClick={()=>handleDelete(task._id)}>
            <MdDeleteOutline size={30} color={"orange"}/>
        </span>
        <span>
            <FcCalendar size={30}/>
        </span>
        <p className='text-sm text-white'>Due {changeDateFormat(task.date)}</p>
    </div>
    )

   }) }
    </div>
  )
}

export default Tasks