import React from 'react';
import HomePageHeader from '../HomePageHeader';
import SkillsPromoter from '../SkillsPromoter';

let HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <HomePageHeader />
      <div className="w3-center w3-padding-32">
        <h2 className="w3-center">What I Can do</h2>
        <SkillsPromoter />
        <h3 className="w3-container__title">Web Developer</h3>
        <p className="w3-container__body-content">#Passion4Learning</p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
