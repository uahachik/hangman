import React from 'react';

const Welcom = ({ history }) => {
  return (
    <div className="welcome">
      <h1>
        Welcome to Hangman
      </h1>

      <a
        href="https://en.wikipedia.org/wiki/Hangman_(game)}"
        target="_blank" rel="noopener noreferrer" 
        aria-label="wiki hangman"
      >
        HangMan
      </a>

      <button onClick={() => history.push('/play') }>Let's play!</button>
    </div>
  )
};

export default Welcom;
