import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Nav from "./Components/Nav";
import Fotter from "./Components/Fotter";
import Error from "./Pages/Error";
function App() {
       return(
        <>
        
       <BrowserRouter>
       <Nav/>
       <Routes>
       
        <Route path="/" element ={<Home />}></Route>
        <Route path="/about" element ={<About />}></Route>
        <Route path="/contact" element ={<Contact />}></Route>
        <Route path="/service" element ={<Service />}></Route>
        <Route path="/register" element ={<Register />}></Route>
        <Route path="/login" element ={<Login />}></Route>
        <Route path="*" element={<Error/>}></Route>
       </Routes>
       <Fotter/>
       </BrowserRouter>
        
        </>
       )
}

export default App
