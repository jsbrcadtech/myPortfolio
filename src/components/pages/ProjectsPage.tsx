import React from 'react';
import NavLinks from '../NavLinks';
import Projects from '../Projects';

let HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavLinks />
      <Projects />
    </React.Fragment>
  );
};

export default HomePage;
