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

const SemiFinishedDelivery = ({ f7router }) => {
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


  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      receiptNumber: keyWord,
      pageSize: countRef.current
    };
    await SemiFinishedDeliveryApi.getByQuery(searchData)
      .then(res => {
        // setList(res.content);
        // setTotal(res.totalElements);
        const data = [
          {
            attributeOne: '1,2',
            attributeTwo: '4',
            createTime: '2023-06-01 10:46:21',
            id: 16,
            intime: 'g',
            locationNumber: '1-g',
            orderCount: 10,
            orderNumber: '1,2',
            owNumber: 'CQ202306050010',
            receiptNumber: null,
            state: 2,
            trayNumber: '1#TP-A-0044'
          },
          {
            attributeOne: '2,3',
            attributeTwo: '1',
            createTime: '2023-06-02 10:46:21',
            id: 18,
            intime: '20g',
            locationNumber: '20-g',
            orderCount: 5,
            orderNumber: '1,2',
            owNumber: 'CQ202306050011',
            receiptNumber: null,
            state: 1,
            trayNumber: '1#TP-A-0045'
          }
        ];
        data.map(i => {
          if (i.attributeOne != []) {
            let array = [];
            const arr = i.attributeOne.split(',');
            arr.map(j => {
              array = [...array, attributeOne[j - 1].name];
            });
            i.attributeOneName = array.toString();
          }
          if (i.attributeTwo != null) {
            i.attributeTwoName = attributeTwo[i.attributeTwo - 1].name;
          }
          console.log('data', data);
          setList(data);
        });
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
            setOutSheetOpen={setOutSheetOpen}
            setOutSheetData={setOutSheetData}
            getReadyMaterialList={getReadyMaterialList}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

    const outSheetClosed = () => {
      setOutSheetOpen(false);
      setOutSheetData({});
      setReadyMaterials('');
      setReadyMaterialList([])
      setDockingPoint('');
    };

    //查询页面数据
    const getReadyMaterialList = async (page, pageSize, searchValue) => {
      bendingMachineApi
        .getByQuery({ ...searchValue, page: 0, pageSize:1000 })
        .then(res => {
          const newArr = []
          res.content.forEach(item => {
            if (!newArr.includes(item.readyMaterials)) {
              newArr.push(item.readyMaterials)
            }
          })
          setReadyMaterials(newArr[0])
          setReadyMaterialList(newArr);
          setDockingPoint(dockingPoints[0].value)
        })
    };

  const outSave = async () => {
    await SemiFinishedDeliveryApi
    .outStore(readyMaterials,outSheetData.id,dockingPoint)
      .then(res => {
        onToast('出库成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
      outSheetClosed();
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>半成品托盘拣选</NavTitle>
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
          placeholder="请输入单号"
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
        className={styles['add-sheet']}
        opened={outSheetOpen}
        onSheetClosed={outSheetClosed}
        backdrop
      >
        <BlockTitle>出库</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="备料区"
            type="select"
            placeholder="请输入备料区"
            required
            onChange={(e)=>{
              setReadyMaterials(e.target.value)
            }}
            value={readyMaterials}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {readyMaterialList.map((value, index) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
          </ListInput>
          <ListInput
            label="接驳口"
            type="select"
            placeholder="请输入接驳口"
            required
            onChange={(e)=>{
              setDockingPoint(e.target.value)
            }}
            value={dockingPoint}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {dockingPoints.map((value, index) => (
              <option value={value.value} key={value.id}>
                {value.name}
              </option>
            ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={outSave}>
              保存
            </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default SemiFinishedDelivery;
