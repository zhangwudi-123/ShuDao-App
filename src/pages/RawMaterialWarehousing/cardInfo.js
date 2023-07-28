import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import CardSheet from './CardSheet/index';

const CardInfo = ({ item, handleWeighing, handleWarehousing, handInStore }) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();
  const [sheetValue, setSheetValue] = useState({});
  const [sheetOpened, setSheetOpened] = useState(false);

  useEffect(() => {
    if (item.state == 0) {
      setStyle(newStyle);
      setState('新建');
    }
    if (item.state == 1) {
      setStyle(onGoingStyle);
      setState('执行中');
    }
    if (item.state == 2) {
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

  const columns = [
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center'
    },
    {
      title: '实际物料名称',
      dataIndex: 'realityMaterialName',
      key: 'realityMaterialName',
      align: 'center'
    },
    {
      title: '规格',
      dataIndex: 'specifications',
      key: 'specifications',
      align: 'center'
    },
    {
      title: '实际重量(kg)',
      dataIndex: 'actualWeight',
      key: 'actualWeight',
      align: 'center'
    },
    {
      title: '实际数量(张)',
      dataIndex: 'actualNumber',
      key: 'actualNumber',
      align: 'center'
    }
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
              <span className={styles['li-title']}>{item.receiptNumber || ''}</span>
              <span className={styles['li-status']} style={style}>
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
        {item.state != 2 && <div className={styles['card-div']}>
          {item.state == 0 && <ul className={styles['div-ul']}>
            {/* <Button
              fill
              round
              className={styles['weighing-button']}
              onClick={() => handInStore(item)}
            >
              <span style={{ padding: "10px" }}>小车进入</span>
            </Button> */}
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handInStore(item)}>
              小车进入
            </Button>
          </ul>}
          {item.state == 1 && <ul className={styles['div-ul']}>
            {/* <Button
              fill
              round
              className={styles['weighing-button']}
              onClick={() => handleWeighing(item)}
              style={{ margin: "5px" }}
            >
              <span style={{ padding: "10px" }}>原材料称重</span>
            </Button>
            <Button
              fill
              round
              className={styles['warehousing-button']}
              onClick={() => handleWarehousing(item)}
              style={{ margin: "5px" }}
            >
              <span style={{ padding: "10px" }}>入库</span>
            </Button> */}
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleWeighing(item)}>
              原材料称重
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleWarehousing(item)}>
              入库
            </Button>
          </ul>}
        </div>
        }
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
