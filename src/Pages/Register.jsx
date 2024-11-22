import React, { useState } from 'react'

const  Register =()=> {
  const [user , setuser] = useState({
    fullname: "",
    email: "",
    phone: "",
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