import React from 'react';

import styles from './PostListItem.module.scss';
import { SinglePostItem } from '../../../models';
import { Fav } from '../../Fav';
import { Comments } from '../../Comments';
import { Delete } from './Delete';
import { ago } from '../../../utils';
import { Read } from './Read';

interface Props {
  item: SinglePostItem;
}
export function PostListItem({ item }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.body}>
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
          <Delete />
        </div>
      </div>
      {/*<Card className={styles.card}>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Text>{item.title}</Card.Text>
          <Card.Text>{item.author + ' - ' + ago(item.created)}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Fav />
          <Comments />
          <Delete />
        </Card.Footer>
      </Card>*/}
    </div>
  );
}
