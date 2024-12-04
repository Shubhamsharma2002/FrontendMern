import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHouseUser, FaPhoneVolume, FaUsers } from "react-icons/fa";
function AdminLayouts() {
  return (
     <>
           <header>
             <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/user"><FaUsers /> User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contact"><FaPhoneVolume /> Contact</NavLink>
                        </li>
                       
                        <li>
                            <NavLink to="/admin"><FaHouseUser /> Home</NavLink>
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