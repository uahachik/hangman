import React from 'react';
import PropTypes from 'prop-types';

import alt_run_away from '../assets/img/run_away';
import alt_animated from '../assets/img/animated';

const run_away = 'img/running men.jpeg';
const animated = '';

const Result = ({ status, history }) => {
  if (!status) {
    history.push('./play')
  }

  return (
    <div className="result">
      {status === 'You Won!'
        ? (
          <div style={{textAlign: 'center'}}>
            <img
              src={run_away ? run_away : alt_run_away()}
              alt={status}
              style={run_away !== '' ? {width: '120%'} : {width: '27%'}} />
            <h2 style={{color: 'maroon'}}>{status}</h2>
          </div>
        )
        : (
          <>
            <img
              src={animated ? animated : alt_animated()}
              alt={status}
              style={{marginTop: '23px'}} 
            />
            <h2>{status}</h2>
          </>
        )
      }

      <div className="button_block">
      <button onClick={() => history.push('./play')}>play again</button>
      <button onClick={() => history.push('./')}>cancel</button>
      </div>
    </div>
  )
};

Result.defaultProps = {
  status: '',
}

Result.propTypes = {
  status: PropTypes.string,
};

export default Result;
