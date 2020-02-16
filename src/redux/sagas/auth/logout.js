import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../../actions/types';
import { logoutFromApi } from '../../services/auth';

function* logout() {
  try {
    yield call(logoutFromApi);
    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: LOGOUT_ERROR, payload: error.message });
  }
}

export default function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}
