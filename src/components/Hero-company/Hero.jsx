import React from "react";
import './Hero.css';

import SharksTank from "../../assets/hero-img.png";
import Playstore from '../../assets/playstore.png';
import Appstore from '../../assets/appstore.png';

const Hero = () => {
  return (
    <>
      <section className="company-hero">
        <div className="company-hero-left">
          <div className="company-hero-content">
            <h1 className="company-hero-title">Smart Talent for smart companies</h1>
            <h6 className="company-hero-sub-para-one">
              Cost effective, Timely delivery, Innovative ideas while you help the next generation
            </h6>
            <h6 className="company-hero-sub-para-two">
              Talented Teenagers for your company
            </h6>
            <button className="company-hire-btn">Hire Freelancer</button>
          </div>
          <div className="company-download-options">
            <h4>Popular</h4>
            <marquee className="marquee-tags" behavior="scroll" direction="right" scrollamount="5">
              <p>Social Media</p>
              <p>Sales</p>
              <p>Video Making</p>
              <p>Web Dev</p>
              <p>Graphic Designer</p>
            </marquee>
          </div>
        </div>
        <div className="company-hero-right">
          <img src={SharksTank} alt="funngro" />
        </div>
      </section>
    </>
  );
};

export default Hero;
