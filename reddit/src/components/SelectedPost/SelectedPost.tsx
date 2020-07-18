import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import { ago } from '../../utils';
import { NoContent } from '../NoContent';
import { ItemActions } from '../ItemActions';
import styles from './SelectedPost.module.scss';

export function SelectedPost() {
  const selectedItem = useSelector(({ redditState }) => redditState.selectedItem);

  if (!selectedItem) {
    return (
      <h1 className={styles.noConents}>
        <NoContent />
      </h1>
    );
  }

  return (
    <Card>
      <Card.Img
        className={styles.cardImg}
        variant="top"
        src={selectedItem?.preview || 'images/placeholder-small.png'}
        onClick={() => window.open(selectedItem.url, '_blank')}
      />
      <Card.Body>
        <Card.Title>{selectedItem?.title}</Card.Title>
        <Card.Text>{selectedItem?.author + ' - ' + ago(selectedItem?.created)}</Card.Text>
        <ItemActions item={selectedItem} />
      </Card.Body>
    </Card>
  );
}
