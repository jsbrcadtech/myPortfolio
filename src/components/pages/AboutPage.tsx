import React from 'react';
import Background from '../Background';
import Description from '../Description';
import Education from '../Education';
import NavLinks from '../NavLinks';
import SkillsPromoter from '../SkillsPromoter';

let HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavLinks />
      <Description />
      <div className="w3-content w3-center w3-padding-32">
        <h2 className="w3-center w3-container__title">Tech Skills</h2>
        <SkillsPromoter />
      </div>
      <Background />
      <Education />
    </React.Fragment>
  );
};

export default HomePage;
