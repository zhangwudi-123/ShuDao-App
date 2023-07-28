import React, { useEffect, useState } from 'react';
import { Card, Button, Checkbox, Sheet, Page } from '@hvisions/f-ui';
import styles from './CardInfo.scss';
import PrepareAreaServices from '~/api/PrepareArea';
import { onToast, createDialog } from '~/util/home';
import CallTraySheet from './CallTray/callTraySheet';
import SemiFinishedDeliveryServices from '~/api/SemiFinishedDelivery';

const CardInfo = ({
  f7router,
  item,
  setCallSheetOpen,
  setSelectedData,
}) => {

  const [style, setStyle] = useState();
  const [state, setState] = useState();
  // const [callSheetOpen, setCallSheetOpen] = useState(false);

  useEffect(() => {
    console.log(item);
    if (item.state == 1) {
      setStyle(newStyle);
      setState('未占用');
    }
    if (item.state == 2) {
      setStyle(onGoingStyle);
      setState('已占用');
    }
  }, []);

  const newStyle = {
    background: '#ffdad4',
    color: '#d83333'
  };
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };

  const handleSaveOut = () => {
    setCallSheetOpen(true)
    setSelectedData(item)
  }

  // const outSheetClosed = () => {
  //   setCallSheetOpen(false)
  // }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.trayNumber || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>库位号</span>
            <span className={styles['li-next-title']}>{item.locationNumber || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>订单号</span>
            <span className={styles['li-next-title']}>{item.orderNumber || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>子订单号</span>
            <span className={styles['li-next-title']}>{item.suborderNumber || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>产品名称</span>
            <span className={styles['li-next-title']}>{item.productName}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>产品代码</span>
            <span className={styles['li-next-title']}>{item.productCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>产品数量(张)</span>
            <span className={styles['li-next-title']}>{item.productNum || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>属性1</span>
            <span className={styles['li-next-title']}>{item.attributeOne || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>属性2</span>
            <span className={styles['li-next-title']}>{item.attributeTwo || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>入库时间</span>
            <span className={styles['li-next-title']}>{item.intime || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>备注</span>
            <span className={styles['li-next-title']}>{item.description || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleSaveOut()}>
              出库
            </Button>
          </ul>
        </div>
        {/* <Sheet
        className={styles['add-sheet']}
        opened={callSheetOpen}
        onSheetClosed={outSheetClosed}
        backdrop
      >
        <CallTraySheet
          outSheetClosed={outSheetClosed}
          item={item}
          loadData={loadData}
          selectValue={selectValue}
          modifyData={modifyData}
        />
      </Sheet> */}
      </Card>
    </div>

  );
};

export default CardInfo;
