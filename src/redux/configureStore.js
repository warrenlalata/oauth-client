import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { syncMiddleware } from 'redux-sync-reducer';
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

const middlewares = [sagaMiddleware, syncMiddleware, logger];

export default () => {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middlewares),
      // throws error when browser has no reduc devtools
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
