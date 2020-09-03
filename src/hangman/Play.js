import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Hangman.css';

import hangMan from './gallows';
import phrases from '../phrases.json';
import detectIOS from '../utils/detectIOS';

const [phrase] = phrases.sort(() => Math.random() - 0.5).slice(0, 1);

const Play = ({ history, setStatus }) => {
  const [guessed, setGuessed] = useState(phrase[0]);
  const [attempt, setAttempt] = useState(6);
  const [, setFocused] = useState(false);
  console.log(phrase);

  useEffect(() => {
    if (guessed === phrase.slice(0, -1)) {
      setStatus('You Won!');
      history.push('/result');
    }

    if (attempt === 0) {
      setStatus('You lost');
      // setTimeout(() => {
        history.push('/result');
      // }, 2000);
    }
  }, [guessed, history, setStatus, attempt]);

  const checkHanging = e => {
    let { value } = e.target;
    value = value.toLowerCase();

    if (value !== phrase[guessed.length]) {
      // setGuessed(guessed + value);
      // setTimeout(() => {
      //   setGuessed(phrase.slice(0, phrase.indexOf(phrase[guessed.length])));
      // }, 1000);
      // if (attempt > 0) {
        setTimeout(() => {
          setAttempt(attempt - 1);
        }, 1000);
      // }
    } else {
      setGuessed(guessed + value);
    }
  }

  const guessedLine = new Array(phrase.length - 2);
  guessedLine.fill(null);

  const inputStyle = {top: 0, bottom: 0,}

  const desktopInputStyle = {
    width: 32,
    left: (guessed.length - 1) * 48,
  }
  
  const mobileInputStyle = {
    width: 14,
    left: (guessed.length - 1) * 20,
  }
  
  const iosInputStyle = {
    marginLeft: '-15px',
  }
  
  return (
    <div className="play">
      <img src={hangMan(attempt)} alt={hangMan(attempt)} />
      {/* {<div>task</div>} here will be a task */}

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="first_char">{phrase[0]}</div>
        <div className="wrap">
          <input
            value=""
            style={window.innerWidth > 917
              ? Object.assign(inputStyle, desktopInputStyle)
              : !detectIOS()
                ? Object.assign(inputStyle, mobileInputStyle)
                : Object.assign(inputStyle, mobileInputStyle, iosInputStyle)
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={e => checkHanging(e)}
            autoFocus={true}
          />
          {guessedLine.map((_, inx) => (
            <div key={inx} className="display">
              {guessed.slice(1, guessed.length).split('')[inx]}
              {guessed.length - 1 === inx && <div className="shadows" />}
            </div>
          ))}
        </div>

        <div>{phrase.slice(phrase.length - 1)}</div>
      </div>
    </div>
  );
};

Play.defaultProps = {
  setStatus: () => {},
}

Play.propTypes = {
  setStatus: PropTypes.func,
};

export default Play;
