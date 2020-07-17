import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './PostListItem.module.scss';
import { SinglePostItem } from '../../../models';
import { Fav } from '../../Fav';
import { Comments } from '../../Comments';
import { Delete } from './Delete';
import { ago } from '../../../utils';

interface Props {
  item: SinglePostItem;
}
export function PostListItem({ item }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.card}>
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
      </Card>
    </div>
  );
}
