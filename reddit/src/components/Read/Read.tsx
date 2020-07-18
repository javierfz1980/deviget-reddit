import React from 'react';

import styles from './Read.module.scss';
import { Dot } from '../Dot';

export function Read({ read }: { read: boolean }) {
  return !read ? (
    <span className={styles.dotWrapper}>
      <Dot width={20} height={20} />
    </span>
  ) : (
    <></>
  );
}
