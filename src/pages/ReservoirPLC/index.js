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
import TaskTranSportApi from '~/api/TaskTranSport';
import { taskType } from '~/enum/enum';

const getFormattedMsg = i18n.getFormattedMsg;

const TaskTransport = ({ f7router }) => {
  const [tabKey, setTabKey] = useState(1);
  
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [adjustSheetOpen, setAdjustSheetOpen] = useState(false);
  const [adjustSheetData, setAdjustSheetData] = useState({});
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [tabKey, debounceSelectValue]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      taskCode: keyWord,
      pageSize: countRef.current,
      taskState: tabKey,
      taskKind: 1
    };
    await TaskTranSportApi
      .findTaskView(searchData)
      .then(res => {
        const data = res.content
        data.map(i=>{
          if(i.taskType != null){
            i.taskTypeName = taskType[i.taskType - 1].name
          }
        })
        setList(data);
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
          tabKey={tabKey}
          setAdjustSheetOpen={setAdjustSheetOpen}
          setAdjustSheetData={setAdjustSheetData}
          selectValue = {selectValue}
          loadData = {loadData}
        />
      ))
    ) : (
      <Empty />
    )
  ) : (
    <Skeleton />
  );

  const adjustSheetClosed =()=>{
    setAdjustSheetOpen(false)
    setAdjustSheetData({})
    setPriority('')
  }

const handleSaveAdjust = async()=>{
      await TaskTranSportApi.adjustPriority(adjustSheetData.id,priority)
    .then(res=>{
      onToast('任务优先级调整成功', styles.toastSuccess);
      adjustSheetClosed()
      loadData(selectValue);
    })
    .catch(err=>{
      onToast(err.message, styles.toastError);
    })
}

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>库区PLC</NavTitle>
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
          placeholder="请输入任务编码"
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
        <Link tabLink="#tab-1" onClick={() => setTabKey(1)} tabLinkActive ={tabKey == 1 }>
          排队中
        </Link>
        <Link tabLink="#tab-2" onClick={() => setTabKey(2)} tabLinkActive ={tabKey == 2 }>
          执行中
        </Link>
        <Link tabLink="#tab-3" onClick={() => setTabKey(3)} tabLinkActive ={tabKey == 3 }>
          暂停
        </Link>
        <Link tabLink="#tab-4" onClick={() => setTabKey(4)} tabLinkActive ={tabKey == 4 }>
          完成
        </Link>
        <Link tabLink="#tab-5" onClick={() => setTabKey(5)} tabLinkActive ={tabKey == 5 }>
          异常
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
            <Tab
              id="tab-4"
              className={`${styles.content} page-content`}
              style={{ paddingTop: '0' }}
            >
              {renderCardList()}
            </Tab>
            <Tab
              id="tab-5"
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
        opened={adjustSheetOpen}
        onSheetClosed={adjustSheetClosed}
        backdrop
      >
        <BlockTitle>任务优先级调整</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="任务编码"
            type="text"
            disabled={true}
            value={adjustSheetData.taskCode}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="原任务优先级"
            type="text"
            disabled={true}
            value={adjustSheetData.priority}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="任务优先级"
            type="text"
            placeholder="请输入任务优先级"
            required
            validate
            clearButton
            onChange={(e)=>{
              setPriority(e.target.value)
            }}
            value={priority}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>

            <Button className={styles['save-btn']} fill round onClick={handleSaveAdjust}>
              确认
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default TaskTransport;