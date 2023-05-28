import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Searchbar,
  NavLeft,
  NavTitle,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListInput
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import rightArrow from '../../img/rightArrow.png';
import styles from './topInfo.scss';

const TopInfo = ({
  f7router,
  purchaseOrderDetail,
  orderId,
  orderLineId,
  handleSave,
  supplier,
  state,
  handleSubmit
}) => {
  const [seletedSupplier, setSeletedSupplier] = useState({ id: '', supplierName: '' });
  const [associateNumber, setAssociateNumber] = useState('');
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  useEffect(() => {
    if (purchaseOrderDetail && purchaseOrderDetail.associateNumber) {
      setAssociateNumber(purchaseOrderDetail.associateNumber);
    }
  }, [purchaseOrderDetail]);
  const onHandleSaveHeader = () => {
    handleSave(associateNumber);
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <List style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <div
            className={styles['list-item']}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span className={styles['li-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.owNumber}
            </span>
            {orderId && (
              <span
                className={'ne-card-tag'}
                style={
                  purchaseOrderDetail && purchaseOrderDetail.status == 0
                    ? onGoingStyle
                    : completeStyle
                }
              >
                {purchaseOrderDetail && purchaseOrderDetail.status == 0 ? '出库中' : '出库完成'}
              </span>
            )}
          </div>
          <div
            className={styles['list-item']}
            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}
          >
            <span className={styles['title']}>出库时间</span>
            <span className={styles['content']}>
              {purchaseOrderDetail && purchaseOrderDetail.outStockTime}
            </span>
          </div>
          <div
            className={styles['list-item']}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span className={styles['title']}>操作人</span>
            <span className={styles['content']}>
              {purchaseOrderDetail && purchaseOrderDetail.operatorName}
            </span>
          </div>
          <ListInput
            type="text"
            placeholder="请输入关联单号"
            clearButton
            value={associateNumber}
            onChange={e => setAssociateNumber(e.target.value)}
            onInputEmpty={() => setAssociateNumber('')}
          ></ListInput>

          <div className={styles['li-btn']}>
            <Button
              disabled={purchaseOrderDetail && purchaseOrderDetail.state == 2 ? true : false}
              fill
              className={styles['top-save']}
              onClick={onHandleSaveHeader}
            >
              保存
            </Button>
            {orderId && purchaseOrderDetail && purchaseOrderDetail.status == 0 ? (
              <Button fill onClick={handleSubmit} className={styles['bottom-btn-confirm']}>
                出库完成
              </Button>
            ) : (
              <div className={styles['bottom-btn-disabled']}>出库完成</div>
            )}
          </div>
        </List>
      </Card>
    </div>
  );
};

export default TopInfo;
