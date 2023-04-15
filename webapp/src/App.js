import logo from './logo.svg';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState} from "react"

import CompositionCard from './components/Composition/CompositionCard';
import WikiCard from './components/Wiki/WikiCard';

import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CompositionCard />} />
        <Route path="/" element={<WikiListView />} /> */}
        <Route path="/" element={<WikiCard />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
