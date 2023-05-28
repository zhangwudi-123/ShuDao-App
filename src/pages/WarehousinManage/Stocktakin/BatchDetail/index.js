import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Popup,
  Searchbar,
  NavLeft,
  NavTitle,
  Button,
  Sheet,
  Input
} from '@hvisions/f-ui';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import { onToast, createDialog } from '~/util/home';
import TopInfo from './TopCard';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';
import { Skeleton, Empty } from '~/components';
import SheetInfo from './SheetInfo';

const StocktakinDetail = ({ f7router, batchItem, orderLineId }) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(orderLineId);
  const [tableData, setTableData] = useState([]);

  const [detailInfo, setDetailInfo] = useState(null);
  const [sheetOpened, setSheetOpened] = useState(false);
  const [batchSheetOpened, setBatchSheetOpened] = useState(false);
  const [selectedBatchItem, setSelectedBatchItem] = useState(null);
  const [stockInputValue, setStockInputValue] = useState(1);
  const [scanVisible, setScanVisible] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (batchItem && batchItem.id) {
      getDetailByLineId(batchItem.id);
    }
  }, [batchItem]);

  const getDetailByLineId = async id => {
    setLoading(true);
    await stockService
      .getDetailByLineId(id)
      .then(res => {
        setLoading(false);
        setDetailInfo(res);
        setTableData(res.stockCheckDetailDtos);
      })
      .catch(err => {
        setLoading(false);
        onToast(err.message, styles.toastError);
      });
  };

  const loadData = () => {};
  const handleComplete = () => {
    f7router.navigate('/adjustStatus', { props: { orderLineId } });
  };
  const handleLocation = () => {
    f7router.navigate('/location', { props: { orderLineId } });
  };
  const renderCardList = () =>
    !loading ? (
      !isEmpty(tableData) ? (
        tableData.map(value => (
          <CardInfo
            key={value.id}
            item={value}
            loadData={loadData}
            f7router={f7router}
            handleDeleteBatch={handleDeleteBatch}
            handleFocus={handleFocus}
            isDisabled={isDisabled}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const deleteItem = data => {
    stockService
      .deleteMaterialDetail(data.id)
      .then(() => {
        getDetailByLineId(batchItem.id);
        onToast('删除成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleDeleteBatch = item => {
    createDialog('确认删除?', `是否确认删除【${item.batchNumber}】`, function() {
      try {
        deleteItem(item);
      } catch (error) {
        onToast('删除失败', styles.toastError);
      }
    });
  };
  const handleGoBack = () => {
    f7router.navigate('/stocktakinDetail', { transition: 'ne-backward', props: { orderLineId } });
  };
  const handleSave = () => {};
  const handleScan = () => {
    setScanVisible(true);
    // findMaterialByBatchNum('BSX001001')
  };
  const handleCloseSheet = () => {
    setSheetOpened(false);
  };
  const handleSaveBatch = async value => {
    if (isNaN(value) || !value) {
      onToast('数量应大于0', styles.toastWarn);
      return;
    }
    const params = {
      batchNumber: selectedBatchItem.batchNumber,
      checkNum: value,
      lineId: selectedBatchItem.lineId,
      id: selectedBatchItem.id
    };
    await stockService
      .updateDetail(params)
      .then(res => {
        onToast('更新成功', styles.toastSuccess);
        getDetailByLineId(batchItem.id);
        setSheetOpened(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleFocus = (e, item) => {
    setIsDisabled(true);
    setBatchSheetOpened(true);
    setSelectedBatchItem(item);

    setStockInputValue(item.checkNum);
  };
  const handleCloseBatchSheet = () => {
    setBatchSheetOpened(false);
    setIsDisabled(false);
  };
  const handleSaveStock = async () => {
    const params = {
      batchNumber: selectedBatchItem.batchNumber,
      checkNum: stockInputValue,
      lineId: selectedBatchItem.lineId,
      id: selectedBatchItem.id
    };
    await stockService
      .updateDetail(params)
      .then(res => {
        getDetailByLineId(batchItem.id);
        setBatchSheetOpened(false);
        setIsDisabled(false);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleNext = async text => {
    try {
      findMaterialByBatchNum(text);
    } catch (error) {
      onToast('物料匹配失败！', styles.toastError);
    } finally {
      setScanVisible(false);
    }
  };
  const renderVisible = () => {
    if (scanVisible) return <ScanPop $f7router={f7router} goNext={handleNext} />;
  };
  const findMaterialByBatchNum = async batchNumber => {
    const params = {
      batchNumber,
      lineId: detailInfo.id
    };
    await stockService
      .findMaterialByBatchNum(params)
      .then(res => {
        if (isEmpty(res.stockCheckDetailDtos)) {
          onToast('物料匹配失败！', styles.toastError);
        } else {
          onToast('物料匹配成功！', styles.toastSuccess);
          setSelectedBatchItem(res.stockCheckDetailDtos[0]);
          getDetailByLineId(batchItem.id);
          setSheetOpened(true);
        }
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await getDetailByLineId(batchItem.id);
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
          <a onClick={handleGoBack} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>批次详情</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px', paddingBottom: '16px' }}>
        <TopInfo f7router={f7router} detailInfo={detailInfo} handleScan={handleScan} />
        <p className={styles['detail-title']}>批次信息</p>
        {/* <div className={styles['list-box']}> */}
        {renderCardList()}
        {/* </div> */}
      </div>
      {/* <div className={styles['detail-bottom']}>
                <Button fill onClick={handleSave} className={styles['bottom-btn']}>保存</Button>
            </div> */}
      <Sheet
        className={styles['demo-sheet']}
        opened={sheetOpened}
        onSheetClosed={() => {
          setSheetOpened(false);
        }}
        backdrop
      >
        <div>
          <div className={styles['sheet-top']}>
            <div className={styles['sheet-top-close']} onClick={handleCloseSheet}>
              X
            </div>
            <div className={styles['sheet-top-title']}>
              {selectedBatchItem && selectedBatchItem.batchNumber}
            </div>
          </div>
          <SheetInfo handleSaveBatch={handleSaveBatch} selectedBatchItem={selectedBatchItem} />
        </div>
      </Sheet>
      <Sheet
        className={styles['demo-sheet']}
        opened={batchSheetOpened}
        onSheetClosed={() => {
          setBatchSheetOpened(false);
          setIsDisabled(false);
        }}
        backdrop
        style={{ height: '186px' }}
      >
        <div>
          <div className={styles['sheet-top']}>
            <div className={styles['sheet-top-close']} onClick={handleCloseBatchSheet}>
              X
            </div>
            <div className={styles['sheet-top-title']}>YQJ000001001</div>
          </div>
          <div className={styles['sheet-content']}>
            <span>盘点数量</span>
            <Input
              onChange={e => setStockInputValue(e.target.value)}
              className={styles['input-style']}
              type="number"
              value={stockInputValue}
            />
          </div>
          <div className={styles['btn-box']}>
            <Button outline className={styles['cancel-btn']} onClick={handleCloseBatchSheet}>
              取消
            </Button>
            <Button className={styles['confirm-btn']} onClick={handleSaveStock}>
              保存
            </Button>
          </div>
        </div>
      </Sheet>
      <Popup
        opened={scanVisible}
        // swipeToClose
        onPopupClosed={() => {
          setScanVisible(false);
        }}
      >
        {renderVisible()}
      </Popup>
    </Page>
  );
};

export default StocktakinDetail;
