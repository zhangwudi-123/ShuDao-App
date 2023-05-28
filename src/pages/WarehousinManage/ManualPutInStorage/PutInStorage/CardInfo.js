import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
import classnames from 'classnames';
const CardInfo = ({ f7router, item, loadData, handleDelete, handleInStorage }) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };

  const onHandleClick = () => {
    f7router.navigate('/manual-inStorage-operate', {
      props: { purchaseNo: item.receiptNumber, orderLineId: item.id, state: item.state }
    });
  };
  const handleDeleteOrder = e => {
    e.stopPropagation();
    handleDelete(item);
  };
  const handleConfirm = e => {
    e.stopPropagation();
    handleInStorage(item);
  };
  return (
    <div onClick={onHandleClick} className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.receiptNumber || ''}</span>
            <span
              className={styles['li-status']}
              style={item.state == 1 ? onGoingStyle : completeStyle}
            >
              {item.state == 1 ? '执行中' : '已完成'}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>供应商</span>
            <span className={styles['li-next-title']}>{item.supplierName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>操作人</span>
            <span className={styles['li-next-title']}>{item.operator || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>收货时间</span>
            <span className={styles['li-next-title']}>{item.actualInTime || ''}</span>
          </li>
          {item.state == 1 && (
            <li className={styles['li-button']}>
              <Button
                fill
                round
                className={classnames(styles['baseButton'], styles['delete-button'])}
                onClick={handleDeleteOrder}
                style={item.state == 1 ? { marginRight: '8px' } : null}
              >
                删除
              </Button>
              <Button
                fill
                round
                className={classnames(styles['baseButton'], styles['confirm-button'])}
                onClick={handleConfirm}
              >
                确认入库
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
