import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Searchbar,
  NavLeft,
  NavTitle,
  Button,
  Card,
  Input
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';

import { onToast, createDialog } from '~/util/home';
import TopInfo from './topInfo';
import CardInfo from './cardInfo';
import { tree } from '@hvisions/toolkit';
import stockService from '~/api/stocktakin';
import { Skeleton, Empty } from '~/components';
import putInStoragApi from '~/api/putInStorage';
import noStorage from '../../img/noStorage.png';
import retrievalApi from '~/api/retrieval';

const { formatTree } = tree;

const BatchList = ({
  f7router,
  orderLineId,
  batchItem,
  state,
  waresId,
  locationId,
  waresName,
  locationName,
  paseBatchNum,
  paseQuantity,
  material,
  purchaseOrderDetail,
  createOrderID
}) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [treeData, setTreeData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [newMaterialId, setNewMaterialId] = useState('');
  const [batchNum, setBatchNum] = useState(paseBatchNum || '');
  const [quantity, setQuantity] = useState(paseQuantity || 1);
  const [remark, setRemark] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState(material || {});

  useEffect(() => {
    loadTreerData();
  }, []);

  useEffect(() => {
    if (batchItem && batchItem.id) {
      getDetailByLineId(batchItem.id);
    }
  }, [batchItem]);

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

  const getDetailByLineId = async id => {
    setLoading(true);
    await retrievalApi
      .getDetailByLineId(id)
      .then(res => {
        setTableData(res);
        setLoading(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
        setLoading(false);
      });
  };
  const getOrderById = async id => {
    setLoading(true);
    await retrievalApi
      .getOrderById(id)
      .then(res => {
        setNewMaterialId(res.stockOutingLineDtos[res.stockOutingLineDtos.length - 1]['id']);
        getDetailByLineId(res.stockOutingLineDtos[res.stockOutingLineDtos.length - 1]['id']);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
        setLoading(false);
      });
  };
  const handleLocation = params => {
    if (state == 1) {
      return;
    }
    f7router.navigate('/retrieval-location', {
      props: {
        orderLineId: orderId,
        batchItem,
        state,
        treeData,
        backWaresId: waresId,
        backLocationId: locationId,
        backWaresName: waresName,
        backLocationName: locationName,
        paseBatchNum: batchNum,
        paseQuantity: quantity,
        material,
        purchaseOrderDetail,
        createOrderID: createOrderID ? createOrderID : newMaterialId
      }
    });
  };
  const handleSelectMaterial = params => {
    if (state == 1 || (batchItem && batchItem.id)) {
      return;
    }
    f7router.navigate('/retrieval-material', {
      props: {
        orderLineId: orderId,
        batchItem,
        state,
        treeData,
        waresId,
        locationId,
        waresName,
        locationName,
        backLocationName: locationName,
        paseBatchNum: batchNum,
        paseQuantity: quantity,
        selectedMaterial: material,
        purchaseOrderDetail,
        createOrderID: createOrderID ? createOrderID : newMaterialId
      }
    });
  };
  const renderCardList = () =>
    !loading ? (
      !isEmpty(tableData) ? (
        tableData.map(value => (
          <CardInfo
            key={value.id}
            item={value}
            f7router={f7router}
            handleDelete={handleDelete}
            orderLineId={orderId}
            state={state}
          />
        ))
      ) : (
        <div className={styles['empty-box']}>
          <img alt="" style={{ width: '100px', height: '100px' }} src={noStorage} />
          暂无批次信息
        </div>
      )
    ) : (
      <Skeleton />
    );

  const deleteItem = async data => {
    await retrievalApi
      .deleteDetail(data.id)
      .then(() => {
        newMaterialId ? getDetailByLineId(newMaterialId) : getDetailByLineId(batchItem.id);
        onToast('删除成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast('删除失败', styles.toastError);
      });
  };
  const handleDelete = item => {
    createDialog('确认删除?', `是否确认删除【${item.batchNumber}】`, function() {
      try {
        deleteItem(item);
      } catch (error) {
        onToast('删除失败', styles.toastError);
      }
    });
  };
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    newMaterialId ? getDetailByLineId(newMaterialId) : getDetailByLineId(batchItem.id);
    await setPtrPreloader(false);
    await done();
  };
  const handleSaveMaterial = async () => {
    if (!batchNum) {
      onToast('请输入批次号', styles.toastWarn);
      return;
    }
    if (isEmpty(material)) {
      onToast('请选择物料', styles.toastWarn);
      return;
    }
    if (!locationId) {
      onToast('请选择仓位', styles.toastWarn);
      return;
    }
    if (isNaN(quantity)) {
      onToast('入库数量必须大于0', styles.toastWarn);
      return;
    }
    if (!+quantity) {
      onToast('入库数量必须大于0', styles.toastWarn);
      return;
    }
    const tempData = {
      batchNumber: batchNum,
      num: quantity,
      description: remark,
      locationId,
      owId: orderId,
      materialId: !isEmpty(material)
        ? material.materialId
          ? material.materialId
          : material.id
        : '',
      owNumber: purchaseOrderDetail ? purchaseOrderDetail.owNumber : ''
    };
    confirmSave(tempData);
  };
  const confirmSave = async (data, type) => {
    await retrievalApi
      .addStoreManual(data)
      .then(res => {
        onToast('出库成功', styles.toastSuccess);
        if (batchItem && batchItem.id) {
          getDetailByLineId(batchItem.id);
        } else {
          !orderId && setOrderId(res);
          getOrderById(res);
        }
        resetSheetData();
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const resetSheetData = () => {
    setBatchNum('');
    //   setSelectedMaterial({})
    setQuantity(1);
    setRemark('');
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
            onClick={() =>
              f7router.navigate('/retrieval-operate', {
                transition: 'ne-backward',
                props: { orderLineId: orderId, state }
              })
            }
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>出库单物料</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px' }}>
        <TopInfo
          f7router={f7router}
          batchItem={batchItem}
          handleSelectLocation={handleLocation}
          waresName={waresName}
          locationName={locationName}
          handleSaveMaterial={handleSaveMaterial}
          waresId={waresId}
          locationId={locationId}
          handleSelectMaterial={handleSelectMaterial}
          selectedMaterial={selectedMaterial}
          state={state}
          batchNum={batchNum}
          setBatchNum={setBatchNum}
          quantity={quantity}
          setQuantity={setQuantity}
          remark={remark}
          setRemark={setRemark}
        />
        <p className={styles['detail-title']}>批次列表</p>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
    </Page>
  );
};

export default BatchList;
