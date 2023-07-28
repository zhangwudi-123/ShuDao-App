import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';

const CardInfo = ({ f7router, item, handleWarehousing, }) => {
  const [style, setStyle] = useState();
  const [state, setState] = useState();

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
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center'
    },
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center'
    },
    {
      title: '主订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      align: 'center'
    },
    {
      title: '子订单号',
      dataIndex: 'suborderNumber',
      key: 'suborderNumber',
      align: 'center'
    },
    {
      title: '属性1',
      dataIndex: 'attributeOne',
      key: 'attributeOne',
      align: 'center'
    },
    {
      title: '属性2',
      dataIndex: 'attributeTwo',
      key: 'attributeTwo',
      align: 'center'
    },
    {
      title: '接驳点',
      dataIndex: 'dockingPoint',
      key: 'dockingPoint',
      align: 'center'
    },
    {
      title: '分拣位置',
      dataIndex: 'sortPosition',
      key: 'sortPosition',
      align: 'center'
    }
  ];

  const onHandleClick = () => {
    console.log('item', item);

    f7router.navigate('/semi-warehousing-detail2', {
      props: {
        item: item
      }
    });
  };

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul onClick={onHandleClick} className={styles['card-ul']}>
          <Button
            className={styles['card-button']}
            fill
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
                  <span className={styles['li-next-title']} style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 150, textAlign: 'end' }}>{item[column.dataIndex] || ''}</span>
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
              onClick={() => handleWarehousing(item)}
            >
              <span style={{ padding: "10px" }}>入库</span>
            </Button> */}
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleWarehousing(item)}>
              入库
            </Button>
          </ul>}
        </div>
        }
      </Card>
    </div>
  );
};

export default CardInfo;
