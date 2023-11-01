import React from 'react';
import './Inventory.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

function InventoryPanel(props) {
  return (
    <div id='inventory-panel'>
      <button title='Player Inventory' id='inventory-select-buttons'>
        <FontAwesomeIcon className='inventory-icon' icon={faUserAstronaut} size='xl' />
      </button>
      <button title='Ship Inventory' id='inventory-select-buttons'>
        <FontAwesomeIcon className='inventory-icon' icon={faShuttleSpace} size='xl' />
      </button>
      <div id='block-list-inventory'>
        <ul>
          <h1>{props.header}</h1>
          <p>{props.para}</p>
        </ul>
      </div>
    </div>
  );
}
export default InventoryPanel;
