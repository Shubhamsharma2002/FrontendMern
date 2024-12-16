import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { FaHouseUser, FaPhoneVolume, FaUsers } from "react-icons/fa";
import { useAuth } from '../../../Store/Auth';
function AdminLayouts() {
     const {user , loading} = useAuth();
      if(loading){
        return<h1>Loading........</h1>
      }
      if(!user.isAdmin){
           return <Navigate to="/"/>
      }
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