import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './CardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import joinAreaServices from '~/api/joinArea';
import EmptyPalletsWarehousingApi from '~/api/EmptyPalletsWarehousing';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery'

const CardInfo = ({
  f7router,
  item,
  setJoinCode,
  loadData,
  setJoinState,
  setBindingSheetOpen,
  setUpdateSheetOpen,
}) => {

  const [style, setStyle] = useState();
  const [state, setState] = useState();



  useEffect(() => {
    console.log(item);
    if (item.joinState == 1) {
      setStyle(newStyle);
      setState('空置');
    }
    if (item.joinState == 2) {
      setStyle(onGoingStyle);
      setState('使用中');
    }
    if (item.joinState == 3) {
      setStyle(completeStyle);
      setState('运输中');
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

  const HandleShelf = async () => {
    await EmptyPalletsWarehousingApi.callTransferIn(item.joinCode)
      .then(res => {
        onToast('托盘上架成功', styles.toastSuccess);
        loadData();
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const HandleTakedown = async () => {
    await EmptyPalletDeliveryApi.callTransferOut(item.joinCode)
      .then(res => {
        onToast('托盘下架成功', styles.toastSuccess);
        loadData();
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const handleUnbind = () => {
    createDialog(
      '托盘解绑',
      `确认解除接驳口${item.joinCode}与托盘${item.transferCode}的绑定关系`,
      function () {
        try {
          joinAreaServices.deleteTransfer(item.joinCode, item.transferCode)
            .then(res => {
              onToast('托盘解绑成功', styles.toastSuccess);
              loadData();
            })
            .catch(err => {
              onToast(err.message, styles.toastError);
            })
        } catch (error) {
          console.log('error', error);
          onToast('托盘解绑失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.joinCode || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>托盘号</span>
            <span className={styles['li-next-title']}>{item.transferCode || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => HandleShelf()}>
              上架托盘
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => HandleTakedown()}>
              下架托盘
            </Button>
          </ul>
        </div>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            {item.transferCode == null ?
              <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setBindingSheetOpen(true); setJoinCode(item.joinCode) }}>
                绑定托盘
              </Button> :
              <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", background: '#d83333' }} onClick={() => handleUnbind()}>
                解绑托盘
              </Button>}
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { console.log('item.areaState', item.areaState); setUpdateSheetOpen(true); setJoinState(item.joinState); setJoinCode(item.joinCode) }}>
              更新状态
            </Button>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
