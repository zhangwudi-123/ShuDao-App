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
import noStorage from '../../img/noStorage.png';

const { formatTree } = tree;

const InStorageDetail = ({ f7router, orderLineId, purchaseNo, state }) => {
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
    if (orderId) {
      getOrderById(orderId);
    }
  }, [orderId]);

  const getOrderById = async id => {
    setLoading(true);
    await putInStoragApi
      .getOrderById(id)
      .then(res => {
        setInputValue(res.purchaseReceiptNumber);
        setPurchaseOrderDetail(res);
        setTableData(res.lines);
        const list = res.lines;
        const tempList = [];
        for (let i = 0; i < list.length; i++) {
          tempList.push({
            id: list[i]['id'],
            materialId: list[i]['materialId'],
            materialName: list[i]['materialName'],
            materialCode: list[i]['materialCode']
          });
        }
        setInMaterialList(tempList);
        setLoading(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
        setLoading(false);
      });
  };
  const createOrderId = async number => {
    await putInStoragApi
      .createOrderByPurchaseOrder(number)
      .then(res => {
        setOrderId(res.id);
        setPurchaseOrderDetail(res);
        setTableData(res.lines);
        const list = res.lines;
        const tempList = [];
        for (let i = 0; i < list.length; i++) {
          tempList.push({
            id: list[i]['id'],
            materialId: list[i]['materialId'],
            materialName: list[i]['materialName'],
            materialCode: list[i]['materialCode']
          });
        }
        setInMaterialList(tempList);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };

  const handleComplete = () => {
    createDialog('确认入库完成', '请确认是否完成所有入库操作！', function() {
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
          请输入采购单号查询物料信息
        </div>
      )
    ) : (
      <Skeleton />
    );

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
  const handleCreateOrder = () => {
    createOrderId(inputValue);
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a
            onClick={() => f7router.navigate('/putInStorage', { transition: 'ne-backward' })}
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>采购入库单详情</NavTitle>
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
        <div style={{ padding: '16px', paddingBottom: 'var(--ne-content-padding-bottom)' }}>
          <TopInfo f7router={f7router} purchaseOrderDetail={purchaseOrderDetail} />
          <Card className={styles['card-box']}>
            <div className={styles['search-box']}>
              <Input
                type="text"
                placeholder="请输入采购单号"
                onChange={e => setInputValue(e.target.value)}
                className={styles['input-style']}
                value={inputValue}
                disabled={orderId ? true : false}
              />
              <Button
                onClick={handleCreateOrder}
                className={styles['search-btn']}
                disabled={orderId ? true : false}
              >
                确认
              </Button>
            </div>
          </Card>
          <p className={styles['detail-title']}>
            入库物料清单<span>（{tableData.length}）</span>
          </p>
          <div className={styles['list-box']}>{renderCardList()}</div>
        </div>
      </PageContent>
      {orderId && purchaseOrderDetail && purchaseOrderDetail.state != 2 && (
        <div className="ne-bottom-container">
          <Button fill onClick={handleComplete} className="ne-bottom-btn">
            确认入库
          </Button>
        </div>
      )}
    </Page>
  );
};

export default InStorageDetail;
