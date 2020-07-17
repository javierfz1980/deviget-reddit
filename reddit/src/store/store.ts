import { applyMiddleware, combineReducers, createStore } from 'redux';
import { redditStateReducer } from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchPostsEpic } from './epics';

// Create Middelware
const observableMiddleware = createEpicMiddleware();

// Create Store with middleware and tools
export const store = createStore(
  combineReducers({
    redditState: redditStateReducer,
  }),
  composeWithDevTools(applyMiddleware(observableMiddleware)),
);

// Run middleware epics/effects
observableMiddleware.run(fetchPostsEpic);
