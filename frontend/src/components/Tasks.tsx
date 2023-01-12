import React from 'react'
import { FcCalendar} from "react-icons/fc";
import { useGlobalContext } from '../context';
const styles={
    checkbox:`w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`
}

const Tasks = () => {
  const {tasks, changeDateFormat}= useGlobalContext() || {}

  //incomplete task
  const todo = tasks!.filter((task: any)=>!task.complete)
  
  return (
    <div className='mt-7 mx-4 '>
        <h1 className='text-gray-200'>Todo</h1>
   {todo.map((task:any)=>{
    return(
      <div className='classMorphism' key={task._id}>
        <input
        type="checkbox"
        className={styles.checkbox}/>
        <p className='ml-2 w-[60%] text-lg text-gray-300 '>{task.name}</p>
        <span>
            <FcCalendar size={30}/>
        </span>
        <p className='text-sm text-white'>Due {changeDateFormat!(task.date)}</p>
    </div>
    )

   }) }
    </div>
  )
}

export default Tasks