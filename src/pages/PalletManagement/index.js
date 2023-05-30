import React, { useEffect, useRef, useState } from 'react';
import { Toolbar, Link, Tabs, Tab, Page, Navbar, NavLeft, NavTitle, NavRight, Searchbar, BlockTitle, ListInput, List, Icon, PageContent, Button, Input, Form } from '@hvisions/f-ui';
import { Sheet, f7, } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n, } from '@hvisions/toolkit';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';

import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';


import TransferBoxServices from '~/api/TransferBox';
import { emptyInMid } from '~/enum/enum';
import EmptyPalletsWarehousingApi from '~/api/EmptyPalletsWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import waresLocationApi from '~/api/waresLocation';

const PalletManagement = ({ f7router }) => {
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

  const [putSheetOpen, setPutSheetOpen] = useState(false);
  const [putSheetType, setPutSheetType] = useState('');
  const [sheetData, setSheetData] = useState({});
  const [origin, setOrigin] = useState();
  const [middle, setMiddle] = useState('J001');
  const [destination, setDestination] = useState();

  const [bindingSheetOpen, setBindingSheetOpen] = useState(false);
  const [locationList, setLocationList] = useState([])
  const [location, setLocation] = useState('');

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [tabKey, debounceSelectValue]);

  useEffect(() => {
    handleSearchLocation()
  }, [])

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      code: keyWord,
      pageSize: countRef.current,
      type: tabKey,
    };
    await TransferBoxServices
      .getPage(searchData)
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
            setPutSheetType={setPutSheetType}
            setPutSheetOpen={setPutSheetOpen}
            setSheetData={setSheetData}
            setBindingSheetOpen={setBindingSheetOpen}
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

  const putSheetClosed = () => {
    setPutSheetOpen(false);
    setSheetData({})
  }

  const handleSave = async () => {
    console.log('origin', origin);
    console.log('middle', middle);
    console.log('destination', destination);

    const params = {
      transferType: sheetData.type
    };
    //上架
    if (putSheetType == 'ON') {
      params.origin = origin
      params.middle = middle
      // { id: 5, name: '原料托盘回库', value: '原料托盘回库', },
      // { id: 7, name: '半成品托盘回库', value: '半成品托盘回库', },
      params.taskType = tabKey.type == 0 ? 5 : 7
      console.log('params', params);
      await EmptyPalletsWarehousingApi
        .autoTransferIn(params)
        .then(res => {
          onToast('托盘上架成功', styles.toastSuccess);
        })
        .catch(err => {
          onToast(err.message, styles.toastError);
        });
    }
    //下架
    if (putSheetType == 'OFF') {
      const params = {};
      // { id: 6, name: '原料托盘出库', value: '原料托盘出库', },
      // { id: 8, name: '半成品托盘出库', value: '半成品托盘出库', },
      params.taskType = tabKey.type == 1 ? 6 : 8
      console.log('params', params);
      await EmptyPalletDeliveryApi
        .autoTransferOut(params)
        .then(res => {
          onToast('托盘下架成功', styles.toastSuccess);
        })
        .catch(err => {
          onToast(err.message, styles.toastError);
        });
    }
    putSheetClosed()
    onHandleRefresh()
  }

  const handleSearchLocation = async (param) => {
    const params = {
      code: param,
      pageSize: 10,
      page: 0
    }
    await waresLocationApi.getLocationByQuery(params).then(res => {
      setLocationList(res.content)
      setLocation(res.content[0].id)
    })
  }

  const bindingSheetClosed =()=>{
    setLocation('');
    setBindingSheetOpen(false);
  }

  const BindingSave = async()=>{
    await TransferBoxServices.lockLocation(location, sheetData.id)
      .then(res => {
        onToast('绑定成功', styles.toastSuccess);
        onHandleRefresh()
        bindingSheetClosed()
      }).catch(err => {
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
        <NavTitle>托盘管理</NavTitle>
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
          placeholder="请输入托盘号"
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
          原料托盘
        </Link>
        <Link tabLink="#tab-2" onClick={() => setTabKey(1)} tabLinkActive={tabKey == 1}>
          半成品托盘
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
          </Tabs>
        </div>
      </PageContent>
      <Sheet
        className={styles['add-sheet']}
        opened={putSheetOpen}
        onSheetClosed={putSheetClosed}
        backdrop
      >
        <BlockTitle>{putSheetType == 'ON' ? '托盘上架' : '托盘下架'}</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          {putSheetType == 'ON' && <ListInput
            key={'origin'}
            label="起点"
            type="text"
            placeholder="请输入起点"
            required
            onChange={(e) => {
              setOrigin(e.target.value)
            }}
            value={origin}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>}
          <ListInput
            key={'middle'}
            label="中间点"
            type="select"
            placeholder="请选择中间点"
            required
            defaultValue={middle}
            onChange={(e) => {
              setMiddle(e.target.value)
            }}
            value={middle}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {emptyInMid.map((value, index) => (
              <option value={value.value} key={value.id}>
                {value.value}
              </option>
            ))}
          </ListInput>
          {putSheetType == 'OFF' && <ListInput
            key={'destination'}
            label="终点"
            type="text"
            placeholder="请输入终点"
            required
            onChange={(e) => {
              setDestination(e.target.value)
            }}
            value={destination}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>}
          <Button className={styles['save-btn']} fill round onClick={handleSave}>
            保存
          </Button>
        </List>
      </Sheet>
      <Sheet
        className={styles['add-sheet']}
        opened={bindingSheetOpen}
        onSheetClosed={bindingSheetClosed}
        backdrop
      >
        <BlockTitle>绑定库位</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="库位号"
            type="select"
            placeholder="请输入库位号"
            required
            validate
            onChange={(e)=>{
              setLocation(e.target.value)
            }}
            value={location}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {locationList.map((value, index) => (
              <option value={value.id} key={value.id}>
                {value.code} -- {value.name}
              </option>
            ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={BindingSave}>
              保存
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default PalletManagement;