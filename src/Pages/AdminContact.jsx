import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../Store/Auth';
import { toast } from 'react-toastify';

function AdminContact() {
     const {authorizationToken} = useAuth();
     const [msg, setmsg] = useState([])

     const getAllContacts = async() =>{
           
             try {
              const response = await fetch("http://localhost:5000/api/v1/admin/contacts",{
                method:"GET",
                headers:{
                  Authorization:authorizationToken
                }
              })
              const data = await response.json();
              console.log("msg is",data);
              
              setmsg(data)
             } catch (error) {
                 console.log(error);
             }
     }
     const deleteMsg = async(id)=>{
       try {
             // admin/msg
                 const response = await fetch(`http://localhost:5000/api/v1/admin/contacts/delete/${id}`,{
                   method:"DELETE",
                   headers:{
                     Authorization:authorizationToken
                   }
                 })
                 const data = await response.json();
                  console.log(`user after delete : ${data}`);
                  if(response.ok){
                   getAllContacts();
                   toast.info("message deleted successful");
                  }
                 
           } catch (error) {
               console.log(error);
               
           }
     }
     useEffect(() =>{
         getAllContacts();
        },[])
  return (
   
    <>
                    <section className='admin-users-section'>
                            <div className="container">
                              <h1>Admin conatct Data</h1>
                            </div>
                            <div className='conatiner admin-users'>
                                      <table>
                                        <thead>
                                          <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Msg</th>
                                            
                                            <th>Delete</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                            {msg.map((curMsg,index)=>{
                                                return <tr key={index}>
                                                         <td>{curMsg.fullname}</td>
                                                         <td>{curMsg.email}</td>
                                                         <td>{curMsg.message}</td>
                                                      <td>
                                                           <button onClick={() => deleteMsg(curMsg._id)}>Delete</button>
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

export default AdminContact