import React from "react";
import "./WorkTeen.css";

const WorkTeen = () => {
  const cardContents = [
    {
      id: 1,
      title: "Gain Valuable Experience",
      content:
        "Working in your teens gives you hands-on experience that you can't get in the classroom. You'll develop important skills like communication, time management, and teamwork, which are essential for any career.",
    },
    {
      id: 2,
      title: "Build a Strong Work Ethic",
      content:
        "Starting a job early helps you build a strong work ethic. You'll learn the value of hard work and dedication, which will serve you well in any future endeavor.",
     },
    {
      id: 3,
      title: "Financial Independence",
      content:
        "Earning your own money gives you financial independence and teaches you how to manage your finances. This can lead to better financial decisions in the future.",
    },
    {
      id: 4,
      title: "Networking Opportunities",
      content:
        "Working while you're young allows you to meet people in various industries, building a network that could benefit you later in life. Networking is a key component of career growth and success.",
    },
    {
      id: 5,
      title: "Discover Your Interests",
      content:
        "Working different jobs can help you discover what you enjoy and what you don't. This can guide your career choices and educational path, ensuring you find a fulfilling and rewarding career.",
    },
    {
      id: 6,
      title: "Boost Your Resume",
      content:
        "Having work experience on your resume before you even graduate can set you apart from your peers. Employers value candidates who have shown initiative and responsibility at a young age.",
    },
  ];

  return (
    <section className="work-teen">
      <div className="work-teen-main">
        <div className="work-teen-content">
          <h2>Why Work in Your Teens?</h2>
          <p>
            Starting work in your teens can set the stage for a successful
            future. Just look at Warren Buffet, Bill Gates, and Steve Jobs – all
            of whom began their journeys in their teenage years. Here's why you
            should consider following in their footsteps.
          </p>
        </div>
        <div className="work-teen-cards">
          {cardContents.map((item) => (
            <div className="card" key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTeen;
