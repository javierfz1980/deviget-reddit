import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './PostListItem.module.scss';
import { SinglePostItem } from '../../../models';
import { Fav } from '../../Fav';
import { Comments } from '../../Comments';
import { Delete } from './Delete';
import { ago } from '../../../utils';
import { Read } from './Read';
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
      <div className={styles.author}>{item.author + ' - ' + ago(item.created)}</div>
      <div className={styles.footer}>
        <div>
          <Read read={item.read} />
        </div>
        <div>
          <Comments comments={item.comments} />
        </div>
        <div>
          <Fav />
        </div>
        <div>
          <Delete itemId={item.id} />
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
