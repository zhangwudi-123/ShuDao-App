import React, { useEffect, useRef, useState } from 'react';
import { Link, Page, Navbar, NavLeft, NavTitle, NavRight, Searchbar, BlockTitle,ListInput,List, Icon,PageContent, Button} from '@hvisions/f-ui';
import {   Sheet,  f7,} from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { i18n,  } from '@hvisions/toolkit';
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
import EmptyPalletsWarehousingApi from '~/api/EmptyPalletsWarehousing';

const BendingMachine = ({ f7router,bendingNumber,tableName }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [pullSheetOpen, setPullSheetOpen] = useState(false);
  const [pullSheetData, setPullSheetData] = useState({});
  const [location, setLocation] = useState('J003');
  const [trayNumber, setTrayNumber] = useState('');
  const middles = [
    { id: 1, name: 'J002', value: 'J002', },
    { id: 2, name: 'J003', value: 'J003', },
  ]

  const [updateSheetOpen, setUpdateSheetOpen] = useState(false);
  const [areaState, setAreaState] = useState(1);
  const [areaCode, setAreaCode] = useState();

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);

  
  useEffect(() => {
 
  }, [trayNumber,areaState]);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      bendingNumber: bendingNumber,
      pageSize: countRef.current,
    };
    await bendingMachineServices
      .getByQuery(searchData)
      .then(res => {
        res.content.map(i => {
          const text = i.attribute
          const arr = text.split(',');
          let array = []
          arr.map(j => {
            array = [...array, j]
          })
          i.attributeOne = array
          i.ifoutValue = i.ifout?'是':'否'
        })
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

  // const onChangeSelect = e => {
  //   if (!e.target.value) {
  //     setSelectValue('');
  //   } else {
  //     setSelectValue(e.target.value);
  //   }
  // };

  // const handleClickDisable = () => {
  //   setSelectValue('');
  // };

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
          f7router={f7router}
          key={value.id}
          item={value}
          HandlePutOn={HandlePutOn}
          tableName={tableName}
          bendingNumber={bendingNumber}
        />
      ))
    ) : (
      <Empty />
    )
  ) : (
    <Skeleton />
  );

  const HandlePutOn = (record) => {
    setPullSheetOpen(true)
    setPullSheetData(record)
  }


  const pullSheetClosed =()=>{
    setPullSheetOpen(false);
    setPullSheetData({});
    setLocation('J003')
  }

  const putOnSave = () => {
    const data = {
      origin: pullSheetData.readyMaterials,
      middle: location,
      trayNumber: pullSheetData.transferCode,
      state: 0,
    }
    console.log(data,'=========');
    createDialog(
      '托盘上架',
      `确认上架托盘${pullSheetData.transferCode}？`,
      async function () {
        await EmptyPalletsWarehousingApi
          .addAndupShelves(data)
          .then(res => {
            onToast('托盘入库任务生成成功', styles.toastSuccess);
            loadData(selectValue);
            pullSheetClosed()
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          });
      }
    );
  }

  // const updateSheetClosed =()=>{
  //   setUpdateSheetOpen(false);
  // }

  // const updateStateSave =async()=>{
  //   await PrepareAreaServices.updateState(areaCode, areaState)
  //     .then(res => {
  //       onToast('状态更新成功', styles.toastSuccess);
  //       updateSheetClosed()
  //       loadData(selectValue);
  //     }).catch(err => {
  //       onToast(err.message, styles.toastError);
  //     });
  // }

  // const Automatic = async () => {
  //   const data ={
  //     destination:'原材料组托点',
  //     middle:'J001',
  //     taskType:6, //原料托盘出库
  //     transferType:0 //原料托盘
  //   }
  //   await EmptyPalletDeliveryApi.autoTransferOut(data)
  //   .then(res=>{
  //     onToast('托盘自动下架成功', styles.toastSuccess);
  //     loadData(selectValue);
  //   })
  //   .catch(err=>{
  //     onToast(err.message, styles.toastError);
  //   })
  //   //托盘出库   托盘自动出库
  // }

  const handleGoBack = () => {
    f7router.navigate('/', {
      transition: 'ne-backward',
    });
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => handleGoBack()} className="ne-navleft">
        {/* <a onClick={() => f7router.back()} className="ne-navleft"> */}
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>{tableName}</NavTitle>
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
        className={styles['bottom-sheet']}
        opened={pullSheetOpen}
        onSheetClosed={pullSheetClosed}
        backdrop
      >
        <BlockTitle>托盘上架</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
        <ListInput
            label="中间点"
            placeholder="请选择中间点"
            required
            // validate
            // clearButton
            type="select"
            defaultValue={location}
            onChange={(e)=>{
              setLocation(e.target.value)
            }}
            value={location}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {middles.map((value, index) => (
                <option  value={value.value} key={value.id}>
                  {value.value}
                </option>
              ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={putOnSave}>
              保存
            </Button>
        </List>
      </Sheet>
      {/* <Sheet
        className={styles['bottom-sheet']}
        opened={updateSheetOpen}
        onSheetClosed={updateSheetClosed}
        backdrop
      >
        <BlockTitle>更新备料口状态</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="备料区状态"
            placeholder="请输入备料区状态"
            required
            // validate
            // clearButton
            type="select"
            defaultValue={areaState}
            onChange={(e)=>{
              console.log('备料区状态',e.target.value);
              setAreaState(e.target.value)
            }}
            value={areaState}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {PrepareAreaState.map((value, index) => (
                <option  value={value.id} key={value.id}>
                  {value.name}
                </option>
              ))}
          </ListInput>
            <Button className={styles['save-btn']} fill round onClick={updateStateSave}>
              保存
            </Button>
        </List>
      </Sheet>  */}
    </Page>
  );
};

export default BendingMachine;