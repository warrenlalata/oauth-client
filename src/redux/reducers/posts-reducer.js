import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
