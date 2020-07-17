import { POST_LIMIT } from '../constants';
import { Action, ACTION_TYPES } from './actions';
import { SinglePostItem } from '../models';

export interface RedditState {
  shouldRequest: boolean;
  posts: SinglePostItem[];
  favs: SinglePostItem[];
  after: string;
  hasMore: boolean;
  selectedItem: SinglePostItem | undefined;
  loading: boolean;
  initialized: boolean;
  dismissed: boolean;
}

export const initialRedditState: RedditState = {
  shouldRequest: false,
  posts: [],
  favs: [],
  after: '',
  hasMore: true,
  selectedItem: undefined,
  loading: false,
  initialized: false,
  dismissed: false,
};

export function redditStateReducer(state: RedditState = initialRedditState, action: Action): RedditState {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.fetchPosts:
      return {
        ...state,
        loading: true,
        initialized: true,
        shouldRequest: true,
      };
    case ACTION_TYPES.fetchPostsSuccess:
      const posts = [...state.posts, ...action.payload.posts];
      return {
        ...state,
        posts: posts,
        after: action.payload.after,
        hasMore: (posts?.length || 0) < POST_LIMIT,
        loading: false,
        shouldRequest: false,
      };
    default:
      return state;
  }
}
