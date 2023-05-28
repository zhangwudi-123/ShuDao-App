import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Page, Navbar, NavLeft, NavTitle, PageContent, Button, BlockTitle } from '@hvisions/f-ui';
import moment from 'moment';
import { session, tree } from '@hvisions/toolkit';
import { isEmpty, debounce } from 'lodash';
import { onToast, createDialog } from '~/util/home';
import BatchScanService from '~/api/batchScan';
import styles from './style.scss';

import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
const BatchScan = ({ f7router, moduleList, ...props }) => {
  const [inputPlaceHolder, setInputPlaceHolder] = useState('请扫码');
  const [allNumbers, setAllNumbers] = useState([]);
  const inputRef = useRef(null);
  const keyDown = useCallback(e => {
    if (!window.cordova) {
      return;
    }
    window.cordova.define.moduleMap['scanPda.scanPda'].exports.coolMethod('start', function(data) {
      //handleNext(data);
      setAllNumbers(cur => {
        if (cur.includes(data)) {
          return cur;
        }
        return [...cur, data];
      });
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);
  const handleSubmit = () => {
    if (isEmpty(allNumbers)) {
      return;
    }
    BatchScanService.scanInStock(allNumbers)
      .then(res => {
        onToast('提交成功', styles.toastSuccess);
        setAllNumbers([]);
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
        <NavTitle>批量扫码</NavTitle>
      </Navbar>
      <PageContent>
        <div style={{ margin: '16px 16px 72px 16px' }}>
          <input
            placeholder={inputPlaceHolder}
            ref={inputRef}
            readOnly
            onFocus={() => {
              setInputPlaceHolder('请扫码');
              document.addEventListener('keydown', keyDown);
            }}
            onBlur={() => {
              inputRef.current.value = '';
              setInputPlaceHolder('请点击进行扫码');
              document.removeEventListener('keydown', keyDown);
            }}
          ></input>
          <BlockTitle>已扫码列表</BlockTitle>
          {allNumbers.map((i, index) => (
            <div key={index}>{i}</div>
          ))}
        </div>
      </PageContent>

      <div className="ne-bottom-container">
        <Button className="ne-bottom-btn" disabled={isEmpty(allNumbers)} onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </Page>
  );
};

export default BatchScan;
