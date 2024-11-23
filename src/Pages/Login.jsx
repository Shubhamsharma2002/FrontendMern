import React, { useState } from 'react'

function Login() {
  const [user , setuser] = useState({
   
    email: "",
    password: "",
  })

  // handlle the user input

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
  const handleSubmit = (e) =>{
     e.preventDefault();
     console.log(user)
  }
  return (
   <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* registration image */}
              <div className="registration-image">
                <img src="/Images/login.png" alt=" login images" width= "400" height="500" />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  id='email' placeholder='enter your email' required autoComplete='off' value={user.email} onChange={handleInput}/>
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

export default Login