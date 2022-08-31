import React, { useEffect, useState } from 'react';
import { IContacts } from '../models/IContacts';
import { PortfolioService } from './services/PortfolioService';

interface IState {
  contacts: IContacts[];
  errorMessage: string;
}

let Footer: React.FC = () => {
  let [state, setState] = useState<IState>({
    contacts: [] as IContacts[],
    errorMessage: 'Request has failed',
  });

  let { contacts, errorMessage } = state;

  useEffect(() => {
    setState({
      ...state,
    });
    PortfolioService.getContacts()
      .then((response) => {
        setState({
          ...state,
          contacts: response.data,
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
      <footer className="w3-section w3-center">
        <div className="w3-padding-16">
          <a href="https://github.com/jsbrcadtech">
            <i className="fab fa-github fa-3x w3-margin-right w3-hover-opacity"></i>
          </a>
          <a href="https://www.linkedin.com/in/justusinwebandfinance/">
            <i className="fab fa-linkedin-in fa-3x w3-margin-right w3-hover-opacity"></i>
          </a>
        </div>
        <div className="w3-padding-16">
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <a
                  className="footer__details w3-hover-gray"
                  href="mailto:"
                  key={contact.id}
                >
                  Email : {contact.email}
                </a>
              );
            })}
            <a
                  className="footer__details w3-hover-gray"
                  href="http://blog.justuscode.com/:"
                >
                  Blog : http://blog.justuscode.com
                </a>
              );
          <p>&copy;2022 All rights reserved</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
