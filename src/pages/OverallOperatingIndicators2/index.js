//
import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Searchbar,
  BlockTitle,
  ListInput,
  List,
  Icon,
  PageContent,
  Button
} from '@hvisions/f-ui';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { useResizeDetector } from 'react-resize-detector';
import stylemodule from './style.module.scss';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import MiddleSecond from '../EachertsHL/MiddleSecond';
import MiddleThrid from '../Eacherts/MiddleThrid';
import { useSwipeable } from 'react-swipeable';
// import { Sheet, f7 } from 'framework7-react';
// import styles from './style.scss';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { i18n } from '@hvisions/toolkit';
// import { onToast, createDialog } from '~/util/home';
// import useDebounce from '~/Hook/useDebounce';
// import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// import { isEmpty } from 'lodash';
// import { Skeleton, Empty } from '~/components';

// import PrepareAreaServices from '~/api/PrepareArea';
// import { PrepareAreaState } from '~/enum/enum';

const OverallOperatingIndicators = ({ f7router }) => {
  const [visable, setVisable] = useState(false);
  const handleFullScreen = useFullScreenHandle();
  const onResize = width => {
    window.rem = null;
    const doc = window.document;
    const docEl = doc.documentElement;
    // console.log(doc);
    // const screen = document.querySelector('#screen');
    // console.log(width);
    const rem = (10 * width) / 1000;
    docEl.style.fontSize = rem + 'px';
    // console.log(docEl.style.fontSize);
    // const targetX = 1920;
    // const scaleRatio = width / targetX;
    // screen.style.transform = `scale(${scaleRatio})`;

    // if (echartsRef.current) {
    //   echartsRef.current.getEchartsInstance().resize();
    // }
    window.rem = rem;
    // window.a = rem;
    // console.log(window, '(((');
  };
  const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
    onResize
  });
  // useEffect(() => {
  //   let startX = 0;
  //   let startY = 0;

  //   document.addEventListener('touchstart', e => {
  //     startX = e.touches[0].clientX;
  //     startY = e.touches[0].clientY;
  //   });

  //   document.addEventListener('touchmove', e => {
  //     const moveX = e.touches[0].clientX;
  //     const moveY = e.touches[0].clientY;
  //     const deltaX = moveX - startX;
  //     const deltaY = moveY - startY;

  //     if (deltaX > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
  //       handleBindingLeft();
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   let startX = 0;
  //   let startY = 0;

  //   document.addEventListener('touchstart', e => {
  //     startX = e.touches[0].clientX;
  //     startY = e.touches[0].clientY;
  //   });

  //   document.addEventListener('touchmove', e => {
  //     const moveX = e.touches[0].clientX;
  //     const moveY = e.touches[0].clientY;
  //     const deltaX = moveX - startX;
  //     const deltaY = moveY - startY;

  //     if (deltaX < -50 && Math.abs(deltaX) > Math.abs(deltaY)) {
  //       handleBindingRight();
  //     }
  //   });
  // }, []);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleBindingRight(),
    onSwipedRight: () => handleBindingLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // 如果你希望在桌面浏览器上模拟滑动手势，可以将其设置为true
  });
  const handleBindingLeft = async () => {
    f7router.navigate('/grossprofit', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/market', {});
  };
  return (
    <Page pageContent={false}>
      金属平衡
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>金属平衡</NavTitle>
        <NavRight>
          {!visable && (
            <Button
              icon="fullscreen"
              onClick={() => {
                handleFullScreen.enter();
                setVisable(true);
              }}
              className={stylemodule.button}
            >
              <img alt="" style={{ height: 24 }} src={In} />
            </Button>
          )}
        </NavRight>
      </Navbar>
      <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
        <div ref={rightPanelRef} className={stylemodule.backdiv}>
          {visable && (
            <Button
              onClick={() => {
                // console.log('aaaaa');
                handleFullScreen.exit();
                setVisable(false);
              }}
              className={stylemodule.button2}
            >
              <img alt="" style={{ height: 24 }} src={Out} />
            </Button>
          )}
          <div
            style={{
              position: 'absolute',
              width: '8rem',
              height: '8rem',
              top: '45%',
              left: '80%',
              marginLeft: '8rem',
              marginTop: '4rem',
              zIndex: '100'
              // backgroundColor: 'red'
            }}
            onClick={handleBindingRight}
          >
            <img alt="" style={{ height: '100%' }} src={Right} />
          </div>
          <div
            style={{
              position: 'absolute',
              width: '8rem',
              height: '8rem',
              top: '45%',
              // left: '80%',
              marginLeft: '8rem',
              marginTop: '4rem',
              zIndex: '100'
              // backgroundColor: 'red'
            }}
            onClick={handleBindingLeft}
          >
            <img alt="" style={{ height: '100%' }} src={Left} />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              // backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '5rem',
              marginLeft: '-5rem'
            }}
          >
            <div style={{ width: '100%', height: '65%' }}>
              <MiddleSecond />
            </div>

            {/* <div style={{ width: '100%', height: '35%' }}>
              <MiddleThrid />
            </div> */}
          </div>
        </div>
      </FullScreen>
    </Page>
  );
};

export default OverallOperatingIndicators;
