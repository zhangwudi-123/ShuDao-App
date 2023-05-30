import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import CardSheet from './CardSheet/index';

const CardInfo = ({ item, handleWeighing,handleWarehousing }) => {
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
      title: '关联单号',
      dataIndex: 'associatedNumber',
      key: 'associatedNumber',
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center'
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
      align: 'center'
    }
  ];

  return (
    <div className={styles['card-box']}>
      <Card>
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
          {item.state == 0 &&<li className={styles['li-button']}>
            <Button
              fill
              round
              className={styles['weighing-button']}
              onClick={() => handleWeighing(item)}
            >
              原材料称重
            </Button>
          </li>}
          {item.state == 1 &&<li className={styles['li-button']}>
            <Button
              fill
              round
              className={styles['warehousing-button']}
              onClick={() => handleWarehousing(item)}
            >
              入库
            </Button>
          </li>}
        </ul>
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
