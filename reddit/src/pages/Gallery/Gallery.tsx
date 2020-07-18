import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Gallery.module.scss';
import { GalleryItem } from '../../components/GalleryItem/GalleryItem';
import { NoContent } from '../../components/NoContent';

export function Gallery() {
  const gallery = useSelector(({ redditState }) => redditState.gallery);

  if (!gallery.length) {
    return (
      <h1 className={styles.noConents}>
        <NoContent />
      </h1>
    );
  }

  return (
    <div className={styles.galleryItemsWrapper}>
      {gallery?.map((image, idx) => (
        <GalleryItem image={image} key={idx} />
      ))}
    </div>
  );
}
