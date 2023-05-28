import React, { useEffect, useMemo, useState } from 'react';
import { Page, Navbar, PageContent, NavLeft, NavTitle, Button } from '@hvisions/f-ui';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import { onToast, createDialog } from '~/util/home';
import TopInfo from './TopInfo';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';
import { Skeleton, Empty } from '~/components';

const StocktakinDetail = ({ f7router, orderLineId }) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [purchaseOrderDetail, setPurchaseOrderDetail] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  useEffect(() => {
    if (orderId) {
      getOrderById(orderId);
    }
  }, [orderId]);

  const getOrderById = async id => {
    setLoading(true);
    await stockService
      .getStock(id)
      .then(res => {
        setLoading(false);
        setPurchaseOrderDetail(res);
        setTableData(res.stockCheckLineDtos);
      })
      .catch(err => {
        setLoading(false);
        onToast(err.message, styles.toastError);
      });
  };

  const createOrderId = async () => {
    await stockService
      .createStock()
      .then(res => {
        setPurchaseOrderDetail(res);
        setOrderId(res.id);
        onToast('创建盘点单成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };

  const onChangeSelect = () => {};
  const handleClickDisable = () => {};
  const loadData = () => {};
  const handleComplete = async () => {
    // f7router.navigate('/adjustStatus', { props: {} });
    await stockService
      .changeStatus(orderLineId)
      .then(res => {
        getOrderById(orderLineId);
        onToast('状态已调整成功', styles.toastSuccess);
      })
      .catch(err => {
        setLoading(false);
        onToast(err.message, styles.toastError);
      });
  };
  const renderCardList = () =>
    !loading ? (
      !isEmpty(tableData) ? (
        tableData.map(value => (
          <CardInfo key={value.id} item={value} loadData={loadData} f7router={f7router} />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const handleGoBack = () => {
    f7router.navigate('/stocktakinDetail', { transition: 'ne-backward', props: { orderLineId } });
  };
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await getOrderById(orderId);
    await setPtrPreloader(false);
    await done();
  };
  return (
    <Page
      infiniteDistance={50}
      ptrPreloader={ptrPreloader}
      ptr
      onPtrRefresh={onHandleRefresh}
      onPtrPullStart={() => {
        setPtrPreloader(true);
      }}
    >
      <Navbar>
        {/* <a onClick={() => goBack('/wareManage')}  slot="left" className={styles['nav-left']}>
                    <img alt="" style={{ height: 24 }} src={backIcon} />
                </a> */}
        <NavLeft>
          <a onClick={handleGoBack} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>状态调整</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px', paddingBottom: '80px' }}>
        <TopInfo purchaseOrderDetail={purchaseOrderDetail} />
        <p className={styles['detail-title']}>物料信息</p>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      {purchaseOrderDetail && purchaseOrderDetail.checkStatus != 1 && (
        <div className={styles['detail-bottom']}>
          <Button fill onClick={handleComplete} className={styles['bottom-btn']}>
            确认调整
          </Button>
        </div>
      )}
    </Page>
  );
};

export default StocktakinDetail;
