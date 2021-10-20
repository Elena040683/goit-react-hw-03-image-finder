import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};

export default ImageGalleryItem;
