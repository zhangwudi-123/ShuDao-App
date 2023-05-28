import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const CardInfo = ({ f7router, item, loadData }) => {
  const onGoingStyle = {
      background: '#E1EDFF',
      color: '#3D86F3'
  }
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  }



  const onHandleClick = () => {
    f7router.navigate('/stocktakinDetail', { props: { orderLineId: item.id} });
  };


  return (
    <div onClick={onHandleClick} className={styles['card-box']}>
      <Card>
          <ul className={styles['card-ul']}>
              <li style={{marginBottom: '8px'}}>
                  <span className={styles['li-title']}>{item.scNumber || ''}</span>
                  <span className={styles['li-status']} style={item.checkStatus == 1 ? completeStyle : onGoingStyle}>{item.checkStatus == 1 ? '已结束' : '调库中'}</span>
              </li>
              <li>
                  <span className={styles['li-next-title']}>盘点时间</span>
                  <span className={styles['li-next-title']}>{item.stockCheckTime || ''}</span>
              </li>
              <li>
                  <span className={styles['li-next-title']}>操作人</span>
                  <span className={styles['li-next-title']}>{item.operator || ''}</span>
              </li>
          </ul>
    
        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default CardInfo;
