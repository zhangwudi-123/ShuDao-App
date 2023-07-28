import React from 'react';
import styles from './style.scss';
import { PageContent, List, ListItem } from 'framework7-react';

const CardSheet = ({ item }) => {
  const cardColumns = [
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
      {
        title: '修改时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
      },
      {
        title: '修改人',
        dataIndex: 'updateCreator',
        key: 'updateCreator',
        align: 'center',
      },
      {
        title: '托盘号',
        dataIndex: 'trayNumber',
        key: 'trayNumber',
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
        title: '接驳点',
        dataIndex: 'dockingPointName',
        key: 'dockingPointName',
        align: 'center',
      },
      {
        title: '分拣位置',
        dataIndex: 'sortPositionName',
        key: 'sortPositionName',
        align: 'center',
      },
    ];

  return (
    <PageContent>
      <ul className={styles['card-ul']}>
        <li>
          <span className={styles['li-title']}>{item.receiptNumber || ''}</span>
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
