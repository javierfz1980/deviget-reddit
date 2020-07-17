import { BASE_URI, POSTS_PER_PAGE } from '../constants';
import { api } from './config';
import { SinglePostItem } from '../models';

export interface GetPostsResponse {
  after: string;
  posts: SinglePostItem[];
}

export function getPosts(params?: any): Promise<GetPostsResponse> {
  const config = {
    params: { ...params, limit: POSTS_PER_PAGE },
  };
  return api.get('/r/all/top.json', config).then(result => {
    const after = result.data.data.after;
    const posts = result.data.data.children.map(post => ({
      id: post.data.id,
      title: post.data.title,
      url: `${BASE_URI}/${post.data.permalink}`,
      preview: post.data.url,
      author: post.data.author,
      thumbnail: post.data.thumbnail,
      comments: post.data.num_comments,
      created: post.data.created_utc,
      read: false,
    }));
    return { after, posts };
  });
}
