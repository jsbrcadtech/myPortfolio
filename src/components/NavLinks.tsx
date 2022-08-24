import React from 'react';

let NavLinks: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <span className="w3-top-bar w3-padding w3-right">
          <button className="w3-button w3-round-xxlarge w3-text-white w3-large">
            <a href="/projects">Projects</a>
          </button>
        </span>

        <span className="w3-top-bar w3-padding w3-right">
          <button className="w3-button w3-round-xxlarge w3-text-white w3-large">
            <a href="/about">About</a>
          </button>
        </span>
        <span className="w3-top-bar w3-padding w3-right">
          <button className="w3-button w3-round-xxlarge w3-text-white w3-large">
            <a href="/">Home</a>
          </button>
        </span>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
