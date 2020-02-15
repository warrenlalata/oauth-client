import { all } from 'redux-saga/effects';
import watchFetchPosts from './posts/fetch';
import watchLogin from './auth/login';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchLogin()
    // another here
  ]);
}
