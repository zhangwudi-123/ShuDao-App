import React from 'react';
import { Card, CardContent,  Button, Checkbox } from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const CardInfo = ({ f7router, item, loadData, handleSelect }) => {
 
  return (
    <div className={styles['card-box']}>
      <Card className={styles['before-box']}>
            <div className={styles['before-box-checkbox']}>
                <Checkbox onChange={(e) => {handleSelect(e, item)}}/>
            </div>
            <ul className={styles['card-ul']}>
                <li style={{marginBottom: '8px'}}>
                    <span className={styles['li-title']}>{item.materialName || ''}</span>
                </li>
                <li>
                    <span className={styles['li-next-title']}>物料编码</span>
                    <span className={styles['li-next-title']}>{item.materialCode || ''}</span>
                </li>
                <li>
                    <span className={styles['li-next-title']}>批次号</span>
                    <span className={styles['li-next-title']}>{item.materialBatchNum || ''}</span>
                </li>
                <li>
                    <span className={styles['li-next-title']}>数量</span>
                    <span className={styles['li-next-title']}>{item.quantity || ''}</span>
                </li>
            </ul>
          
      </Card>
    </div>
  );
};

export default CardInfo;
