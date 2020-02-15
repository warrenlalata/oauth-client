import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './pages/layout/layout';

import './App.scss';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>
);

export default App;
