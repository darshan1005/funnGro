import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./Earn.css";

const steps = [
  { title: "Register", description: "Register for Earning on Funngro app, select your area of interest" },
  { title: "Complete Profile", description: "Add details about your interests, experience and past work" },
  { title: "Finish first project", description: "Complete one project to show your skills, get paid" },
  { title: "Apply to companies", description: "Hundreds of companies waiting for you, start applying" },
  { title: "Start Earning", description: "Complete the project - earn money and get certificate" }
];

const Earn = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prevStep => (prevStep < steps.length - 1 ? prevStep + 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stepper-container">
      <h2>Earning with Funngro</h2>
      <p>Simple steps to earn income by working with real companies on project basis</p>
      <Stepper
        steps={steps}
        activeStep={currentStep}
        activeColor="#4caf50"
        completeColor="#4caf50"
        defaultColor="#e0e0e0"
        completeBarColor="#4caf50"
        defaultBarColor="#e0e0e0"
        circleFontColor="#ffffff"
        size={50}
        circleTop={10}
        titleFontSize={16}
      />
      <div className="step-content">
        <h3>{steps[currentStep].title}</h3>
        <p>{steps[currentStep].description}</p>
      </div>
    </div>
  );
};

export default Earn;
