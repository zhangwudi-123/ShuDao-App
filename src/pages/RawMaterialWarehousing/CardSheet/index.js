import React from 'react';
import styles from './style.scss';
import { PageContent, List, ListItem } from 'framework7-react';

const CardSheet = ({ item }) => {
  const cardColumns = [
    {
      title: '行号',
      dataIndex: 'lineNumber',
      key: 'lineNumber',
      align: 'center'
    },
    {
      title: '关联单号',
      dataIndex: 'associatedNumber',
      key: 'associatedNumber',
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center'
    },
    {
      title: '采购订单号',
      dataIndex: 'associatedNumber',
      key: 'associatedNumber',
      align: 'center',
    },
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center'
    },
    {
      title: '规格',
      dataIndex: 'specifications',
      key: 'specifications',
      align: 'center'
    },
    {
      title: '实际重量(kg)',
      dataIndex: 'actualWeight',
      key: 'actualWeight',
      align: 'center'
    },
    {
      title: '实际数量(张)',
      dataIndex: 'actualNumber',
      key: 'actualNumber',
      align: 'center'
    },
    {
      title: '实际物料编码',
      dataIndex: 'realityMaterialCode',
      key: 'realityMaterialCode',
      align: 'center'
    },
    {
      title: '实际物料名称',
      dataIndex: 'realityMaterialName',
      key: 'realityMaterialName',
      align: 'center'
    }
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
