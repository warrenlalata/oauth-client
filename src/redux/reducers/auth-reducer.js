import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  session: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, session: action.payload, error: null };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, session: null, error: null };
    case LOGOUT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
