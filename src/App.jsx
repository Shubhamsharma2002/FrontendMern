import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
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
import Logout from "./Pages/Logout";
import AdminLayouts from "./Components/Layouts/AdminLayouts";
import AdminUser from "./Pages/AdminUser";
import AdminContact from "./Pages/AdminContact";
import AdminEdit from "./Pages/AdminEdit";
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
        <Route path="/logout" element ={<Logout />}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/admin" element={<AdminLayouts/>}>
         <Route path="user" element={<AdminUser/>}/>
         <Route path="contact" element={<AdminContact/>}/>
         <Route path="user/:id/edit"  element ={<AdminEdit/>}/>
        </Route>
       </Routes>
      
       <Fotter/>
       </BrowserRouter>
        
        </>
       )
}

export default App
