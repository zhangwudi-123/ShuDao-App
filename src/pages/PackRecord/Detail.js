import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  PageContent,
  Button,
  BlockTitle,
  Card,
  ListInput,
  List
} from '@hvisions/f-ui';
import moment from 'moment';
import { session, tree } from '@hvisions/toolkit';
import { isEmpty, debounce } from 'lodash';
import { onToast, createDialog } from '~/util/home';
import PackService from '~/api/packRecord';
import styles from './style.scss';

import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
const Detail = ({ f7router, itemData, ...props }) => {
  const [weight, setWeight] = useState(itemData.weight);
  const handleComplete = () => {
    PackService.putWeight({ materialBatch: itemData.materialBatchNum, weight })
      .then(res => {
        onToast('修改成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>收料记录详情</NavTitle>
      </Navbar>
      <PageContent style={{ paddingBottom: '72px' }}>
        <Card>
          <List>
            <ListInput
              label="产品编码"
              type="text"
              value={itemData.materialCode || ''}
              readonly
            ></ListInput>
            <ListInput
              label="产品名称"
              type="text"
              value={itemData.materialName || ''}
              readonly
            ></ListInput>
            <ListInput
              label="规格"
              type="text"
              value={itemData.specifications || ''}
              readonly
            ></ListInput>
            <ListInput
              label="分切工位"
              type="text"
              value={itemData.station || ''}
              readonly
            ></ListInput>
            <ListInput label="长度" type="text" value={itemData.quantity} readonly></ListInput>

            <ListInput
              label="净重"
              type="text"
              placeholder="请输入重量"
              defaultValue={itemData.weight}
              onChange={e => {
                setWeight(e.target.value);
              }}
              onInputClear={() => {
                setWeight('');
              }}
              clearButton
            ></ListInput>
          </List>
        </Card>
      </PageContent>
      <div className="ne-bottom-container">
        <Button fill onClick={handleComplete} className="ne-bottom-btn">
          确认
        </Button>
      </div>
    </Page>
  );
};

export default Detail;
