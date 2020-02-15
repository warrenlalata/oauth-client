import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/types';
import { loginFromApi } from '../../services/auth';

function* login({ payload }) {
  console.log('login saga: ', payload);
  const { email, password } = payload;
  const finalPayload = {
    grant_type: 'password',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    username: email,
    password,
    scope: ''
  };
  console.log('final payload: ', finalPayload);
  try {
    const user = yield call(loginFromApi, finalPayload);
    yield put({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: LOGIN_ERROR, payload: error.message });
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
