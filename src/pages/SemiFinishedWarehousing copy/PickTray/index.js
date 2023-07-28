import React, { useEffect,  useRef, useState } from 'react';
import { Page, Navbar, NavLeft, NavTitle, PageContent, } from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { onToast } from '~/util/home';
import { isEmpty } from 'lodash';
import CardInfo from './cardInfo';
import { Skeleton, Empty } from '~/components';
import TransferBoxServices from '~/api/TransferBox';

const PickTray = ({ f7router,setCallSheetOpen ,setTrayNumber}) => {
  const countRef = useRef(10);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [ptrPreloader, setPtrPreloader] = useState(false);

  useEffect(() => {
      loadData();
  }, []);

  const loadData = async keyWord => {
    setLoading(true);
    const searchData = {
      pageSize: countRef.current,
      type: 1 ,
    };
    await TransferBoxServices.getPage(searchData)
    .then(res => {
        setList(res.content);
        setTotal(res.totalElements);
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
    await loadData();
    await setAllowInfinite(true);
  };

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    await loadData();
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
          loadData={loadData}
          f7router={f7router}
          setCallSheetOpen={setCallSheetOpen}
          setTrayNumber={setTrayNumber}
        />
      ))
    ) : (
      <Empty />
    )
  ) : (
    <Skeleton />
  );

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>挑选托盘</NavTitle>
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
    </Page>
  );
};

export default PickTray;