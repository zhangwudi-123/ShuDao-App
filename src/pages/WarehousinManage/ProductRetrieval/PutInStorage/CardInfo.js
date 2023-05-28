import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
import classnames from 'classnames';
const CardInfo = ({ f7router, item, loadData, handleInStorage }) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };

  const onHandleClick = () => {
    f7router.navigate('/yw-retrieval-operate', {
      props: { purchaseNo: item.receiptNumber, orderLineId: item.id, state: item.status }
    });
  };

  const handleConfirm = e => {
    e.stopPropagation();
    handleInStorage(item);
  };
  return (
    <div onClick={onHandleClick} className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles['li-title']}>{item.owNumber || ''}</span>
            <span
              className={styles['li-status']}
              style={item.status == 0 ? onGoingStyle : completeStyle}
            >
              {item.status == 0 ? '出库中' : '已完成'}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>关联单号</span>
            <span className={styles['li-next-content']}>{item.associateNumber || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>操作人</span>
            <span className={styles['li-next-content']}>{item.operatorName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>出库时间</span>
            <span className={styles['li-next-content']}>{item.outStockTime || ''}</span>
          </li>
          {item.status == 0 && (
            <li className={styles['li-button']}>
              <Button
                fill
                round
                className={classnames(styles['baseButton'], styles['confirm-button'])}
                onClick={handleConfirm}
              >
                出库完成
              </Button>
            </li>
          )}
        </ul>

        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default CardInfo;
