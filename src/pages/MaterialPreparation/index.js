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
import CardInfo from './CardInfo';
import { Skeleton, Empty } from '~/components';

import PrepareAreaServices from '~/api/PrepareArea';
import { PrepareAreaState } from '~/enum/enum';

const getFormattedMsg = i18n.getFormattedMsg;

const MaterialPreparation = ({ f7router }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [bindingSheetOpen, setBindingSheetOpen] = useState(false);
  const [trayNumber, setTrayNumber] = useState('');

  const [updateSheetOpen, setUpdateSheetOpen] = useState(false);
  const [areaState, setAreaState] = useState(1);
  const [areaCode, setAreaCode] = useState();

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  
  useEffect(() => {
 
  }, [trayNumber,areaState]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      // receiptNumber: keyWord,
      pageSize: countRef.current,
    };
    await PrepareAreaServices
      .findByArea(searchData)
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
          setBindingSheetOpen={setBindingSheetOpen}
          trayNumber={trayNumber}
          setTrayNumber={setTrayNumber}
          setUpdateSheetOpen={setUpdateSheetOpen}
          setAreaState={setAreaState}
          setAreaCode={setAreaCode}
          onHandleRefresh={onHandleRefresh}
        />
      ))
    ) : (
      <Empty />
    )
  ) : (
    <Skeleton />
  );

  const bindingSheetClosed =()=>{
    setTrayNumber('');
    setBindingSheetOpen(false);
  }

  const BindingSave = async()=>{
    await PrepareAreaServices.addTransfer(areaCode, trayNumber)
      .then(res => {
        onToast('托盘绑定成功', styles.toastSuccess);
        loadData(selectValue);
        bindingSheetClosed()
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const updateSheetClosed =()=>{
    setUpdateSheetOpen(false);
  }

  const updateStateSave =async()=>{
    await PrepareAreaServices.updateState(areaCode, areaState)
      .then(res => {
        onToast('状态更新成功', styles.toastSuccess);
        updateSheetClosed()
        loadData(selectValue);
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }


  const handleAutomatic = ()=>{
    createDialog(
      '托盘自动下架',
      '确认开始托盘自动下架流程？',
      function() {
        try {
          Automatic()
          // onToast('托盘自动下架成功', styles.toastSuccess);
        } catch (error) {
          console.log('error',error);
          onToast('托盘自动下架失败', styles.toastError);
        }
      }
    );
  }

  const Automatic = async () => {
    const data ={
      destination:'原材料组托点',
      middle:'J001',
      taskType:6, //原料托盘出库
      transferType:0 //原料托盘
    }
    await EmptyPalletDeliveryApi.autoTransferOut(data)
    .then(res=>{
      onToast('托盘自动下架成功', styles.toastSuccess);
      loadData(selectValue);
    })
    .catch(err=>{
      onToast(err.message, styles.toastError);
    })
    //托盘出库   托盘自动出库
  }

  const handleSave = async () => {
    const params = {};
    await RawMaterialWarehousingApi
      .bindRawMaterial(params)
      .then(res => {
        onToast('托盘物料绑定成功', styles.toastSuccess);
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
        <NavTitle>备料位托盘管理</NavTitle>
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
          placeholder="请输入备料区编码"
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
          <div
            className={`${styles.content} page-content`}
            style={{ paddingTop: '0' }}
          >
            {renderCardList()}
          </div>
        </div>
      </PageContent>
      <Sheet
        className={styles['bottom-sheet']}
        opened={bindingSheetOpen}
        onSheetClosed={bindingSheetClosed}
        backdrop
      >
        <BlockTitle>绑定托盘</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="托盘号"
            type="text"
            placeholder="请输入托盘号"
            required
            validate
            clearButton
            onChange={(e)=>{
              setTrayNumber(e.target.value)
            }}
            value={trayNumber}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={BindingSave}>
              保存
            </Button>
        </List>
      </Sheet>
      <Sheet
        className={styles['bottom-sheet']}
        opened={updateSheetOpen}
        onSheetClosed={updateSheetClosed}
        backdrop
      >
        <BlockTitle>更新备料口状态</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="备料区状态"
            placeholder="请输入备料区状态"
            required
            // validate
            // clearButton
            type="select"
            defaultValue={areaState}
            onChange={(e)=>{
              console.log('备料区状态',e.target.value);
              setAreaState(e.target.value)
            }}
            value={areaState}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {PrepareAreaState.map((value, index) => (
                <option  value={value.id} key={value.id}>
                  {value.name}
                </option>
              ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={updateStateSave}>
              保存
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default MaterialPreparation;