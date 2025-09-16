import React, { useState } from 'react'
import "./Navbar.css"
import start from "../assets/start.png"
import menu from "../assets/menu.png"
import close from "../assets/close.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="wrapper">
        <img src={start} alt="logo" className="logo" />
        <img 
          src={isOpen ? close : menu}
          alt="menu"
          className="menu"
          onClick={toggleMenu}
        />

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
  )
}

export default Navbar