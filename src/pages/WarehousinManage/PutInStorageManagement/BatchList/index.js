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
  paseQuantity
}) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [treeData, setTreeData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  useEffect(() => {
    loadTreerData();
  }, []);

  useEffect(() => {
    if (batchItem) {
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
    await putInStoragApi
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
  const handleLocation = params => {
    f7router.navigate('/order-location', {
      props: {
        orderLineId,
        batchItem,
        state,
        treeData,
        backWaresId: waresId,
        backLocationId: locationId,
        backWaresName: waresName,
        backLocationName: locationName,
        paseBatchNum: params.batchNum,
        paseQuantity: params.quantity
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
            orderLineId={orderLineId}
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
    await putInStoragApi
      .deleteDetail(data.id)
      .then(() => {
        getDetailByLineId(batchItem.id);
        onToast('删除成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast('删除失败', styles.toastError);
      });
  };
  const handleDelete = item => {
    createDialog('确认删除?', `是否确认删除【${item.batchNum}】`, function() {
      try {
        deleteItem(item);
      } catch (error) {
        onToast('删除失败', styles.toastError);
      }
    });
  };
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await getDetailByLineId(batchItem.id);
    await setPtrPreloader(false);
    await done();
  };
  const handleSaveMaterial = async params => {
    const tempData = {
      ...params,
      locationId,
      headerId: orderLineId,
      material: batchItem.materialId
    };
    if (!tempData.batchNum) {
      onToast('请输入批次号', styles.toastWarn);
      return;
    }
    if (isNaN(tempData.quantity) || tempData.quantity == 0) {
      onToast('入库数量必须大于0', styles.toastWarn);
      return;
    }
    await putInStoragApi
      .addStoreByMaterial(tempData)
      .then(res => {
        getDetailByLineId(batchItem.id);
        onToast('入库成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
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
    >
      <Navbar>
        <NavLeft>
          <a
            onClick={() =>
              f7router.navigate('/inStorage-operate', {
                transition: 'ne-backward',
                props: { orderLineId: orderLineId, state }
              })
            }
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>采购入库单详情</NavTitle>
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
          paseBatchNum={paseBatchNum}
          paseQuantity={paseQuantity}
        />
        <p className={styles['detail-title']}>批次列表</p>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
    </Page>
  );
};

export default BatchList;
