import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { AppContextType , Task } from '../@types/types'
import axios from 'axios'

const Edit = () => {
  const {tasks, changeDateFormat, reverseDate, setTasks}= useGlobalContext() as AppContextType
  const {TaskID} = useParams()

  const navigate = useNavigate()

  
  const taskToBeEdited = tasks.find(task=>task._id === TaskID)

console.log(taskToBeEdited)
const [editTask, setEditTask ] = useState({
  name:taskToBeEdited?.name,
  category:taskToBeEdited?.category,
  date:changeDateFormat(taskToBeEdited?.date as Date),
  _id:taskToBeEdited?._id,
  completed:taskToBeEdited?.completed
})

const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=>{
  const {value, name} = e.target;
  setEditTask((prevTasks)=>{
    return{
      ...prevTasks,
      [name]:value
    }
  })

}

const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try {
    await axios.patch(`http://localhost:3000/api/v1/tasks/${taskToBeEdited?._id}`,{
      name:editTask.name,
      date:editTask.date,
      category: reverseDate(editTask.category!),
    })
    const updatedTask = tasks.map(task=>{

      if(task._id === editTask._id){
       return {...task,...editTask} as Task
      }else{
        return task
      }
    })
    if(updatedTask !== undefined){
      setTasks(updatedTask)
    }
    
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}


  return (
    <>
   { taskToBeEdited && <form className="flex flex-col items-center" onSubmit={handleSubmit}>
    <h1>Edit Task</h1>

    <div className="form-control">
      <label>{taskToBeEdited?._id}</label>
      <p className="task-edit-id"></p>
    </div>
    <div className="grid place-items-center gap-2 font-bold">
      <label htmlFor="name" className='text-lg text-gray-200'>Task Name</label>
      <input type="text" name="name" className="rounded-lg h-8 border-none text-lg p-2 " value={editTask?.name} onChange={handleChange} />
    </div>
    <div className="grid place-items-center gap-2 font-bold mt-2">
    <label htmlFor="category" className='text-lg text-gray-200 font-bold'>Edit Category</label>
    <select
            onChange={handleChange}
            value={editTask.category}
            name="category"
            className=" p-2 rounded-lg h-10 "
          >
            <option value="">--</option>
            <option value="Study">Study</option>
            <option value="Home">Home</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="RoadTrip">Road Trip</option>
            <option value="Exercise">Exercise</option>
            <option value="Others">Others</option>
          </select>
          </div>
    <div className="grid place-items-center gap-2 font-bold mt-3">
      <label htmlFor="date" className='text-lg text-gray-200'> Change Due Date</label>
      <input type="text" name="date" className="rounded-lg h-8 border-none text-lg p-2 " value={editTask.date} onChange={handleChange} />
    </div>
    <button type="submit" className="rounded-lg text-xl p-2 w-20 mt-6 bg-purple-800 text-white font-bold hover:text-xl hover:animate-bounce">edit</button>
    <div className="form-alert"></div>
  </form>}
  </>
  )
}

export default Edit