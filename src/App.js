import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Nav } from './common';
import Routes from './routes';

const App = () => (
  <Router>
    <Nav />
    <Routes />
  </Router>
);

export default App;
