import React, { useEffect, useRef, useState } from 'react';
import { Page, Navbar, NavLeft, NavTitle, PageContent, Sheet, Icon, ListInput, List, BlockTitle, Button } from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast } from '~/util/home';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';
import TransferBoxServices from '~/api/TransferBox';
import EmptyPalletsWarehousingApi from '~/api/EmptyPalletsWarehousing';

const Manual = ({ f7router, detailData }) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  const [emptyVis, setEmptyVis] = useState(false);
  const [emptyData, setEmptyData] = useState([]);
  const [feedPort, setFeedPort] = useState('上料口');
  const feedPorts = [
    { key: 1, name: '上料口', value: '上料口', },
    { key: 2, name: '下料口', value: '下料口', }
  ]

  useEffect(() => {
    setList(detailData)
  }, []);

  const renderCardList = () =>
    !loading ? (
      !isEmpty(list) ? (
        list.map(value => (
          <CardInfo
            key={value.id}
            item={value}
            f7router={f7router}
            detailData={detailData}
            setEmptyVis={setEmptyVis}
            setEmptyData={setEmptyData}
          />
        ))
      ) : (
        <Empty />
      )
    ) : (
      <Skeleton />
    );

  const handleCancelEmpty = () => {
    setEmptyVis(false)
    setEmptyData([])
    setFeedPort('上料口')
  }

  const HandleSaveEmpty = async () => {

    const params = {
      feedPort: feedPort,
      cuttingMachine: emptyData.cuttingMachine,
      trayNumber: emptyData.trayNumber,
      origin: emptyData.toLocation,
      middle: emptyData.fromLocation,
    }
    params.state = 0
    console.log('params', params);
    await EmptyPalletsWarehousingApi
      .saveOrUpdate(params)
      .then(res => {
        onToast('空托盘回库单新建成功', styles.toastSuccess);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
    handleCancelEmpty();

  }

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>出库单详情</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        // onInfinite={loadMore}
        ptrPreloader={ptrPreloader}
        ptr
        // onPtrRefresh={onHandleRefresh}
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
        opened={emptyVis}
        onSheetClosed={handleCancelEmpty}
        backdrop
      >
        <BlockTitle>料口选择</BlockTitle>
        <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
          <ListInput
            label="上下料口"
            placeholder="请选择上下料口"
            required
            // validate
            // clearButton
            type="select"
            // defaultValue={joinState}
            onChange={(e) => {
              setFeedPort(e.target.value)
            }}
          // value={joinState}
          >
            <Icon icon="demo-list-icon" slot="media" />
            {feedPorts.map((value, index) => (
              <option value={value.id} key={value.id}>
                {value.name}
              </option>
            ))}
          </ListInput>
        </List>
        <Button className={styles['save-btn']} fill round onClick={HandleSaveEmpty}>
          保存
        </Button>
      </Sheet>
    </Page>
  );
};

export default Manual;