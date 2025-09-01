import React from 'react'
import "./PortfolioBody.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.svg"
import portfolio4 from "../../assets/portfolio4.png"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio6.png"
import portfolio7 from "../../assets/portfolio7.png"
import portfolio8 from "../../assets/portfolio8.png"

const PortfolioBody = () => {
  return (
    <section className="portfolio">
    <div className="portfolioimages">
      <img src={portfolio1} alt="landing page design"></img>
      <img src={portfolio2} alt="web design"></img>
      <img src={portfolio3} alt="rocket your business"></img>
      <img src={portfolio4} alt="shopping"></img>
      <img src={portfolio5} alt="geometric shapes"></img>
      <img src={portfolio6} alt="trick or treat"></img>
      <img src={portfolio7} alt="halloween"></img>
      <img src={portfolio8} alt="virtual reality experience"></img>
    </div>
    </section>
  )
}

export default PortfolioBody