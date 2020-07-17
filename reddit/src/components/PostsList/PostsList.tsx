import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './PostsList.module.scss';
import { PostListItem } from './PostListItem/PostListItem';
import { SinglePostItem } from '../../models';
import { ListGroup } from 'react-bootstrap';
import { ACTION_TYPES } from '../../store/actions';

export function PostsList() {
  const dispatch = useDispatch();

  dispatch({ type: ACTION_TYPES.fetchPosts });

  return (
    <ListGroup className={styles.listGroup}>
      {items.map(item => (
        <ListGroup.Item className={styles.listItem}>
          <PostListItem item={item as SinglePostItem} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

// Temp Dummy Data
const item = {
  author: 'Javier',
  title:
    'Google maps should have a "on the way" feature to find the most convenient gas station, Starbucks, or whatever along the route to your destination.',
  thumbnail: 'http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg',
  created: 1411948932,
};
const items = [item, item, item, item, item, item];
