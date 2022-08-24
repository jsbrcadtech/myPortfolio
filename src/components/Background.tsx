import React, { useEffect, useState } from 'react';
import { IBackgrounds } from '../models/IBackgrounds';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  backgrounds: IBackgrounds[];
  errorMessage: string;
}

let Background: React.FC = () => {
  let [state, setState] = useState<IState>({
    backgrounds: [] as IBackgrounds[],
    errorMessage: 'Request has failed',
  });

  let { backgrounds, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getBackgrounds()
      .then((response) => {
        setState({
          ...state,
          backgrounds: response.data,
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
        <h2 className="w3-center w3-container__title">Business Experience</h2>
      </div>
      <ul className="w3-ul w3-center">
        {backgrounds.map((background) => (
          <li className="description" key={background.id}>
            {background.description}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Background;
