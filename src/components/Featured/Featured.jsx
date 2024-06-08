import React from 'react';
import './Featured.css';

import Business from '../../assets/businessweek.png';
import Daily from '../../assets/daily.png';
import Entrack from '../../assets/entrack.png';
import Fm from '../../assets/fm.png';
import Ibs from '../../assets/ibs.png';
import Mda from '../../assets/mda.png';
import Toi from '../../assets/toi.png';

const Featured = () => {
  const images = [
    { src: Business, alt: "Business Week" },
    { src: Daily, alt: "Daily" },
    { src: Entrack, alt: "Entrack" },
    { src: Fm, alt: "FM" },
    { src: Ibs, alt: "IBS" },
    { src: Mda, alt: "MBA" },
    { src: Toi, alt: "TOI" }
  ];

  return (
    <section className="featured">
      <h1>Featured In</h1>
      <p>We are proud to have been featured in these prestigious publications</p>
      <div className="featured-imgs">
        {images.map((item, index) => (
          <div key={index} className="image-container">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
