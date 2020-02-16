import { all } from 'redux-saga/effects';
import watchFetchPosts from './posts/fetch';
import watchLogin from './auth/login';
import watchLogout from './auth/logout';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchLogin(),
    watchLogout()
    // another here
  ]);
}
