import React, { useEffect, useState } from 'react';
import { ISkills } from '../models/ISkills';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  skills: ISkills[];
  errorMessage: string;
}

let SkillsPromoter: React.FC = () => {
  let [state, setState] = useState<IState>({
    skills: [] as ISkills[],
    errorMessage: 'Request has failed',
  });

  let { skills, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getSkills()
      .then((response) => {
        setState({
          ...state,
          skills: response.data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          errorMessage: error.message,
        });
      });
  }, []);

  return (
    <React.Fragment>
      <ul className="w3-ul w3-container__skills ">
        {skills.length > 0 &&
          skills.map((skill) => {
            return (
              <li className="w3-padding" key={skill.id}>
                <i
                  className={`w3-container__skills__icons  ${skill.icon} `}
                ></i>
                <p className="w3-container__body-content">{skill.name}</p>
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default SkillsPromoter;
