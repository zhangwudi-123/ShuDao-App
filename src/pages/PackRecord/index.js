import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  PageContent,
  Button,
  BlockTitle,
  Card
} from '@hvisions/f-ui';
import moment from 'moment';
import { session, tree } from '@hvisions/toolkit';
import { isEmpty, debounce } from 'lodash';
import { onToast, createDialog } from '~/util/home';
import PackService from '~/api/packRecord';
import styles from './style.scss';

import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
const PackRecord = ({ f7router, ...props }) => {
  const [records, setRecords] = useState([]);
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 10 });
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const loadData = pageInfo => {
    f7router.app.preloader.show();
    PackService.getProductByQuery({ ...pageInfo, state: [3] })
      .then(res => {
        setRecords(res.content);
        setTotalElements(res.totalElements);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
      .finally(() => {
        f7router.app.preloader.hide();
        setShowPreloader(false);
        setAllowInfinite(true);
      });
  };

  const loadMore = () => {
    if (!allowInfinite) return;
    setShowPreloader(true);
    console.log('again');
    if (pageInfo.pageSize >= totalElements) {
      setShowPreloader(false);
      return;
    }
    setAllowInfinite(false);
    const newPageInfo = { ...pageInfo, pageSize: pageInfo.pageSize + 10 };
    setPageInfo(newPageInfo);
    loadData(newPageInfo);
  };

  useEffect(() => {
    loadData({ page: 0, pageSize: 10 });
  }, []);
  const renderCard = () => {
    return records.map((item, index) => {
      return (
        <Card key={index}>
          <ul
            className={styles['card-ul']}
            onClick={() => {
              f7router.navigate('/yw-pack-record-detail', { props: { itemData: item } });
            }}
          >
            <li>
              <span className={styles['li-title']}>{'工单编号:' + (item.workOrderCode || '')}</span>
            </li>
            <li>
              <span className={styles['li-next-title']}>产品编码</span>
              <span className={styles['li-next-title']}>{item.materialCode || ''}</span>
            </li>
            <li>
              <span className={styles['li-next-title']}>产品名称</span>
              <span className={styles['li-next-title']}>{item.materialName || ''}</span>
            </li>
          </ul>
        </Card>
      );
    });
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>收料记录</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        onInfinite={loadMore}
      >
        {renderCard()}
      </PageContent>
    </Page>
  );
};

export default PackRecord;
