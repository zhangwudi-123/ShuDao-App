import React from 'react';
import { Card, CardContent, List, ListItem, Chip, CardFooter, Button } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png'

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const CardInfo = ({ f7router, item, loadData }) => {
  

  return (
    <div className={styles['card-box']}>
      <Card>
          <ul className={styles['card-ul']}>
              <li style={{marginBottom: '4px', fontSize: '18px', fontWeight: '600', color: '#333333'}}>
                  <span>{item.locationCode || ''}&nbsp;&nbsp;{item.locationName || ''}</span>
              </li>
              <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-next-title']}>物料编码</span>
                  <span className={styles['li-next-title']}>{item.materialCode || ''}</span>
              </li>
              <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-next-title']}>物料名称</span>
                  <span className={styles['li-next-title']}>{item.materialName || ''}</span>
              </li>
              <li style={{marginBottom: '4px', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>账面库存</span>
                    <span className={styles['li-next-title']}>{item.theoryStockNum || 0}</span>
                  </div>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>实际库存</span>
                    <span className={styles['li-next-title']}>{item.checkStockNum || 0}</span>
                  </div>
              </li>
              <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>单位</span>
                    <span className={styles['li-next-title']}>{item.unit || ''}</span>
                  </div>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>盈亏数量</span>
                    <span className={styles['li-next-title']}>{item.profitLossNum || 0}</span>
                  </div>
              </li>
          </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
