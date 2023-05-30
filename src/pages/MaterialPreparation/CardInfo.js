import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button ,Checkbox,Sheet ,BlockTitle ,List ,ListInput ,Icon} from '@hvisions/f-ui';

import styles from './CardInfo.scss';
import { getAuthData } from '@hvisions/toolkit/lib/session';
import PrepareAreaServices from '~/api/PrepareArea';
import { onToast, createDialog } from '~/util/home';

const CardInfo = ({ 
  f7router, 
  item, 
  setBindingSheetOpen,
  trayNumber,
  setTrayNumber,
  setUpdateSheetOpen,
  setAreaState,
  setAreaCode,
  selectValue,
  loadData,
  }) => {

  const [style, setStyle] = useState();
  const [state, setState] = useState();
  


  useEffect(() => {
    console.log(item);
    if (item.areaState == 1) {
      setStyle(newStyle);
      setState('空置');
    }
    if (item.areaState == 2) {
      setStyle(onGoingStyle);
      setState('使用中');
    }
    if (item.areaState == 3) {
      setStyle(completeStyle);
      setState('运输中');
    }
  }, []);


  const newStyle = {
    background: '#ffdad4',
    color: '#d83333'
  };
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };

  const CheckboxChange = async (e, record) => {
    const automaticState = e.target.checked
    const data = record
    data.automaticState = automaticState
    await PrepareAreaServices.updatePrepareArea(data)
      .then(res => {
        onToast('修改成功', styles.toastSuccess);
        loadData(selectValue);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.areaCode || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>托盘号</span>
            <span className={styles['li-next-title']}>{item.transferCode || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>任务状态</span>
            <span className={styles['li-next-title']}>{item.taskState || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>接驳口</span>
            <span className={styles['li-next-title']}>{item.joinArea || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>设备名称</span>
            <span className={styles['li-next-title']}>{item.equipmentName || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={()=>{setBindingSheetOpen(true);setAreaCode(item.areaCode)}}>
              绑定托盘
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={()=>{ console.log('item.areaState',item.areaState); setUpdateSheetOpen(true);setAreaState(item.areaState) ;setAreaCode(item.areaCode) }}>
              更新状态
            </Button>
            <Checkbox name="checkbox-1" style={{ margin: "5px" }} defaultChecked={item.automaticState} onChange={(e) => CheckboxChange(e, item)}/>自动下架托盘
          </ul>
      </div>
      </Card>
    </div>
  );
};

export default CardInfo;
