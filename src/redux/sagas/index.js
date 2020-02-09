import { all } from 'redux-saga/effects';
import watchFetchPosts from './posts/fetch';

export default function* rootSaga() {
  yield all([
    watchFetchPosts()
    // another here
  ]);
}
