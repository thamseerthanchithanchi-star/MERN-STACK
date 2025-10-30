// import { AiOutlineUserAdd } from "react-icons/ai"; 
import './App.css'
 
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import UseState from "./pages/UseState";
import Register from "./pages/Register";
import Login from "./pages/Login";




const App = () => {
  return (
    <div>
      {/*importnavbar */}
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/UseState' element={<UseState/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      </Routes>
     
    </div>
  )
}

export default App