import logo from './logo.svg';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState} from "react"

import Dashboard from './components/Dashboard/Dashboard';

import './css/App.css';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
  const [knownKeywords, setKnownKeywords] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage setKeywords={setKnownKeywords} keywords={knownKeywords}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
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
