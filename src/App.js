import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import { Nav } from './common';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes />
    </Router>
  </Provider>
);

export default App;
