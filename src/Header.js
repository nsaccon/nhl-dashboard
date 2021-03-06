import React from "react";
import skaters from "./videos/skaters.mp4";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <video className="header_video" autoPlay loop muted>
        <source src={skaters} type="video/mp4" />
      </video>
      <div className="header_content">
        <h1>Hockey Card Finder</h1>
        <h2>Your new site for finding Young Guns cards</h2>
        <div className="header_buttons">
        <button className="header_buttonPlayer">Players</button>
        <button>Teams</button>
      </div>
      </div>
      <div className="header--fadeBottom" />
    </div>
  );
};

export default Header;
