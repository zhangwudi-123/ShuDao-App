import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle';
import Square from './Square';
import styles from './ImagePicker.scss';
import Delete from './Delete';
const ImageItem = ({ url, onRemove, photoBrowser }) => {

  /**
  * 点击图片可以查看全图
  */

  const onHandlePhotoDetail = () => {
    if(!photoBrowser) return;
    const myPhotoBrowserPopupDark =  Framework7.instance.photoBrowser.create({
      photos: [
        {
          url
        }
      ],
      theme: 'dark',
      type: 'standalone'
    });
    myPhotoBrowserPopupDark.open();
  };

  return (
    <Square className={styles.item}>
      <img src={url} alt="img" onClick={onHandlePhotoDetail} />
      <div className={styles.remove} onClick={onRemove}>
        <Delete />
      </div>
    </Square>
  );
};

export default ImageItem;
