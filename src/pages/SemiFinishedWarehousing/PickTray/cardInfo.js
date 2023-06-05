import React from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';

const CardInfo = ({ item, loadData, f7router,setCallSheetOpen,setTrayNumber }) => {
  const newStyle = {
    background: '#ffdad4',
    color: '#d83333'
  };
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };

  const handleSaveManual = () => {
    createDialog('托盘手动下架', '确认开始托盘下架流程？', function() {
      try {
        Manual();
        // onToast('托盘自动下架成功', styles.toastSuccess);
      } catch (error) {
        console.log('error', error);
        onToast('托盘下架失败', styles.toastError);
      }
    });
  };

  const Manual = async () => {
    //托盘出库   托盘下架  新增
    const data = {
      trayNumber: item.code,
      inType: 6, //原料托盘出库
      state: 0,
      destination: '原材料组托点',
      middle: 'J001'
    };
    await EmptyPalletDeliveryApi.saveOrUpdate(data)
      .then(res => {
        onToast('托盘自动下架成功', styles.toastSuccess);
        f7router.back();
        loadData();
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };

  return (
    <Card className={styles['card']}>
      <ul className={styles['card-ul']}>
        <li>
          <span className={styles['li-next-title']}>托盘号</span>
          <span className={styles['li-next-title']}>{item.code || ''}</span>
        </li>
        <li>
          <span className={styles['li-next-title']}>库位号</span>
          <span className={styles['li-next-title']}>{item.location || ''}</span>
        </li>
        <li>
          <span className={styles['li-next-title']}>属性2</span>
          <span className={styles['li-next-title']}>{item.attributeTwo || ''}</span>
        </li>
        <li>
          <span className={styles['li-next-title']}>原捡料点</span>
          <span className={styles['li-next-title']}>{item.sortPosition || ''}</span>
        </li>
      </ul>
      <div className={styles['card-div']}>
        <Button fill round className={styles['bottom-btn-confirm']} onClick={()=>{setCallSheetOpen(true),setTrayNumber(item.code)}}>
          下架
        </Button>
      </div>
    </Card>
  );
};

export default CardInfo;
