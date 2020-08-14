import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Hangman.css';

import hangMan from './gallows';
import phrases from '../phrases.json';

const [phrase] = phrases.sort(() => Math.random() - 0.5).slice(0, 1);

const initialValue = () => {
  const initObj = {};
  for (let i = 0; i < phrase.length + 1; i++) {
    initObj[i] = '';
  }
  return initObj;
}

const Play = ({ history, setStatus }) => {
  const [guessed, setGuessed] = useState(phrase[0]);
  const [inputValue, setInputValue] = useState(initialValue());
  const [attempt, setAttempt] = useState(6);
  console.log(phrase)
  
  useEffect(() => {
    if (guessed === phrase.slice(0, -1)) {
      setStatus('You Won!');
      history.push('/result');
    }
  }, [guessed, history, setStatus])

  const handleFocus = inx => {
    if (inx === 0 && inputValue[inx] === '') {
      return true;
    }
  }

  const checkHanging = (e, inx) => {
    let { name, value } = e.target;
    value = value.toLowerCase();
    setInputValue({...inputValue, [name]: value });

    if (value !== phrase[inx + 1]) {
      if (attempt === 0) {
        setStatus('You lost');
        history.push('/result');
      } else {
        setTimeout(() => {
          setAttempt(attempt - 1);
          setInputValue({ ...inputValue, inx: '' });
        }, 1000);
      }
    } else {
      setGuessed(guessed + value);

      // ToDo dynamic focus
      // dispatchEvent(new KeyboardEvent('keydown',{'key':'tab'}));
      // document.activeElement.dispatchEvent(
        //   new KeyboardEvent("keydown", {
          //     key: "tab",
          //     keyCode: 9, // example values.
          //     code: "KeyE", // put everything you need in this object.
          //     which: 9,
          //     shiftKey: false, // you don't need to include values
          //     ctrlKey: false,  // if you aren't going to use them.
      //     metaKey: false   // these are here for example's sake.
      //   })
      // );
    }
  }

  const guessedLine = new Array(phrase.length - 2);
  guessedLine.fill(null);
  
  return (
    <div className="play">
      <img src={hangMan(attempt)} alt='gallows' />

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{margin: '1px 16px 0 0'}}>{phrase[0]}</div>
        {guessedLine.map((_, inx) => (
            <input
              key={inx}
              name={inx}
              value={inputValue[inx]}
              onChange={e => checkHanging(e, inx)}
              maxLength="1" size="8" placeholder='_  '
              autoFocus={handleFocus(inx)}
            />
          )
        )}
        <div style={{width: 50}}>{phrase.slice(phrase.length - 1)}</div>
      </div>
    </div>
  );
};

Play.defaultProps = {
  setStatus: () => {},
}

Play.propTypes = {
  status: PropTypes.func,
};

export default Play;
