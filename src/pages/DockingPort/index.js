import React, { useEffect, useRef, useState } from 'react';
import { Page, Navbar, NavLeft, NavTitle, BlockTitle, ListInput, List, Icon, PageContent, Button, } from '@hvisions/f-ui';
import { Sheet, f7, } from 'framework7-react';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast, createDialog } from '~/util/home';
import useDebounce from '~/Hook/useDebounce';
import { isEmpty } from 'lodash';
import CardInfo from './CardInfo';
import { Skeleton, Empty } from '~/components';
import joinAreaServices from '~/api/joinArea';
import { dockingPointState } from '~/enum/enum';

const DockingPort = ({ f7router }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const debounceSelectValue = useDebounce(selectValue, 500);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [bindingSheetOpen, setBindingSheetOpen] = useState(false);
  const [trayNumber, setTrayNumber] = useState('');

  const [updateSheetOpen, setUpdateSheetOpen] = useState(false);
  const [joinState, setJoinState] = useState(1);
  const [joinCode, setJoinCode] = useState();

  useEffect(() => {
    const load = async () => {
      await loadData(debounceSelectValue);
    };
    load();
  }, [debounceSelectValue]);


  useEffect(() => {

  }, [trayNumber, joinState]);

  const loadData = async keyWord => {
    setLoading(true);
    await joinAreaServices
      .findJoin()
      .then(res => {
        setList(res);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
    setLoading(false);
  };

  const loadMore = async () => {
    if (!allowInfinite) return;
    setShowPreloader(true);
    if (countRef.current >= total) {
      setShowPreloader(false);
      return;
    }
    setAllowInfinite(false);
    countRef.current = countRef.current + 10;
    await loadData(selectValue);
    await setAllowInfinite(true);
  };

  const onChangeSelect = e => {
    if (!e.target.value) {
      setSelectValue('');
    } else {
      setSelectValue(e.target.value);
    }
  };

  const handleClickDisable = () => {
    setSelectValue('');
  };

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData(selectValue);
    await setPtrPreloader(false);
    await done();
  };

  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(value => (
          <CardInfo
            key={value.id}
            item={value}
            setJoinCode={setJoinCode}
            loadData={loadData}
            setJoinState={setJoinState}
            setBindingSheetOpen={setBindingSheetOpen}
            setUpdateSheetOpen={setUpdateSheetOpen}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const bindingSheetClosed = () => {
    setTrayNumber('');
    setBindingSheetOpen(false);
  }

  const BindingSave = async () => {
    await joinAreaServices.addTransfer(joinCode, trayNumber)
      .then(res => {
        onToast('托盘绑定成功', styles.toastSuccess);
        loadData();
        bindingSheetClosed()
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  const updateSheetClosed = () => {
    setUpdateSheetOpen(false);
  }

  const updateStateSave = async () => {
    await joinAreaServices.updateState(joinCode, joinState)
      .then(res => {
        onToast('状态更新成功', styles.toastSuccess);
        updateSheetClosed()
        loadData(selectValue);
      }).catch(err => {
        onToast(err.message, styles.toastError);
      });
  }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>接驳口托盘管理</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        onInfinite={loadMore}
        ptrPreloader={ptrPreloader}
        ptr
        onPtrRefresh={onHandleRefresh}
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
      >
        <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
          <div
            className={`${styles.content} page-content`}
            style={{ paddingTop: '0' }}
          >
            {renderCardList()}
          </div>
        </div>
      </PageContent>
      <Sheet
        className={styles['bottom-sheet']}
        opened={bindingSheetOpen}
        onSheetClosed={bindingSheetClosed}
        backdrop
      >
        <BlockTitle>绑定托盘</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="托盘号"
            type="text"
            placeholder="请输入托盘号"
            required
            validate
            clearButton
            onChange={(e) => {
              setTrayNumber(e.target.value)
            }}
            value={trayNumber}
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <Button className={styles['save-btn']} fill round onClick={BindingSave}>
            保存
          </Button>
        </List>
      </Sheet>
      <Sheet
        className={styles['bottom-sheet']}
        opened={updateSheetOpen}
        onSheetClosed={updateSheetClosed}
        backdrop
      >
        <BlockTitle>更新接驳口状态</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="接驳口状态"
            placeholder="请输入接驳口状态"
            required
            // validate
            // clearButton
            type="select"
            defaultValue={joinState}
            onChange={(e) => {
              console.log('接驳口状态', e.target.value);
              setJoinState(e.target.value)
            }}
            value={joinState}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {dockingPointState.map((value, index) => (
              <option value={value.id} key={value.id}>
                {value.name}
              </option>
            ))}
          </ListInput>
          <Button className={styles['save-btn']} fill round onClick={updateStateSave}>
            保存
          </Button>
        </List>
      </Sheet>
    </Page>
  );
};

export default DockingPort;