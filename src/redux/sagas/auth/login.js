import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/types';
import { loginFromApi, fetchCurrentUserFromApi } from '../../services/auth';

const storeTokens = ({ accessToken, refreshToken }) => {
  // todo: store in cookies with httpOnly: true
  try {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  } catch (error) {
    console.log('storeToken error: ', error);
  }
};

function* login({ payload }) {
  const { email, password } = payload;
  const loginPayload = {
    grant_type: 'password',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    username: email,
    password,
    scope: ''
  };

  try {
    const response = yield call(loginFromApi, loginPayload);
    const { access_token: accessToken, refresh_token: refreshToken } = response;
    yield call(storeTokens, { accessToken, refreshToken });
    const currentUser = yield call(fetchCurrentUserFromApi);
    yield put({ type: LOGIN_SUCCESS, payload: currentUser.data });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: LOGIN_ERROR, payload: error.message });
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
