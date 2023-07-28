import React, { useEffect, useState } from 'react';
import { Card, Button, Checkbox } from '@hvisions/f-ui';
import styles from './CardInfo.scss';
import PrepareAreaServices from '~/api/PrepareArea';
import { onToast, createDialog } from '~/util/home';

const CardInfo = ({
  f7router,
  item,
  HandlePutOn,
  tableName,
  bendingNumber,
  // setBindingSheetOpen,
  // setUpdateSheetOpen,
  // setAreaState,
  // setAreaCode,
  // selectValue,
  // loadData,
}) => {

  const [style, setStyle] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    console.log(item);
    if (item.bendingState == 1) {
      setStyle(newStyle);
      setState('空置');
    }
    if (item.bendingState == 2) {
      setStyle(onGoingStyle);
      setState('使用中');
    }
    if (item.bendingState == 3) {
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

  const handlePick = () => {
    f7router.navigate('/bending-machine-pickTray', {
      props: {
        item: item,
        attribute: item.attribute,
        attributeOne: item.attributeOne,
        attributeTwo: '切割完工',
      }
    });
  }

  const HandlePullOff = () => {
    f7router.navigate('/bending-machine-pullOff', {
      props: {
        item: item,
      }
    });
  }

  const handleSurplus = () => {
    f7router.navigate('/bending-machine-surplusForm', {
      props: {
        item: item,
        tableName: tableName,
        bendingNumber: bendingNumber,
      }
    });
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.bendingNumber || ''}</span>
            <span
              className={styles['li-status']}
              style={style}
            >
              {state}
            </span>
          </li>
          <li>
            <span className={styles['li-next-title']}>折弯机名称</span>
            <span className={styles['li-next-title']}>{item.bendingName || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>折弯机属性</span>
            <span className={styles['li-next-title']}>{item.attribute || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>是否允许切割未完成出库</span>
            <span className={styles['li-next-title']}>{item.ifoutValue || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>最小在库时间</span>
            <span className={styles['li-next-title']}>{item.warhouseTime}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>备料区</span>
            <span className={styles['li-next-title']}>{item.readyMaterials || ''}</span>
          </li>
          <li>
            <span className={styles['li-next-title']}>托盘号</span>
            <span className={styles['li-next-title']}>{item.transferCode || ''}</span>
          </li>
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handlePick()}>
              托盘拣选
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => HandlePullOff()}>
              托盘下架
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => HandlePutOn(item)}>
              空托上架
            </Button>
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleSurplus()}>
              未完工回库
            </Button>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
