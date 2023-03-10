import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Navbar from "./components/Navbar"
import Edit from "./pages/Edit"
import Sidebar from "./components/Sidebar"


function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Category" element={<Category/>}/>
      <Route path="/:TaskID" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
