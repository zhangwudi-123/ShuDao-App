import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import EmptyPalletsWarehousingApi from '~/api/EmptyPalletsWarehousing';

const CardInfo = ({
  item,
  tabKey,
  selectValue,
  loadData,
}) => {

  const columns = [
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    },
    {
      title: '起点',
      dataIndex: 'origin',
      key: 'origin',
      align: 'center',
    },
    {
      title: '中间点',
      dataIndex: 'middle',
      key: 'middle',
      align: 'center',
    },
    {
      title: '终点',
      dataIndex: 'destination',
      key: 'destination',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center',
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
      align: 'center',
    },
  ];

  const handleUpShelves =(record)=>{
    createDialog(
      '确认上架？',
      ``,
      function() {
        try {
          EmptyPalletsWarehousingApi.upShelves(item.id)
          .then(res=>{
            onToast('上架开始成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err=>{
            onToast(err.message, styles.toastError);
          })
        } catch (error) {
          console.log('error',error);
          onToast('上架开始失败', styles.toastError);
        }
      }
    );
  }
  
  const handleFinishOrder =(record)=>{
    createDialog(
      '确认完成任务？',
      ``,
      function() {
        try {
          EmptyPalletsWarehousingApi.finishById(item.id)
          .then(res=>{
            onToast('任务完成成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err=>{
            onToast(err.message, styles.toastError);
          })
        } catch (error) {
          onToast('任务完成失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.receiptNumber || ''}</span>
          </li>
          {columns.map((column, index) => {
            return (
              <li key={index}>
                <span className={styles['li-next-title']}>{column.title}</span>
                <span className={styles['li-next-title']}>{item[column.dataIndex] || ''}</span>
              </li>
            );
          })}
        </ul>
        {tabKey != 2 &&<div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            {tabKey == 0 && <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => handleUpShelves()}>
              上架
            </Button>}
            {tabKey == 1 && <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => handleFinishOrder()}>
              完成
            </Button>}
          </ul>
        </div>}
      </Card>
    </div>
  );
};

export default CardInfo;
