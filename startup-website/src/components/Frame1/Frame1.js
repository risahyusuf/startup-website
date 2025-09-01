import React from 'react'
import "./Frame1.css"
import image1 from "../../assets/image1.png"

const Frame1 = () => {
  return (
    <section className="frame-1">
  <img src={image1} alt="connect" className="images"></img>
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
   <a href="#Learn More" className="learnmore-btn">Learn More</a>
    </section>
  )
}

export default Frame1