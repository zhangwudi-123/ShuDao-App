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
import SemiFinishedWarehousingApi from '~/api/SemiFinishedWarehousing';
import { attributeOne,attributeTwo,dockingPoints,sortPositions } from '~/enum/enum';


const getFormattedMsg = i18n.getFormattedMsg;

const SemiFinishedWarehousing = ({ f7router }) => {
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

  const [callSheetOpen, setCallSheetOpen] = useState(false);
  const [sortPosition, setSortPosition] = useState('');
  const [dockingPoint, setDockingPoint] = useState('');


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [tabKey, debounceSelectValue]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      receiptNumber: keyWord,
      pageSize: countRef.current,
      state: tabKey,
    };
    await SemiFinishedWarehousingApi
      .getByQuery(searchData)
      .then(res => {
        res.content.map(item=>{
          const text = item.attributeOne
          let array = []
          const arr = text.split(',');
          arr.map(i => {
            array = [...array, attributeOne[i - 1].name]
          })
          item.attributeOneName = text != null ?array.toString():''
      
          const text2 = item.attributeTwo
          item.attributeTwoName = text2 != null ?attributeTwo[text2 - 1].name:''
      
          const text3 = item.dockingPoint
          item.dockingPointName = text3 != null ?dockingPoints[text3 - 1].name:''
      
          const text4 = item.sortPosition
          item.dockingPointName = text4 != null ?sortPositions[text4 - 1].name:''
        })
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
            selectValue={selectValue}
            loadData={loadData}
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

  // const handleManual = () => {
  //   // f7router.navigate('/raw-material-warehousing-manual', { });
  // }

  // const handleBinding = () => {
  //   setCreateSheetOpen(true)
  // }

  // const handleSave = async () => {
  //   console.log('createSheetValue', createSheetValue);
  //   const params = createSheetValue;
  //   await RawMaterialWarehousingApi
  //     .bindRawMaterial(params)
  //     .then(res => {
  //       onToast('托盘物料绑定成功', styles.toastSuccess);
  //       loadData(selectValue);
  //     })
  //     .catch(err => {
  //       onToast(err.message, styles.toastError);
  //     });
  //   addSheetClosed()
  // }

  // const addSheetClosed = () => {
  //   setCreateSheetOpen(false);
  //   setCreateSheetValue({})
  //   setTyayNumber('')
  //   setRawMaterial('')
  // }

  // const handleWeighing = async (record) => {
  //   setTabKey(1)
  //   const weighingId = record.id
  //   await RawMaterialWarehousingApi
  //     .getWeigh(weighingId)
  //     .then(res => {
  //       onToast('称重成功', styles.toastSuccess);
  //       loadData(selectValue);
  //     })
  //     .catch(err => {
  //       onToast(err.message, styles.toastError);
  //     });
  // }

  // const handleWarehousing = async (record) => {
  //   const InstorId = record.id
  //   await RawMaterialWarehousingApi
  //     .inStore(InstorId)
  //     .then(res => {
  //       onToast('入库成功', styles.toastSuccess);
  //       loadData(selectValue);
  //     })
  //     .catch(err => {
  //       onToast(err.message, styles.toastError);
  //     });
  // }

  const handleCallTray = ()=>{
    setCallSheetOpen(true)
  }

  const bindingSheetClosed = ()=>{
    setCallSheetOpen(false)
    setSortPosition('')
    setDockingPoint('')
  }

  const callTraySave =()=>{

  }

  const handlePickTray = ()=>{
    
  }
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>半成品收料单</NavTitle>
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
          placeholder="请输入单号"
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
          转运中
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
        <Button className={styles['bottom-btn-confirm']} onClick={() => handleCallTray()}>
          空托呼叫
        </Button>
        <Button className={styles['bottom-btn-confirm']} onClick={() => handlePickTray()}>
          挑选托盘
        </Button>
      </div>
      <Sheet
        className={styles['add-sheet']}
        opened={callSheetOpen}
        onSheetClosed={bindingSheetClosed}
        backdrop
      >
        <BlockTitle>空托呼叫</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="分拣位置"
            type="select"
            placeholder="请输入分拣位置"
            required
            validate
            onChange={(e)=>{
              setSortPosition(e.target.value)
            }}
            value={sortPosition}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {sortPositions.map((value, index) => (
              <option value={value.value} key={value.id}>
                {value.name}
              </option>
            ))}
          </ListInput>
          <ListInput
            label="接驳点"
            type="select"
            placeholder="请输入接驳点"
            required
            validate
            onChange={(e)=>{
              setDockingPoint(e.target.value)
            }}
            value={dockingPoint}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {dockingPoints.map((value, index) => (
              <option value={value.value} key={value.id}>
                {value.name}
              </option>
            ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={callTraySave}>
              保存
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default SemiFinishedWarehousing;