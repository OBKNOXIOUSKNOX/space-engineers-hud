import React from 'react';
// import '../Components.css';
import './InventoryEls/Inventory.css'
import InventoryButtons from './InventoryEls/InventoryButtons'
import InventoryPanel from './InventoryEls/InventoryPanel';

function Inventory() {
  return (
    <div className="block-style-inventory">
      <InventoryPanel para='innnn' header='JavaScript built Inventory Management System in progress'/>
      <InventoryButtons />
      <InventoryPanel para='innnn' header='This is Inventory Panel'/>
    </div>
  );
}

export default Inventory;
