import React from 'react';
import { Card, CardContent } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png'
import deleteIcon from '../../img/deleteIcon.png'

import styles from './itemCardInfo.scss';

const CardInfo = ({ f7router, item, loadData, handleDelete, orderLineId }) => {
 

  const nomalStatus = {
    background: '#42BB9E'
  }
  const unequalSatus = {
    background: '#FEB700'
  }

  const onToast = (text, position, closeTimeout, cssClass) => {
    f7router.app.toast.create({
      text,
      position,
      closeTimeout,
      cssClass
    }).open();
  };

  const onHandleStart = async id => {;
   
  };

  const onHandleClick = () => {
    f7router.navigate('/stocktakinDetail', { props: {} });
  };

  const handleGoDetail = () => {
    f7router.navigate('/batchDetail', { props: {batchItem: item, orderLineId} });
  }
  return (
    <div onClick={onHandleClick} className={styles['card-box']}>
      <Card>
          <ul className={styles['card-ul']}>
            <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-title']}>{item.materialCode || ''}</span>
                  <span className={styles['li-status']} style={!item.isEqual ? unequalSatus : nomalStatus }>{!item.isEqual ? '负盈亏' : '已录入'}</span>
              </li>
              
              <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-next-title']}>物料名称</span>
                  <span className={styles['li-next-title']}>{item.materialName || ''}</span>
              </li>
              <li style={{marginBottom: '4px', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>账面库存</span>
                    <span className={styles['li-next-title']}>{item.theoryStockNum || 0}</span>
                  </div>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>实际库存</span>
                    <span className={styles['li-next-title']}>{item.checkStockNum || 0}</span>
                  </div>
              </li>
              <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>单位</span>
                    <span className={styles['li-next-title']}>{item.unit || ''}</span>
                  </div>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>盈亏数量</span>
                    <span className={styles['li-next-title']}>{item.profitLossNum || 0}</span>
                  </div>
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles['li-operate']} onClick={handleGoDetail}><img src={scanIcon} alt="scan" width='24' height='24' />批次扫码</div>
                <div className={styles['li-delete']} onClick={() => handleDelete(item)}>
                  <img src={deleteIcon} alt="delete" width='24' height='24' />
                </div>
              </li>
          </ul>
    
        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default CardInfo;
