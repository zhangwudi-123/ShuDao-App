import React, {useState, useEffect} from 'react';
import { Card, CardContent, List, ListItem, Chip, CardFooter, Button, Input } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png'
import deleteIcon from '../../img/deleteIcon.png'

import styles from './style.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
const SheetInfo = ({ f7router, handleSaveBatch, selectedBatchItem}) => {
 
 const [inputValue, setInputValue] = useState(0)
 useEffect(() => {
    if(selectedBatchItem) {
        setInputValue(selectedBatchItem.checkNum)
    }
 }, [selectedBatchItem])
 const handleChangeValue = (e) => {
    setInputValue(e.target.value)
 }
  return (
   
    <ul className={styles['card-ul']}>
        <li style={{marginBottom: '20px'}}>
            <span className={styles['li-next-title']}>入库时间</span>
            <span className={styles['li-next-title']} style={{color: '#595959'}}>{selectedBatchItem && selectedBatchItem.stockInTime}</span>
        </li>
        <li style={{marginBottom: '20px'}}>
            <span className={styles['li-next-title']}>应有数量</span>
            <span className={styles['li-next-title']} style={{color: '#595959'}}>{selectedBatchItem && selectedBatchItem.theoryNum}</span>
        </li>
        <li style={{marginBottom: '14px'}}>
            <span className={styles['li-next-title']}>盈亏数量</span>
            <span className={styles['li-next-title']} style={{color: '#595959'}}>{selectedBatchItem && selectedBatchItem.profitLossNum}</span>
        </li>
        <li style={{height: '50px', lineHeight: '50px', marginBottom: '20px'}}>
            <span className={styles['li-next-title']}>盘点数量</span>
            <Input  
                className={styles['input-style']} 
                type="number" 
                min="0" 
                value={inputValue}
                onChange={handleChangeValue}
            />
        </li>
        <li>
            <Button fill onClick={() => handleSaveBatch(inputValue)} className={styles['bottom-btn']}>保存</Button>
        </li>
    </ul>
  );
};

export default SheetInfo;
