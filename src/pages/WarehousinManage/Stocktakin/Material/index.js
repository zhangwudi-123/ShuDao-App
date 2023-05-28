import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Page, Navbar, PageContent, NavLeft, NavTitle, Button } from '@hvisions/f-ui';
import { Skeleton, Empty } from '~/components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import styles from './style.scss';
import { onToast } from '~/util/home';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';

const Stocktakin = ({ $f7, f7router, purchaseOrderDetail }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const searchData = {
      pageSize: countRef.current,
      locationId: purchaseOrderDetail.locationId
    };
    await stockService
      .getMaterialList(searchData)
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
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );
  const handleGoBack = () => {
    f7router.navigate('/stocktakinDetail', {
      transition: 'ne-backward',
      props: { orderLineId: purchaseOrderDetail.id }
    });
  };
  const handleSaveMaterial = async () => {
    if (checkedIds.length == 0) {
      onToast('请选择物料', styles.toastWarn);
      return;
    }
    setLoading(true);
    const params = {
      headerId: purchaseOrderDetail.id,
      locationId: purchaseOrderDetail.locationId,
      stockIds: checkedIds
    };
    await stockService
      .chooseMaterail(params)
      .then(res => {
        setLoading(false);
        onToast('添加成功', styles.toastSuccess);
        setTimeout(() => {
          handleGoBack();
        }, 10);
      })
      .catch(err => {
        setLoading(false);
        onToast('添加失败', styles.toastError);
      });
  };
  const handleSelect = (e, item) => {
    const ids = [...checkedIds];
    if (e.target.checked) {
      ids.push(item.id);
    } else {
      ids.splice(ids.indexOf(item.id), 1);
    }
    setCheckedIds([...ids]);
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
        <NavTitle>物料选择</NavTitle>
      </Navbar>
      <div style={{ padding: '0 16px', marginTop: '16px', paddingBottom: '100px' }}>
        <div className={styles['list-box']}>{renderCardList()}</div>
      </div>
      <div className={styles['detail-bottom']}>
        <Button fill onClick={handleSaveMaterial} className={styles['bottom-btn']}>
          保存
        </Button>
      </div>
    </Page>
  );
};

export default Stocktakin;
