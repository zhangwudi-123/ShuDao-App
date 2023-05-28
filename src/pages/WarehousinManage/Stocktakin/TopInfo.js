import React, { useEffect, useMemo, useState } from 'react';
import { 
    Page, 
    Navbar, 
    PageContent,
    NavLeft, 
    NavTitle, 
    Toggle,
    Card,
    CardContent
} from '@hvisions/f-ui';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../img/backIcon.png'
import searchIcon from '../img/searchIcon.png'
import checkIcon from '../img/checkIcon.png'
import styles from './style.scss';
import { onToast, createDialog } from '~/util/home';
import CardInfo from './CardInfo';
import stockService from '~/api/stocktakin';


const TopInfo = ({ $f7, f7router, setLoading, loading, getLockState, setStockStatus, stockStatus}) => {
    

    // useEffect(() => {
    //     getLockState()
    // }, [])
 
   
    // const getLockState = () => {
    //     stockService
    //       .getLockState()
    //       .then(res => {
    //           if (res) {
    //             setStockStatus(true);
    //           } else {
    //             setStockStatus(false);
    //           }
    //       })
    //       .catch(err => {
    //         onToast(err.message, styles.toastError)
    //       });
    // };
    const openLockState = async () => {
        setLoading(true)
        await stockService
          .lockStock()
          .then(res => {
            setStockStatus(true);
            onToast('锁库成功', styles.toastSuccess)
          })
          .catch(err => {
            onToast(err.message, styles.toastError)
          });
          setLoading(false)
      };
      const unLockStock = () => {
        stockService
          .unLockStock()
          .then(res => {
            setStockStatus(false);
            onToast('关闭成功', styles.toastSuccess)
          })
          .catch(err => {
            onToast(err.message, styles.toastError)
          });
      };
    const handleOpen = () => {
        createDialog('确认锁库?', '盘点锁库，开启后，锁住库存。盘点审核结束后请关闭盘点锁库。', async () => {
            try {
                await openLockState()
            } catch (error) {
                onToast('锁库失败', styles.toastError);
            }
        });
    }
    const handleChangeStatus = (e) => {
        if (e) {
            unLockStock()
        } else {
            handleOpen()
        }
    }
    const goDetail = () => {
        if (stockStatus == 1) {
            f7router.navigate('/stocktakinDetail');
        }
    }
      
    return (
        
        <div className={styles['operate']}>
            <div className={styles['operate-lock']}>
                <div className={styles['operate-seitch']}>
                    <span className={styles['operate-title']}>锁库盘点</span>
                    <Toggle 
                        checked={stockStatus}
                        onToggleChange={e => handleChangeStatus(e)}
                        disabled={loading}
                    ></Toggle>
                </div>
                <p className={styles['operate-text']}>请先锁库再进行盘点</p>
            </div>
            <div className={stockStatus == 0 ? styles['operate-inventory'] : styles['operate-inventory-handle']} onClick={goDetail}>
                <img src={checkIcon} alt="check" width="32"/>
                <span className={styles['inventory-text']}>开始盘点</span>
            </div>
        </div>
    )
}

export default TopInfo