import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';

import styles from './cardInfo.scss';

const CardInfo = ({
  f7router,
  item,
  loadData,
  handleDelete,
  orderLineId,
  state,
  onHandleDelete
}) => {
  const columns = [
    {
      title: '物料编码',
      dataIndex: 'materialCode',
      key: 'materialCode',
      align: 'center',
      width: 150
    },
    {
      title: '物料批次',
      dataIndex: 'materialBatch',
      key: 'materialBatch',
      align: 'center',
      width: 150
    },
    {
      title: '投料时间',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
      width: 170
    },
    {
      title: '投料数量',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      width: 170
    },
    {
      title: '使用数量',
      dataIndex: 'useNum',
      key: 'useNum',
      align: 'center',
      width: 170
    }
  ];
  return (
    <div className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.materialName || ''}</span>
          </li>
          {columns.map((column, index) => {
            return (
              <li key={index}>
                <span className={styles['li-next-title']}>{column.title}</span>
                <span className={styles['li-next-title']}>{item[column.dataIndex] || ''}</span>
              </li>
            );
          })}

          <li className={styles['li-button']}>
            <Button
              fill
              round
              className={styles['delete-button']}
              onClick={() => onHandleDelete(item)}
            >
              删除
            </Button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
