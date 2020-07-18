import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import { ago } from '../../utils';
import { NoContent } from '../NoContent';
import { ItemActions } from '../ItemActions';
import styles from '../PostsList/PostsList.module.scss';

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
      <Card.Img variant="top" src={selectedItem?.preview} />
      <Card.Body>
        <Card.Title>{selectedItem?.title}</Card.Title>
        <Card.Text>{selectedItem?.author + ' - ' + ago(selectedItem?.created)}</Card.Text>
        <ItemActions item={selectedItem} />
      </Card.Body>
    </Card>
  );
}
