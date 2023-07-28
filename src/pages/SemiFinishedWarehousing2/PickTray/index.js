import React, { useEffect, useRef, useState } from 'react';
import { Toolbar, Link, Tabs, Tab, Page, Navbar, NavLeft, NavTitle, Card, Searchbar, NavRight, ListInput, List, Icon, PageContent, Button, Input, Form } from '@hvisions/f-ui';
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
import joinAreaServices from '~/api/joinArea';
import SemiFinishedWarehousingApi from '~/api/SemiFinishedWarehousing';

import SemiFinishedDeliveryApi from '~/api/SemiFinishedDelivery';

const getFormattedMsg = i18n.getFormattedMsg;

const PickTray2 = ({ f7router }) => {
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

  const toLocations = [
    { id: 1, name: 'J007', value: 'J007', },
    { id: 2, name: 'J008', value: 'J008', },
    { id: 3, name: 'J009', value: 'J009', },
  ]

  const middles = [
    { id: 1, name: 'J002', value: 'J002', },
    { id: 2, name: 'J003', value: 'J003', },
  ]

  const [callSheetOpen, setCallSheetOpen] = useState(false);
  const [sortPosition, setSortPosition] = useState(toLocations[0].value);
  const [dockingPoint, setDockingPoint] = useState(middles[0].value);



  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  useEffect(() => {

  }, []);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      orderNumber: keyWord,
      pageSize: countRef.current,
      attributeTwo: '切割未完工',
    };
    await SemiFinishedDeliveryApi
      .getByQuery(searchData)
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
            f7router={f7router}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  return (
    <Page pageContent={false}>
            <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
          {/* <a onClick={() => handleGoBack()} className="ne-navleft"> */}
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>挑选托盘</NavTitle>
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
        <Card className={styles['card-box']}>
            <div className={styles['search-box']}>
              <input
                type="text"
                placeholder="请输入订单号"
                // onChange={e => setInputValue(e.target.value)}
                onChange={onChangeSelect}
                className={styles['input-style']}
                // value={inputValue}
              />
              {/* <Button
                // onClick={onKeyDowm}
                className={styles['search-btn']}
              >
                确认
              </Button> */}
            </div>
          </Card>
          <Tabs animated>
            <Tab
              id="tab-1"
              className={`${styles.content} page-content`}
              style={{ paddingTop: '0' }}
              tabActive
            >
              {renderCardList()}
            </Tab>
          </Tabs>
        </div>
      </PageContent>
    </Page>
  );
};

export default PickTray2;