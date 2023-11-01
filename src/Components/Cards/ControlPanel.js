import React from 'react';
import '../Components.css';
const objectList = [
  { name: 'Reacter', type: 'Power' },
  { name: 'Battery', type: 'Power' },
  { name: 'Assembler', type: 'Production' },
  { name: 'Refinery', type: 'Production' },
  { name: 'Hydrogen Thrst', type: 'Thruster' },
  { name: 'Hydrogen Thrst', type: 'Thruster' },
];
function ControlPanel() {
  const mapped = objectList.map((singleObject) => (
    <li id='block-list-item'>{singleObject.name}</li>
  ));
  return (
    <div id='flexy'>
      <div id='block-list'>
        <h2 id='card-header'>Control Panel</h2>
        <ul>{mapped}</ul>
      </div>
      <div id='block-list'>
        <label>Power</label>
        <input type='checkbox' />
      </div>
    </div>
  );
}

export default ControlPanel;
