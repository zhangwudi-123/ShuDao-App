import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Popup,
  Searchbar,
  NavLeft,
  NavTitle,
  Button,
  Card,
  Input,
  Sheet,
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
import styles from './style.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import { onToast, createDialog } from '~/util/home';
import TopInfo from './topInfo';
import CardInfo from './cardInfo';
import { tree } from '@hvisions/toolkit';
import stockService from '~/api/stocktakin';
import { Skeleton, Empty } from '~/components';
import putInStoragApi from '~/api/putInStorage';
import noManualStorage from '../../img/noManualStorage.png';
import retrievalApi from '~/api/retrieval';
import SheetInfo from './SheetInfo';

const { formatTree } = tree;

const InStorageDetail = ({
  f7router,
  orderLineId,
  purchaseNo,
  state,
  supplierId,
  supplier,
  material,
  paseQuantity,
  paseRemark,
  type,
  initPurchaseOrderDetail
}) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [locationList, setLocationList] = useState([]);
  const [purchaseOrderDetail, setPurchaseOrderDetail] = useState(initPurchaseOrderDetail || null);
  const [tableData, setTableData] = useState([]);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inMaterialList, setInMaterialList] = useState([]);
  const [sheetOpened, setSheetOpened] = useState(false);
  const [quantity, setQuantity] = useState(paseQuantity || 1);
  const [remark, setRemark] = useState(paseRemark || '');
  const [selectedMaterial, setSelectedMaterial] = useState(material || {});

  useEffect(() => {
    if (orderLineId) {
      getOrderById(orderLineId);
    } else {
      if (initPurchaseOrderDetail && initPurchaseOrderDetail.owNumber) {
        return;
      }
      createOrderId();
    }
  }, []);

  useEffect(() => {
    if (type) {
      setTimeout(() => {
        setSheetOpened(true);
      }, 500);
    }
  }, [type]);

  const getOrderById = async id => {
    setLoading(true);
    await retrievalApi
      .getOrderById(id)
      .then(res => {
        setPurchaseOrderDetail(res);
        setTableData(res.stockOutingLineDtos);
        setOrderId(res.id);
        setLoading(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
        setLoading(false);
      });
  };
  const createOrderId = async () => {
    setLoading(true);
    await retrievalApi
      .createManual()
      .then(res => {
        setPurchaseOrderDetail(res);
        res.id && setOrderId(res.id);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        onToast(err.message, styles.toastError);
      });
  };
  const onHandleSaveHeader = async data => {
    const params = {
      ...purchaseOrderDetail,
      associateNumber: data
    };
    await retrievalApi
      .saveHeaderInfo(params)
      .then(res => {
        orderId ? getOrderById(orderId) : getOrderById(res);
        !orderId && setOrderId(res);
        onToast('保存成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
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
            orderLineId={orderLineId}
            state={state}
            handleDetail={handleDetail}
          />
        ))
      ) : (
        <div className={styles['empty-box']}>
          <img alt="" style={{ width: '100px', height: '100px' }} src={noManualStorage} />
          请点击下方按钮添加出库物料
        </div>
      )
    ) : (
      <Skeleton />
    );

  const deleteItem = data => {
    retrievalApi
      .deleteLine(data.id)
      .then(() => {
        getOrderById(orderId);
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

  const handleSubmit = () => {
    createDialog('确认入库?', `是否确认出库操作【${purchaseOrderDetail.owNumber}】`, function() {
      try {
        retrievalApi
          .handleInStore(purchaseOrderDetail.id)
          .then(() => {
            getOrderById(purchaseOrderDetail.id);
            onToast('提交成功', styles.toastSuccess);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          });
      } catch (error) {
        onToast(error.message, styles.toastError);
      }
    });
  };
  const handleMaterial = () => {
    setSheetOpened(true);
  };
  const handleDetail = data => {
    f7router.navigate('/retrieval-batch-list', {
      props: { purchaseOrderDetail, batchItem: data, orderLineId: orderId, state, material: data }
    });
  };
  const handleCloseSheet = () => {
    setSelectedMaterial(null);
    setRemark('');
    setQuantity(1);
    setSheetOpened(false);
  };
  const handleSelectMaterial = () => {
    setSheetOpened(false);
    f7router.navigate('/retrieval-material', {
      props: {
        orderLineId: orderId,
        state,
        paseRemark: remark,
        paseQuantity: quantity,
        selectedMaterial,
        initPurchaseOrderDetail: purchaseOrderDetail,
        type: 1
      }
    });
  };
  const handleAddMaterial = type => {
    const params = {
      headerId: orderId ? orderId : '',
      owNumber: purchaseOrderDetail.owNumber,
      materialId: selectedMaterial.id,
      description: remark,
      planNum: quantity
    };
    confirmSaveOut(params, type);
  };
  const confirmSaveOut = async (data, type) => {
    await retrievalApi
      .createLine(data)
      .then(res => {
        onToast('创建出库清单成功', styles.toastSuccess);
        !orderId && setOrderId(res);
        orderId ? getOrderById(orderLineId) : getOrderById(res);
        resetSheetData();
        if (type == 'save') {
          setSheetOpened(false);
        }
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const resetSheetData = () => {
    setSelectedMaterial({});
    setQuantity(1);
    setRemark('');
  };
  const handleOut = () => {
    f7router.navigate('/retrieval-batch-list', {
      props: { purchaseOrderDetail, orderLineId: orderId, state, material: selectedMaterial }
    });
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
      className={styles.pageContainer}
    >
      <Navbar>
        <NavLeft>
          <a
            onClick={() =>
              f7router.navigate('/retrieval-managerment', { transition: 'ne-backward' })
            }
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>出库单详情</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px', paddingBottom: 'var(--ne-content-padding-bottom)' }}>
        <TopInfo
          f7router={f7router}
          purchaseOrderDetail={purchaseOrderDetail}
          orderId={orderId}
          handleSave={onHandleSaveHeader}
          orderLineId={orderLineId}
          supplier={supplier}
          state={state}
          handleSubmit={handleSubmit}
        />
        <p className={styles['detail-title']}>
          出库物料清单<span>（{tableData.length}）</span>
        </p>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      {purchaseOrderDetail && purchaseOrderDetail.status != 1 && (
        <div className={styles['detail-bottom']}>
          <Button fill onClick={handleMaterial} className={styles['bottom-btn-add']}>
            <span>+</span>&nbsp;&nbsp;添加物料
          </Button>
          {purchaseOrderDetail && purchaseOrderDetail.status != 1 ? (
            <Button fill onClick={handleOut} className={styles['bottom-btn-confirm']}>
              直接出库
            </Button>
          ) : (
            <div className={styles['bottom-btn-disabled']}>直接出库</div>
          )}
        </div>
      )}
      <Sheet
        className={styles['demo-sheet']}
        opened={sheetOpened}
        onSheetClosed={() => {
          setSheetOpened(false);
        }}
        backdrop
      >
        <SheetInfo
          handleAddMaterial={handleAddMaterial}
          handleSubmit={handleSubmit}
          quantity={quantity}
          setQuantity={setQuantity}
          remark={remark}
          setRemark={setRemark}
          selectedMaterial={selectedMaterial}
          handleCloseSheet={handleCloseSheet}
          handleSelectMaterial={handleSelectMaterial}
        />
      </Sheet>
    </Page>
  );
};

export default InStorageDetail;
