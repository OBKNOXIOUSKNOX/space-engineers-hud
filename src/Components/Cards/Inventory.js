import React from 'react';
import '../Components.css';
import InventoryButtons from './InventoryButtons'

function Inventory() {
  return (
    <div class="block-style-inventory">
      <div id="block-list-inventory">
        <ul id="ul">
          <p>innnn</p>
          <p>This will contain all skills</p>
        </ul>
      </div>
      <InventoryButtons />
      <div id="block-list-inventory">
        <ul id="ul">
          <p>innnn</p>
        </ul>
      </div>
    </div>
  );
}

export default Inventory;
