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
  Input
} from '@hvisions/f-ui';
import { Skeleton, Empty } from '~/components';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../img/backIcon.png';
import searchIcon from '../img/searchIcon.png';
import checkIcon from '../img/checkIcon.png';
import styles from './style.scss';
import ScanPop from '~/pages/Scan/ScanPop';
import { goBack, onToast, createDialog } from '~/util/home';
import TopInfo from './TopInfo';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';
import useDebounce from '~/Hook/useDebounce';

const Stocktakin = ({ $f7, f7router }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [stockStatus, setStockStatus] = useState(false);

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  useEffect(() => {
    getLockState();
  }, []);

  const loadData = async keyWord => {
    setLoading(true);
    // const user = getAuthData();
    const searchData = {
      keyWord,
      pageSize: countRef.current
    };
    await stockService
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
    await getLockState();
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
          <CardInfo key={value.id} item={value} loadData={loadData} f7router={f7router} />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  const getLockState = () => {
    stockService
      .getLockState()
      .then(res => {
        if (res) {
          setStockStatus(true);
        } else {
          setStockStatus(false);
        }
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  return (
    <Page
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
      <Navbar>
        <NavLeft>
          <a onClick={() => goBack('/wareManage')} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>盘库记录</NavTitle>
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
          placeholder="请输入盘点单号"
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
      <div style={{ padding: '0 16px' }}>
        <TopInfo
          f7router={f7router}
          $f7={$f7}
          setLoading={setLoading}
          loading={loading}
          getLockState={getLockState}
          setStockStatus={setStockStatus}
          stockStatus={stockStatus}
        />
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
    </Page>
  );
};

export default Stocktakin;
