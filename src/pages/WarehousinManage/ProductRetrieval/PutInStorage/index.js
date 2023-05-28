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
import retrievalApi from '~/api/retrieval';

const Retrieval = ({ $f7, f7router }) => {
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
    0: '出库中',
    1: '已完成',
    2: '全部'
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
      owNumber: keyWord,
      pageSize: countRef.current,
      status: 0,
      type: 1
    };
    await retrievalApi
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
            handleInStorage={handleInStorage}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const handleInStorage = item => {
    createDialog('确认入库?', `是否确认出库【${item.owNumber}】`, function() {
      try {
        handleInStore(item.id);
      } catch (error) {
        onToast(error.message, styles.toastError);
      }
    });
  };
  const handleInStore = id => {
    retrievalApi
      .onInStore(id)
      .then(res => {
        onToast('出库成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleDetail = () => {
    f7router.navigate('/yw-retrieval-operate', { props: { state: 0 } });
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
      className={styles.pageContainer}
    >
      <Navbar>
        <NavLeft>
          <a onClick={() => goBack('/wareManage')} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>成品出库</NavTitle>
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

      <div className={styles.tabContainer}>{renderCardList()}</div>
    </Page>
  );
};

export default Retrieval;
