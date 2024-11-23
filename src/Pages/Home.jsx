import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
   
      <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Shubhi Tech</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At  Shubhi Tech,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <NavLink href="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/Images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
  


  {/* second section */}
  <section className='section-analytics'>
    <div className="container grid grid-four-cols">
      <div className="div1">
        <h2>50+</h2>
        <p>registerd companies</p>
      </div>
      <div className="div1">
        <h2>1000+</h2>
        <p>happy client</p>
      </div>
      <div className="div1">
        <h2>500+</h2>
        <p>well know developer</p>
      </div>
      <div className="div1">
        <h2>50+</h2>
        <p>registerd companies</p>
      </div>
    </div>

  </section>



  {/* thord section */}

  <section className="section-hero">
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img
                src="/Images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
            <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
           
              <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Shubhi Tech can help your business thrive in
              the digital age.
            </p>
              <div className="btn btn-group">
                <NavLink href="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* hero images  */}
            
          </div>
        </section>
    </>
  )
}

export default Home