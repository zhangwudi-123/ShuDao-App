import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import CardSheet from './CardSheet/index';

const CardInfo = ({ 
  item, 
  setOutSheetOpen,
  setOutSheetData,
  getReadyMaterialList,
}) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();
  const [sheetValue, setSheetValue] = useState({});
  const [sheetOpened, setSheetOpened] = useState(false);

  
  useEffect(() => {
    if (item.state == 1) {
      setStyle(newStyle);
      setState('已占用');
    }
    if (item.state == 2) {
      setStyle(onGoingStyle);
      setState('未占用');
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

  const columns = [
    // {
    //   title: '出库单号',
    //   dataIndex: 'owNumber',
    //   key: 'owNumber',
    //   align: 'center',
    // },
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    },
    {
      title: '库位号',
      dataIndex: 'locationNumber',
      key: 'locationNumber',
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
    // {
    //   title: '入库时间',
    //   dataIndex: 'intime',
    //   key: 'intime',
    //   align: 'center',
    // },
    // {
    //   title: '材料规格',
    //   dataIndex: 'receiptNumber',
    //   key: 'receiptNumber',
    //   align: 'center',
    // },
    // {
    //   title: '出库单号',
    //   dataIndex: 'outOrderNumber',
    //   key: 'outOrderNumber',
    //   align: 'center',
    // },
  ];

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
              <span className={styles['li-title']}>{item.owNumber || ''}</span>
              <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
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
            <Button
              fill
              round
              className={styles['bottom-btn-confirm']}
              style={{ margin: "5px" }}
              onClick={() => {
                getReadyMaterialList()
                setOutSheetOpen(true);
                setOutSheetData(item);                
              }}>
              出库
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
