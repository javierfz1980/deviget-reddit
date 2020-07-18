import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './PostListItem.module.scss';
import { SinglePostItem } from '../../../models';
import { Fav } from '../../Fav';
import { Comments } from '../../Comments';
import { PostListItemDelete } from './PostListItemDelete';
import { PostListItemRead } from './PostListItemRead';
import { ago } from '../../../utils';
import { ACTION_TYPES, ActionDispatcher } from '../../../store/actions';

interface Props {
  item: SinglePostItem;
  onItemSelected: () => void;
}
export function PostListItem({ item, onItemSelected }: Props) {
  const dispatch = useDispatch();
  const select = handleSelect(item, onItemSelected, dispatch);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.body} onClick={select}>
        <div className={styles.image}>
          <img alt="preview" src={item.thumbnail} />
        </div>
        <div className={styles.title}>{item.title}</div>
      </div>
      <div className={styles.author}>
        <span>{item.author + ' - ' + ago(item.created)}</span>
        <PostListItemRead read={item.read} />
      </div>
      <div className={styles.footer}>
        <div>
          <Comments comments={item.comments} />
        </div>
        <div>
          <Fav item={item} />
        </div>
        <div>
          <PostListItemDelete itemId={item.id} />
        </div>
      </div>
    </div>
  );
}

function handleSelect(item: SinglePostItem, onItemSelected: () => void, dispatch: ActionDispatcher) {
  return () => {
    onItemSelected();
    dispatch({ type: ACTION_TYPES.SELECT_POST, payload: item });
  };
}
