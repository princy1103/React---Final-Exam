import { SIGN_IN, SIGN_OUT } from './actions';


const savedUser = JSON.parse(localStorage.getItem("user"));
const savedAuth = !!savedUser; // true if user exists

const initialState = {
  isAuthenticated: savedAuth,
  user: savedUser,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload)); 
      return { ...state, isAuthenticated: true, user: action.payload };

    case SIGN_OUT:
      localStorage.removeItem("user");
      return { ...state, isAuthenticated: false, user: null };

    default:
      return state;
  }
}
