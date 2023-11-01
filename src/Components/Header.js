import React, { useState } from 'react';
import Cards from './Cards.js';
import './Header.css';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Header({ onDone }) {
  const [selectedMenu, setSelectedMenu] = useState('Inventory');

  function handleClick(event) {
    setSelectedMenu(event.target.innerText.replaceAll(' ', ''));
  }
  return createPortal(
    <React.Fragment>
      <div className='backdrop' onClick={onDone}></div>
      <dialog className='modal' id='opened-display' open>
        <button id='close' onClick={onDone}><FontAwesomeIcon icon={faX} style={{color: "#929898",}} /></button>
        {/* <div id="opened-display"> */}
        <hr />
        <div id='header'>
          <li className='header-tab' onClick={handleClick}>
            Inventory
          </li>
          <li className='header-tab' onClick={handleClick}>
            Control Panel
          </li>
          <li className='header-tab' onClick={handleClick}>
            Production
          </li>
          <li className='header-tab' onClick={handleClick}>
            Info
          </li>
          <li className='header-tab' onClick={handleClick}>
            Factions
          </li>
          <li className='header-tab' onClick={handleClick}>
            Comms
          </li>
          <li className='header-tab' onClick={handleClick}>
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
