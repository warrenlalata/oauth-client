import { takeEvery, call, put } from 'redux-saga/effects';
import {
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_ERROR
} from '../../actions/types';
import { fetchPostsFromApi } from '../../services/posts';

function* fetchPosts() {
  console.log('handleFetchPosts saga');
  try {
    const posts = yield call(fetchPostsFromApi);
    yield put({ type: REQUEST_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: REQUEST_POSTS_ERROR, payload: error.message });
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(REQUEST_POSTS, fetchPosts);
}
