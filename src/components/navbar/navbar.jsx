import React from "react";
import FirstNav from "../../assets/first-nav-icon.svg";
import Triangle from "../../assets/triangle.svg";
import Plus from "../../assets/plus.svg";
import User from "../../assets/user.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-nav">
        <div className="team-icon-container">
          <img className="team-icon" src={FirstNav} alt="" />
        </div>
        <span>Boro team</span>
        <div className="triangle-container">
          <img src={Triangle} alt="" />
        </div>
        <div className="plus-icon-container">
          <img className="plus-icon" src={Plus} alt="" />
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img src={User} alt="" />
        </div>
        <span>Zahra hasht..</span>
        <div className="triangle-container">
          <img src={Triangle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
