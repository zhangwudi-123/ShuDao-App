import React from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';
import { onToast, createDialog } from '~/util/home';
import bendingMachineApi from '~/api/bendingMachine';

const CardInfo = ({
  item,
  setBindingSheetOpen,
  loadData,
  selectValue,
  setBendingNumber
}) => {

  const columns = [
    {
      title: '折弯机名称',
      dataIndex: 'bendingName',
      key: 'bendingName',
      align: 'center',
    },
    {
      title: '折弯机状态',
      dataIndex: 'bendingState',
      key: 'bendingState',
      align: 'center',
    },
    {
      title: '折弯机属性',
      dataIndex: 'attributeName',
      key: 'attributeName',
      align: 'center',
    },
    {
      title: '是否允许折弯未完成出库',
      dataIndex: 'ifoutName',
      key: 'ifoutName',
      align: 'center',
    },
    {
      title: '最小在库时间',
      dataIndex: 'warhouseTime',
      key: 'warhouseTime',
      align: 'center',
    },
    {
      title: '备料区',
      dataIndex: 'readyMaterials',
      key: 'readyMaterials',
      align: 'center',
    },
    {
      title: '托盘号',
      dataIndex: 'transferCode',
      key: 'transferCode',
      align: 'center',
    },
  ];

  const handleUnbind = ()=>{
    createDialog(
      '托盘解绑',
      `确认解除折弯机${item.bendingNumber}与托盘${item.transferCode}的绑定关系？`,
      function() {
        try {
          bendingMachineApi.deleteTransfer(item.bendingNumber)
          .then(res=>{
            onToast('托盘解绑成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err=>{
            onToast(err.message, styles.toastError);
          })
        } catch (error) {
          console.log('error',error);
          onToast('托盘解绑失败', styles.toastError);
        }
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.bendingNumber || ''}</span>
          </li>
          {columns.map((column, index) => {
            return (
              <li key={index}>
                <span className={styles['li-next-title']}>{column.title}</span>
                <span className={styles['li-next-title']}>{item[column.dataIndex] || ''}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            {
              item.transferCode == null ? 
              <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setBindingSheetOpen(true) ,setBendingNumber(item.bendingNumber)}}>
              绑定托盘
            </Button>
              :
              <Button fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px", background: '#d83333' }} onClick={() => handleUnbind()}>
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
