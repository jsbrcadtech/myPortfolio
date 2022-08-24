import React, { useEffect, useState } from 'react';
import { IEducations } from '../models/IEducations';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  educations: IEducations[];
  errorMessage: string;
}

let Education: React.FC = () => {
  let [state, setState] = useState<IState>({
    educations: [] as IEducations[],
    errorMessage: 'Request has failed',
  });

  let { educations, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getEducations()
      .then((response) => {
        setState({
          ...state,
          educations: response.data,
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
      <div className="w3-container ">
        <h2 className="w3-center w3-container__title">Education</h2>
      </div>
      <ul className="w3-ul w3-center">
        {educations.map((education) => (
          <li className="description" key={education.id}>
            {education.description}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Education;
