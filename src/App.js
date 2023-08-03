import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './Display';
import './App.css';

// Hiding React.Router until further notice
// const router = createBrowserRouter([{ path: '/', element: <Display /> }]);

function App() {
  return (
    <div className="App">
      <section id="background-image">
        <div id="parent-div">
          <Display/>
        </div>
      </section>
    </div>
  );
}

export default App;
