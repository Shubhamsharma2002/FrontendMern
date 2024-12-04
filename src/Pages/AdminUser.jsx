import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/Auth'

function AdminUser() {
   const {authorizationToken} = useAuth();
   const [users, setusers] = useState([])
   const getAlluserdata = async()=>{
      try {
        // admin/users
            const response = await fetch("http://localhost:5000/api/v1/admin/users",{
              method:"GET",
              headers:{
                Authorization:authorizationToken
              }
            })
            const data = await response.json();
            setusers(data)
            
      } catch (error) {
          console.log(error);
          
      }
   }

   useEffect(() =>{
    getAlluserdata();
   },[])
  return (
      <>
      <section className='admin-users-section'>
        <div className="container">
          <h1>Admin user Data</h1>
        </div>
        <div className='conatiner admin-users'>
        {/* {users.map((curUser,index)=>{
           return <>
                 <h2 key={index}>{curUser.fullname} {curUser.email}</h2>
                 
           </>
      })} */}
        </div>
      </section>
      
      
      </>
  )
}

export default AdminUser