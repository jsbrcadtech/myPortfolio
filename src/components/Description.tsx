import React, { useEffect, useState } from 'react';
import { IPictures } from '../models/IPictures';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  pictures: IPictures[];
  errorMessage: string;
}

let Description: React.FC = () => {
  let [state, setState] = useState<IState>({
    pictures: [] as IPictures[],
    errorMessage: 'Request has failed',
  });

  let { pictures, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getPictures()
      .then((response) => {
        setState({
          ...state,
          pictures: response.data,
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
        <h2 className="w3-center w3-container__title">
          Hi, I'm Justus Santanna =)
        </h2>
        <p className="w3-center w3-container__subtitle">
          I'm a curious and resourceful web developer who enjoys learning and
          executing. I also have worked in the financial industry for more than
          10 years. Web development has always been a passion in my life and I'm
          excited to join the programming world professionally. In my spare
          time, I enjoy playing the guitar, learn more about technology and
          finance, and spend time with family and friends.
        </p>
        <div className="w3-center w3-padding-32 w3-mypictures-container">
          {pictures.map((picture) => (
            <div key={picture.id}>
              <img
                src={picture.image}
                alt="This is Justus"
                width="270px"
                height="300px"
                className="w3-border w3-border-black"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
