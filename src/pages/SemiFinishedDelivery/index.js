import React, { useEffect, useRef, useState } from 'react';
import { Toolbar, Link, Tabs, Tab, Page, Navbar, NavLeft, NavTitle, NavRight, Searchbar, BlockTitle, ListInput, List, Icon, PageContent, Button, Input, Form } from '@hvisions/f-ui';
import { Sheet, f7, } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n, } from '@hvisions/toolkit';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';

const getFormattedMsg = i18n.getFormattedMsg;

const SemiFinishedDelivery = ({ f7router }) => {
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

  useEffect(() => {

  }, [createSheetValue]);

  const loadData = async keyWord => {
    setLoading(true);
    // const searchData = {
    //   receiptNumber: keyWord,
    //   pageSize: countRef.current,
    //   state: tabKey,
    // };
    // await RawMaterialWarehousingApi
    //   .getByQuery(searchData)
    //   .then(res => {
    //     setList(res.content);
    //     setTotal(res.totalElements);
    //   })
    //   .catch(err => {
    //     onToast(err.message, styles.toastError);
    //   });
    const data = [
      {
        id: 0,
        name: 'D0001',
        totalParts: 100,
        sendParts: 100,
        finishNumber: 50,
        remainRuns: 50,
        orderPriority: 1,
        cuttingMachine: '切割机1',
        materialCode: 'PR001',
        materialName: '物料1',
        materialSizeX: 50,
        materialSizeY: 100,
        materialSpecs: "50*100",
        materialThickness: 3,
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
      {
        id: 1,
        name: 'D0002',
        totalParts: 100,
        sendParts: 100,
        finishNumber: 0,
        remainRuns: 100,
        orderPriority: 2,
        cuttingMachine: '切割机2',
        materialCode: 'PR001',
        materialName: '物料1',
        materialSizeX: 60,
        materialSizeY: 110,
        materialSpecs: "60*110",
        materialThickness: 5,
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
          Automatic()
          // onToast('托盘自动下架成功', styles.toastSuccess);
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
        onToast('托盘自动下架成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
    //托盘出库   托盘自动出库
  }

  const handleManual = () => {
    // f7router.navigate('/raw-material-warehousing-manual', { });
  }

  const handleBinding = () => {
    setCreateSheetOpen(true)
  }

  const handleSave = async () => {
    console.log('createSheetValue', createSheetValue);
    const params = createSheetValue;
    await RawMaterialWarehousingApi
      .bindRawMaterial(params)
      .then(res => {
        onToast('托盘物料绑定成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
    addSheetClosed()
  }

  const addSheetClosed = () => {
    setCreateSheetOpen(false);
    setCreateSheetValue({})
    setTyayNumber('')
    setRawMaterial('')
  }

  const handleWeighing = async (record) => {
    setTabKey(1)
    const weighingId = record.id
    await RawMaterialWarehousingApi
      .getWeigh(weighingId)
      .then(res => {
        onToast('称重成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const handleWarehousing = async (record) => {
    const InstorId = record.id
    await RawMaterialWarehousingApi
      .inStore(InstorId)
      .then(res => {
        onToast('入库成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
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

    </Page>
  );
};

export default SemiFinishedDelivery;