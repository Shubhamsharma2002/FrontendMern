import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Store/Auth'
import "./Css/Nav.css"
function  Nav () {
    const {islogedIn} = useAuth();
  return (
      <>
       <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to="/" className="navlink">Hlw gusy</NavLink>
            </div>
        

        <nav>
            <ul>
                <li>
                <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/about">About</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
                </li>
                {islogedIn ? (
                  <li>
                  <NavLink className="navlink" to="/logout">Logout</NavLink>
                  </li>
                ):(
                    <>
                 <li>
                <NavLink className="navlink" to="/register">Register</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/login">Login</NavLink>
                </li>
                    </>
                )}
               
                
               
            </ul>
        </nav>
        </div>
       </header>
      </>
  )
}

export default   Nav