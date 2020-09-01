import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Hangman.css';

import hangMan from './gallows';
import phrases from '../phrases.json';

const [phrase] = phrases.sort(() => Math.random() - 0.5).slice(0, 1);

// const initialValue = () => {
//   const initObj = {};
//   for (let i = 0; i < phrase.length + 1; i++) {
//     initObj[i] = '';
//   }
//   return initObj;
// }

const Play = ({ history, setStatus }) => {
  const [guessed, setGuessed] = useState(phrase[0]);
  // const [inputValue, setInputValue] = useState(initialValue());
  const [attempt, setAttempt] = useState(6);
  console.log(phrase);

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  console.log('guessed', guessed);

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
    const currValue = e.target.value;
    // let { name, value } = e.target;
    // value = value.toLowerCase();
    // setInputValue({...inputValue, [name]: value });

    console.log(phrase.slice(0, phrase.indexOf(phrase[guessed.length]) + 1))
    console.log(phrase.indexOf(phrase[guessed.length]))
    console.log(phrase[guessed.length])

    if (currValue !== phrase[guessed.length]) {
      // setGuessed(guessed + currValue);
      // setTimeout(() => {
      //   setGuessed(phrase.slice(0, phrase.indexOf(phrase[guessed.length])));
      // }, 1000);
      // if (attempt > 0) {
        setTimeout(() => {
          setAttempt(attempt - 1);
        }, 1000);
      // }
    } else {
      setGuessed(guessed + currValue);
    }
  }

  const guessedLine = new Array(phrase.length - 2);
  guessedLine.fill(null);

  // const handleClick = () => {
  //   console.log('clicked')
    // inputRef.current.focus();
  // };

   const handleFocus = () => {
    // if (guessed.length === 1) {
      return true;
    // } else {
      // console.log(inx);
    // }
  }

  const onFocus = () => {
    setFocused(true);
    // inputRef.current.focus();
    // return true;
  };
  const handleBlur = () => {
    setFocused(false);
  };
  
  return (
    <div className="play">
      <img src={hangMan(attempt)} alt={hangMan(attempt)} />

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{margin: '1px 16px 0 0'}}>{phrase[0]}</div>
        <div className="wrap">
          <input
            value=""
            // ref={inputRef}
            onFocus={onFocus}
            onBlur={handleBlur}
            onChange={e => checkHanging(e)}
            className="input"
            style={{
              width: 32,
              top: 0,
              bottom: 0,
              left: (guessed.length - 1) * 48,
            }}
            autoFocus={true}
            // maxLength="1"
          />
          {guessedLine.map((_, inx) => (
            <div key={inx} className="display">
              {guessed.slice(1, guessed.length).split('')[inx]}
              {guessed.length -1 === inx && focused && <div className="shadows" />}
            </div>
          ))}
        </div>
        <div style={{width: 50}}>{phrase.slice(phrase.length - 1)}</div>
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
