import React from "react";
import BgImage from "../../assets/Ellipse 1 (1).png";
import BlurImg from "../../assets/Ellipse 2.png";
import SearchIcon from "../../assets/Vector.png";
import Overview from "../../assets/overview.svg";
import Opportunities from "../../assets/opportunities.svg";
import MyCompetitors from "../../assets/my_competitors.svg";
import Briefs from "../../assets/briefs.svg";
import Saved from "../../assets/saved.svg";
import Settings from "../../assets/settings.svg";
import Help from "../../assets/help.svg";
import Logout from "../../assets/logout.svg";

import "./left-panel.scss";
const LeftPanel = () => {
  return (
    <div className="left-panel-container">
      <div className="top-logo-text-container">
        <div className="images-container">
          <img className="bg-img" src={BgImage} alt="" />
          <img className="blr-img" src={BlurImg} alt="" />
          <img className="search-icon" src={SearchIcon} alt="" />
        </div>
        <span>Concured</span>
      </div>
      <div className="middle-options">
        <div className="navigation">
          <img src={Overview} alt="" />
          <span>Overview</span>
        </div>
        <div className="navigation">
          <img src={Opportunities} alt="" />
          <span> Opportunities</span>
        </div>
        <div className="navigation">
          <img src={MyCompetitors} alt="" />
          <span>My competitors</span>
        </div>
        <div className="navigation">
          <img src={Briefs} alt="" />
          <span>Briefs</span>
        </div>
        <div className="navigation">
          <img src={Saved} alt="" />
          <span>Saved</span>
        </div>
      </div>
      <div className="down-options">
        <div className="navigation">
          <img src={Settings} alt="" />
          <span>Settings</span>
        </div>
        <div className="navigation">
          <img src={Help} alt="" />
          <span>Help</span>
        </div>
        <div className="navigation">
          <img src={Logout} alt="" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
