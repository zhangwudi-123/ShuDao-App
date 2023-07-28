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
import bendingMachineServices from '~/api/bendingMachine';

const SurplusForm = ({
  f7router,
  item,
  orderInfos,
  tableName,
  bendingNumber,
  orderNumberV,
  suborderNumberV,
}) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [trayNumber, setTrayNumber] = useState(item.transferCode||'');
  const [orderNumber, setOrderNumber] = useState(orderNumberV||'');
  const [suborderNumber, setSuborderNumber] = useState(suborderNumberV||'');
  const [scan, setScan] = useState('');
  const [attributeOne, setAttributeOne] = useState(item.attribute||'');
  const [sortPosition, setSortPosition] = useState(item.readyMaterials||'');
  const [dockingPoint, setDockingPoint] = useState('J003');

  const [attributeTwo, setAttributeTwo] = useState('请选择完工属性');
  const [desc, setDesc] = useState('请输入备注');



  useEffect(() => {
    console.log(item, 'item');
    console.log(orderInfos, 'orderInfos');
  }, [orderInfos]);



  const onTrayNumberChange = (e) => {
    const value = e.target.value
    if (value == '') {
      setTrayNumber('')
      return
    }
    setTrayNumber(value)
  }

  const onOrderNumberChange = (e) => {
    const value = e.target.value
    if (value == '') {
      setOrderNumber('')
      return
    }
    setOrderNumber(value)
  }

  const onSuborderNumberChange = (e) => {
    const value = e.target.value
    if (value == '') {
      setSuborderNumber('')
      return
    }
    setSuborderNumber(value)
  }

  const onAttributeOneChange = (checkedValues) => {
    let arrayList = []

    const arr = attributeOne == '' ? [] : attributeOne.split(',');
    const value = checkedValues.target.value
    const checked = checkedValues.target.checked
    if (checked) {
      const array = arr.filter(i => i != '')
      arrayList = [...array, value]
    } else {
      arrayList = arr.filter(i => i != value)
    }
    if (arrayList.length == 0) {
      setAttributeOne([''])
      return
    }
    setAttributeOne(arrayList.toString())
  }

  const onSortPositionChange = async (e) => {
    const value = e.target.value
    if (value == '') {
      setSortPosition('')
      return
    }
    setSortPosition(value)
  }

  const onDockingPointChange = (checkedValues) => {
    const value = checkedValues.target.value
    if (value == '') {
      setDockingPoint('')
      return
    }
    setDockingPoint(value)
  }

  const handleAddInfo = () => {
    const data = orderInfos == undefined ? [] : orderInfos
    f7router.navigate('/bending-machine-addInfos', {
      props: {
        item:item,
        orderInfos: data,
        tableName,
        bendingNumber,
      }
    });
  }

  const handleSave = async () => {
    const params = {};
    params.attributeOne = attributeOne
    params.dockingPoint = dockingPoint
    params.orderNumber = orderNumber
    params.sortPosition = sortPosition
    params.suborderNumber = suborderNumber
    params.trayNumber = trayNumber

    await bendingMachineServices
      .addSurplusMaterial(params)
      .then(res => {
        onToast('新增成功', styles.toastSuccess);
        handleGoBack()
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const style = {
    height: '30px',
    fontSize: '25px',
    fontWeight: 500
  }

  const handleGoBack = () => {
    f7router.navigate('/bending-machine', {
      transition: 'ne-backward',
      props: {
        tableName: tableName,
        bendingNumber: bendingNumber,
      }
    });
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          {/* <a onClick={() => f7router.back()} className="ne-navleft"> */}
          <a onClick={() => handleGoBack()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>未完工回库</NavTitle>
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

          <List strong outlineIos dividersIos insetMd accordionList accordionOpposite style={{ padding: '0 16px' }}>
            <ListItem accordionItem header='托盘号' title={<div style={style}>{trayNumber||'请输入托盘号'}</div>} >
              <AccordionContent>
                <List>
                  <ListInput type="text" placeholder="请输入托盘号" onChange={onTrayNumberChange} />
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem
              link="#"
              header="订单信息"
              title={<div style={style}>{orderNumber||'请选择主订单号'}</div>}
              onClick={handleAddInfo}
            ></ListItem>
            <ListItem
              link="#"
              header="订单信息"
              title={<div style={style}>{suborderNumber||'请选择子订单号'}</div>}
              onClick={handleAddInfo}
            ></ListItem>

            {/* <ListItem
              link="#"
              header="订单信息"
              title={<div style={style}>{scan||'请完善订单信息'}</div>}
              onClick={handleAddInfo}
            ></ListItem>
            <ListItem accordionItem header='主订单号' title={<div style={style}>{orderNumber||'请选择主订单号'}</div>} >
              <AccordionContent>
                <List>
                  <ListInput type="text" placeholder="请输入主订单号" onChange={onOrderNumberChange} />
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem header='子订单号' title={<div style={style}>{suborderNumber||'请选择子订单号'}</div>} >
              <AccordionContent>
                <List>
                  <ListInput type="text" placeholder="请输入子订单号" onChange={onSuborderNumberChange} />
                </List>
              </AccordionContent>
            </ListItem> */}
            <ListItem accordionItem header='折弯属性' title={<div style={style}>{attributeOne}</div>} >
              <AccordionContent>
                <List strongIos outlineIos dividersIos >
                  <ListItem checkbox title="大" name="attributeOne-checkbox" value="大" checked={attributeOne.includes("大")} onChange={onAttributeOneChange} />
                  <ListItem checkbox title="中" name="attributeOne-checkbox" value="中" checked={attributeOne.includes("中")} onChange={onAttributeOneChange} />
                  <ListItem checkbox title="小" name="attributeOne-checkbox" value="小" checked={attributeOne.includes("小")} onChange={onAttributeOneChange} />
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem header='分拣位置' title={<div style={style}>{sortPosition}</div>} >
              <AccordionContent>
              <List>
                  <ListInput type="text" placeholder="请输入分拣位置" onChange={onSortPositionChange} />
                </List>
                {/* <List>
                  <ListItem checkbox title="J004" name="sortPosition-checkbox" value="J004" checked={sortPosition == "J004"} onChange={onSortPositionChange} />
                  <ListItem checkbox title="J005" name="sortPosition-checkbox" value="J005" checked={sortPosition == "J005"} onChange={onSortPositionChange} />
                  <ListItem checkbox title="J006" name="sortPosition-checkbox" value="J006" checked={sortPosition == "J006"} onChange={onSortPositionChange} />
                </List> */}
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem header='接驳点' title={<div style={style}>{dockingPoint}</div>} >
              <AccordionContent>
                <List strongIos outlineIos dividersIos >
                  <ListItem checkbox title="J002" name="dockingPoint-checkbox" value="J002" checked={dockingPoint == "J002"} onChange={onDockingPointChange} />
                  <ListItem checkbox title="J003" name="dockingPoint-checkbox" value="J003" checked={dockingPoint == "J003"} onChange={onDockingPointChange} />
                </List>
              </AccordionContent>
            </ListItem>
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

export default SurplusForm;