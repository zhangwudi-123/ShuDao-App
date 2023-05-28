import React, { useState } from 'react';
import { pick } from '~/plugins/ImagePicker';
import { takePicture } from '~/plugins/Camera';
import { Actions, ActionsGroup, ActionsButton } from '@hvisions/f-ui';
import ImageItem from './ImageItem';
import Square from './Square';
import Add from './Add';
import styles from './ImagePicker.scss';

const ImagePicker = ({ value = [], onChange = () => {}, options = { photoBrowser: false } }) => {
  const [actVisible, setActVisible] = useState(false);

  const handleCancel = () => {
    setActVisible(false);
  };

  const handleAdd = () => {
    setActVisible(true);
  };

  const handlePick = () => {
    pick()
      .then(imgList => {
        const newValue = [...value, ...imgList];
        onChange(newValue);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const handleTakePic = () => {
    takePicture()
      .then(photo => {
        const newValue = [...value, photo];
        onChange(newValue);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const handleRemove = idx => () => {
    const newValue = [...value];
    newValue.splice(idx, 1);
    onChange(newValue);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {value.map((url, idx) => {
          return (
            <ImageItem
              photoBrowser={options.photoBrowser}
              key={idx}
              url={url}
              onRemove={handleRemove(idx)}
            />
          );
        })}
        <Square className={styles.item} onClick={handleAdd}>
          <div>
            <span>+</span>
            <div>选择图片</div>
          </div>
        </Square>
        {(value.length + 1) % 3 === 2 && <div className={styles.item} />}
      </div>

      <Actions id="actions-two-groups" opened={actVisible} onActionsClosed={handleCancel}>
        <ActionsGroup>
          <ActionsButton onClick={handleTakePic}>拍照</ActionsButton>
          <ActionsButton onClick={handlePick}>从手机相册选择</ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton color="red" onClick={handleCancel}>
            取消
          </ActionsButton>
        </ActionsGroup>
      </Actions>
    </>
  );
};

export default ImagePicker;
