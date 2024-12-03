import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import { LuUserSquare2 , FaHome, LuContact , MdOutlineMiscellaneousServices} from "react-icons/lu";

function AdminLayouts() {
  return (
     <>
           <header>
             <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/user">User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contact">Contact</NavLink>
                        </li>
                       
                        <li>
                            <NavLink to="/admin"> Home</NavLink>
                        </li>
                    </ul>
                </nav>
             </div>
             </header>         
            <Outlet/>
       
     </>
   
  )
}

export default AdminLayouts