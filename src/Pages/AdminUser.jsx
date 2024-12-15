import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/Auth'
import '../table.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function AdminUser() {
   const {authorizationToken} = useAuth();
   const [userin, setusers] = useState([])
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

   const deleteUser = async(id) =>{
       
    try {
      // admin/users
          const response = await fetch(`http://localhost:5000/api/v1/admin/users/delete/${id}`,{
            method:"DELETE",
            headers:{
              Authorization:authorizationToken
            }
          })
          const data = await response.json();
           console.log(`user after delete : ${data}`);
           if(response.ok){
            getAlluserdata();
            toast.info("user deleted successful");
           }
          
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
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                        {userin.map((curUser,index)=>{
                            return <tr key={index}>
                                     <td>{curUser.fullname}</td>
                                     <td>{curUser.email}</td>
                                     <td>{curUser.phone}</td>
                                     <td><Link to={`/admin/user/${curUser._id}/edit`}>Edit</Link></td>
                                     <td>
                                       <button onClick={() => deleteUser(curUser._id)}>Delete</button>
                                     </td>
                            </tr>
                        })}
                    </tbody>
                  </table>
        </div>
      </section>
       
      

      </>
  )
}

export default AdminUser