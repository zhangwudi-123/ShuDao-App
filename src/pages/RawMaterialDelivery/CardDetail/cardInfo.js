import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
import SurplusMaterialApi from '~/api/SurplusMaterial';
const CardInfo = ({
   item,
    loadData, 
    f7router ,
    setEmptyVis,
    setEmptyData,
  }) => {


  const columns = [
    {
      title: '切割机',
      dataIndex: 'cuttingMachine',
      key: 'cuttingMachine',
      align: 'center',
    }, {
      title: '材料名称',
      dataIndex: 'materialName',
      key: 'materialName',
      align: 'center',
    }, {
      title: '材料编码',
      dataIndex: 'materialCode',
      key: 'materialCode',
      align: 'center',
    }, {
      title: '材料大小 X',
      dataIndex: 'materialSizeX',
      key: 'materialSizeX',
      align: 'center',
    }, {
      title: '材料大小 Y',
      dataIndex: 'materialSizeY',
      key: 'materialSizeY',
      align: 'center',
    }, {
      title: '材料厚度',
      dataIndex: 'materialThickness',
      key: 'materialThickness',
      align: 'center',
    }, {
      title: '计划名称',
      dataIndex: 'planName',
      key: 'planName',
      align: 'center',
    }, {
      title: '出库总数量',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    }, {
      title: '剩余数量',
      dataIndex: 'remainderNum',
      key: 'remainderNum',
      align: 'center',
    }, {
    //   title: '任务编码',
    //   dataIndex: 'taskCode',
    //   key: 'taskCode',
    //   align: 'center',
    // }, {
      title: '托盘交接位',
      dataIndex: 'fromLocation',
      key: 'fromLocation',
      align: 'center',
    }, {
      title: '托盘到达位',
      dataIndex: 'toLocation',
      key: 'toLocation',
      align: 'center',
    }, {
      title: '托盘位置',
      dataIndex: 'trayLocation',
      key: 'trayLocation',
      align: 'center',
    }, {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    }, {
      title: '使用数量',
      dataIndex: 'useNum',
      key: 'useNum',
      align: 'center',
    }, {
      title: '使用状态',
      dataIndex: 'useState',
      key: 'useState',
      align: 'center',
    }
  ]

  const handleEmpty = (record) => {
    setEmptyVis(true)
    setEmptyData(record)
  }

  const handleSurplus =async (record)=>{
    const params ={
      trayNumber:record.trayNumber,
      cuttingMachine:record.cuttingMachine,
      materialCode:record.materialCode,
      materialName:record.materialName,
      materialSizeX:record.materialSizeX,
      materialSizeY:record.materialSizeY,
      materialSpecs:record.materialSpecs,
      materialThickness:record.materialThickness,
      quantity:record.remainderNum,
      fromLocation:record.toLocation,
      middle:record.fromLocation,
      // toLocation:record.   ,
    }
  
    await SurplusMaterialApi
          .addSurplus(params)
          .then(res => {
            onToast('余料回库单新建成功', styles.toastSuccess);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          });
  }

  return (
    <Card className={styles['card']}>
      <ul className={styles['card-ul']}>
      <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.taskCode || ''}</span>
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
      </ul>
      <div className={styles['card-div']}>
        {item.remainderNum == 0 && 
        <Button  fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} key="emptyReturn" onClick={() => handleEmpty(item)}>
          空托回库
        </Button>
        }
        {item.remainderNum != 0 && 
        <Button  fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} key="surplusReturn" onClick={() => handleSurplus(item)}>
          余料回库
        </Button>
        }
      </div>
    </Card>
  );
};

export default CardInfo;
