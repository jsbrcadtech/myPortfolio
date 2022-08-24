import React from 'react';
import Navlinks from './NavLinks';

let HomePageHeader: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w3-container w3-padding-32 w3-center" id="hero-container">
        <Navlinks />
        <h1 className="w3-text-white w3-animate-opacity w3-hero-container__title">
          Justus Santanna
        </h1>
        <p className="w3-text-white w3-animate-opacity w3-hero-container__body-content">
          I'm a curious and resourceful web developer who enjoys learning and
          executing.
        </p>
        <button className="w3-button w3-round-xxlarge w3-text-white w3-large">
          <a href="/projects">My Projects</a>
        </button>
      </div>
    </React.Fragment>
  );
};

export default HomePageHeader;
