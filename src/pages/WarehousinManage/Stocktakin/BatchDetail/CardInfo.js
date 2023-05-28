import React from 'react';
import { Card, CardContent, List, ListItem, Chip, CardFooter, Button, Input } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png'
import deleteIcon from '../../img/deleteIcon.png'

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const CardInfo = ({ f7router, item, loadData, handleDeleteBatch, handleFocus, isDisabled }) => {
 
  const nomalStatus = {
    background: '#42BB9E'
  }
  const unequalSatus = {
    background: '#D83333'
  }
 
 
  return (
    <div className={styles['card-box']}>
      <Card>
          <ul className={styles['card-ul']}>
            <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-title']}>{item.batchNumber || ''}</span>
                  <span className={styles['li-status']} style={!item.isChecked ? unequalSatus : nomalStatus }>{!item.isChecked ? '未录入' : '已录入'}</span>
              </li>
              <li style={{marginBottom: '4px'}}>
                  <span className={styles['li-next-title']}>入库时间</span>
                  <span className={styles['li-next-title']}>{item.stockInTime || ''}</span>
              </li>
              
              <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>应有数量</span>
                    <span className={styles['li-next-title']}>{item.theoryNum || ''}</span>
                  </div>
                  <div style={{width: '49%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className={styles['li-next-title']}>盈亏数量</span>
                    <span className={styles['li-next-title']}>{item.profitLossNum || 0}</span>
                  </div>
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles['li-operate']}>
                    <Input  
                        className={styles['input-style']} 
                        type="number" min="0" 
                        placeholder="请输入盘点数量" 
                        onFocus={(e) => {handleFocus(e, item)}}
                        value={Number(item.checkNum) || 0}
                        disabled={isDisabled}
                    />
                </div>
                <div className={styles['li-delete']} onClick={() => handleDeleteBatch(item)}>
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
