import React, { useState } from 'react';
import { ArrowLeftCircleFill as Icon } from 'react-bootstrap-icons';

import styles from './Home.module.scss';
import { PostsList } from '../../components/PostsList';
import { SelectedPost } from '../../components/SelectedPost';

export function Home() {
  const [open, setOpen] = useState<boolean>();

  return (
    <div className={styles.homeWrapper}>
      <div
        className={`${styles.listWrapper} ${!open ? styles.listClosed : ''}`}
        onMouseOver={() => setOpen(open => !open)}>
        <PostsList />
      </div>
      <div className={styles.opener}>
        <Icon size={50} className={styles.icon} onMouseOver={() => setOpen(open => !open)} />
      </div>
      <div className={styles.contentWrapper}>
        <SelectedPost />
      </div>
    </div>
  );
}
