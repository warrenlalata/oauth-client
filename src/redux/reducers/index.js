import { combineReducers } from 'redux';
import { syncedReducer } from 'redux-sync-reducer';
import postReducer from './posts-reducer';
import authReducer from './auth-reducer';

export default combineReducers({
  posts: postReducer,
  auth: syncedReducer(authReducer)
});
