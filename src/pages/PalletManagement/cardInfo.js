import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import CardSheet from './CardSheet/index';

const CardInfo = ({ item, handleWeighing, handleWarehousing }) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();
  const [sheetValue, setSheetValue] = useState({});
  const [sheetOpened, setSheetOpened] = useState(false);

  useEffect(() => {
    if (item.state == '空闲') {
      setStyle(newStyle);
      setState('空闲');
    }
    if (item.state == '使用中') {
      setStyle(onGoingStyle);
      setState('使用中');
    }
    // if (item.state == 2) {
    //   setStyle(completeStyle);
    //   setState('已完成');
    // }
  }, []);

  const newStyle = {
    background: '#ffdad4',
    color: '#d83333'
  };
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  // const completeStyle = {
  //   background: '#D3F0E9',
  //   color: '#42BB9E'
  // };

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.code || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>库位号</span>
            <span className={styles['li-next-title']}>{item.locationName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>托盘位置</span>
            <span className={styles['li-next-title']}>{item.location || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>重量</span>
            <span className={styles['li-next-title']}>{item.weight || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { }}>
              上架托盘
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { }}>
              下架托盘
            </Button>
            {
            item.locationCode == null ?
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { }}>
              绑定托盘
            </Button>
            :
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", background: '#d83333' }} onClick={() => { }}>
              解绑托盘
            </Button>
            }
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
