import React from 'react';
import './Inventory.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

function InventoryButtons() {
  return (
    <div id='inventory-buttons'>
      <button title='Drop Item' id='inventory-button'>
        <FontAwesomeIcon
          className='inventory-icon'
          icon={faUserAstronaut}
          size='2xl'
        />
      </button>
      <button title='Deposit Item' id='inventory-button'>
        <FontAwesomeIcon
          className='inventory-icon'
          icon={faShuttleSpace}
          size='2xl'
        />
      </button>
      <button title='Collect Item' id='inventory-button'>Collect</button>
      <button title='Other' id='inventory-button'>Other</button>
    </div>
  );
}

export default InventoryButtons;
