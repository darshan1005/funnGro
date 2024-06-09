import React, { useState } from 'react';
import './ProjectCards.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const projectIdeas = [
  {
    title: "Build your brand",
    price: "₹2000",
    description: "Get your logos, brochure designed professionally - 5 Samples",
    buttonText: "Start Now ->"
  },
  {
    title: "Customize your website",
    price: "₹5000-₹15000",
    description: "Get a professional website designed to increase business growth.",
    buttonText: "Start Now ->"
  },
  {
    title: "Reach more customers",
    price: "₹5000",
    description: "Get Teenlancers to manage your social media handles",
    buttonText: "Start Now ->"
  },
  {
    title: "Share your message",
    price: "₹1500",
    description: "Voice Over in 15 different languages",
    buttonText: "Start Now ->"
  },
  {
    title: "Engage your audience",
    price: "₹2500",
    description: "Create an explainer video for your company to get new customers",
    buttonText: "Start Now ->"
  },
  {
    title: "Boost your growth",
    price: "₹5000-₹10000",
    description: "Get 100s of Teenlancers like your Insta/Youtube posts, Increase your reach through Toffee projects.",
    buttonText: "Start Now ->"
  },
  {
    title: "Showcase your story",
    price: "₹500-₹800",
    description: "Hire best content writers to write blogs, articles and more",
    buttonText: "Start Now ->"
  }
];

const ProjectCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projectIdeas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="project-cards">
      <div className="projectCards-content">
        <h1>Project ideas</h1>
        <p>Cost-effective, innovative and timely delivery of projects by the smartest talent on the planet (Teenlancers)</p>
      </div>
      <div className="cards-buttons">
        <button className="prev-btn" onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowBackIcon />
        </button>
        <div className="card-container">
          <div className="card-wrapper" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
            {projectIdeas.map((idea, index) => (
              <div key={index} className="card">
                <h3>{idea.title}</h3>
                <p className="price">{idea.price}</p>
                <p className="description">{idea.description}</p>
                <button className="start-btn">{idea.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
        <button className="next-btn" onClick={handleNext} disabled={currentIndex === projectIdeas.length - 1}>
          <ArrowForwardIcon />
        </button>
      </div>
    </section>
  );
};

export default ProjectCards;
