import { catchError, filter, mergeMap } from 'rxjs/operators';
import { Action, ACTION_TYPES } from './actions';
import { getPosts, GetPostsResponse } from '../api/api';

export function fetchPostsEpic(action$, store) {
  return action$.pipe(
    filter((action: Action) => {
      console.log('aca');
      return action.type === ACTION_TYPES.FETCH_POSTS;
    }),
    // `mergeMap()` supports functions that return promises, as well as observables
    mergeMap(async action =>
      getPosts({ after: store.after }).then((res: GetPostsResponse) => ({
        type: ACTION_TYPES.FETCH_POSTS_SUCCESS,
        payload: { posts: res.posts, after: res.after },
      })),
    ),
    catchError(err => Promise.resolve({ type: ACTION_TYPES.FETCH_POSTS_ERROR, payload: { message: err.message } })),
  );
}
