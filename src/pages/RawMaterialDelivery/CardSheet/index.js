import React from 'react';
import styles from './style.scss';
import { PageContent, List, ListItem } from 'framework7-react';

const CardSheet = ({ item }) => {
  const cardColumns = [
    {
      title: '切割机',
      dataIndex: 'cuttingMachine',
      key: 'cuttingMachine',
      align: 'center',
    },
    {
      title: '材料名称',
      dataIndex: 'materialName',
      key: 'materialName',
      align: 'center',
    },
    {
      title: '材料编码',
      dataIndex: 'materialCode',
      key: 'materialCode',
      align: 'center',
    },
    {
      title: '材料大小 X',
      dataIndex: 'materialSizeX',
      key: 'materialSizeX',
      align: 'center',
    },
    {
      title: '材料大小 Y',
      dataIndex: 'materialSizeY',
      key: 'materialSizeY',
      align: 'center',
    },
    {
      title: '材料规格',
      dataIndex: 'materialSpecs',
      key: 'materialSpecs',
      align: 'center',
    },
    {
      title: '材料厚度',
      dataIndex: 'materialThickness',
      key: 'materialThickness',
      align: 'center',
    },
    {
      title: '订单需求数量',
      dataIndex: 'totalParts',
      key: 'totalParts',
      align: 'center',
    },
    {
      title: '发货数量',
      dataIndex: 'sendParts',
      key: 'sendParts',
      align: 'center',
    },
    {
      title: '已完成数量',
      dataIndex: 'finishNumber',
      key: 'finishNumber',
      align: 'center',
    },
    {
      title: '剩余数量',
      dataIndex: 'remainRuns',
      key: 'remainRuns',
      align: 'center',
    },

  ];

  return (
    <PageContent>
      <ul className={styles['card-ul']}>
        <li>
          <span className={styles['li-title']}>{item.name || ''}</span>
        </li>
        <List>
          {cardColumns.map((column, index) => {
            return (
              <ListItem key={index}>
                <span className={styles['li-next-title']}>
                  {column.title}&nbsp;:&nbsp;&nbsp;&nbsp;
                </span>
                <span className={styles['li-next-title']}>{item[column.dataIndex] || ''}</span>
              </ListItem>
            );
          })}
        </List>
      </ul>
    </PageContent>
  );
};

export default CardSheet;
