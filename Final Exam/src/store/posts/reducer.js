import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  SET_FILTERS,
  SET_SORT,
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: { category: 'all', author: 'all' },
  sortBy: 'date_desc',
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
    case ADD_POST_REQUEST:
    case UPDATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case ADD_POST_SUCCESS:
      return { ...state, loading: false, items: [action.payload, ...state.items] };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false, items: state.items.filter((p) => p.id !== action.payload) };
    case FETCH_POSTS_FAILURE:
    case ADD_POST_FAILURE:
    case UPDATE_POST_FAILURE:
    case DELETE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case SET_SORT:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}


