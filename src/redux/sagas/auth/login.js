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
    // store tokens before calling login success
    const { access_token: accessToken, refresh_token: refreshToken } = response;
    yield call(storeTokens, { accessToken, refreshToken });
    // fetch current user
    const currentUser = yield call(fetchCurrentUserFromApi);
    // currentUser as session
    const session = { ...currentUser.data, accessToken, refreshToken };
    yield put({ type: LOGIN_SUCCESS, payload: session });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    yield put({ type: LOGIN_ERROR, payload: error.message });
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
