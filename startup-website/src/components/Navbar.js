import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import start from "../assets/start.png"
import menu from "../assets/menu.png"
import close from "../assets/close.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  
  const closeMenu = () => {
    setIsOpen(false)
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
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
