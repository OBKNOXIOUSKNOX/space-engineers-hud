import React from 'react';
import Inventory from './Cards/Inventory';
import ControlPanel from './Cards/ControlPanel';
import Production from './Cards/Production';
import Info from './Cards/Info';
import Factions from './Cards/Factions';
import Comms from './Cards/Comms';
import GPS from './Cards/GPS';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const InventoryRouter = createBrowserRouter([{ path: '/Inventory', element: <Inventory/> }]);


function Cards({ selectedMenu }) {
  let componentToShow;
  switch (selectedMenu) {
    case 'Inventory':
      componentToShow = <Inventory/>;
      break;
    case 'ControlPanel':
      componentToShow = <ControlPanel />;
      break;
    case 'Production':
      componentToShow = <Production />;
      break;
    case 'Info':
      componentToShow = <Info />;
      break;
    case 'Factions':
      componentToShow = <Factions />;
      break;
    case 'Comms':
      componentToShow = <Comms />;
      break;
    case 'GPS':
      componentToShow = <GPS />;
      break;
    default:
      <React.Fragment />;
  }
  return (
    <React.Fragment>
      {componentToShow}
    </React.Fragment>
  );
}

export default Cards;
