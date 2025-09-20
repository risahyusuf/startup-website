import React from 'react'
import "./Header.css"
import heroimage from "../assets/heroimage.png"

const Header = () => {

  return (
    <header>
<div className="hero-section">
  <div className="hero-text">
      <h1>W E L C O M E</h1>
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
    <a href="#Explore" className="explore-btn">Explore</a>
    </div>
     <div className="hero-image">
  <img src={heroimage} alt="heroimage" className="images"></img>
  </div>
    </div>
    </header>
  )
}

export default Header