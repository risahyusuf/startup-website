import React from 'react'
import "./Header.css"
import start from "../../assets/start.png"
import menu from "../../assets/menu.png"
import heroimage from "../../assets/heroimage.png"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
      <img src={start} alt="logo" className="logo"></img>
      <img src={menu} alt="menu" className="menu"></img>
      </div>
  
<div className="hero-section">
  <img src={heroimage} alt="heroimage" className="images"></img>
      <h1>W E L C O M E</h1>
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
    <a href="#Explore" className="explore-btn">Explore</a>
    </div>
    </header>
  )
}

export default Header