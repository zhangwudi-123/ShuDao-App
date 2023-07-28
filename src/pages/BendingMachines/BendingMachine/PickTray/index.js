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
const PickTray = ({ f7router, item, attribute, attributeOne, attributeTwo }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  // const [selectValue, setSelectValue] = useState('');
  // const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);


  const [searchValue, setSearchValue] = useState({ attributeOne: attribute, attributeTwo: attributeTwo });
  const debounceSelectValue = useDebounce(searchValue, 500);
  const [callSheetOpen, setCallSheetOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [orderNumber, setOrderNumber] = useState('');
  const [suborderNumber, setSuborderNumber] = useState('');
  const [attribute1, setAttribute1] = useState(attributeOne.toString());
  const [attribute2, setAttribute2] = useState(attributeTwo);
  const [trayNumber, setTrayNumber] = useState('');
  const [desc, setDesc] = useState('');


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);


  // useEffect(() => {

  // }, [selectValue]);

  const loadData = async data => {
    setLoading(true);
    const searchData = {
      // attributeOne: item.attributeOne.toString(),
      // attributeTwo: item.attributeTwo ,
      // ...searchValue,
      ...data,
      pageSize: countRef.current,
    };
    await SemiFinishedDeliveryServices
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
    // await loadData(selectValue);
    await loadData(searchValue);
    await setAllowInfinite(true);
  };

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    // await loadData(selectValue);
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
            setCallSheetOpen={setCallSheetOpen}
            setSelectedData={setSelectedData}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const outSheetClosed = () => {
    setCallSheetOpen(false)
  }

  const style = {
    // height: '30px',
    // fontSize: '25px',
    fontWeight: 500
  }

  const onSearchValueChange = (value, checked, keyValue) => {
    if (keyValue == 'orderNumber') {
      setOrderNumber(value)
      return
    }
    if (keyValue == 'suborderNumber') {
      setSuborderNumber(value)
      return
    }
    if (keyValue == 'attributeOne') {
      let arrayList = []
      if (checked) {
        const array = attributeOne.filter(i => i != '请选择折弯属性')
        arrayList = [...array, value]
      } else {
        arrayList = attributeOne.filter(i => i != value)
      }
      setAttribute1(arrayList.toString())
      return
    }
    if (keyValue == 'attributeTwo') {
      setAttribute2(value)
      return
    }
    if (keyValue == 'trayNumber') {
      setTrayNumber(value)
      return
    }
    if (keyValue == 'description') {
      setDesc(value)
      return
    }

  }

  const onSearch = () => {
    const data = {}
    orderNumber != '' ? data.orderNumber = orderNumber : 1
    suborderNumber != '' ? data.suborderNumber = suborderNumber : 1
    data.attributeOne = attribute1
    data.attributeTwo = attribute2
    trayNumber != '' ? data.trayNumber = trayNumber : 1
    desc != '' ? data.desc = desc : 1

    console.log(data, "data");
    setSearchValue(data)
    loadData(data)
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
        <NavTitle>托盘拣选</NavTitle>
        <NavRight className={styles['nav-right']}>
          {/* <Link
            searchbarEnable=".searchbar-demo"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="material:search"
          ></Link> */}
        </NavRight>
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
        className={styles['add-sheet']}
        opened={callSheetOpen}
        onSheetClosed={outSheetClosed}
        backdrop
      >
        <CallTraySheet
          outSheetClosed={outSheetClosed}
          item={selectedData}
          loadData={loadData}
          // selectValue={selectValue}
          searchValue={searchValue}
          modifyData={item}
        />
      </Sheet>

      <Fab position="right-top" morphTo=".demo-fab-sheet.fab-morph-target" style={{ marginTop: 30, width: 45, height: 45 }}>
        <Icon ios="f7:search" md="material:Search" />
      </Fab>
      <div
        className="list  demo-fab-sheet fab-morph-target"
        slot="fixed"
        style={{ margin: '54px 16px 0 16px' }}
      >
        <List accordionList accordionOpposite >
          <ListItem accordionItem title='订单号' after={<div style={style}>{orderNumber || '请输入订单号'}</div>} >
            <AccordionContent>
              <List>
                <ListInput type="text" placeholder="请输入订单号" onChange={e => onSearchValueChange(e.target.value, '', 'orderNumber')} />
              </List>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title='子订单号' after={<div style={style}>{suborderNumber || '请输入子订单号'}</div>} >
            <AccordionContent>
              <List>
                <ListInput type="text" placeholder="请输入子订单号" onChange={e => onSearchValueChange(e.target.value, '', 'suborderNumber')} />
              </List>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title='托盘属性1' after={<div style={style}>{attribute1 || '请选择托盘属性1'}</div>} >
            <AccordionContent>
              <List strongIos outlineIos dividersIos >
                <ListItem checkbox title="大" name="attributeOne-checkbox" value="大" checked={attribute1.includes("大")} onChange={e => onSearchValueChange(e.target.value, e.target.checked, 'attributeOne')} />
                <ListItem checkbox title="中" name="attributeOne-checkbox" value="中" checked={attribute1.includes("中")} onChange={e => onSearchValueChange(e.target.value, e.target.checked, 'attributeOne')} />
                <ListItem checkbox title="小" name="attributeOne-checkbox" value="小" checked={attribute1.includes("小")} onChange={e => onSearchValueChange(e.target.value, e.target.checked, 'attributeOne')} />
              </List>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title='托盘属性2' after={<div style={style}>{attribute2 || '请选择托盘属性2'}</div>} >
            <AccordionContent>
              <List strongIos outlineIos dividersIos >
                <ListItem checkbox title="切割完工" name="attributeTwo-checkbox" value="切割完工" checked={attribute2 == "切割完工"} onChange={e => onSearchValueChange(e.target.value, '', 'attributeTwo')} />
                <ListItem checkbox title="切割未完工" name="attributeTwo-checkbox" value="切割未完工" checked={attribute2 == "切割未完工"} onChange={e => onSearchValueChange(e.target.value, '', 'attributeTwo')} />
              </List>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title='托盘号' after={<div style={style}>{trayNumber || '请输入托盘号'}</div>} >
            <AccordionContent>
              <List>
                <ListInput type="text" placeholder="请输入托盘号" onChange={e => onSearchValueChange(e.target.value, '', 'trayNumber')} />
              </List>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title='备注' after={<div style={style}>{desc || '请输入备注'}</div>} >
            <AccordionContent>
              <List>
                <ListInput type="text" placeholder="请输入备注" onChange={e => onSearchValueChange(e.target.value, '', 'description')} />
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

export default PickTray;