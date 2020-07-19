import { LS_KEY, POST_LIMIT } from '../constants';
import { Action, ACTION_TYPES } from './actions';
import { SinglePostItem } from '../models';
import { loadFromLocalStorage } from '../utils';

export interface RedditState {
  shouldRequest: boolean;
  posts: SinglePostItem[];
  gallery: string[];
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
  gallery: [],
  after: '',
  hasMore: true,
  selectedItem: undefined,
  loading: false,
  initialized: false,
  dismissed: false,
};

export function redditStateReducer(
  state: RedditState = loadFromLocalStorage(LS_KEY) || initialRedditState,
  action: Action,
): RedditState {
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
        selectedItem: state.selectedItem?.id === action.payload ? undefined : state.selectedItem,
      };
    case ACTION_TYPES.ADD_TO_FAVS:
      return {
        ...state,
        gallery: [...state.gallery, action.payload],
      };
    case ACTION_TYPES.REMOVE_FROM_FAVS:
      return {
        ...state,
        gallery: state.gallery.filter(fav => fav !== action.payload),
      };
    case ACTION_TYPES.DELETE_ALL_POSTS:
      return {
        ...state,
        posts: [],
        selectedItem: undefined,
        dismissed: true,
        shouldRequest: false,
      };
    case ACTION_TYPES.RESET_STATE:
      return initialRedditState;
    default:
      return state;
  }
}
