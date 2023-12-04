import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HistoryPage from './HistoryPage';
import HowToPlayPage from './HowToPlayPage';
import CardCounterPage from './CardCounter';
import BasicStrategyPage from './BasicStrategy';
import googlepng from './googlepng.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
// import 'bootstrap';

const App = () => {
    return (
        <Router>
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="btn btn-primary" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/history">History</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/how-to-play">How to Play</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/card-counter">Card Counter</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary" to="/basic-strategy">Basic Strategy</Link>
          </li>
        </ul>
        <Link to="/">
            <img src={googlepng} alt="Logo" className="menu-logo" />
        </Link>
      </div>
    </div>
  </nav>
            <Routes>
                <Route path="/" element={<div>Welcome to Home Page</div>} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/how-to-play" element={<HowToPlayPage />} />
                <Route path="/card-counter" element={<CardCounterPage />} />
                <Route path="/basic-strategy" element={<BasicStrategyPage />} />
            </Routes>
        </Router>
    );
};

export default App;