import React from 'react'
import "./Footer.css"
import footersocials from "../assets/footer socials.png"
import copyright from "../assets/copyright.png"

const Footer = () => {
  return (
     <section className="Footer">
        <img src={footersocials} className="media" alt="social media"></img>
        <img src={copyright} className="copyright" alt="copyright"></img>
    </section>
  )
}

export default Footer