import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Navbar from "./components/Navbar"
import Edit from "./pages/Edit"


function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Category" element={<Category/>}/>
      <Route path="Edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
