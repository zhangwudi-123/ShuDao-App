import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
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
import retrievalService from '~/api/retrieval';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { onToast, createDialog } from '~/util/home';

import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import styles from './topInfo.scss';

const TopInfo = ({
  f7router,
  batchItem,
  handleSelectLocation,
  handleSelectMaterial,
  waresName,
  locationName,
  setLocationName,
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
  setSelectedMaterial,
  setLocationId,
  orderId,
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

  const inputRef = useRef(null);

  const keyDown = useMemo(
    () => e => {
      if (!window.cordova) {
        return;
      }
      window.cordova.define.moduleMap['scanPda.scanPda'].exports.coolMethod('start', function(
        data
      ) {
        setBatchNum(data);
        f7router.app.preloader.show();
        retrievalService
          .getStockOutMaterial({ materialBatch: data, owId: orderId })
          .then(res => {
            setSelectedMaterial({
              id: res.materialId,
              materialCode: res.materialCode,
              materialName: res.materialName,
              materialBatchNum: res.materialBatchNum
            });
            setQuantity(res.quantity);
            setLocationId(res.locationId);
            setLocationName(res.locationDescription);
            setRemark(res.description);
            //   {
            //     "id": 33,
            //     "createTime": "2022-09-07 11:15:17",
            //     "updateTime": null,
            //     "creatorId": null,
            //     "updaterId": null,
            //     "siteNum": null,
            //     "materialId": 1015,
            //     "locationId": 5,
            //     "materialCode": "PR004",
            //     "materialName": "开口剂",
            //     "materialBatchNum": "202209070006",
            //     "preMaterialBatchNum": "",
            //     "locationCode": "YLK",
            //     "supplierName": null,
            //     "locationDescription": "原料库",
            //     "quantity": 100,
            //     "usedCount": 0,
            //     "unitName": "千克",
            //     "locationState": null,
            //     "frozen": null,
            //     "element": null,
            //     "rank": null,
            //     "description": null
            // }
          })
          .catch(err => {
            inputRef.current.value = '';
            setBatchNum('');
            setSelectedMaterial({});

            setQuantity(1);
            setLocationId('');
            setLocationName('');
            setRemark('');
            onToast(err.message, styles.toastError);
          })
          .finally(() => {
            f7router.app.preloader.hide();
          });
      });
    },
    []
  );

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
    // document.addEventListener('keydown', keyDown);
    return () => {
      // console.log('231');
      // document.removeEventListener('keydown', keyDown);
    };
  }, []);

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
  // console.log(batchNum, '.....');
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
          <ListItem
            header="批次号"
            // placeholder="请输入批次号"
            // clearButton
            // value={batchNum}
            title={
              <input
                className={styles.batchInput}
                placeholder="请输入批次号"
                ref={inputRef}
                readOnly
                defaultValue={batchNum}
                onChange={e => setBatchNum(e.target.value)}
                onFocus={() => {
                  document.addEventListener('keydown', keyDown);
                }}
                onBlur={() => {
                  document.removeEventListener('keydown', keyDown);
                }}
                disabled={state == 1 ? true : false}
              ></input>
            }
            // onChange={e => setBatchNum(e.target.value)}
            // onInputEmpty={() => setBatchNum('')}
            // disabled={state == 1 ? true : false}
            after=""
          ></ListItem>
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
