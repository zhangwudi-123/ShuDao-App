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

const Suborder2 = ({
  $f7,
  f7router,
  orderInfos,
  orderInfo,
  orderInfoDetails,
}) => {
  const [list, setList] = useState([]);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);


  useEffect(() => {
    console.log(orderInfos, 'orderInfos');
    console.log(orderInfo, 'orderInfo');
    console.log(orderInfoDetails, 'orderInfoDetails');
  }, [orderInfoDetails]);


  const renderCardList = () =>
    !isEmpty(orderInfoDetails) ? (
      orderInfoDetails.map(value => (
        <CardInfo
          key={value.suborderNumber}
          item={value}
          f7router={f7router}
        />
      ))
    ) : (
      <Empty />
    )

  const handleSuborderAdd = () => {
    f7router.navigate('/semi-warehousing-binding-suborder-add2', {
      props: {
        orderInfos,
        orderInfo,
        orderInfoDetails,
      }
    });
  };

  const handleGoBack = () => {
    f7router.navigate('/semi-warehousing-binding-master2', {
      transition: 'ne-backward',
      props: {
        orderInfos,
        orderInfo,
        orderInfoDetails,
      }
    });
  };

  return (
    <Page
      infinite
      infiniteDistance={50}
      infinitePreloader={showPreloader}
      ptrPreloader={ptrPreloader}
      className={styles.pageContainer}
    >
      <Navbar>
        <NavLeft>
          <a onClick={() => handleGoBack()} className={styles['nav-left']}>
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>子订单信息</NavTitle>
      </Navbar>
      <div className={styles.tabContainer} style={{ padding: '0 16px' }}>
        {renderCardList()}
      </div>
      <div className={styles['detail-bottom']}>
        <Button className={styles['bottom-btn-confirm']} fill round onClick={handleSuborderAdd}>
          新增
        </Button>
      </div>
    </Page>
  );
};

export default Suborder2;
