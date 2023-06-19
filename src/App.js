import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './Display';
import './App.css';

const router = createBrowserRouter([{ path: '/', element: <Display /> }]);

function App() {
  return (
    <div className="App">
      <section id="background-image">
        <div id="parent-div">
          <RouterProvider router={router} />
        </div>
      </section>
    </div>
  );
}

export default App;
