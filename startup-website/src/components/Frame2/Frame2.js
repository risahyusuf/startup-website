import React from 'react'
import "./Frame2.css"
import image2 from "../../assets/image 2.png"

const Frame2 = () => {
  return (
    <section className="frame-2">
  <div className="frame2-text">
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
   <a href="#Learn More" className="learnmore-btn">Learn More</a>
  </div>
  <div className="image2">
   <img src={image2} alt="connect" className="images"></img>

  </div>
    </section>
  )
}

export default Frame2