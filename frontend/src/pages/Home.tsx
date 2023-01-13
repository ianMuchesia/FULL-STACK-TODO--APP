import React from 'react'
import InputTask from '../components/InputTask'
import Tasks from '../components/Tasks'
import CompletedTasks from '../components/CompletedTasks'
import Sidebar from '../components/Sidebar'
import { useGlobalContext } from '../context'
import Modal from '../components/Modal'
import { AppContextType } from '../@types/types'

const Home = () => {
  const {showModal} = useGlobalContext() as AppContextType

  console.log(showModal)
  return (
    <>
    {/* <Sidebar/> */}
    <InputTask/>
    {showModal && <Modal/>}
    <Tasks/>
    <hr/>
    <CompletedTasks/>
    </>
  )
}

export default Home