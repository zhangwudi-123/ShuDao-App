import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Page, Navbar, NavLeft, NavTitle, PageContent, Button, ListInput, List, Card, Input, ListItem,
  AccordionContent,
} from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast } from '~/util/home';

import PrepareAreaApi from '~/api/PrepareArea';
import SemiFinishedWarehousingApi from '~/api/SemiFinishedWarehousing';
import { isEmpty } from 'lodash';
import { Skeleton, Empty } from '~/components';
import useDebounce from '~/Hook/useDebounce';

const OrderInformations = ({
  f7router,
  item,
  orderInfos,
  tableName,
  bendingNumber,
}) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);


  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [selectValue, setSelectValue] = useState({});
  const debounceSelectValue = useDebounce(selectValue, 500);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [listChecked, setListChecked] = useState(false);

  const [list, setList] = useState([]);
  const [orderNumbers, setOrderNumbers] = useState([]);
  const [suborderNumbers, setSuborderNumbers] = useState([]);

  // useEffect(() => {
  //   const load = async () => {
  //     await loadData(debounceSelectValue);
  //   };
  //   load();
  // }, [debounceSelectValue]);

  const loadData = async searchData => {
    setLoading(true);
    await SemiFinishedWarehousingApi
      .getAllOderByQuery(searchData)
      .then(res => {
        setList(res);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
    setLoading(false);
  };

  //判断两个数组的交际
  function  getInclude1(arr1, arr2) {
    // console.log(arr1,'arr1');
    // console.log(arr2,'arr2');
    const temp = []
      for (const item of arr2) {
      arr1.find(i => i === item) ? temp.push(item) : ''
    }
    // console.log(temp,'temp');
    return temp;
  }

  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(i => (
          <ListItem
            key={i.id}
            checkbox
            title={i.orderCode}
            name="demo-checkbox"
            indeterminate={
              // i.suborderNumberDetails.map(i => { return i.suborderNumber }).length != 0
              // &&
              getInclude1(suborderNumbers, i.suborderNumberDetails.map(i => { return i.suborderNumber })).length > 0
              &&
              getInclude1(suborderNumbers, i.suborderNumberDetails.map(i => { return i.suborderNumber })).length < i.suborderNumberDetails.length
            }
            checked={
              listChecked
              &&
              !isEmpty(orderNumbers.filter(j=>j == i.orderCode))
              &&
              getInclude1(suborderNumbers, i.suborderNumberDetails.map(i => { return i.suborderNumber })).length == i.suborderNumberDetails.length
            }
            onChange={(e) => onMoviesChange(e, i)}
            value={i.orderCode}
          >
            <ul slot="root">
              {renderCardListDetail(i.suborderNumberDetails, i)}
            </ul>
          </ListItem>
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const renderCardListDetail = (suborderNumberDetails , item) =>
    !isEmpty(suborderNumberDetails) ? (
      suborderNumberDetails.map(i => (
        <ListItem
          key={i.id}
          checkbox
          title={i.suborderNumber}
          name="demo-checkbox"
          checked={suborderNumbers.indexOf(i.suborderNumber) >= 0}
          onChange={(e) => onMovieChange(e ,item)}
          value={i.suborderNumber}
        ></ListItem>
      ))
    ) : (
      null
    )

  const handleGoBack = () => {
    f7router.navigate('/bending-machine-surplusForm', {
      transition: 'ne-backward',
      props: {
        item: item,
        orderInfos: orderInfos,
        tableName,
        bendingNumber,
        orderNumberV: '',
        suborderNumberV: '',
      }
    });
  };

  const onSearch = async () => {
    console.log('inputValue', inputValue1, inputValue2);
    const params = {}
    inputValue1 == '' ? delete params.orderNumber : params.orderNumber = inputValue1
    inputValue2 == '' ? delete params.suborderNumber : params.suborderNumber = inputValue2

    // setSelectValue(params)
    loadData(params)
  }

  const onMoviesChange = (e,item) => {
    if(e.target.checked){
      orderNumbers.push(item.orderCode);
      item.suborderNumberDetails.map(i=>{
        suborderNumbers.push(i.suborderNumber);
      })
    }else {
      orderNumbers.splice(orderNumbers.indexOf(item.orderCode), 1);
      item.suborderNumberDetails.map(i=>{
        suborderNumbers.splice(suborderNumbers.indexOf(i.suborderNumber), 1);
      })
    }
    // console.log('[...orderNumber]', [...orderNumbers]);
    // console.log('[...suborderNumber]', [...suborderNumbers]);

    setOrderNumbers([...orderNumbers]);
    setSuborderNumbers([...suborderNumbers]);

    setInputValue1([...orderNumbers].toString())
    setInputValue2([...suborderNumbers].toString())

    setListChecked(true)
  };

  const onMovieChange = (e, item) => {
    const value = e.target.value;
    if (e.target.checked) {
      orderNumbers.push(item.orderCode);
      suborderNumbers.push(value);
    } else {
      orderNumbers.splice(orderNumbers.indexOf(item.orderCode), 1);
      suborderNumbers.splice(suborderNumbers.indexOf(value), 1);
    }
    // console.log('[...orderNumber]', [...orderNumbers]);
    // console.log('[...suborderNumber]', [...suborderNumbers]);

    setOrderNumbers([...orderNumbers]);
    setSuborderNumbers([...suborderNumbers]);

    const v1 = [...orderNumbers].filter((item, index, arr) => { return arr.indexOf(item, 0) === index; })
    setInputValue1(v1.toString())
    setInputValue2([...suborderNumbers].toString())

    setListChecked(true)
  };

const handleSave=()=>{
  f7router.navigate('/bending-machine-surplusForm', {
    transition: 'ne-backward',
    props: {
      item: item,
      orderInfos: orderInfos,
      tableName,
      bendingNumber,
      orderNumberV: inputValue1,
      suborderNumberV: inputValue2,
    }
  });
}

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          {/* <a onClick={() => f7router.back()} className="ne-navleft"> */}
          <a onClick={() => handleGoBack()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>添加订单信息</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        ptrPreloader={ptrPreloader}
        ptr
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
      >
        <div style={{ padding: '0 16px 56px 16px' }} className={styles.tabContainer}>
          <Card className={styles['card-box']}>
            <div className={styles['search-box']}>
              <div >
                <input
                  type="text"
                  placeholder="请输入主订单号"
                  onChange={e => setInputValue1(e.target.value)}
                  className={styles['input-style']}
                  style={{ marginBottom: '5px' }}
                  value={inputValue1}
                />
                <input
                  type="text"
                  placeholder="请输入子订单号"
                  onChange={e => setInputValue2(e.target.value)}
                  className={styles['input-style']}
                  style={{ marginTop: '5px' }}
                  value={inputValue2}
                />
              </div>
              <Button
                onClick={onSearch}
                className={styles['search-btn']}
              >
                查询
              </Button>
            </div>
          </Card>
          <List strongIos outlineIos dividersIos className={styles['list-div']}>
            {renderCardList()}
          </List>
        </div>
      </PageContent>
      <div className={styles['detail-bottom']}>
        <Button className={styles['bottom-btn-confirm']} fill round onClick={handleSave}>
          保存
        </Button>
      </div>
    </Page >
  );
};

export default OrderInformations;