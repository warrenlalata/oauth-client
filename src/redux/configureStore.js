import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware, logger),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

// const sagaMiddleware = createSagaMiddleware();

// const logger = createLogger({
//   collapsed: true
// });

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware, logger),
//     // eslint-disable-next-line no-underscore-dangle
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// sagaMiddleware.run(rootSaga);

// export default store;
