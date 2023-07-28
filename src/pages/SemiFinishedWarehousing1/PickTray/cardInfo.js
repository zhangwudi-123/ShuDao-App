import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { Sheet } from 'framework7-react';
import { onToast, createDialog } from '~/util/home';
import CallTraySheet from './CallTray/callTraySheet';
import SemiFinisheDeliveryApi from '~/api/SemiFinishedDelivery';

const CardInfo = ({ f7router, item, }) => {
  const toLocations = [
    { id: 1, name: 'J004', value: 'J004', },
    { id: 2, name: 'J005', value: 'J005', },
    { id: 3, name: 'J006', value: 'J006', },
  ]

  const middles = [
    { id: 1, name: 'J002', value: 'J002', },
    { id: 2, name: 'J003', value: 'J003', },
  ]

  const [callSheetOpen, setCallSheetOpen] = useState(false);
  const [middle, setMiddle] = useState(middles[0].value);
  const [toLocation, setToLocation] = useState(toLocations[0].value);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {

  }, []);

  const columns = [
    // {
    //   title: '订单号',
    //   dataIndex: 'orderNumber',
    //   key: 'orderNumber',
    //   align: 'center',
    // },
    {
      title: '托盘号',
      dataIndex: 'trayNumber',
      key: 'trayNumber',
      align: 'center',
    },
    {
      title: '产品名称',
      dataIndex: 'materialName',
      key: 'materialName',
      align: 'center',
    },
    {
      title: '产品代码',
      dataIndex: 'materialCode',
      key: 'materialCode',
      align: 'center',
    },
    {
      title: '产品数量(张)',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: '属性1',
      dataIndex: 'attributeOne',
      key: 'attributeOne',
      align: 'center',
    },
    {
      title: '属性2',
      dataIndex: 'attributeTwo',
      key: 'attributeTwo',
      align: 'center',
    },
    {
      title: '备注',
      dataIndex: 'desc',
      key: 'desc',
      align: 'center',
    },
  ]

  const handleCallTray = (item) => {
    console.log('item', item);
    setCallSheetOpen(true)
    setSelectedData(item)
  }

  const callSheetClosed = () => {
    setCallSheetOpen(false)
    setToLocation(toLocations[0].value);
    setMiddle(middles[0].value);
  }

  const callTraySave = async () => {
    await SemiFinisheDeliveryApi.returnStore(selectedData.id, middle, toLocation)
      .then(res => {
        onToast('托盘下架成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })

    callSheetClosed()
    f7router.navigate('/semi-finished-warehousing1', {
      transition: 'ne-backward',
    });
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <Button
            className={styles['card-button']}
            fill
          >
            <li>
              <span className={styles['li-title']}>{item.orderNumber || ''}</span>
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
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            {/* <Button
              fill
              round
              className={styles['weighing-button']}
              onClick={() => handleCallTray(item)}
            >
              <span style={{ padding: "10px" }}>下架</span>
            </Button> */}
            <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", width: 105 }} onClick={() => handleCallTray(item)}>
              下架
            </Button>
          </ul>
        </div>
      </Card>
      <Sheet
        className={styles['add-sheet']}
        opened={callSheetOpen}
        onSheetClosed={callSheetClosed}
        backdrop
      >
        <CallTraySheet
          middle={middle}
          setMiddles={setMiddle}
          toLocation={toLocation}
          setToLocation={setToLocation}
          callTraySave={callTraySave}
          toLocations={toLocations}
          middles={middles}
        />
      </Sheet>
    </div>
  );
};

export default CardInfo;
