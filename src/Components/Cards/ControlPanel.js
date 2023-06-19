import React from 'react';
import '../Components.css';

function ControlPanel() {
  return (
    <div id="flexy">
      <div id="block-list">
        <h2 id="card-header">Control Panel</h2>
        <ul id="ul">
          <li id="block">Hydrogen Engine Up</li>
          <li id="block">Hydrogen Engine Down</li>
          <li id="block">Battery</li>
          <li id="block">Battery 2</li>
          <li id="block">Refinery</li>
          <li id="block">Assembler</li>
        </ul>
      </div>
      <div id="block-list">
        <label>Power</label>
          <input type="checkbox" />
      </div>
    </div>
  );
}

export default ControlPanel;
