import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Category" element={<Category/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
