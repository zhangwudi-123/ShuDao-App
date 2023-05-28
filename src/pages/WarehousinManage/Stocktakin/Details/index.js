import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Popup,
  Searchbar,
  NavLeft,
  NavTitle,
  Button
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import { onToast, createDialog } from '~/util/home';
import ItemTopInfo from './ItemTopInfo';
import ItemCardInfo from './ItemCardInfo';
import { tree } from '@hvisions/toolkit';
import stockService from '~/api/stocktakin';
import { Skeleton, Empty } from '~/components';

const { formatTree } = tree;

const StocktakinDetail = ({
  f7router,
  orderLineId,
  selectedWaresId,
  selectedLocationId,
  waresName,
  locationName,
  initData
}) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [treeData, setTreeData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [purchaseOrderDetail, setPurchaseOrderDetail] = useState(initData || null);
  const [tableData, setTableData] = useState([]);
  const [waresId, setWaresId] = useState(selectedWaresId);
  const [locationId, setLocationId] = useState(selectedLocationId);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  useEffect(() => {
    loadTreerData();
  }, []);

  useEffect(() => {
    if (orderId) {
      getOrderById(orderId);
    }
  }, [orderId]);

  useEffect(() => {
    if (!selectedWaresId && !orderLineId) {
      createOrderId();
    }
    if (waresId && !orderLineId) {
      const params = { ...purchaseOrderDetail };
      params.parentLocationId = selectedWaresId;
      params.locationId = selectedLocationId;
      params.parentLocationName = waresName;
      params.locationName = locationName;
      setPurchaseOrderDetail(params);
    }
  }, [waresId]);

  const loadTreerData = async () => {
    await stockService
      .findAllByQuery()
      .then(res => {
        setTreeData(formatTree(res));
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };

  const getOrderById = async id => {
    setLoading(true);
    await stockService
      .getStock(id)
      .then(res => {
        const params = { ...res };
        if (selectedWaresId) {
          params.parentLocationId = selectedWaresId;
        }
        if (selectedLocationId) {
          params.locationId = selectedLocationId;
        }
        if (waresName) {
          params.parentLocationName = waresName;
        }
        if (locationName) {
          params.locationName = locationName;
        }
        setPurchaseOrderDetail(params);
        if (!selectedWaresId || selectedLocationId == res.locationId) {
          setTableData(res.stockCheckLineDtos);
        } else if (
          params.parentLocationId != selectedWaresId ||
          params.locationId != selectedLocationId
        ) {
          setTableData([]);
        }

        selectedWaresId ? setWaresId(selectedWaresId) : setWaresId(res.parentLocationId);
        selectedLocationId ? setLocationId(selectedLocationId) : setLocationId(res.locationId);
        setLoading(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
        setLoading(false);
      });
  };
  const createOrderId = async () => {
    await stockService
      .createStock()
      .then(res => {
        setPurchaseOrderDetail(res);
        setOrderId(res.id);
        // onToast('创建盘点单成功', styles.toastSuccess)
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const loadData = () => {};
  const handleComplete = () => {
    f7router.navigate('/adjustStatus', { props: { orderLineId: orderId } });
  };
  const handleLocation = () => {
    f7router.navigate('/location', {
      props: { orderLineId: orderId, purchaseOrderDetail, treeData }
    });
  };
  const renderCardList = () =>
    !loading ? (
      !isEmpty(tableData) ? (
        tableData.map(value => (
          <ItemCardInfo
            key={value.id}
            item={value}
            loadData={loadData}
            f7router={f7router}
            handleDelete={handleDelete}
            orderLineId={orderLineId}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  // 一键导入 imporMaterail
  const handleImportMaterail = async () => {
    if (purchaseOrderDetail.checkStatus == 1) {
      onToast('调库已完成，请勿继续操作', styles.toastWarn);
      return;
    }
    console.log('purchaseOrderDetail---', purchaseOrderDetail);
    const params = {
      headerId: orderId,
      locationId,
      scNumber: purchaseOrderDetail.scNumber
    };
    setLoading(true);
    await stockService
      .imporMaterail(params)
      .then(res => {
        setLoading(false);
        setTableData(res.stockCheckLineDtos);
        onToast('导入成功', styles.toastSuccess);
      })
      .catch(err => {
        setLoading(false);
        onToast(err.message, styles.toastError);
      });
  };
  const deleteItem = data => {
    stockService
      .deleteLineById(data.id)
      .then(() => {
        getOrderById(orderLineId);
        onToast('删除成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast('删除失败', styles.toastError);
      });
  };
  const handleDelete = item => {
    createDialog(
      '确认删除?',
      `是否确认删除【${item.materialCode}-${item.materialName}】`,
      function() {
        try {
          deleteItem(item);
        } catch (error) {
          onToast('删除失败', styles.toastError);
        }
      }
    );
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
        <NavLeft>
          <a
            onClick={() => f7router.navigate('/stocktakin', { transition: 'ne-backward' })}
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>盘库记录详情</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px', paddingBottom: '72px' }}>
        <ItemTopInfo
          f7router={f7router}
          purchaseOrderDetail={purchaseOrderDetail}
          handleImportMaterail={handleImportMaterail}
          waresId={waresId}
          handleLocation={handleLocation}
          waresName={waresName}
          locationName={locationName}
        />
        <p className={styles['detail-title']}>物料信息</p>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      <div className="ne-bottom-container">
        <Button fill onClick={handleComplete} className="ne-bottom-btn">
          完成
        </Button>
      </div>
    </Page>
  );
};

export default StocktakinDetail;
