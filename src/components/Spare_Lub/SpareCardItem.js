import React from 'react';
import { List, ListItem, Chip } from '@hvisions/f-ui';
import { isEmpty } from 'lodash';
import styles from './CardInfo.scss';
const CardInfo = ({ item }) => {
  const renderBackColor = state => {
    switch (state) {
      case '审核中':
        return '#108ee9';
      case '审核通过':
        return 'rgb(82, 196, 26)';
      case '驳回':
        return '#f50';
      case '已出库':
        return '#2fb6e6';
      default:
        break;
    }
  }

  return (
    <>
      <List mediaList noHairlinesBetween style={{ margin: '10px 0 0 0' }}>
        <ListItem
          className={styles.listItemTitle}
          title={item.title || ''}
          subtitle={item.receiptNumber || ''}
          after={
            <Chip text={item.examinationType} style={{ background: renderBackColor(item.examinationType), color: '#fff' }} />
          }
          footer={item.rejectReason}
        />
      </List>

      {!isEmpty(item.items) && (
          item.items.map(item => (
            <List simple-list key={item.id} style={{ margin: '0 0 10px 0' }}>
              <ListItem className={styles.listItem} title="备件名称" after={item.spareName || ''} />
              <ListItem className={styles.listItem} title="库房名称" after={item.shelveName || ''} />
              <ListItem className={styles.listItem} title="批次号" after={item.batchNumber || ''} />
              <ListItem className={styles.listItem} title="数量" after={item.number || ''} />
            </List>
          ))
        )}
    </>
  );
};

export default CardInfo;
