import React from 'react'
import "./Team.css"
import peg from "../../assets/peg.png"
import richard from "../../assets/richard.png"
import alexandra from "../../assets/alexandra.png"
import janet from "../../assets/janet.png"

const Team = () => {
  return (
    <section className="team">
      <div className="team-members">
       <img src={peg} alt="CEO"></img>
        <img src={richard} alt="CTO"></img>
         <img src={alexandra} alt="designer"></img>
          <img src={janet} alt="developer"></img>
          </div>
        <a href="#View Team" className="learnmore-btn">View Team</a> 
    </section>
  )
}

export default Team