import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../../actions/types';
import { fetchPostsFromApi } from '../../services/posts';

function* fetchPosts() {
  console.log('handleFetchPosts saga');
  try {
    const posts = yield call(fetchPostsFromApi);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: FETCH_POSTS_ERROR, payload: error.message });
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}
