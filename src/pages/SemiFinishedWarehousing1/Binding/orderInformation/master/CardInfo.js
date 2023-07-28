import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';
import styles from './CardInfo.scss'

const CardInfo = ({ f7router, item, orderInfos}) => {

  const onHandleClick = () => {
    f7router.navigate('/semi-warehousing-binding-suborder1', {
      props: {
        orderInfos,
        orderInfo:item,
        orderInfoDetails: item.suborderNumberDetails,
        }
    });
  };

  return (
    <div onClick={onHandleClick} className={styles['card-box']}>
      <Card>
        <ul className={styles['card-ul']}>
          <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles['li-title']}>{item.orderCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>产品名称</span>
            <span className={styles['li-next-content']}>{item.materialName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>产品代码</span>
            <span className={styles['li-next-content']}>{item.materialCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>数量</span>
            <span className={styles['li-next-content']}>{item.quantity || ''}</span>
          </li>
        </ul>

        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default CardInfo;
