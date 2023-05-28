import React, { useEffect, useMemo, useState } from 'react';
import { Card } from '@hvisions/f-ui';

import styles from './topInfo.scss';

const TopInfo = ({ f7router, purchaseOrderDetail }) => {
  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.purchaseReceiptNumber}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>入库单号</span>
            <span className={styles['li-next-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.receiptNumber}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>供应商</span>
            <span className={styles['li-next-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.supplierName}
            </span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default TopInfo;
