import React from 'react';

import styles from './ItemActions.module.scss';
import { Comments } from '../Comments';
import { Fav } from '../Fav';
import { Delete } from '../Delete';
import { SinglePostItem } from '../../models';

interface Props {
  item: SinglePostItem;
}

export function ItemActions({ item }: Props) {
  return (
    <div className={styles.actions}>
      <div>
        <Comments comments={item?.comments} />
      </div>
      <div>
        <Fav item={item} />
      </div>
      <div>
        <Delete itemId={item?.id} />
      </div>
    </div>
  );
}
