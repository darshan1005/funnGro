import React from 'react';
import './Footer.css';
import GooglePlay from '../../assets/playstore.png';
import AppStore from '../../assets/appstore.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-mission">
          <p>Enable Smart Teenagers and Smart Companies to realize their full potentials. It’s fun to grow.</p>
        </div>
        <div className="footer-download">
          <p>Download App</p>
          <div className="download-links">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Get it on Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={AppStore} alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Copyrights reserved 2023 By FUNNGRO</p>
      </div>
    </footer>
  );
};

export default Footer;
