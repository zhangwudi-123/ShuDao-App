import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png';
import deleteIcon from '../../img/deleteIcon.png';

import styles from './cardInfo.scss';

const CardInfo = ({ f7router, item, handleDelete, orderLineId, state }) => {
  const spanStyle = {
    display: 'inline-block',
    width: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const handleDeleteBatch = e => {
    e.stopPropagation();
    handleDelete(item);
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li style={{ marginBottom: '4px' }}>
            <span className={styles['li-next-title']}>批次号</span>
            <span className={styles['li-next-title']}>{item.batchNumber || ''}</span>
          </li>
          <li style={{ marginBottom: '4px', display: 'flex' }}>
            <span className={styles['li-next-title']}>库房</span>
            <span className={styles['li-next-title']}>{item.locationName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>数量</span>
            <span className={styles['li-next-title']}>{item.num || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>规格</span>
            <span className={styles['li-next-title']}>{item.specifications || ''}</span>
          </li>
          {state == 0 && (
            <li className={styles['li-button']}>
              <Button fill round className={styles['baseButton']} onClick={handleDeleteBatch}>
                删除
              </Button>
            </li>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
