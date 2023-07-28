import React, { useEffect, useRef, useState } from 'react';
import { Link, Page, Navbar, NavLeft, NavTitle, NavRight, ListItem, AccordionContent, Fab, List, Icon, PageContent, ListInput, Button } from '@hvisions/f-ui';
import { Sheet, f7, } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n, } from '@hvisions/toolkit';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import { isEmpty } from 'lodash';
import CardInfo from './CardInfo';
import { Skeleton, Empty } from '~/components';

import PrepareAreaServices from '~/api/PrepareArea';
import { PrepareAreaState } from '~/enum/enum';

import bendingMachineServices from '~/api/bendingMachine';



import SemiFinishedDeliveryServices from '~/api/SemiFinishedDelivery';
import CallTraySheet from './CallTray/callTraySheet';


import retrievalApi from '~/api/retrieval';

const PullOff = ({ f7router, item, }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  // const [selectValue, setSelectValue] = useState('');
  // const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);


  const [searchValue, setSearchValue] = useState({ toLocation: item.readyMaterials, shelfState: 0, status: 0 });

  const debounceSelectValue = useDebounce(searchValue, 500);
  const [owNumber, setOwNumber] = useState('');


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  const loadData = async data => {
    setLoading(true);
    const searchData = {
      ...data,
      pageSize: countRef.current,
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
    await loadData(searchValue);
    await setAllowInfinite(true);
  };

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData(searchValue);
    await setPtrPreloader(false);
    await done();
  };

  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(value => (
          <CardInfo
            f7router={f7router}
            key={value.id}
            item={value}
            loadData={loadData}
            searchValue={searchValue}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const style = {
    fontWeight: 500
  }

  const onSearchValueChange = (value, checked, keyValue) => {
    if (keyValue == 'owNumber') {
      setOwNumber(value)
      return
    }
  }

  const onSearch = () => {
    const data = searchValue
    if (owNumber != '') {
      data.owNumber = owNumber
    } else {
      delete data.owNumber
    }
    console.log(data, "data");
    setSearchValue(data)
    loadData(data)
  }

  const onCancelSearch = () => {

  }
  

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            {/* <a onClick={() => handleGoBack()} className="ne-navleft"> */}
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>托盘下架</NavTitle>
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
      <Fab position="right-top" morphTo=".demo-fab-sheet.fab-morph-target" style={{ marginTop: 30, width: 45, height: 45 }}>
        <Icon ios="f7:search" md="material:Search" />
      </Fab>
      <div
        className="list  demo-fab-sheet fab-morph-target"
        slot="fixed"
        style={{ margin: '54px 16px 0 16px' }}
      >
        <List accordionList accordionOpposite >
          <ListItem accordionItem title='出库单号' after={<div style={style}>{owNumber || '请输入出库单号'}</div>} >
            <AccordionContent>
              <List>
                <ListInput type="text" placeholder="请输入出库单号" onChange={e => onSearchValueChange(e.target.value, '', 'owNumber')} />
              </List>
            </AccordionContent>
          </ListItem>
          {/* <li>
            <Button className="fab-close" large onClick={onSearch}>查询</Button>
          </li> */}
          <div style={{ display: 'flex', marginTop: 5, justifyContent: 'center' }}>
            <Button className="fab-close" large style={{ width: '45%', margin: 'auto' }} fill onClick={onSearch}>查询</Button>
            <Button className="fab-close" large style={{ width: '45%', margin: 'auto' }} outline >取消</Button>
          </div>
        </List>
      </div>
    </Page>
  );
};

export default PullOff;