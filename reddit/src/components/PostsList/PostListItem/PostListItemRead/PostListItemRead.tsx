import React from 'react';

import styles from './PostListItemRead.module.scss';
import { Dot } from '../../../Dot';

export function PostListItemRead({ read }: { read: boolean }) {
  return !read ? (
    <span className={styles.dotWrapper}>
      <Dot width={20} height={20} />
    </span>
  ) : (
    <></>
  );
}
