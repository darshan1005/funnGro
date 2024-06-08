import React from "react";
import "./Panel.css";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CategoryIcon from '@mui/icons-material/Category';

const Panel = () => {
  return (
    <>
      <section className="panel">
        <div className="main-panel">
          {/* one */}
          <div className="panel-content">
            <div className="icon icon-one">
              <Diversity3Icon />
            </div>
            <div className="panel-content-text">
              <h3>3,500+</h3>
              <h6>Companies</h6>
            </div>
          </div>
          {/* two */}
          <div className="panel-content">
            <div className="icon icon-two">
              <CategoryIcon />
            </div>
            <div className="panel-content-text">
              <h3>12</h3>
              <h6>Categories</h6>
            </div>
          </div>
          {/* three */}
          <div className="panel-content">
            <div className="icon icon-three">
              <EngineeringIcon />
            </div>
            <div className="panel-content-text">
              <h3>20,00,000+</h3>
              <h6>Teenlancers</h6>
            </div>
          </div>
          {/* four */}
          <div className="panel-content">
            <div className="icon icon-four">
              <AccountTreeIcon />
            </div>
            <div className="panel-content-text">
              <h3>10,000+</h3>
              <h6>Live Projects</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Panel;
