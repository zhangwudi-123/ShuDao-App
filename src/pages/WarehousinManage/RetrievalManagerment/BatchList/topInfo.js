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
  handleSelectMaterial,
  waresName,
  locationName,
  handleSaveMaterial,
  waresId,
  locationId,
  batchNum,
  setBatchNum,
  quantity,
  setQuantity,
  remark,
  setRemark,
  selectedMaterial,
  state
}) => {
  const onGoingStyle = {
    background: '#E1EDFF',
    color: '#3D86F3'
  };
  const completeStyle = {
    background: '#D3F0E9',
    color: '#42BB9E'
  };
  const handleSave = () => {
    const params = {
      batchNum,
      quantity: Number(quantity)
    };
    handleSaveMaterial(params);
  };
  const spanBoxStyle = {
    height: '27px',
    lineHeight: '27px',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '8px'
  };
  const spanStyle = {
    fontSize: '18px',
    fontFamily: `Source Han Sans CN-Regular, Source Han Sans CN`,
    fontWeight: `400`,
    color: '#333333',
    lineHeight: '27px',

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const selectLocationCB = () => {
    const params = {
      batchNum,
      quantity
    };
    handleSelectLocation(params);
  };
  const selectMaterialCB = () => {
    const params = {
      batchNum,
      quantity
    };
    handleSelectMaterial(params);
  };
  const ItemProperty = isEmpty(selectedMaterial) ? { link: '#' } : {};
  return (
    <div className={styles['card-box']}>
      <Card>
        <List className="ne-info-list">
          <ListItem
            {...ItemProperty}
            link="#"
            header="物料"
            title={
              !isEmpty(selectedMaterial) ? (
                <div
                  style={{
                    color: 'rgba(0, 0, 0, 0.3)',
                    height: '27px',
                    fontSize: '18px',
                    marginTop: '8px',
                    lineHeight: '27px'
                  }}
                >
                  {selectedMaterial.materialName} / {selectedMaterial.materialCode}
                </div>
              ) : (
                <div
                  style={{
                    color: '#00000073',
                    height: '27px',
                    fontSize: '18px',
                    marginTop: '8px',
                    lineHeight: '27px'
                  }}
                >
                  请选择物料
                </div>
              )
            }
            after=""
            onClick={handleSelectMaterial}
          ></ListItem>
          <ListInput
            label="批次号"
            type="text"
            placeholder="请输入批次号"
            clearButton
            value={batchNum}
            onChange={e => setBatchNum(e.target.value)}
            onInputEmpty={() => setBatchNum('')}
            disabled={state == 1 ? true : false}
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
                <div
                  style={{
                    height: '27px',
                    lineHeight: '27px',
                    color: '#00000073',
                    fontSize: '18px',
                    marginTop: '8px'
                  }}
                >
                  请选择库房
                </div>
              )
            }
            after=""
            onClick={handleSelectLocation}
          ></ListItem>
          <ListInput
            label="数量"
            type="number"
            placeholder="请输入数量"
            clearButton
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            onInputEmpty={() => setQuantity(1)}
            disabled={state == 1 ? true : false}
          ></ListInput>
          <ListInput
            label="备注"
            type="text"
            placeholder="请输入备注信息"
            clearButton
            value={remark}
            onChange={e => setRemark(e.target.value)}
            onInputEmpty={() => setRemark('')}
            disabled={state == 1 ? true : false}
          ></ListInput>
        </List>
        <div className={styles['btn-box']}>
          <Button
            disabled={state == 2 ? true : false}
            fill
            className={styles['save-btn']}
            onClick={handleSaveMaterial}
          >
            保存
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TopInfo;
