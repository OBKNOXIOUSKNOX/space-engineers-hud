import React, { useState } from 'react';
import Cards from './Cards.js';
import './Components.css';

function Header() {
  const [selectedMenu, setSelectedMenu] = useState('Inventory');

  function handleClick(event) {
    setSelectedMenu(event.target.innerText.replaceAll(' ', ''));
  }
  return (
    <React.Fragment>
      <hr />
      <div id="header">
        <li class="header-tab" onClick={handleClick}>
          Inventory
        </li>
        <li class="header-tab" onClick={handleClick}>
          Control Panel
        </li>
        <li class="header-tab" onClick={handleClick}>
          Production
        </li>
        <li class="header-tab" onClick={handleClick}>
          Info
        </li>
        <li class="header-tab" onClick={handleClick}>
          Factions
        </li>
        <li class="header-tab" onClick={handleClick}>
          Comms
        </li>
        <li class="header-tab" onClick={handleClick}>
          GPS
        </li>
      </div>
      <hr />
      <Cards selectedMenu={selectedMenu} />
    </React.Fragment>
  );
}

export default Header;
