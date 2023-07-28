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

const SemiFinishedBinding2 = ({ f7router, orderInfos }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [sortPosition, setSortPosition] = useState('请选择分拣位置');
  const [trayNumber, setTrayNumber] = useState('请输入托盘号');
  const [scan, setScan] = useState('请完善订单信息');
  // const [orderInfos, setOrderInfos] = useState([]);
  const [attributeOne, setAttributeOne] = useState(['请选择折弯属性']);
  const [attributeTwo, setAttributeTwo] = useState('请选择完工属性');
  const [dockingPoint, setDockingPoint] = useState('J002');
  const [desc, setDesc] = useState('请输入备注');



  useEffect(() => {
    console.log(orderInfos, 'orderInfos');
  }, [orderInfos]);

  const onSortPositionChange = async (e) => {
    const value = e.target.value
    setSortPosition(value)
    await PrepareAreaApi.findByArea({ areaCode: value })
      .then(res => {
        if (res.content.length > 0) {
          const transferCode = res.content[0].transferCode
          // const v = formData
          // v.sortPosition = sortPosition
          // v.trayNumber = transferCode
          // setFormData(v)
          setTrayNumber(transferCode)
        }
      })
  }

  const onTrayNumberChange = (e) => {
    const value = e.target.value
    if (value == '') {
      setTrayNumber('请输入托盘号')
      return
    }
    setTrayNumber(value)
  }

  const handleAddInfo = () => {
    console.log('orderInfos', orderInfos);
    const data = orderInfos == undefined ? [] : orderInfos
    console.log('data-------', data);
    f7router.navigate('/semi-warehousing-binding-master2', {
      props: {
        orderInfos: data,
      }
    });
  }

  const onAttributeOneChange = (checkedValues) => {
    let arrayList = []
    const value = checkedValues.target.value
    const checked = checkedValues.target.checked
    if (checked) {
      const array = attributeOne.filter(i => i != '请选择折弯属性')
      arrayList = [...array, value]
    } else {
      arrayList = attributeOne.filter(i => i != value)
    }
    if (arrayList.length == 0) {
      setAttributeOne(['请选择折弯属性'])
      return
    }
    setAttributeOne(arrayList)
  }

  const onAttributeTwoChange = (checkedValues) => {
    const value = checkedValues.target.value
    // const checked = checkedValues.target.checked
    setAttributeTwo(value)
  }

  const onDockingPointChange = (checkedValues) => {
    const value = checkedValues.target.value
    setDockingPoint(value)
  }

  const onDescChange = (e) => {
    const value = e.target.value
    if (value == '') {
      setDesc('请输入备注')
      return
    }
    setDesc(value)
  }

  const handleSave = async() => {
    const params = {}
    params.attributeOne = attributeOne.toString()
    params.attributeTwo = attributeTwo
    params.attributeoneState = true
    params.attributetwoState = true
    params.cuttingName = '切割机2'
    params.desc = desc
    params.dockingPoint = dockingPoint
    params.sortPosition = sortPosition
    params.trayNumber = trayNumber
    params.orderDetails = orderInfos
    let figureNumber = []
    let materialCode = []
    let materialName = []
    let orderNumber = []
    let quantity = []
    let suborderNumber = []

    orderInfos.map(i => {
      materialCode = [...materialCode, i.materialCode]
      materialName = [...materialName, i.materialName]
      orderNumber = [...orderNumber, i.orderCode]
      quantity = [...quantity, i.quantity]
      i.suborderNumberDetails.map(j => {
        figureNumber = [...figureNumber, j.figureNumber]
        suborderNumber = [...suborderNumber, j.suborderNumber]
      })
    })

    params.figureNumber = figureNumber.toString()
    params.materialCode = materialCode.toString()
    params.materialName = materialName.toString()
    params.orderNumber = orderNumber.toString()
    params.quantity = quantity.toString()
    params.suborderNumber = suborderNumber.toString()
    console.log(params, 'params');

    await SemiFinishedWarehousingApi
    .bindSemiMaterial(params)
    .then(res => {
      onToast('物料绑定成功', styles.toastSuccess);
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
    f7router.navigate('/semi-finished-warehousing2', {
      transition: 'ne-backward',
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
        <NavTitle>半成品绑定</NavTitle>
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
            <ListItem accordionItem header='分拣位置' title={<div style={style}>{sortPosition}</div>} >
              <AccordionContent>
                <List>
                  <ListItem checkbox title="J007" name="sortPosition-checkbox" value="J007" checked={sortPosition == "J007"} onChange={onSortPositionChange} />
                  <ListItem checkbox title="J008" name="sortPosition-checkbox" value="J008" checked={sortPosition == "J008"} onChange={onSortPositionChange} />
                  <ListItem checkbox title="J009" name="sortPosition-checkbox" value="J009" checked={sortPosition == "J009"} onChange={onSortPositionChange} />
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem header='托盘号' title={<div style={style}>{trayNumber}</div>} >
              <AccordionContent>
                <List>
                  <ListInput type="text" placeholder="请输入托盘号"  onChange={onTrayNumberChange} />
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem
              link="#"
              header="订单信息"
              // title={<div style={style}>{scan}</div>}
              title={<div style={style}>{orderInfos != undefined ? orderInfos.length : scan}</div>}
              // title={
              //   !isEmpty(material) ? (
              //     <div style={{ height: '44px', lineHeight: '44px' }}>
              //       {material.materialName} / {material.materialCode}
              //     </div>
              //   ) : (
              //     <div style={{ height: '44px', lineHeight: '44px', color: '#00000073' }}>
              //       请选择物料
              //     </div>
              //   )
              // }
              // after=""
              onClick={handleAddInfo}
            ></ListItem>
            <ListItem accordionItem header='折弯属性' title={<div style={style}>{attributeOne.toString()}</div>} >
              <AccordionContent>
                <List strongIos outlineIos dividersIos >
                  <ListItem checkbox title="大" name="attributeOne-checkbox" value="大" onChange={onAttributeOneChange} />
                  <ListItem checkbox title="中" name="attributeOne-checkbox" value="中" onChange={onAttributeOneChange} />
                  <ListItem checkbox title="小" name="attributeOne-checkbox" value="小" onChange={onAttributeOneChange} />
                </List>
              </AccordionContent>
            </ListItem>

            <ListItem accordionItem header='完工属性' title={<div style={style}>{attributeTwo}</div>} >
              <AccordionContent>
                <List strongIos outlineIos dividersIos >
                  <ListItem checkbox title="切割完工" name="attributeTwo-checkbox" value="切割完工" checked={attributeTwo == "切割完工"} onChange={onAttributeTwoChange} />
                  <ListItem checkbox title="切割未完工" name="attributeTwo-checkbox" value="切割未完工" checked={attributeTwo == "切割未完工"} onChange={onAttributeTwoChange} />
                </List>
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

            <ListItem accordionItem header='备注' title={<div style={style}>{desc}</div>} >
              <AccordionContent>
                <List>
                  <ListInput type="textarea" placeholder="请输入备注" onChange={onDescChange} />
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

export default SemiFinishedBinding2;




{/* <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
<ListInput
  label="分拣位置"
  type="select"
  placeholder="请选择分拣位置"
  // required
  validate
  // clearButton
  onChange={(e) => {
    // sortPositionChange(e)
  }}
>
  <option value="none" selected disabled hidden>--请选择分拣位置--</option>
  <option key='1' value="J004">J004</option>
  <option key='2' value="J005">J005</option>
  <option key='3' value="J006">J006</option>
</ListInput>
<ListInput
  label="托盘号"
  type="text"
  placeholder="请输入托盘号"
  // required
  validate
  // clearButton
  onChange={(e) => {
    const v = formData
    v.trayNumber = e.target.value
    setFormData(v)
  }}
  defaultValue={trayNumber}
>
</ListInput>
{/* <ListInput
  label="订单信息"
  type="text"
  placeholder="请输入订单信息"
  required
  validate
  clearButton
  onChange={(e) => {
    const v = formData
    v.lineNumber = e.target.value
    setFormData(v)
  }}
// value={formData.lineNumber}
// defaultValue={formData.lineNumber}
>
</ListInput>*/}
{/* <ListItem
  className='attribute'
  title="折弯属性"
  smartSelect
  smartSelectParams={{ openIn: 'popover' }}
  header=  '111111'
>
  <option value="none" selected disabled hidden>--请选择折弯属性--</option>
  <select name="attributeOne" multiple >
    <option key='1' value="大">大</option>
    <option key='2' value="中">中</option>
    <option key='3' value="小">小</option>
  </select>
</ListItem> */}

{/* <ListInput
  label="折弯属性"
  // type="select"
  placeholder="请选择折弯属性"
  validate
  multiple="true"
>
    <option key='1' value="大">大</option>
    <option key='2' value="中">中</option>
    <option key='3' value="小">小</option>
</ListInput> */}


{/* <ListItem accordionItem header='折弯属性' title={<div style={style}>{attributeOne.toString()}</div>} >
  <AccordionContent>
    <List strongIos outlineIos dividersIos >
      <ListItem checkbox title="大" name="demo-checkbox" value="大" onChange={onAttributeOneChange} />
      <ListItem checkbox title="中" name="demo-checkbox" value="中" onChange={onAttributeOneChange} />
      <ListItem checkbox title="小" name="demo-checkbox" value="小" onChange={onAttributeOneChange} />
    </List>
  </AccordionContent>
</ListItem>

<ListItem accordionItem header='完工属性' title={<div style={style}>{attributeTwo}</div>} >
  <AccordionContent>
    <List strongIos outlineIos dividersIos >
      <ListItem checkbox title="切割完工" name="demo-checkbox" value="切割完工" checked={attributeTwo == "切割完工"} onChange={onAttributeTwoChange} />
      <ListItem checkbox title="切割未完工" name="demo-checkbox" value="切割未完工" checked={attributeTwo == "切割未完工"} onChange={onAttributeTwoChange} />
    </List>
  </AccordionContent>
</ListItem> */}


{/* <ListInput
  label="完工属性"
  type="select"
  placeholder="请选择完工属性"
  validate
>
    <option value="none" selected disabled hidden>--请选择完工属性--</option>
    <option key='1' value="切割完工">切割完工</option>
    <option key='2' value="切割未完工">切割未完工</option>
</ListInput> */}

{/* <ListItem title="完工属性" smartSelect smartSelectParams={{ openIn: 'popover' }}>
  <select name="attributeTwo" >
    <option key='1' value="切割完工">切割完工</option>
    <option key='2' value="切割未完工">切割未完工</option>
  </select>
</ListItem> */}
{/* <ListInput
  label="接驳点"
  type="select"
  placeholder="请选择接驳点"
  validate
>
  <option value="none" selected disabled hidden>--请选择接驳点--</option>
  <option key='1' value="J002">J002</option>
  <option key='2' value="J003">J003</option>
</ListInput> */}
{/* <ListItem title="接驳点" smartSelect smartSelectParams={{ openIn: 'popover' }}>
  <select name="dockingPoint" >
    <option key='1' value="J002">J002</option>
    <option key='2' value="J003">J003</option>
  </select>
</ListItem> */}
{/* <ListInput
  label="备注"
  type="text"
  placeholder="请输入备注"
  // required
  validate
  // clearButton
  onChange={(e) => {
    const v = formData
    v.desc = e.target.value
    setFormData(v)
  }}
  defaultValue={formData.desc}
>
</ListInput> */}
{/* <ListInput
  label="接驳点"
  type="select"
  placeholder="请输入接驳点"
  required
  validate
  clearButton
  onChange={(e) => {
    const v = formData
    v.dockingPoint = e.target.value
    setFormData(v)
  }}
  defaultValue={formData.dockingPoint}
>
  {dockingPoints.map((value, index) => (
    <option value={value.value} key={value.id}>
      {value.name}
    </option>
  ))}
</ListInput> 

</List> */}