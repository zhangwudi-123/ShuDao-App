import React from 'react';
import { Card, } from '@hvisions/f-ui';
import styles from './CardInfo.scss';

const CardInfo = ({
  f7router,
  item,
}) => {

  const columns = [
    // {
    //   title: '托盘号',
    //   dataIndex: 'trayNumber',
    //   key: 'trayNumber',
    //   align: 'center'
    // },
    {
      title: '切割机',
      dataIndex: 'cuttingMachine',
      key: 'cuttingMachine',
      align: 'center'
    },
    {
      title: '材料编码',
      dataIndex: 'materialCode',
      key: 'materialCode',
      align: 'center'
    },
    {
      title: '材料名称',
      dataIndex: 'materialName',
      key: 'materialName',
      align: 'center'
    },
    {
      title: '材料大小 X',
      dataIndex: 'materialSizeX',
      key: 'materialSizeX',
      align: 'center'
    },
    {
      title: '材料大小 Y',
      dataIndex: 'materialSizeY',
      key: 'materialSizeY',
      align: 'center'
    },
    {
      title: '材料规格',
      dataIndex: 'materialSpecs',
      key: 'materialSpecs',
      align: 'center'
    },
    {
      title: '材料厚度',
      dataIndex: 'materialThickness',
      key: 'materialThickness',
      align: 'center'
    },
    {
      title: '出库总数量',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center'
    },
    {
      title: '起始位置',
      dataIndex: 'fromLocation',
      key: 'fromLocation',
      align: 'center'
    },
    {
      title: '中间位置',
      dataIndex: 'middle',
      key: 'middle',
      align: 'center'
    },
    {
      title: '目标位置',
      dataIndex: 'toLocation',
      key: 'toLocation',
      align: 'center'
    }
  ];

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.trayNumber || ''}</span>
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
      </Card>
    </div>
  );
};

export default CardInfo;
