import React, { useEffect, useMemo, useState, useRef } from 'react';
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
  Input,
  Toolbar,
  Tabs,
  Tab,
  Button
} from '@hvisions/f-ui';
import { Skeleton, Empty } from '~/components';
import { isEmpty } from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import backIcon from '../../../../img/backIcon.png';
import styles from './style.scss';
import { goBack, onToast, createDialog } from '~/util/home';
import CardInfo from './CardInfo';

const Master2 = ({
  $f7,
  f7router,
  orderInfos,
}) => {
  const [list, setList] = useState([]);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);


  useEffect(() => {
    console.log(orderInfos, 'orderInfos');
  }, [orderInfos]);


  const renderCardList = () =>
    !isEmpty(orderInfos) ? (
      orderInfos.map(value => (
        <CardInfo
          key={value.orderCode}
          item={value}
          f7router={f7router}
          orderInfos={orderInfos}
        />
      ))
    ) : (
      <Empty />
    )

  const handleMasterAdd = () => {
    f7router.navigate('/semi-warehousing-binding-master-add2', {
      props: {
        orderInfos,
      }
    });
  };

  const handleGoBack = () => {
    f7router.navigate('/semi-warehousing-binding2', {
      transition: 'ne-backward',
      props: {
        orderInfos,
      }
    });
  };

  return (
    <Page
      infinite
      infiniteDistance={50}
      infinitePreloader={showPreloader}
      ptrPreloader={ptrPreloader}
      // ptr
      // onPtrPullStart={() => {
      //   setPtrPreloader(true);
      // }}
      className={styles.pageContainer}
    >
      <Navbar>
        <NavLeft>
          <a onClick={() => handleGoBack()} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>主订单信息</NavTitle>
      </Navbar>
      <div className={styles.tabContainer} style={{ padding: '0 16px' }}>
        {renderCardList()}
      </div>
      <div className={styles['detail-bottom']}>
        <Button className={styles['bottom-btn-confirm']} fill round onClick={handleMasterAdd}>
          新增
        </Button>
      </div>
    </Page>
  );
};

export default Master2;
