// import React from 'react';
import React, { useState } from 'react';
import Header from './Components/Header';
import './App.css';

function Display() {
  const bool = false;
  const [isDisplayed, setIsDisplayed] = useState(bool);
  function handleClick() {
    setIsDisplayed((curDisplay) => !isDisplayed);
  }
  const checkDisplayFalse = isDisplayed === false;
  return (
    <>
      <button
        id={checkDisplayFalse ? 'display-button' : ''}
        onClick={handleClick}
      >
        {checkDisplayFalse ? 'Open' : 'Close'} Display
      </button>
      {isDisplayed === true ? (<div id="opened-display"><Header /></div>) : (
        ''
      )}
    </>
  );
}

export default Display;
