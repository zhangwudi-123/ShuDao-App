import React, { useEffect, useMemo, useState } from 'react';
import {
  Page,
  Navbar,
  PageContent,
  Searchbar,
  NavLeft,
  NavTitle,
  Card,
  CardContent,
  Button,
  List,
  ListInput,
  ListItem
} from '@hvisions/f-ui';
import { session } from '@hvisions/toolkit';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../img/backIcon.png';
import rightArrow from '../../img/rightArrow.png';
import styles from './topInfo.scss';

const TopInfo = ({
  f7router,
  batchItem,
  handleSelectLocation,
  waresName,
  locationName,
  handleSaveMaterial,
  waresId,
  locationId,
  paseBatchNum,
  paseQuantity
}) => {
  const [batchNum, setBatchNum] = useState(paseBatchNum || '');
  const [quantity, setQuantity] = useState(paseQuantity || 1);
  const [element, setElement] = useState('');
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  const spanBoxStyle = {
    height: '44px',
    lineHeight: '44px',
    display: 'flex',
    justifyContent: 'space-between'
  };
  const spanStyle = {
    display: 'block',
    width: '40%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const handleSave = () => {
    const params = {
      batchNum,
      quantity: Number(quantity),
      element
    };
    handleSaveMaterial(params);
  };
  const selectLocationCB = () => {
    const params = {
      batchNum,
      quantity
    };
    handleSelectLocation(params);
  };
  return (
    <div className={styles['card-box']}>
      <Card>
        <List>
          <ListInput
            label="批次号"
            type="text"
            placeholder="请输入批次号"
            clearButton
            value={batchNum}
            onChange={e => setBatchNum(e.target.value)}
            onInputEmpty={() => setBatchNum('')}
          ></ListInput>
          <ListInput
            disabled
            label="物料"
            type="text"
            value={`${batchItem.materialName} -- ${batchItem.materialCode}`}
          ></ListInput>
          <ListItem
            link="#"
            header="库房"
            title={
              locationName ? (
                <div style={spanBoxStyle}>
                  <span style={{ ...spanStyle }}>{locationName}</span>
                </div>
              ) : (
                <div style={{ height: '44px', lineHeight: '44px', color: '#00000073' }}>
                  请选择库房
                </div>
              )
            }
            after=""
            onClick={selectLocationCB}
          ></ListItem>
          <ListInput
            label="成分"
            type="text"
            placeholder="请输入成分"
            clearButton
            value={element}
            onChange={e => setElement(e.target.value)}
          ></ListInput>
          <ListInput
            label="数量"
            type="number"
            placeholder="请输入数量"
            clearButton
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            onInputEmpty={() => setQuantity(1)}
          ></ListInput>
        </List>
        <div className={styles['btn-box']}>
          <Button fill className={styles['save-btn']} onClick={handleSave}>
            保存
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TopInfo;
