import { initialRedditState, redditStateReducer } from './reducer';
import { Action, ACTION_TYPES } from './actions';

describe('Post Reducer', () => {
  let store;
  beforeAll(() => {
    store = initialRedditState;
  });

  it('should init default state', () => {
    const currentAction = {} as Action;
    const result = redditStateReducer(store, currentAction);
    expect(result.posts.length).toBe(0);
    expect(JSON.stringify(result)).toBe(JSON.stringify(initialRedditState));
  });

  it('should set loading state', () => {
    const currentAction = { type: ACTION_TYPES.FETCH_POSTS };
    const result = redditStateReducer(store, currentAction);
    expect(result.loading).toBeTruthy();
  });

  it('should set posts state contents correctly', () => {
    const posts = [1, 2, 3];
    const currentAction = { type: ACTION_TYPES.FETCH_POSTS_SUCCESS, payload: { posts } };
    const result = redditStateReducer(store, currentAction);
    expect(result.posts.length).toBe(posts.length);
  });

  // as example... more tests to be added
});
