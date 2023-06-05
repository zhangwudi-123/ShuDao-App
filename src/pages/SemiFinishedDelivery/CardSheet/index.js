import React from 'react';
import styles from './style.scss';
import { PageContent, List, ListItem } from 'framework7-react';

const CardSheet = ({ item }) => {
  const cardColumns = [
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    },
    {
      title: '库位号',
      dataIndex: 'locationNumber',
      key: 'locationNumber',
      align: 'center',
    },
    {
      title: '订单数量',
      dataIndex: 'orderCount',
      key: 'orderCount',
      align: 'center',
    },
    {
      title: '属性1',
      dataIndex: 'attributeOneName',
      key: 'attributeOneName',
      align: 'center',
    },
    {
      title: '属性2',
      dataIndex: 'attributeTwoName',
      key: 'attributeTwoName',
      align: 'center',
    },
    {
      title: '入库时间',
      dataIndex: 'intime',
      key: 'intime',
      align: 'center',
    },
    {
      title: '材料规格',
      dataIndex: 'receiptNumber',
      key: 'receiptNumber',
      align: 'center',
    },
    {
      title: '出库单号',
      dataIndex: 'outOrderNumber',
      key: 'outOrderNumber',
      align: 'center',
    },
  ];

  return (
    <PageContent>
      <ul className={styles['card-ul']}>
        <li>
          <span className={styles['li-title']}>{item.owNumber || ''}</span>
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
