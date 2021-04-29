import React from "react";
import skaters from "./videos/skaters.mp4";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <video className="header_video" autoPlay loop muted>
        <source src={skaters} type="video/mp4" />
      </video>
      <div className="header_titles">
        <h1>Fancy NHL Dashboard</h1>
        <h2>Your new site to check out hockey related css mistakes</h2>
      </div>
      
    </div>
  );
};

export default Header;
