import React from "react";
import Fun from '../../assets/f-logo.png'

import './info.css'

const Info = () => {
 return (
  <>
    <section className="info">
      <img className="info-img" src={Fun} alt="" />
      <div className="info-content">
        <h2>The name says it all.
        <mark>"Its Fun to Grow”</mark></h2>
        <p className="sub-content">Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but most importantly by Loving parents. We are thankful to those mentors who helped us in early stage of our lives and Funngro is our effort to give back to the society. Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.</p>
        <p>
        <b>Mission</b> - Enable Smart Teenagers and Smart Companies to realize their full potentials</p>
        <h6>Payal Jain, CEO</h6>
        <h6>Anik Jain, CGO</h6>
        <h4>BE INDEPENDENT BEFORE 18!</h4>
      </div>
    </section>
  </>
 )
}

export default Info;