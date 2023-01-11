import React from 'react'
import InputTask from '../components/InputTask'
import Tasks from '../components/Tasks'
import CompletedTasks from '../components/CompletedTasks'
import Sidebar from '../components/Sidebar'

const Home = () => {
  
  return (
    <>
    <Sidebar/>
    <InputTask/>
    <Tasks/>
    <hr/>
    <CompletedTasks/>
    </>
  )
}

export default Home