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
  Input
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

const { formatTree } = tree;

const InStorageDetail = ({ f7router, orderLineId, purchaseNo, state, supplierId, supplier }) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [treeData, setTreeData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [purchaseOrderDetail, setPurchaseOrderDetail] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inMaterialList, setInMaterialList] = useState([]);

  useEffect(() => {
    if (orderLineId) {
      getOrderById(orderLineId);
    } else {
      createOrderId();
    }
  }, []);

  const getOrderById = async id => {
    setLoading(true);
    await putInStoragApi
      .getOrderById(id)
      .then(res => {
        setPurchaseOrderDetail(res);
        setTableData(res.lines);
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
    await putInStoragApi
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
  const onHandleSaveHeader = async () => {
    const params = {
      ...purchaseOrderDetail,
      supplierId:
        purchaseOrderDetail && purchaseOrderDetail.supplierId
          ? purchaseOrderDetail.supplierId
          : supplier && supplier.id
          ? supplier.id
          : ''
    };
    await putInStoragApi
      .saveHeaderInfo(params)
      .then(res => {
        getOrderById(res);
        setOrderId(res);
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
          请点击下方按钮添加入库物料
        </div>
      )
    ) : (
      <Skeleton />
    );

  const deleteItem = data => {
    putInStoragApi
      .deleteLine(data.id)
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
  const handleCreateOrder = () => {
    createOrderId(inputValue);
  };
  const handleSubmit = () => {
    createDialog('确认入库?', `是否确认入库【${purchaseOrderDetail.receiptNumber}】`, function() {
      try {
        putInStoragApi
          .handleInStore(purchaseOrderDetail.id)
          .then(() => {
            getOrderById(orderId);
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
    f7router.navigate('/manual-batch-list', { props: { purchaseOrderDetail, orderLineId, state } });
  };
  const handleDetail = data => {
    f7router.navigate('/manual-batch-list', {
      props: { batchItem: data, orderLineId, state, material: data }
    });
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a
            onClick={() => f7router.navigate('/manual-putInStorage', { transition: 'ne-backward' })}
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>入库单详情</NavTitle>
      </Navbar>
      <PageContent
        infiniteDistance={50}
        ptrPreloader={ptrPreloader}
        ptr
        onPtrRefresh={onHandleRefresh}
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
      >
        <div style={{ padding: '0 16px', paddingBottom: 'var(--ne-content-padding-bottom)' }}>
          <TopInfo
            f7router={f7router}
            purchaseOrderDetail={purchaseOrderDetail}
            orderId={orderId}
            handleSave={onHandleSaveHeader}
            orderLineId={orderLineId}
            supplier={supplier}
            state={state}
          />
          <p className={styles['detail-title']}>
            入库物料清单<span>（{tableData.length}）</span>
          </p>
          <div className={styles['list-box']}>{renderCardList()}</div>
        </div>
      </PageContent>
      {state != 2 && (
        <div className={styles['detail-bottom']}>
          <Button fill onClick={handleMaterial} className={styles['bottom-btn-add']}>
            <span>+</span>&nbsp;&nbsp;添加入库物料
          </Button>
          {orderId && state == 1 ? (
            <Button fill onClick={handleSubmit} className={styles['bottom-btn-confirm']}>
              确认入库
            </Button>
          ) : (
            <div className={styles['bottom-btn-disabled']}>确认入库</div>
          )}
        </div>
      )}
    </Page>
  );
};

export default InStorageDetail;
