import React, { useEffect, useRef, useState } from 'react';
import { BlockTitle, ListInput, List, Icon, Button, ListItem, Page, Navbar, NavLeft, NavTitle, PageContent, } from '@hvisions/f-ui';
import styles from './style.scss';
import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
import RawMaterialDeliveryApi from '~/api/RawMaterialDelivery';
import { onToast, createDialog } from '~/util/home';
import { isEmpty } from 'lodash';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';

const Manual = ({
  f7router,
  material,
}) => {

  const [materialList, setMaterialList] = useState([])
  const [materialInfo, setMaterialInfo] = useState(material)

  const [trayNumber, setTrayNumber] = useState('');
  const [materialId, setMaterialId] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [feedingName, setFeedingName] = useState('');
  const [middle, setMiddle] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [num, setNum] = useState('');

  useEffect(() => {
    if (material != undefined) {
      setMaterialId(material.id)
    }
  }, [material]);

  const handleSave = async () => {
    const params = {
      trayNumber: trayNumber,
      materialId: materialId,
      batchNumber: batchNumber,
      feedingName: feedingName,
      middle: middle,
      toLocation: toLocation,
      num: num,
    }
    params.materialCode = material.materialCode
    params.materialName = material.materialName
    console.log(params, 'params');
    await RawMaterialDeliveryApi.handout(params)
      .then(res => {
        onToast('出库单生成成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast('出库单生成失败', styles.toastError);
      })
      f7router.navigate('/raw-material-delivery')
  }

  const handleSelectMaterial = () => {
    f7router.navigate('/manual-material', {});
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a
            onClick={() => f7router.navigate('/raw-material-delivery', { transition: 'ne-backward' })}
            className={styles['nav-left']}
          >
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>手动出库</NavTitle>
      </Navbar>
      <PageContent >
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="托盘号"
            type="text"
            placeholder="请输入托盘号"
            required
            validate
            onChange={(e) => {
              setTrayNumber(e.target.value)
            }}
            value={trayNumber}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListItem
            link="#"
            header="物料"
            title={
              !isEmpty(materialInfo) ? (
                <div style={{ height: '44px', lineHeight: '44px' }}>
                  {materialInfo.materialName} / {materialInfo.materialCode}
                </div>
              ) : (
                <div style={{ height: '44px', lineHeight: '44px', color: '#00000073' }}>
                  请选择物料
                </div>
              )
            }
            after=""
            onClick={() => handleSelectMaterial()}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListItem>
          <ListInput
            label="物料批号"
            type="text"
            placeholder="请输入物料批号"
            required
            validate
            onChange={(e) => {
              setBatchNumber(e.target.value)
            }}
            value={batchNumber}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="上料口"
            type="text"
            placeholder="请输入上料口"
            required
            validate
            onChange={(e) => {
              setFeedingName(e.target.value)
            }}
            value={feedingName}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="中间位置"
            type="text"
            placeholder="请输入中间位置"
            required
            validate
            onChange={(e) => {
              setMiddle(e.target.value)
            }}
            value={middle}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="目标位置"
            type="text"
            placeholder="请输入目标位置"
            required
            validate
            onChange={(e) => {
              setToLocation(e.target.value)
            }}
            value={toLocation}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            label="物料数量"
            type="text"
            placeholder="请输入物料数量"
            required
            validate
            onChange={(e) => {
              setNum(e.target.value)
            }}
            value={num}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <Button className={styles['save-btn']} fill round onClick={() => handleSave()}>
            保存
          </Button>
        </List>
      </PageContent>
    </Page>
  );
};

export default Manual;