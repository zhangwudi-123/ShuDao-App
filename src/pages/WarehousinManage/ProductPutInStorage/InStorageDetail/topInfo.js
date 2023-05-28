import React, { useEffect, useMemo, useState } from 'react';
import { Card, Button, List, ListItem } from '@hvisions/f-ui';

import styles from './topInfo.scss';

const TopInfo = ({
  f7router,
  purchaseOrderDetail,
  orderId,
  orderLineId,
  handleSave,
  supplier,
  state
}) => {
  const [seletedSupplier, setSeletedSupplier] = useState({ id: '', supplierName: '' });

  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  useEffect(() => {
    if (purchaseOrderDetail && purchaseOrderDetail.supplierId) {
      setSeletedSupplier({
        id: purchaseOrderDetail.supplierId,
        supplierName: purchaseOrderDetail.supplierName
      });
    }
    if (supplier && supplier.id) {
      setSeletedSupplier({ id: supplier.id, supplierName: supplier.supplierName });
    }
  }, [purchaseOrderDetail, supplier]);

  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.receiptNumber}
            </span>
            {orderId && (
              <span
                className={'ne-card-tag'}
                style={
                  purchaseOrderDetail && purchaseOrderDetail.state == 1
                    ? onGoingStyle
                    : completeStyle
                }
              >
                {purchaseOrderDetail && purchaseOrderDetail.state == 1 ? '入库中' : '入库完成'}
              </span>
            )}
          </li>
          <li>
            <span className={styles['li-next-title']}>生产订单号</span>
            <span className={styles['li-next-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.purchaseReceiptNumber}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>入库时间</span>
            <span className={styles['li-next-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.actualInTime}
            </span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default TopInfo;
