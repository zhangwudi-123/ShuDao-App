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

  const selectCB = () => {
    if (purchaseOrderDetail && purchaseOrderDetail.state == 2) {
      return;
    }
    f7router.navigate('/supplier', {
      props: { orderLineId, purchaseOrderDetail, seletedSupplier }
    });
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <List style={{ padding: '16px' }}>
          <div
            className={styles['list-item']}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
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
          </div>
          {seletedSupplier && seletedSupplier.supplierName ? (
            <ListItem
              link="#"
              title={
                <div style={{ height: '36px', lineHeight: '36px', color: '#00000073' }}>
                  {seletedSupplier.supplierName}
                </div>
              }
              after=""
              onClick={selectCB}
            />
          ) : (
            <ListItem
              link="#"
              title={
                <div style={{ height: '36px', lineHeight: '36px', color: '#00000073' }}>
                  请选择供应商
                </div>
              }
              after=""
              onClick={selectCB}
            />
          )}
          <div className={styles['list-item']}>
            <Button
              disabled={purchaseOrderDetail && purchaseOrderDetail.state == 2 ? true : false}
              fill
              className={styles['top-save']}
              onClick={handleSave}
            >
              保存
            </Button>
          </div>
        </List>
      </Card>
    </div>
  );
};

export default TopInfo;
