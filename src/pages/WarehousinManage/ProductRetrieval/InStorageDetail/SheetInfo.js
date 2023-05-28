import React, {useState, useEffect} from 'react';
import { Card, CardContent, List, ListItem, ListInput, Chip, CardFooter, Button, Input } from '@hvisions/f-ui';
import scanIcon from '../../img/scanIcon.png'
import deleteIcon from '../../img/deleteIcon.png'

import styles from './style.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
import { isEmpty } from 'lodash';
import { onToast } from '~/util/home';
const SheetInfo = ({ f7router, handleAddMaterial, handleSubmit, quantity, setQuantity, remark, setRemark, selectedMaterial, handleCloseSheet, handleSelectMaterial}) => {

  
  const onHandleAddMaterial = (type) => {
    if (isEmpty(selectedMaterial)) {
        onToast('请选择物料', styles.toastWarn)
        return
    }
    if (isNaN(quantity)) {
        onToast('入库数量必须大于0', styles.toastWarn);
        return
    }
    if (!(quantity)) {
        onToast('请输入数量', styles.toastWarn)
        return
    }
    if (!(+quantity)) {
        onToast('入库数量必须大于0', styles.toastWarn)
        return
    }
    handleAddMaterial(type)
  }
  return (
   
    <div>
        <div className={styles['sheet-top']}>
            <div className={styles['sheet-top-close']} onClick={handleCloseSheet}>X</div>
            <div className={styles['sheet-top-title']}>添加出库物料</div>
        </div>
        <List className={styles['sheet-list']}>
            <ListItem 
                link="#" 
                header="物料" 
                title={!isEmpty(selectedMaterial)? (<div style={{height: '44px', lineHeight: '44px'}}>{selectedMaterial.materialName} / {selectedMaterial.materialCode}</div>) : (<div style={{height: '44px', lineHeight: '44px', color: '#00000073'}}>请选择物料</div>)} 
                after="" 
                onClick={handleSelectMaterial}
            >
            </ListItem>
            <ListInput
                label="计划数量"
                type="number"
                placeholder="请输入计划数量"
                clearButton
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                onInputEmpty={() => setQuantity(1)}
            >
                
            </ListInput>
            <ListInput
                label="备注"
                type="text"
                placeholder="请输入备注信息"
                clearButton
                value={remark}
                onChange={e => setRemark(e.target.value)}
                onInputEmpty={() => setRemark('')}
            >
                
            </ListInput>
        </List>
        <div className={styles['detail-bottom']}>
            <Button fill onClick={() => onHandleAddMaterial('add')} className={styles['bottom-btn-add']}><span>+</span>&nbsp;&nbsp;继续添加</Button>
            <Button fill onClick={() => onHandleAddMaterial('save')} className={styles['bottom-btn-confirm']}>保存</Button>
        </div>
        
    </div>
  );
};

export default SheetInfo;
