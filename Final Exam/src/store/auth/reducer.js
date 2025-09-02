import { SIGN_IN, SIGN_OUT } from './actions';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}


