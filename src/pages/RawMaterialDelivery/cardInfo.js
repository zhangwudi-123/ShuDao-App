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

  const columns = [
    {
      title: '切割机',
      dataIndex: 'cuttingMachine',
      key: 'cuttingMachine',
      align: 'center',
    },
    {
      title: '订单需求数量',
      dataIndex: 'totalParts',
      key: 'totalParts',
      align: 'center',
    },
    {
      title: '已完成数量',
      dataIndex: 'finishNumber',
      key: 'finishNumber',
      align: 'center',
    },
    {
      title: '剩余数量',
      dataIndex: 'remainRuns',
      key: 'remainRuns',
      align: 'center',
    },
    {
      title: '材料名称',
      dataIndex: 'materialName',
      key: 'materialName',
      align: 'center',
    },
    {
      title: '材料规格',
      dataIndex: 'materialSpecs',
      key: 'materialSpecs',
      align: 'center',
    },
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
              <span className={styles['li-title']}>{item.name || ''}</span>
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
