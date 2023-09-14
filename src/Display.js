// import React from 'react';
import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";

function Display() {

  const bool = false;
  const [isDisplayed, setIsDisplayed] = useState(bool);
  function handleClick() {
    setIsDisplayed((curDisplay) => !isDisplayed);
  }
  const checkDisplayFalse = isDisplayed === false;

  function handleDone() {
    setIsDisplayed(false)
  }

  return (
    <>
      <button
        id={checkDisplayFalse ? "display-button" : ""}
        onClick={handleClick}
      >
        {checkDisplayFalse ? "Open" : "Close"} Display
      </button>
      {isDisplayed === true && (
          <Header onDone={handleDone}/>
      )}
    </>
  );
}

export default Display;
