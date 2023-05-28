import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  NavLeft,
  NavTitle,
  Button,
  Link,
  NavRight,
  Searchbar
} from '@hvisions/f-ui';
import { Skeleton, Empty } from '~/components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import { onToast } from '~/util/home';
import CardInfo from './CardInfo';
import putInStoragApi from '~/api/putInStorage';
import useDebounce from '~/Hook/useDebounce';

const Supplier = ({
  f7router,
  orderLineId,
  batchItem,
  state,
  treeData,
  waresId,
  locationId,
  waresName,
  locationName,
  paseBatchNum,
  paseQuantity,
  selectedMaterial,
  purchaseOrderDetail,
  seletedSupplier,
  createOrderID
}) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [selectedId, setSelectedId] = useState('');
  const [material, setMaterial] = useState({});
  const [supplier, setSupplier] = useState({});

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  useEffect(() => {
    if (!isEmpty(seletedSupplier)) {
      seletedSupplier.id && setSelectedId(seletedSupplier.id);
      setSupplier(seletedSupplier);
    }
  }, []);

  const loadData = async (keyWord = '') => {
    setLoading(true);
    const searchData = {
      pageSize: countRef.current,
      keyWord
    };
    await putInStoragApi
      .getSupplierByQuery(searchData)
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
    await loadData();
    await setAllowInfinite(true);
  };
  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData();
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
            loadData={loadData}
            f7router={f7router}
            handleSelect={handleSelect}
            selectedId={selectedId}
            seletedSupplier={seletedSupplier}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  const handleGoBack = () => {
    f7router.navigate('/manual-inStorage-operate', {
      transition: 'ne-backward',
      props: {
        orderLineId,
        batchItem,
        state,
        treeData,
        waresId,
        locationId,
        waresName,
        locationName,
        paseBatchNum,
        paseQuantity,
        material,
        purchaseOrderDetail,
        supplier,
        createOrderID
      }
    });
  };
  const handleSaveSupplier = async () => {
    f7router.navigate('/manual-inStorage-operate', {
      props: {
        orderLineId,
        batchItem,
        state,
        treeData,
        waresId,
        locationId,
        waresName,
        locationName,
        paseBatchNum,
        paseQuantity,
        material,
        purchaseOrderDetail,
        supplier,
        createOrderID
      }
    });
  };
  const handleSelect = item => {
    setSelectedId(item.id);
    setSupplier(item);
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
          <a onClick={handleGoBack} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>选择供应商</NavTitle>
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
          placeholder="请输入供应商编码或名称"
          expandable
          searchContainer=".search-list"
          searchIn=".item-title"
          onChange={onChangeSelect}
          onClickClear={onChangeSelect}
          onClickDisable={handleClickDisable}
          disableButtonText="返回"
          style={{ fontSize: 13 }}
        ></Searchbar>
      </Navbar>
      <div
        style={{
          padding: '0 16px',
          marginTop: '16px',
          paddingBottom: 'var(--ne-content-padding-bottom)'
        }}
      >
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      <div className="ne-bottom-container">
        <Button onClick={handleSaveSupplier} className="ne-bottom-btn">
          确认选中
        </Button>
      </div>
    </Page>
  );
};

export default Supplier;
