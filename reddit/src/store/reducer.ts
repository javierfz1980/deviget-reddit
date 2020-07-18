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
  console.log('after:', action?.payload?.after);
  switch (action.type) {
    case ACTION_TYPES.FETCH_POSTS:
      return {
        ...state,
        loading: true,
        initialized: true,
        shouldRequest: true,
      };
    case ACTION_TYPES.FETCH_POSTS_SUCCESS:
      const posts = [...state.posts, ...action.payload.posts];
      return {
        ...state,
        posts: posts,
        after: action.payload.after,
        hasMore: (posts?.length || 0) < POST_LIMIT,
        loading: false,
        shouldRequest: false,
      };
    case ACTION_TYPES.SELECT_POST:
      return {
        ...state,
        selectedItem: action.payload,
        posts: [
          ...state.posts.map(post =>
            post.id !== action.payload.id
              ? post
              : {
                  ...post,
                  read: true,
                },
          ),
        ],
      };
    case ACTION_TYPES.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case ACTION_TYPES.ADD_TO_FAVS:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case ACTION_TYPES.REMOVE_FROM_FAVS:
      return {
        ...state,
        favs: state.favs.filter(fav => fav.id !== action.payload.id),
      };
    default:
      return state;
  }
}
