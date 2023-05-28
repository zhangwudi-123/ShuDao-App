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
  Button
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import rightArrow from '../../img/rightArrow.png';
import styles from './itemTopInfo.scss';

const ItemTopInfo = ({
  f7router,
  purchaseOrderDetail,
  handleImportMaterail,
  waresId,
  handleLocation,
  waresName,
  locationName
}) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  const spanBoxStyle = {
    height: '44px',
    lineHeight: '44px',
    display: 'flex',
    justifyContent: 'space-between'
  };
  const spanStyle = {
    display: 'block',
    width: '40%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const handleSelectMaterial = () => {
    f7router.navigate('/material', { props: { purchaseOrderDetail } });
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li style={{ marginBottom: '8px' }}>
            <span className={styles['li-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.scNumber}
            </span>
            <span
              className={styles['li-status']}
              style={
                purchaseOrderDetail && purchaseOrderDetail.checkStatus == 1
                  ? completeStyle
                  : onGoingStyle
              }
            >
              {purchaseOrderDetail && !purchaseOrderDetail.checkStatus ? '调库中' : '已结束'}
            </span>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <span className={styles['li-next-title']}>操作人</span>
            <span className={styles['li-next-title']}>
              {purchaseOrderDetail && purchaseOrderDetail.operator}
            </span>
          </li>
          {waresId !== undefined && (
            <li
              className={styles['li-location']}
              style={{ marginBottom: '12px', paddingLeft: '16px' }}
              onClick={handleLocation}
            >
              {purchaseOrderDetail && (
                <div className={styles['location-name']}>
                  <span style={{ ...spanStyle }}>{purchaseOrderDetail.locationName}</span>

                  {/* <span>{purchaseOrderDetail.parentLocationName}</span>
                            <span>-</span>
                            <span>{purchaseOrderDetail.locationName}</span> */}
                </div>
              )}
              <img
                src={rightArrow}
                alt="rightArrow"
                width="24"
                height="24"
                style={{ marginTop: '8px' }}
              />
            </li>
          )}
          {waresId === undefined && (
            <li
              className={styles['li-location']}
              style={{ marginBottom: '12px', paddingLeft: '40px' }}
              onClick={handleLocation}
            >
              {
                <div className={styles['location-name']}>
                  <span style={{ color: 'rgba(89, 89, 89, 0.5)' }}>请选择仓位</span>
                </div>
              }
              <img
                src={rightArrow}
                alt="rightArrow"
                width="24"
                height="24"
                style={{ marginTop: '8px' }}
              />
            </li>
          )}
          {waresId !== undefined && (
            <li>
              <Button className={styles['item-btn']} onClick={handleImportMaterail}>
                一键导入
              </Button>
              <Button className={styles['item-btn']} onClick={handleSelectMaterial}>
                选择物料
              </Button>
            </li>
          )}
          {waresId === undefined && (
            <li>
              <Button className={styles['item-btn-disabled']}>一键导入</Button>
              <Button className={styles['item-btn-disabled']}>选择物料</Button>
            </li>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default ItemTopInfo;
