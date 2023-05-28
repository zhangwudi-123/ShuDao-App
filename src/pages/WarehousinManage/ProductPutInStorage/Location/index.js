import React, { useEffect, useMemo, useState } from 'react';
import { Page, Navbar, PageContent, Searchbar, NavLeft, NavTitle, Button } from '@hvisions/f-ui';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import { tree } from '@hvisions/toolkit';
import stockService from '~/api/stocktakin';
import { Empty } from '~/components';
import { onToast } from '~/util/home';

const { formatTree } = tree;

const LocationSelect = ({
  f7router,
  orderLineId,
  batchItem,
  state,
  treeData,
  backWaresId,
  backLocationId,
  backWaresName,
  backLocationName,
  paseBatchNum,
  paseQuantity,
  material,
  purchaseOrderDetail,
  createOrderID
}) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [locationList, setLocationList] = useState([]);
  const [waresId, setWaresId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [waresName, setWaresName] = useState('');
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    backWaresId && setWaresId(backWaresId);
    backWaresName && setWaresName(backWaresName);
    backLocationId && setLocationId(backLocationId);
    backLocationName && setLocationName(backLocationName);
    const data = treeData && treeData.length > 0 && treeData.filter(item => item.id == backWaresId);
    data && data.length > 0 && setLocationList(data[0].children);
  }, []);

  const handleComplete = () => {
    if (!waresId || !locationId) {
      onToast('请选择仓位信息', styles.toastWarn);
      return;
    }
    f7router.navigate('/manual-batch-list', {
      props: {
        orderLineId,
        batchItem,
        state,
        treeData,
        waresId,
        locationId,
        waresName,
        locationName,
        paseBatchNum,
        paseQuantity,
        material,
        purchaseOrderDetail,
        createOrderID
      }
    });
  };
  const handleGoBack = () => {
    f7router.navigate('/manual-batch-list', {
      transition: 'ne-backward',
      props: {
        orderLineId,
        batchItem,
        state,
        treeData,
        waresId,
        locationId,
        waresName,
        locationName,
        paseBatchNum,
        paseQuantity,
        material,
        purchaseOrderDetail,
        createOrderID
      }
    });
  };
  const handleWares = item => {
    setWaresId(item.id);
    setLocationList(item.children);
    setLocationId(item.id);
    setLocationName(item.name);
    setWaresName(item.name);
  };
  const handleLocation = item => {
    setLocationId(item.id);
    setLocationName(item.name);
  };
  return (
    <Page>
      <Navbar>
        <NavLeft>
          <a onClick={handleGoBack} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>选择仓位</NavTitle>
      </Navbar>
      <div className={styles['content-box']}>
        <div className={styles['wares-box']}>
          {!isEmpty(treeData) &&
            treeData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={
                    waresId == item.id ? styles['wares-item-active'] : styles['wares-item']
                  }
                  onClick={() => {
                    handleWares(item);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
        </div>
        {/* <div className={styles['location-box']}>
          {!isEmpty(locationList) &&
            locationList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={
                    locationId == item.id ? styles['location-item-active'] : styles['location-item']
                  }
                  onClick={() => {
                    handleLocation(item);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
        </div> */}
        <div className="ne-bottom-container">
          <Button fill onClick={handleComplete} className="ne-bottom-btn">
            确认选中
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default LocationSelect;
