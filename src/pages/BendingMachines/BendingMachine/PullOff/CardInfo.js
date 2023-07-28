import React, { useEffect, useState } from 'react';
import { Card, Button, Checkbox, Sheet, Page } from '@hvisions/f-ui';
import styles from './CardInfo.scss';
import PrepareAreaServices from '~/api/PrepareArea';
import { onToast, createDialog } from '~/util/home';
import CallTraySheet from './CallTray/callTraySheet';
import SemiFinishedDeliveryServices from '~/api/SemiFinishedDelivery';

import retrievalApi from '~/api/retrieval';

const CardInfo = ({
  f7router,
  item,
  loadData,
  searchValue,
}) => {

  const [style, setStyle] = useState();
  const [state, setState] = useState();
  // const [callSheetOpen, setCallSheetOpen] = useState(false);

  useEffect(() => {
    console.log(item);

    if (item.status == 0) {
      setStyle(onGoingStyle);
      setState('出库中');
    }
    if (item.status == 1) {
      setStyle(completeStyle);
      setState('已完成');
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

  const handleSaveOut = () => {
    createDialog(
      '托盘下架',
      '确认开始托盘下架流程？',
      async function () {
        try {
          await retrievalApi.outShelf(item.id)
            .then(res => {
              onToast('托盘下架成功', styles.toastSuccess);
              loadData(searchValue);
            })
            .catch(err => {
              onToast(err.message, styles.toastError);
            })
        } catch (error) {
          onToast('托盘下架失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.transferCode || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>出库单号</span>
            <span className={styles['li-next-title']}>{item.owNumber || '暂无'}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>操作人</span>
            <span className={styles['li-next-title']}>{item.operatorName || '暂无'}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>出库时间</span>
            <span className={styles['li-next-title']}>{item.outStockTime || '暂无'}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>关联单号</span>
            <span className={styles['li-next-title']}>{item.associateNumber || '暂无'}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>属性1</span>
            <span className={styles['li-next-title']}>{item.attributeOne || '暂无'}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>属性2</span>
            <span className={styles['li-next-title']}>{item.attributeTwo || '暂无'}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleSaveOut()}>
              托盘下架
            </Button>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
