import React, { useEffect, useMemo, useState } from 'react';
import { 
    Page, 
    Navbar, 
    PageContent, 
    Popup, 
    Link, 
    NavRight, 
    Searchbar, 
    NavLeft, 
    NavTitle, 
    Toggle,
    Card,
    CardContent,
    Button
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png'
import rightArrow from '../../img/rightArrow.png'
import styles from './TopInfo.scss';
import ScanPop from '~/pages/Scan/ScanPop';


const ItemTopInfo = ({ f7router, purchaseOrderDetail }) => {
    const onGoingStyle = {
        background: '#E1EDFF',
        color: '#3D86F3'
    }
    const completeStyle = {
        background: '#D3F0E9',
        color: '#42BB9E'
    }
    return (
        
        <div className={styles['card-box']}>
             <Card>
                <ul className={styles['card-ul']}>
                    <li style={{marginBottom: '6px'}}>
                        <span className={styles['li-title']}>{purchaseOrderDetail && purchaseOrderDetail.scNumber}</span>
                        <span className={styles['li-status']} style={purchaseOrderDetail && purchaseOrderDetail.checkStatus == 1 ? completeStyle : onGoingStyle}>{purchaseOrderDetail && purchaseOrderDetail.checkStatus == 0 ? '调库中' : '已结束'}</span>
                    </li>
                    <li style={{marginBottom: '4px'}}>
                        <span className={styles['li-next-title']}>原料库</span>
                        <span className={styles['li-next-title']}>{purchaseOrderDetail && purchaseOrderDetail.parentLocationName}</span>
                    </li>
                    <li style={{marginBottom: '4px'}}>
                        <span className={styles['li-next-title']}>操作人</span>
                        <span className={styles['li-next-title']}>{purchaseOrderDetail && purchaseOrderDetail.operator}</span>
                    </li>
                    <li style={{marginBottom: '4px'}}>
                        <span className={styles['li-next-title']}>盘点时间</span>
                        <span className={styles['li-next-title']}>{purchaseOrderDetail && purchaseOrderDetail.stockCheckTime}</span>
                    </li>
                </ul>
             </Card>
        </div>
    )
}

export default ItemTopInfo