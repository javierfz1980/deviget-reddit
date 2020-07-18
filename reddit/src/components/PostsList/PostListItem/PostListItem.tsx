import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './PostListItem.module.scss';
import { SinglePostItem } from '../../../models';
import { Read } from '../../Read';
import { ago } from '../../../utils';
import { ACTION_TYPES, ActionDispatcher } from '../../../store/actions';
import { ItemActions } from '../../ItemActions';

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
          <img alt="preview" src={item.thumbnail || 'images/placeholder-small.png'} />
        </div>
        <div className={styles.title}>{item.title}</div>
      </div>
      <div className={styles.author}>
        <span>{item.author + ' - ' + ago(item.created)}</span>
        <Read read={item.read} />
      </div>
      <div className={styles.footer}>
        <ItemActions item={item} />
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
