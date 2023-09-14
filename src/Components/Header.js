import React, { useState } from 'react';
import Cards from './Cards.js';
import './Components.css';
import { createPortal } from 'react-dom';

function Header({ onDone }) {
  const [selectedMenu, setSelectedMenu] = useState('Inventory');

  function handleClick(event) {
    setSelectedMenu(event.target.innerText.replaceAll(' ', ''));
  }
  return createPortal(
    <React.Fragment>
      <div className='backdrop' onClick={onDone}></div>
      <dialog className='modal' id='opened-display' open>
        {/* <div id="opened-display"> */}
        <hr />
        <div id='header'>
          <li class='header-tab' onClick={handleClick}>
            Inventory
          </li>
          <li class='header-tab' onClick={handleClick}>
            Control Panel
          </li>
          <li class='header-tab' onClick={handleClick}>
            Production
          </li>
          <li class='header-tab' onClick={handleClick}>
            Info
          </li>
          <li class='header-tab' onClick={handleClick}>
            Factions
          </li>
          <li class='header-tab' onClick={handleClick}>
            Comms
          </li>
          <li class='header-tab' onClick={handleClick}>
            GPS
          </li>
        </div>
        <hr />
        <Cards selectedMenu={selectedMenu} />
        {/* </div> */}
      </dialog>
    </React.Fragment>,
    document.getElementById('modal')
  );
}

export default Header;
