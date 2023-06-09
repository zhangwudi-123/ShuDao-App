import React, { useEffect, useState } from 'react';
import { Card, Button } from '@hvisions/f-ui';
import styles from './cardInfo.scss';

import { onToast, createDialog } from '~/util/home';
import TaskTranSportApi from '~/api/TaskTranSport';

const CardInfo = ({
  item,
  tabKey,
  setAdjustSheetOpen,
  setAdjustSheetData,
  selectValue,
  loadData
}) => {

  const columns = [
    {
      title: '任务类型',
      dataIndex: 'taskTypeName',
      key: 'taskTypeName',
      align: 'center'
    },
    {
      title: '托盘号',
      dataIndex: 'transferCode',
      key: 'transferCode',
      align: 'center'
    },
    {
      title: '起始位置',
      dataIndex: 'fromLocation',
      key: 'fromLocation',
      align: 'center'
    },
    {
      title: '中间位置',
      dataIndex: 'middle',
      key: 'middle',
      align: 'center'
    },
    {
      title: '目标位置',
      dataIndex: 'toLocation',
      key: 'toLocation',
      align: 'center'
    },
    {
      title: '优先级',
      dataIndex: 'priority',
      key: 'priority',
      align: 'center'
    },
  ];

  const handlePause = async (record) => {
    createDialog(
      '确认暂停当前任务？',
      `任务单号${record.taskCode}`,
      async function () {
        await TaskTranSportApi.suspendTask(record.id)
          .then(res => {
            onToast('任务暂停成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          })
      }
    );
  }

  const handleComplete = (record) => {
    createDialog(
      '确认完成当前任务？',
      `任务单号${record.taskCode}`,
      async function () {
        await TaskTranSportApi.finishTask(record.id)
          .then(res => {
            onToast('任务完成成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          })
      }
    );
  }

  const handleContinue = (record) => {
    createDialog(
      '确认继续当前任务？',
      `任务单号${record.taskCode}`,
      async function () {
        await TaskTranSportApi.continueTask(record.id)
          .then(res => {
            onToast('任务继续成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          })
      }
    );
  }

  const handleRollback = (record) => {
    createDialog(
      '确认回退当前任务？',
      `任务单号${record.taskCode}`,
      async function () {
        await TaskTranSportApi.backTask(record.id)
          .then(res => {
            onToast('任务回退成功', styles.toastSuccess);
            loadData(selectValue);
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          })
      }
    );
  }

  return (
    <div className={styles['card-box']}>
      <Card className={styles['card']}>
        <ul className={styles['card-ul']}>
          <li>
            <span className={styles['li-title']}>{item.taskCode || ''}</span>
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
        {tabKey != 4 && <div className={styles['card-div']}>
          <ul className={styles['div-ul']}>
            {tabKey == 1 && <Button key="adjust" fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => { setAdjustSheetOpen(true); setAdjustSheetData(item) }}>
              调整优先级
            </Button>}
            {tabKey == 1 && <Button key="pause" fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px",background: '#d83333' }} onClick={() => handlePause(item)}>
              暂停
            </Button>}
            {(tabKey == 2 || tabKey == 5) && <Button key="complete" fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => handleComplete(item)}>
              完成
            </Button>}
            {tabKey == 3 && <Button key="continue" fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" }} onClick={() => handleContinue(item)}>
              继续
            </Button>}
            {tabKey == 5 && <Button key="rollback" fill round className={styles['bottom-btn-confirm']} style={{ margin: "5px" ,background: '#d83333'}} onClick={() => handleRollback(item)}>
              回退
            </Button>}
          </ul>
        </div>}
      </Card>
    </div>
  );
};

export default CardInfo;
