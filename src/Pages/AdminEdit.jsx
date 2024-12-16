import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Store/Auth';
import { toast } from 'react-toastify';

function AdminEdit() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  console.log("params single user: ", params);
  const {authorizationToken} = useAuth();
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
    
      }
    );
      const data = await response.json();
      console.log(`users single data:  ${data}`);
      setData(data);

     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);
  const handleInput = (e) => {
    let name = e.target.name;
    console.log("name",name)
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
          const response = await fetch(`http://localhost:5000/api/v1/admin/users/update/${params.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
            body:JSON.stringify(data),
          });

          if(response.ok){
            toast.success("updated data sucessfully")
          }else{
            toast.error("not updated")
          }
          navigate('/admin/user')
        } catch (error) {
          console.log(error);
        }
  }

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      {/* contact page main  */}
      <div className="container grid grid-two-cols">
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
                value={data.fullname}
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
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}

export default AdminEdit