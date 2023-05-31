import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import CardSheet from './CardSheet/index';
import { onToast, createDialog } from '~/util/home';
import SemiFinishedWarehousingApi from '~/api/SemiFinishedWarehousing';

const CardInfo = ({ 
  item ,
  selectValue,
  loadData,
}) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();
  const [sheetValue, setSheetValue] = useState({});
  const [sheetOpened, setSheetOpened] = useState(false);

  const columns = [
    // {
    //   title: '创建时间',
    //   dataIndex: 'createTime',
    //   key: 'createTime',
    //   align: 'center',
    // },
    // {
    //   title: '创建人',
    //   dataIndex: 'creator',
    //   key: 'creator',
    //   align: 'center',
    // },
    // {
    //   title: '修改时间',
    //   dataIndex: 'updateTime',
    //   key: 'updateTime',
    //   align: 'center',
    // },
    // {
    //   title: '修改人',
    //   dataIndex: 'updateCreator',
    //   key: 'updateCreator',
    //   align: 'center',
    // },
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    },
    {
      title: '订单数量',
      dataIndex: 'orderCount',
      key: 'orderCount',
      align: 'center',
    },
    {
      title: '属性1',
      dataIndex: 'attributeOneName',
      key: 'attributeOneName',
      align: 'center',
    },
    {
      title: '属性2',
      dataIndex: 'attributeTwoName',
      key: 'attributeTwoName',
      align: 'center',
    },
    {
      title: '接驳点',
      dataIndex: 'dockingPointName',
      key: 'dockingPointName',
      align: 'center',
    },
    {
      title: '分拣位置',
      dataIndex: 'sortPositionName',
      key: 'sortPositionName',
      align: 'center',
    },
  ];

  const handleWarehousing =()=>{
    createDialog(
      '物料入库',
      '确认开始入库？',
      function () {
        try {
          SemiFinishedWarehousingApi
          .inStore(item.id)
          .then(res => {
            onToast('托盘自动下架成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err=>{
            onToast(err.message, styles.toastError);
          })
          // 
        } catch (error) {
          console.log('error', error);
          onToast('托盘自动下架失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <Button
            className={styles['card-button']}
            fill
            onClick={() => {
              setSheetValue(item);
              setSheetOpened(true);
            }}
          >
            <li>
              <span className={styles['li-title']}>{item.receiptNumber || ''}</span>
            </li>
            {columns.map((column, index) => {
              return (
                <li key={index}>
                  <span className={styles['li-next-title']}>{column.title}</span>
                  <span className={styles['li-next-title']}>{item[column.dataIndex] || ''}</span>
                </li>
              );
            })}
          </Button>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={()=>handleWarehousing()}>
              入库
            </Button>
          </ul>
      </div>
      </Card>
      <Sheet
        style={{ height: '500px' }}
        swipeToClose
        push
        backdrop
        opened={sheetOpened}
        onSheetClosed={() => {
          setSheetOpened(false);
        }}
      >
        <div className="swipe-handler"></div>
        <CardSheet item={sheetValue} />
      </Sheet>
    </div>
  );
};

export default CardInfo;
