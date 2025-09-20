import React from 'react'
import "./Services.css"
import basic from "../assets/basic.png"
import plus from "../assets/plus.png"
import pro from "../assets/pro.png"

const Services = () => {
  return (
    <section className="services">
      <div className="services-text">
      <h1>P L A N S</h1>
      <h2>Our Services</h2>
      <p>Lorem ipsum, dolor sit amet consectetur<br />
         <span className="linebreak">adipisicing elit.</span></p>
         </div>

         <div className="plans">
            <img src={basic} alt="basic plan" className="basic"></img>
            <img src={plus} alt="plus plan" className="plus"></img>
            <img src={pro} alt="pro plan" className="pro"></img>
         </div>
    </section>
  )
}

export default Services