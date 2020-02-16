import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';

import Layout from './pages/layout/layout';
import './App.scss';
import Routes from './routes';

const { persistor, store } = configureStore();

const Loading = () => <p>Loading...</p>;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
