import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import TransferBoxServices from '~/api/TransferBox';

const CardInfo = ({
  item,
  setPutSheetOpen,
  setPutSheetType,
  setSheetData,
  setBindingSheetOpen,
  selectValue,
  loadData,
}) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    if (item.state == '空闲') {
      setStyle(newStyle);
      setState('空闲');
    }
    if (item.state == '使用中') {
      setStyle(onGoingStyle);
      setState('使用中');
    }
    // if (item.state == 2) {
    //   setStyle(completeStyle);
    //   setState('已完成');
    // }
  }, []);

  const newStyle = {
    background: '#ffdad4',
    color: '#d83333'
  };
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  // const completeStyle = {
  //   background: '#D3F0E9',
  //   color: '#42BB9E'
  // };

  const handleUnbind = ()=>{
    createDialog(
      '库位解绑',
      `确认解除库位${item.locationName}与托盘${item.code}的绑定关系？`,
      function() {
        try {
          TransferBoxServices.unLockLocation(item.id)
          .then(res=>{
            onToast('库位解绑成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err=>{
            onToast(err.message, styles.toastError);
          })
        } catch (error) {
          console.log('error',error);
          onToast('库位解绑失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.code || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>库位号</span>
            <span className={styles['li-next-title']}>{item.locationName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>托盘位置</span>
            <span className={styles['li-next-title']}>{item.location || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>重量</span>
            <span className={styles['li-next-title']}>{item.weight || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setPutSheetType('ON'), setPutSheetOpen(true), setSheetData(item) }}>
              上架托盘
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setPutSheetType('OFF'), setPutSheetOpen(true), setSheetData(item) }}>
              下架托盘
            </Button>
            {
              item.locationCode == null ?
                <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setBindingSheetOpen(true) , setSheetData(item) }}>
                  绑定库位
                </Button>
                :
                <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", background: '#d83333' }} onClick={() => handleUnbind()}>
                  解绑库位
                </Button>
            }
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
