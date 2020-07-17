export enum ACTION_TYPES {
  fetchPosts = 'fetchPosts',
  fetchPostsSuccess = 'fetchPostsSuccess',
  fetchPostsError = 'fetchPostsError',
  selectPost = 'selectPost',
  removePost = 'removePost',
  addToFavs = 'addToFavs',
  removeFromFavs = 'removeFromFavs',
  restoreAllPosts = 'restoreAllPosts',
  deleteAllPosts = 'deleteAllPosts',
  resetState = 'resetState',
}

export interface Action {
  type: ACTION_TYPES;
  payload?: any;
}
