import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Page, Navbar, NavLeft, NavTitle, PageContent, Button, ListInput, List, Card, Input } from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast } from '~/util/home';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';

const MasterAdd2 = ({ 
  f7router, 
  orderInfos,
}) => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [formData, setFormData] = useState({});

  useEffect(() => {

  }, [formData]);

  const onKeyDowm = (e) => {

    const dataString = inputValue
    const arr = dataString.split('|');
    console.log('arr', arr);

    const orderCode = arr[2]
    const materialName = arr[3]
    const materialCode = arr[0]
    const quantity = arr[1]
    const suborderNumberDetails = []

    setFormData({
      orderCode: orderCode,
      materialName: materialName,
      materialCode: materialCode,
      quantity: Number(quantity),
      suborderNumberDetails: suborderNumberDetails
    })
    setInputValue('')
  }

  const handleSave = async () => {
    console.log('formData', formData);
    orderInfos = [...orderInfos, formData]
    handleGoBack()
  }

  const handleGoBack = () => {
    f7router.navigate('/semi-warehousing-binding-master2', {
      transition: 'ne-backward',
      props: {
        orderInfos,
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
        <NavTitle>新增主订单信息</NavTitle>
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
                placeholder="请扫描主订单条码"
                onChange={e => setInputValue(e.target.value)}
                className={styles['input-style']}
                value={inputValue}
              />
              <Button
                onClick={onKeyDowm}
                className={styles['search-btn']}
              >
                确认
              </Button>
            </div>
          </Card>
          <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
            <ListInput
              label="主订单号"
              type="text"
              placeholder="请输入主订单号"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.orderCode = e.target.value
                setFormData(v)
              }}
              defaultValue={formData.orderCode}
            >
            </ListInput>
            <ListInput
              label="产品名称"
              type="text"
              placeholder="请输入产品名称"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.materialName = e.target.value
                setFormData(v)
              }}
              defaultValue={formData.materialName}
            >
            </ListInput>
            <ListInput
              label="产品代码"
              type="text"
              placeholder="请输入产品代码"
              required
              validate
              clearButton
              onChange={(e) => {
                const v = formData
                v.materialCode = e.target.value
                setFormData(v)
              }}
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
                v.quantity = e.target.value
                setFormData(v)
              }}
              defaultValue={formData.quantity}
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

export default MasterAdd2;