import React from "react";
import './Hero.css'

import SharksTank from "../../assets/hero-img.png";
import Playstore from '../../assets/playstore.png';
import Appstore from '../../assets/appstore.png';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">Start Earning Your First Income</h1>
            <h4 className="hero-subtitle-one">
              Real Companies, Real Projects, Real Earnings
            </h4>
            <p className="hero-sub-para-one">
              Experience real-world opportunities that offer genuine earnings.
              Dive into projects with established companies and witness the
              tangible results of your hard work.
            </p>
            <h4 className="hero-subtitle-two">
              Smart Opportunities for the Smart Generation
            </h4>
            <p className="hero-sub-para-two">
              Unlock a world of smart opportunities tailored for the ambitious
              and intelligent. Join us to turn your potential into real money,
              working on real projects that matter.
            </p>
          </div>
          <div className="download-options">
            <h4>Download</h4>
            <img className="stores" src={Playstore} alt="" />
            <img className="stores" src={Appstore} alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img src={SharksTank} alt="funngro" />
        </div>
      </section>
    </>
  );
};

export default Hero;
