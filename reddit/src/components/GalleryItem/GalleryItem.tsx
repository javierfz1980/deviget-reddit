import React from 'react';

import styles from './GalleryItem.module.scss';
import { Card } from 'react-bootstrap';

interface Props {
  image: string;
}

export function GalleryItem({ image }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.galCard}>
        <Card.Img
          className={styles.galImg}
          variant="top"
          src={image || 'images/placeholder-small.png'}
          onClick={() => (image ? window.open(image, '_blank') : null)}
        />
      </Card>
    </div>
  );
}
