import React, { useEffect, useRef, useState } from 'react';
import { Toolbar, Link, Tabs, Tab, Page, Navbar, NavLeft, NavTitle, NavRight, Searchbar, BlockTitle,ListInput,List, Icon,PageContent, Button,Input, Form} from '@hvisions/f-ui';
import {   Sheet,  f7,} from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n,  } from '@hvisions/toolkit';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';
import joinAreaServices from '~/api/joinArea';
import CallTraySheet from './CallTray/callTraySheet';


import SemiFinishedWarehousingApi from '~/api/SemiFinishedWarehousing';

const getFormattedMsg = i18n.getFormattedMsg;

const SemiFinishedWarehousing2 = ({ f7router }) => {
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

  const toLocations = [
    { id: 1, name: 'J007', value: 'J007', },
    { id: 2, name: 'J008', value: 'J008', },
    { id: 3, name: 'J009', value: 'J009', },
  ]

  const middles = [
    { id: 1, name: 'J002', value: 'J002', },
    { id: 2, name: 'J003', value: 'J003', },
  ]

  const [callSheetOpen, setCallSheetOpen] = useState(false);
  const [sortPosition, setSortPosition] = useState(toLocations[0].value);
  const [dockingPoint, setDockingPoint] = useState(middles[0].value);


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [tabKey, debounceSelectValue]);

  useEffect(() => {
 
  }, []);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      receiptNumber: keyWord,
      pageSize: countRef.current,
      state: tabKey,
      cuttingName: '切割机2'
    };
    await SemiFinishedWarehousingApi
      .getByQuery(searchData)
      .then(res => {
        setList(res.content);
        setTotal(res.totalElements);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
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
          key={value.id}
          item={value}
          handleWarehousing={handleWarehousing}
          f7router={f7router}
        />
      ))
    ) : (
      <Empty />
    )
  ) : (
    <Skeleton />
  );

  const handleWarehousing = async (record) => {
    const InstorId = record.id
    createDialog(
      '确认开始入库流程？',
      ``,
      async function () {
        await SemiFinishedWarehousingApi
          .inStore(InstorId)
          .then(res => {
            onToast('入库成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          });
      }
    );
  }

  const handleBinding = async ()=>{
    f7router.navigate('/semi-warehousing-binding2', {
    });
  }

  const handleGoBack = () => {
    f7router.navigate('/', {
      transition: 'ne-backward',
    });
  };

  const handleCallTray = () => {
    setCallSheetOpen(true)
  }
  
  const callSheetClosed = () => {
    setCallSheetOpen(false)
    setSortPosition(toLocations[0].value);
    setDockingPoint(middles[0].value);
  }

  const callTraySave = () => {
    console.log('sortPosition', sortPosition);
    console.log('dockingPoint', dockingPoint);

    const data = {
      destination: sortPosition,
      middle: dockingPoint,
      taskType: 8, //半成品托盘出库
      transferType: 1 //半成品托盘
    }
    EmptyPalletDeliveryApi.autoTransferOut(data)
      .then(res => {
        onToast('出库成功', styles.toastSuccess);
        onHandleRefresh()
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
    callSheetClosed()
  }

  const handlePickTray =()=>{
    f7router.navigate('/semi-warehousing-pickTray2', {
    });
  }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          {/* <a onClick={() => f7router.back()} className="ne-navleft"> */}
          <a onClick={() => handleGoBack()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>切割机2收料</NavTitle>
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
          placeholder="请输入收料单号"
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
        <Link tabLink="#tab-1" onClick={() => setTabKey(0)} tabLinkActive ={tabKey == 0 }>
          新建
        </Link>
        <Link tabLink="#tab-3" onClick={() => setTabKey(2)} tabLinkActive ={tabKey == 2 }>
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
        {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handleBinding()} >
          半成品绑定
        </Button>}
        {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handleCallTray()} >
          空托呼叫
        </Button>}
        {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handlePickTray()}>
          挑选托盘
        </Button>}
      </div>
      <Sheet
        className={styles['add-sheet']}
        opened={callSheetOpen}
        onSheetClosed={callSheetClosed}
        backdrop
      >
        <CallTraySheet
          sortPosition={sortPosition}
          setSortPosition={setSortPosition}
          dockingPoint={dockingPoint}
          setDockingPoint={setDockingPoint}
          callTraySave={callTraySave}
          toLocations={toLocations}
          middles={middles}
        />
      </Sheet>
    </Page>
  );
};

export default SemiFinishedWarehousing2;