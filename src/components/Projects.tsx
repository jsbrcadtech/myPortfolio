import React, { useEffect, useState } from 'react';
import { IProjects } from '../models/IProjects';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  projects: IProjects[];
  errorMessage: string;
}

let Projects: React.FC = () => {
  let [state, setState] = useState<IState>({
    projects: [] as IProjects[],
    errorMessage: 'Request has failed',
  });

  let { projects, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getProjects()
      .then((response) => {
        setState({
          ...state,
          projects: response.data,
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
      <section className="w3-container">
        <h2 className="w3-center w3-container__title">My Projects</h2>
        <p className="w3-center w3-container__subtitle">
          Please feel free to check my projects on GitHub by clicking on any of
          them
        </p>
        <div className="w3-padding-32 w3-project-container">
          {projects.map((project) => (
            <div className="project__links w3-center" key={project.id}>
              <a href={project.url}>
                <h2 className="w3-center">{project.title}</h2>
                <img
                  src={project.content}
                  alt="Web"
                  width="350px"
                  height="auto"
                  className="project-image"
                ></img>
              </a>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
