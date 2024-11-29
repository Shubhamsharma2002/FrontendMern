import React, { useState } from 'react'
import { useAuth } from '../../Store/Auth';
import { useNavigate } from 'react-router-dom';
function Contact() {
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const [userData , setUserdata] = useState(true);
  const {user} = useAuth();

  if(userData && user){
    setContact({
      fullname:user.fullname,
      email: user.email,
      message:""
    })
    setUserdata(false);
  }
   // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("response data: ", response);
  
      if (response.ok) {
        const responseData = await response.json();
        alert("message sent successful");
        
      
        setContact({ fullname: " ", email: " ", message: " " });
        navigate("/contact")
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

//  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/Images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname">fullname</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoComplete="off"
                  value={contact.fullname}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default Contact