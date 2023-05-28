import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Checkbox, Radio } from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const CardInfo = ({ f7router, item, loadData, handleSelect, selectedId }) => {
  return (
    <div className={styles['card-box']} onClick={() => handleSelect(item)}>
      <Card className={styles['before-box']}>
        <div className={styles['before-box-checkbox']}>
          <Radio checked={selectedId == item.id} />
        </div>
        <ul className={styles['card-ul']}>
          <li style={{ marginBottom: '8px' }}>
            <span className={styles['li-title']}>{item.materialName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>物料编码</span>
            <span className={styles['li-next-title']}>{item.materialCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>物料类型</span>
            <span className={styles['li-next-title']}>{item.materialTypeName || ''}</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
