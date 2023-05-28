import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png';
import deleteIcon from '../../img/deleteIcon.png';

import styles from './cardInfo.scss';

const CardInfo = ({ f7router, item, loadData, handleDelete, orderLineId, state }) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
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
            <span className={styles['li-next-title']}>{item.batchNum || ''}</span>
          </li>
          <li style={{ marginBottom: '4px', display: 'flex' }}>
            <span className={styles['li-next-title']}>库房</span>
            <span className={styles['li-next-title']}>{item.locationName || ''}</span>
          </li>
          <li style={{ marginBottom: '4px', display: 'flex' }}>
            <span className={styles['li-next-title']}>规格</span>
            <span className={styles['li-next-title']}>{item.specifications || ''}</span>
          </li>
          <li style={state == 1 && item.thisOrder ? { marginBottom: '8px' } : null}>
            <span className={styles['li-next-title']}>数量</span>
            <span className={styles['li-next-title']}>{item.number || ''}</span>
          </li>
          {state == 1 && item.thisOrder && (
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
