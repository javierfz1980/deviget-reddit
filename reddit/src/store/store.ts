import { combineReducers, createStore } from 'redux';
import { redditStateReducer } from './reducer';

export const store = createStore(
  combineReducers({
    redditState: redditStateReducer,
  }),
);
