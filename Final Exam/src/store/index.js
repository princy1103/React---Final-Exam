import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { postsReducer } from '../store/posts/reducer';
import { authReducer } from '../store/auth/reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


