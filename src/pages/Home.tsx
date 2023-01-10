import React from 'react'
import InputTask from '../components/InputTask'
import Tasks from '../components/Tasks'
import CompletedTasks from '../components/CompletedTasks'

const Home = () => {
  return (
    <>
    <InputTask/>
    <Tasks/>
    <hr/>
    <CompletedTasks/>
    </>
  )
}

export default Home