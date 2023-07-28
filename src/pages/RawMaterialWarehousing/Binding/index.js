import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Page, Navbar, NavLeft, NavTitle, PageContent, Button, ListInput, List, Card, Input } from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast } from '~/util/home';
import { isEmpty } from 'lodash';
import { Skeleton, Empty } from '~/components';
import TransferBoxServices from '~/api/TransferBox';
import joinAreaServices from '~/api/joinArea';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';

const Manual = ({ f7router ,trayNumber}) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [inputValue, setInputValue] = useState('');

  

  // const [trayNumber, setTrayNumber] = useState('');

  const [formData, setFormData] = useState({trayNumber:trayNumber});
  const [orderNumber, setOrderNumber] = useState('');
  const [lineNumber, setLineNumber] = useState('');
  const [materialCode, setMaterialCode] = useState('');
  const [number, setNumber] = useState('');

  const inputRef = useRef(null);

  // useEffect(() => {
  //   sortPositionChange()
  // }, [])

  // const sortPositionChange = async() => {
  //   await joinAreaServices.findJoin()
  //     .then(res => {
  //       console.log('res',res);
  //       res.map(i => {
  //         if (i.joinCode == 'J001' && i.transferCode != null) {
  //           console.log('i.transferCode',i.transferCode);
  //           const v = formData
  //           v.trayNumber = i.transferCode
  //           console.log('v',v);
  //           setFormData(v)
  //           setTrayNumber(trayNumber)
  //         }
  //       })
  //     })
  // }

  useEffect(() => {

  }, [formData,trayNumber]);

  const onKeyDowm = (e) => {

    const dataString = inputValue
    const arr = dataString.split('|');
    console.log('arr', arr);

    const orderNumber = arr[0]
    const lineNumber = arr[1]
    const associatedNumber = arr[2]
    const other = arr[3]
    const materialCode = arr[4]
    const number = arr[5]
    const unit = arr[6]

    setFormData({
      orderNumber: orderNumber,
      lineNumber: lineNumber,
      materialCode: materialCode,
      number: Number(number),
      associatedNumber: associatedNumber,
      unit: unit,
    })
    setOrderNumber(orderNumber);
    setLineNumber(lineNumber);
    setMaterialCode(materialCode);
    setNumber(number);
    setInputValue('')
  }

  const handleSave = async() => {
    console.log('formData', formData);
    formData.associatedNumber = formData.orderNumber
    await RawMaterialWarehousingApi
      .bindRawMaterial(formData)
      .then(res => {
        onToast('物料绑定成功', styles.toastSuccess);
        handleGoBack()
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const handleGoBack = () => {
    f7router.navigate('/raw-material-warehousing', {
      transition: 'ne-backward',
    });
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>托盘物料绑定</NavTitle>
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
              <textarea
                type="text"
                placeholder="请扫描收料单条码"
                onChange={e => setInputValue(e.target.value)}
                className={styles['input-style']}
                value={inputValue}
              // disabled={orderId ? true : false}
              />
              <Button
                onClick={onKeyDowm}
                className={styles['search-btn']}
              // disabled={orderId ? true : false}
              >
                确认
              </Button>
            </div>
          </Card>
          <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
            <ListInput
              label="托盘号"
              type="text"
              placeholder="请输入托盘号"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.trayNumber = e.target.value
                setFormData(v)
                // setTyayNumber(e.target.value)
              }}
            // value={trayNumber}
            defaultValue={formData.trayNumber}
            >
            </ListInput>
            <ListInput
              label="采购订单号"
              type="text"
              placeholder="请输入采购订单号"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.orderNumber = e.target.value
                setFormData(v)
              }}
              // value={formData.orderNumber}
              defaultValue={formData.orderNumber}
            >
            </ListInput>
            <ListInput
              label="送货单行号"
              type="text"
              placeholder="请输入送货单行号"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.lineNumber = e.target.value
                setFormData(v)
              }}
              // value={formData.lineNumber}
              defaultValue={formData.lineNumber}
            >
            </ListInput>
            <ListInput
              label="物料编码"
              type="text"
              placeholder="请输入物料编码"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.materialCode = e.target.value
                setFormData(v)
              }}
              // value={formData.materialCode}
              defaultValue={formData.materialCode}
            >
            </ListInput>
            <ListInput
              label="数量"
              type="number"
              placeholder="请输入数量"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.number = e.target.value
                setFormData(v)
              }}
              // value={formData.number}
              defaultValue={formData.number}
            >
            </ListInput>
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

export default Manual;