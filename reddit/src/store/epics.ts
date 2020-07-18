import { catchError, filter, mergeMap } from 'rxjs/operators';
import { Action, ACTION_TYPES } from './actions';
import { getPosts, GetPostsResponse } from '../api/api';

export function fetchPostsEpic(action$, store) {
  return action$.pipe(
    filter((action: Action) => action.type === ACTION_TYPES.FETCH_POSTS),
    mergeMap(async action => {
      const { after } = store.value.redditState;
      return getPosts({ after }).then((res: GetPostsResponse) => {
        return {
          type: ACTION_TYPES.FETCH_POSTS_SUCCESS,
          payload: { posts: res.posts, after: res.after },
        };
      });
    }),
    catchError(err => Promise.resolve({ type: ACTION_TYPES.FETCH_POSTS_ERROR, payload: { message: err.message } })),
  );
}
