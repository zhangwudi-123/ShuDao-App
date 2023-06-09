import React, { useEffect, useRef, useState } from 'react';
import { Toolbar, Link, Tabs, Tab, Page, Navbar, NavLeft, NavTitle, NavRight, Searchbar, BlockTitle, ListInput, List, Icon, PageContent, Button, Input, Form } from '@hvisions/f-ui';
import { Sheet, f7, } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n, } from '@hvisions/toolkit';
import { goBack, onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialDeliveryApi from '~/api/RawMaterialDelivery';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';
import Manual from './Manual/index';

const getFormattedMsg = i18n.getFormattedMsg;

const RawMaterialDelivery = ({ f7router }) => {
  const [tabKey, setTabKey] = useState(0);

  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);



  const [manualSheetOpen, setManualSheetOpen] = useState(false);
  const [trayNumber, setTrayNumber] = useState('');
  const [materialId, setMaterialId] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [feedingName, setFeedingName] = useState('');
  const [middle, setMiddle] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [num, setNum] = useState('');

  const [createSheetOpen, setCreateSheetOpen] = useState(false);
  const [createSheetValue, setCreateSheetValue] = useState({
    tyayNumber: '', rawMaterial: '',
  });
  const [tyayNumber, setTyayNumber] = useState('');
  const [rawMaterial, setRawMaterial] = useState('');


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [tabKey, debounceSelectValue]);

  const loadData = async keyWord => {
    setLoading(true);
    // const searchData = {
    //   receiptNumber: keyWord,
    //   pageSize: countRef.current,
    //   state: tabKey,
    // };
    // await RawMaterialDeliveryApi
    //   .getByQuery(searchData)
    //   .then(res => {
          //     if(res.length != 0){
    //     setList(res.content);
    //     setTotal(res.totalElements);
        //     }
    //   })
    //   .catch(err => {
    //     onToast(err.message, styles.toastError);
    //   });
    const data = [
      {
        id: 0,
        cuttingMachine: '切割机1',
        materialCode: '0402-0337',
        materialName: 'ONBC-25',
        materialSizeX: '600',
        materialSizeY: '6000',
        materialSpecs: '600*6000',
        materialThickness: '25',
        name: 'D0001',
        planState: 0,
        remainRuns: 20,
        sendParts: 100,
        totalParts: 100,
        lineEdgeLibraryDTOS:[
          {
            cuttingMachine: '切割机1',
            fromLocation: '111',
            id: 1,
            materialCode: '0402-0337',
            materialName: 'ONBC-25',
            materialSizeX: '600',
            materialSizeY: '6000',
            materialSpecs: '600*6000',
            materialThickness: '25',
            planName: '切割111111',
            quantity: 1000,
            remainderNum: 100,
            taskCode: 'ce1111111',
            toLocation: '222',
            trayLocation: '1-5',
            trayNumber: 'TP001',
            useNum: 80,
          },
          {
            cuttingMachine: '切割机1',
            fromLocation: '333',
            id: 2,
            materialCode: '0402-0337',
            materialName: 'ONBC-25',
            materialSizeX: '600',
            materialSizeY: '6000',
            materialSpecs: '600*6000',
            materialThickness: '25',
            planName: '切割22222',
            quantity: 1000,
            remainderNum: 0,
            taskCode: 'ce222222',
            toLocation: '444',
            trayLocation: '1-4',
            trayNumber: 'TP002',
            useNum: 20,
          },
        ]
      },
      {
        id: 1,
        name: 'D0002',
        orderCountr: 100,
        finishNumber: 0,
        surplusNumber: 100,
        orderPriority: 2,
        cuttingMachine: '切割机2',
        materialCode: 'PR001',
        materialName: '物料1',
        detail: [
          {
            id: 0,
            trayNumber: 'D0001',
            count: 100,
            uesd: 50,
            surplus: 50,
            station: 1,
          }, {
            id: 1,
            trayNumber: 'D0002',
            count: 100,
            uesd: 0,
            surplus: 100,
            station: 2,
          }
        ]
      },
    ]
    setList(data);
    setTotal(1);
    setLoading(false);
  };

  const loadMore = async () => {
    if (!allowInfinite) return;
    setShowPreloader(true);
    if (countRef.current >= total) {
      setShowPreloader(false);
      return;
    }
    setAllowInfinite(false);
    countRef.current = countRef.current + 10;
    await loadData(selectValue);
    await setAllowInfinite(true);
  };

  const onChangeSelect = e => {
    if (!e.target.value) {
      setSelectValue('');
    } else {
      setSelectValue(e.target.value);
    }
  };

  const handleClickDisable = () => {
    setSelectValue('');
  };

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData(selectValue);
    await setPtrPreloader(false);
    await done();
  };

  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(value => (
          <CardInfo
          f7router={f7router}
            key={value.id}
            item={value}

          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const handleAutomatic = () => {
    createDialog(
      '托盘自动下架',
      '确认开始托盘自动下架流程？',
      function () {
        try {
          // Automatic()
          onToast('托盘自动下架成功', styles.toastSuccess);
        } catch (error) {
          console.log('error', error);
          onToast('托盘自动下架失败', styles.toastError);
        }
      }
    );
  }

  const Automatic = async () => {
    const data = {
      destination: '原材料组托点',
      middle: 'J001',
      taskType: 6, //原料托盘出库
      transferType: 0 //原料托盘
    }
    await EmptyPalletDeliveryApi.autoTransferOut(data)
      .then(res => {
        onToast('接口   ', styles.toastError);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
    //托盘出库   托盘自动出库
  }

  const handleManual = () => {
    // setManualSheetOpen(true)
    f7router.navigate('/raw-material-delivery-manual', {});
  }

const manualSheetClosed = ()=>{
  setManualSheetOpen(false)
}

  const handleBinding = () => {
    setCreateSheetOpen(true)
  }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => goBack()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>原材料出库单</NavTitle>
        <NavRight className={styles['nav-right']}>
          <Link
            searchbarEnable=".searchbar-demo"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="material:search"
          ></Link>
        </NavRight>
        <Searchbar
          className="searchbar-demo"
          placeholder="请输入出库单号"
          expandable
          searchContainer=".search-list"
          searchIn=".item-title"
          onChange={onChangeSelect}
          onClickClear={onChangeSelect}
          onClickDisable={handleClickDisable}
          disableButtonText="取消"
          style={{ fontSize: 13 }}
        ></Searchbar>
      </Navbar>
      <Toolbar tabbar top noHairline className="ne-top-tab">
        <Link tabLink="#tab-1" onClick={() => setTabKey(0)} tabLinkActive={tabKey == 0}>
          新建
        </Link>
        <Link tabLink="#tab-2" onClick={() => setTabKey(1)} tabLinkActive={tabKey == 1}>
          运行中
        </Link>
        <Link tabLink="#tab-3" onClick={() => setTabKey(2)} tabLinkActive={tabKey == 2}>
          已完成
        </Link>
      </Toolbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        onInfinite={loadMore}
        ptrPreloader={ptrPreloader}
        ptr
        onPtrRefresh={onHandleRefresh}
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
      >
        <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
          <Tabs animated>
            <Tab
              id="tab-1"
              className={`${styles.content} page-content`}
              style={{ paddingTop: '0' }}
              tabActive
            >
              {renderCardList()}
            </Tab>
            <Tab
              id="tab-2"
              className={`${styles.content} page-content`}
              style={{ paddingTop: '0' }}
            >
              {renderCardList()}
            </Tab>
            <Tab
              id="tab-3"
              className={`${styles.content} page-content`}
              style={{ paddingTop: '0' }}
            >
              {renderCardList()}
            </Tab>
          </Tabs>
        </div>
      </PageContent>
      <div className={styles['detail-bottom']}>
        <Button className={styles['bottom-btn-confirm']} onClick={() => handleAutomatic()} >
          自动出库
        </Button>
        <Button className={styles['bottom-btn-confirm']} onClick={() => handleManual()} >
          手动出库
        </Button>
        <Button className={styles['bottom-btn-confirm']} onClick={() => handleBinding()}>
          空托回库
        </Button>
        <Button className={styles['bottom-btn-confirm']} onClick={() => handleBinding()}>
          余料回库
        </Button>
      </div>
      {/* <Sheet
        className={styles['add-sheet']}
        opened={manualSheetOpen}
        onSheetClosed={manualSheetClosed}
        backdrop
      >
        <Manual 
        f7router={f7router}
        trayNumber={trayNumber}
        setTrayNumber={setTrayNumber}
        materialId={materialId}
        setMaterialId={setMaterialId}
        batchNumber={batchNumber}
        setBatchNumber={setBatchNumber}
        feedingName={feedingName}
        setFeedingName={setFeedingName}
        middle={middle}
        setMiddle={setMiddle}
        toLocation={toLocation}
        setToLocation={setToLocation}
        num={num}
        setNum={setNum}
        setManualSheetOpen={setManualSheetOpen}
        />
      </Sheet> */}
    </Page>
  );
};

export default RawMaterialDelivery;