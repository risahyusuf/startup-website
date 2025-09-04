import React from 'react'
import "./Socials.css"
import google from "../../assets/google.png"
import microsoft from "../../assets/microsoft.png"
import airbnb from "../../assets/airbnb.png"
import facebook from "../../assets/facebook.png"
import spotify from "../../assets/spotify.png"

const Socials = () => {
  return (
    <section className="socials">
      <div className="socials-text">
      <h1>P A R T N E R S</h1>
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum, dolor sit amet consectetur<br />
         <span className="linebreak">adipisicing elit.</span></p>
         </div>
         <div className="handles">
          <img src={google} alt="google" className="google"></img>
          <img src={microsoft} alt="microsoft" className="microsoft"></img>
          <img src={airbnb} alt="airbnb" className="airbnb"></img>
          <img src={facebook} alt="facebook" className="facebook"></img>
          <img src={spotify} alt="spotify" className="spotify"></img>
          </div>
          <a href="#Learn More" className="learnmore-btn">Learn More</a>
    </section>
  )
}

export default Socials