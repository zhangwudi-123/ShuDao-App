import React from 'react';
import { Card, CardContent } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png';
import deleteIcon from '../../img/deleteIcon.png';

import styles from './cardInfo.scss';

const CardInfo = ({ f7router, item, orderLineId, state, handleDetail, handleDelete }) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };

  const onToast = (text, position, closeTimeout, cssClass) => {
    f7router.app.toast
      .create({
        text,
        position,
        closeTimeout,
        cssClass
      })
      .open();
  };

  const handleDeleteMaterial = e => {
    e.stopPropagation();
    handleDelete(item);
  };
  return (
    <div className={styles['card-box']} onClick={() => handleDetail(item)}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.materialName || ''}</span>
            {/* <span className={styles['li-status']} style={item.state == '完成' ? completeStyle : onGoingStyle }>{item.state}</span> */}
          </li>
          <li>
            <span className={styles['li-next-title']}>物料编码</span>
            <span className={styles['li-next-title']}>{item.materialCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>规格</span>
            <span className={styles['li-next-title']}>{item.specifications}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>入库数量</span>
            <span className={styles['li-next-title']}>{item.inNuber}</span>
          </li>
          {state == 1 && (
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                marginTop: '8px'
              }}
            >
              <div className={styles['li-operate']} onClick={e => handleDeleteMaterial(e)}>
                删除
              </div>
            </li>
          )}
        </ul>

        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default CardInfo;
