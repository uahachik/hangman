import React, { StrictMode, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Hangman.css';

import Welcom from './Welcom';
import Play from './Play';
import Result from './Result';

const Hangman = () => {
  const [status, setStatus] = useState('');

  return (
    <StrictMode>
      <div className="hangman">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={Welcom}
            />

            <Route
              exact
              path="/play"
              component={props => <Play setStatus={setStatus} {...props} />}
            />

            <Route
              exact
              path="/result"
              component={props => <Result status={status} {...props} />}
            />
          </Switch>
        </Router>
      </div>
		</StrictMode>
  )
};

export default Hangman;
