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
import { onToast, createDialog } from '~/util/home';
import CardInfo from './CardInfo';
import putInStoragApi from '~/api/putInStorage';
import useDebounce from '~/Hook/useDebounce';

const Material = ({
  f7router,
  orderLineId,
  batchItem,
  state,
  treeData,
  waresId,
  locationId,
  waresName,
  locationName,
  paseRemark,
  paseQuantity,
  selectedMaterial,
  purchaseOrderDetail,
  createOrderID,
  type,
  paseBatchNum,
  initPurchaseOrderDetail
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

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  useEffect(() => {
    if (!isEmpty(selectedMaterial)) {
      setMaterial(selectedMaterial);
      selectedMaterial.materialId
        ? setSelectedId(selectedMaterial.materialId)
        : setSelectedId(selectedMaterial.id);
    }
  }, []);

  const loadData = async (keyWord = '') => {
    setLoading(true);
    const searchData = {
      pageSize: countRef.current,
      keyWord
    };
    await putInStoragApi
      .getMaterial(searchData)
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
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  const handleGoBack = () => {
    if (type && type == 1) {
      f7router.navigate('/yw-retrieval-operate', {
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
          paseRemark,
          paseQuantity,
          paseBatchNum,
          material,
          purchaseOrderDetail,
          createOrderID,
          type,
          initPurchaseOrderDetail
        }
      });
    } else {
      f7router.navigate('/yw-retrieval-batch-list', {
        transition: 'ne-backward',
        props: {
          orderLineId,
          batchItem,
          paseBatchNum,
          state,
          treeData,
          waresId,
          locationId,
          waresName,
          locationName,
          paseRemark,
          paseQuantity,
          material,
          purchaseOrderDetail,
          createOrderID
        }
      });
    }
  };
  const handleSaveMaterial = async () => {
    if (type && type == 1) {
      f7router.navigate('/yw-retrieval-operate', {
        props: {
          orderLineId,
          batchItem,
          state,
          treeData,
          waresId,
          locationId,
          waresName,
          paseBatchNum,
          locationName,
          paseRemark,
          paseQuantity,
          material,
          purchaseOrderDetail,
          createOrderID,
          type,
          initPurchaseOrderDetail
        }
      });
    } else {
      f7router.navigate('/yw-retrieval-batch-list', {
        props: {
          orderLineId,
          batchItem,
          state,
          treeData,
          waresId,
          locationId,
          paseBatchNum,
          waresName,
          locationName,
          paseRemark,
          paseQuantity,
          material,
          purchaseOrderDetail,
          createOrderID
        }
      });
    }
  };
  const handleSelect = item => {
    setSelectedId(item.id);
    setMaterial(item);
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
        <NavTitle>选择物料</NavTitle>
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
          placeholder="请输入物料编码或名称"
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
      <div style={{ padding: '0 16px', marginTop: '16px', paddingBottom: '88px' }}>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      <div className={styles['detail-bottom']}>
        <Button fill onClick={handleSaveMaterial} className={styles['bottom-btn']}>
          确认选中
        </Button>
      </div>
    </Page>
  );
};

export default Material;
