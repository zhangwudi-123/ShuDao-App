import React, { useEffect } from 'react';
import { Card, CardContent, Link } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png';
import deleteIcon from '../../img/deleteIcon.png';
import { createToolTips } from '~/util/home';
import classnames from 'classnames';

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

  const handleDeleteMaterial = e => {
    e.stopPropagation();
    handleDelete(item);
  };
  const handleOut = e => {
    e.stopPropagation();
    handleDetail(item);
  };
  const showTips = (e, text) => {
    e.stopPropagation();
    createToolTips('.show-tip', text);
  };
  return (
    <div className={styles['card-box']} onClick={() => handleDetail(item)}>
      <Card>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.materialName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>物料编码</span>
            <span className={styles['li-next-content']}>{item.materialCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>出库/计划出库数量</span>
            <span className={styles['li-next-content']}>
              {item.outNum || 0}/{item.planNum || 0}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>规格</span>
            <span className={styles['li-next-content']}>{item.specifications || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>备注</span>
            <span className={classnames('remark', styles['li-next-title-remark'])}>
              {item.description || ''}
              {/* {item.description && <span className={classnames("show-tip", styles['remark-tips'])} onClick={(e) => showTips(e, item.description)}>i</span> } */}
            </span>
          </li>
          {state == 0 && (
            <li style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <div className={styles['li-operate']} onClick={e => handleDeleteMaterial(e)}>
                删除
              </div>
            </li>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
