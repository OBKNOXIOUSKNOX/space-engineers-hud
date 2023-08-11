// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Display from './Display';
import Tester from './Tester';
import './App.css';

// Hiding React.Router until further notice
// const router = createBrowserRouter([{ path: '/', element: <Display /> }]);

function App() {
  return (
    <div className="App">
      <section id="background-image">
        <div id="parent-div">
          <Display />
          <Tester />
<<<<<<< HEAD
          <h1>Tested</h1>
=======
          <h1>Hello There</h1>
>>>>>>> parent of 99f0adf0 (Updates)
        </div>
      </section>
    </div>
  );
}

export default App;
