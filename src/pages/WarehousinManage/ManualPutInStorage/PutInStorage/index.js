import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Popup,
  Link,
  NavRight,
  Searchbar,
  NavLeft,
  NavTitle,
  Toggle,
  Card,
  CardContent,
  Input,
  Toolbar,
  Tabs,
  Tab,
  Button
} from '@hvisions/f-ui';
import { Skeleton, Empty } from '~/components';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import searchIcon from '../../img/searchIcon.png';
import checkIcon from '../../img/checkIcon.png';
import styles from './style.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import { goBack, onToast, createDialog } from '~/util/home';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';
import useDebounce from '~/Hook/useDebounce';
import putInStoragApi from '~/api/putInStorage';

const Stocktakin = ({ $f7, f7router }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [tabKey, setTabKey] = useState(0);
  const [putInStoragestate, setPutInStoragestate] = useState({
    1: '执行中',
    2: '已完成',
    0: '全部'
  });

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
      state: tabKey == 0 ? '' : tabKey,
      type: '2'
    };
    await putInStoragApi
      .getQueryList(searchData)
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
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData(selectValue);
    await setPtrPreloader(false);
    await done();
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
  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(value => (
          <CardInfo
            key={value.id}
            item={value}
            loadData={loadData}
            f7router={f7router}
            handleDelete={handleDelete}
            handleInStorage={handleInStorage}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  const handleDelete = item => {
    createDialog('确认删除?', `是否确认删除【${item.receiptNumber}】`, function() {
      try {
        deleteItem(item);
      } catch (error) {
        onToast('删除失败', styles.toastError);
      }
    });
  };
  const deleteItem = async item => {
    await putInStoragApi
      .deleteOrder(item.id)
      .then(() => {
        onToast('删除入库单成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleInStorage = item => {
    createDialog('确认入库?', `是否确认入库【${item.receiptNumber}】`, function() {
      try {
        handleInStore(item.id);
      } catch (error) {
        onToast(error.message, styles.toastError);
      }
    });
  };
  const handleInStore = id => {
    putInStoragApi
      .onInStore(id)
      .then(res => {
        onToast('入库成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleDetail = () => {
    f7router.navigate('/manual-inStorage-operate', {});
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => goBack('/wareManage')} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>入库单</NavTitle>
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
          placeholder="请输入入库单号"
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
        <Link tabLink="#tab-1" onClick={() => setTabKey(0)} tabLinkActive>
          全部
        </Link>
        <Link tabLink="#tab-2" onClick={() => setTabKey(1)}>
          执行中
        </Link>
        <Link tabLink="#tab-3" onClick={() => setTabKey(2)}>
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
            <Tab id="tab-1" className={styles.content} tabActive>
              {renderCardList()}
            </Tab>
            <Tab id="tab-2" className={styles.content}>
              {renderCardList()}
            </Tab>
            <Tab id="tab-3" className={styles.content}>
              {renderCardList()}
            </Tab>
          </Tabs>
        </div>
      </PageContent>
      <div className="ne-bottom-container">
        <Button fill onClick={handleDetail} className="ne-bottom-btn">
          添加入库单
        </Button>
      </div>
    </Page>
  );
};

export default Stocktakin;
