import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Popup,
  Link,
  NavRight,
  Searchbar,
  NavLeft,
  NavTitle,
  Toggle,
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
import styles from './TopCard.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import scanIcon from '../../img/scanwhite.png';

const TopInfo = ({ f7router, detailInfo, handleScan }) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  const handleSelectMaterial = () => {
    // f7router.navigate('/material', { props: {purchaseOrderDetail} });
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li style={{ marginBottom: '8px' }}>
            <span className={styles['li-next-title']}>物料名称</span>
            <span className={styles['li-next-title']} style={{ color: '#595959' }}>
              {detailInfo && detailInfo.materialName}
            </span>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <span className={styles['li-next-title']}>仓位</span>
            <span className={styles['li-next-title']} style={{ color: '#595959' }}>
              {detailInfo && detailInfo.parentLocationCode}&nbsp;&nbsp;
              {detailInfo && detailInfo.parentLocationName}
            </span>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <span className={styles['li-next-title']}>仓位</span>
            <span className={styles['li-next-title']} style={{ color: '#595959' }}>
              {detailInfo && detailInfo.locationCode}&nbsp;&nbsp;
              {detailInfo && detailInfo.locationName}
            </span>
          </li>
          <li className={styles['li-operate']}>
            <Button fill onClick={handleScan} className={styles['bottom-btn']}>
              <img src={scanIcon} alt="scan" width="24" height="24" />
              扫描批次号
            </Button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default TopInfo;
