import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/Auth';

const  Register =()=> {
  const [user , setuser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  })

  // handlle the user input
  const navigate = useNavigate();
  const {storetokenInLs} = useAuth();
  const handleInput = (e) =>{
    // console.log(e)

    let name = e.target.name;
    // console.log(name);
    let value = e.target.value;
    // console.log(value);
    
    setuser({
      ...user,
      [name] : value,
    });
  }

  // handle the form submit
  // const handleSubmit = async(e) =>{
  //    e.preventDefault();
  //    console.log(user)


  //    try {
      
  //     const response = await fetch(`http://localhost:5000/api/v1/user/registaer` ,{
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });
  //     console.log("response data : ", response);

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       alert("registration successful");
  //       setuser({ fullname: "", email: "", phone: "", password: "" });
  //       console.log(responseData);
  //     } else {
  //       console.log("error inside response ", "error");
  //     }
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  
    // Optional: Add validation for user data here
  
    try {
      const response = await fetch(`http://localhost:5000/api/v1/user/registaer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data: ", response);
  
      if (response.ok) {
        const responseData = await response.json();
        alert("Registration successful");
        //  storing token in localstroage
        storetokenInLs(responseData.token)
        // localStorage.setItem("token", responseData.token);
        setuser({ fullname: "", email: "", phone: "", password: "" });
        navigate("/login")
        console.log(responseData);
      } else {
        // Log the response status and text for debugging
        const errorData = await response.json();
        console.log("Error inside response:", response.status, errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* registration image */}
              <div className="registration-image">
                <img src="/Images/Registration.png" alt="Registration images" width= "400" height="500" />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" name="fullname"  id='fullname' placeholder='enter your fullname' required autoComplete='off' value={user.fullname} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  id='email' placeholder='enter your email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone"  id='phone' placeholder='enter your phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  id='password' placeholder='enter your password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                  </div>

                  <br />
                  <button type='submit' className='btn btn-submit'>Register</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Register