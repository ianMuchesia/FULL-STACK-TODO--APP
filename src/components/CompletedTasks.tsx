import React from 'react'
import { FcCalendar} from "react-icons/fc";
const styles={
    checkbox:`w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`
}
const CompletedTasks = () => {
  return (
    <div className='mt-7 mx-4 '>
    <h2 className='text-gray-300'>COMPLETED</h2>
    <div className='completeMorphism'>
        <input
        type="checkbox"
        className={styles.checkbox}/>
        <p className='ml-2 w-[60%] text-lg line-through text-gray-300 '>Do something...</p>
        <span>
            <FcCalendar size={30}/>
        </span>
        <p className='text-sm text-white'>Due Today</p>
    </div>
    </div>
  )
}

export default CompletedTasks