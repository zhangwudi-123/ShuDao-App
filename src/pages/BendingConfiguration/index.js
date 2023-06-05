import React, { useEffect, useRef, useState } from 'react';
import {  Toolbar,  Link,  Tabs,  Tab,  Page,  Navbar,  NavLeft,  NavTitle,  NavRight,  Searchbar,  BlockTitle,  ListInput,  List,  Icon,  PageContent,  Button,  Input,  Form} from '@hvisions/f-ui';
import { Sheet, f7 } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n } from '@hvisions/toolkit';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';
import SemiFinishedDeliveryApi from '~/api/SemiFinishedDelivery';
import { attributeOne, attributeTwo, dockingPoints, sortPositions } from '~/enum/enum';
import bendingMachineApi from '~/api/bendingMachine';

const getFormattedMsg = i18n.getFormattedMsg;

const BendingConfiguration = ({ f7router }) => {
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

  const [outSheetOpen, setOutSheetOpen] = useState(false);
  const [outSheetData, setOutSheetData] = useState({});

  const [readyMaterials,setReadyMaterials] = useState('');
  const [readyMaterialList, setReadyMaterialList] = useState([]);
  const [dockingPoint, setDockingPoint] = useState('');

  const [bindingSheetOpen, setBindingSheetOpen] = useState(false);
  const [bendingNumber, setBendingNumber] = useState('');
  const [trayNumber, setTrayNumber] = useState('');

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      bendingNumber: keyWord,
      pageSize: countRef.current
    };
    await bendingMachineApi.getByQuery(searchData)
      .then(res => {
        const data = res.content
        data.map(i => {
          if (i.attribute != null) {
            let array = [];
            const arr = i.attribute.split(',');
            arr.map(j => {
              array = [...array, attributeOne[j - 1].name];
            });
            i.attributeName = array.toString();
          }
          if (i.ifout != null) {
            i.ifout == true ? i.ifoutName = '是':   i.ifoutName = '否'
          }
          console.log('data', data);
          setList(data);
        });
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
            setBindingSheetOpen={setBindingSheetOpen}
            loadData={loadData}
            selectValue={selectValue}
            setBendingNumber={setBendingNumber}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

    const bindingSheetClosed =()=>{
      setBendingNumber('');
      setTrayNumber('');
      setBindingSheetOpen(false);
    }

    const BindingSave = async()=>{
      await bendingMachineApi.addTransfer(bendingNumber, trayNumber)
        .then(res => {
          onToast('托盘绑定成功', styles.toastSuccess);
          loadData(selectValue);
          bindingSheetClosed()
        }).catch(err => {
          onToast(err.message, styles.toastError);
        });
    }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>折弯机信息</NavTitle>
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
          placeholder="请输入折弯机编码"
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
          <div className={`${styles.content} page-content`} style={{ paddingTop: '0' }}>
            {renderCardList()}
          </div>
        </div>
      </PageContent>
      <Sheet
        className={styles['bottom-sheet']}
        opened={bindingSheetOpen}
        onSheetClosed={bindingSheetClosed}
        backdrop
      >
        <BlockTitle>绑定托盘</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="托盘号"
            type="text"
            placeholder="请输入托盘号"
            required
            validate
            clearButton
            onChange={(e)=>{
              setTrayNumber(e.target.value)
            }}
            value={trayNumber}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={BindingSave}>
              绑定
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default BendingConfiguration;
