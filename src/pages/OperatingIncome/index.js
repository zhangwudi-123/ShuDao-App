import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  PageContent,
  Button
} from '@hvisions/f-ui';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import In from '../img/In.png';
import stylemodule from './style.module.scss';
import { useResizeDetector } from 'react-resize-detector';
import { useFullScreenHandle } from 'react-full-screen';

import { Swiper, SwiperSlide } from 'framework7-react';

import Slide1 from './components/Slide1/index';
import Slide2 from './components/Slide2/index';
import Slide3 from './components/Slide3/index';
import Slide4 from './components/Slide4/index';
import Slide5 from './components/Slide5/index';
import Slide6 from './components/Slide6/index';

var screenWidth = window.screen.width;
var screenHeight = window.screen.height - 44;

const Fullscreen = ({ f7router }) => {
  const [swiperKey, setSwiperKey] = useState(0);

  const handleFullScreen = useFullScreenHandle();

  useEffect(() => {
    console.log(screenWidth, screenHeight, '----');
  }, []);

  const onResize = width => {
    window.rem = null;
    const doc = window.document;
    const docEl = doc.documentElement;
    const rem = (10 * width) / 1000;
    docEl.style.fontSize = rem + 'px';
    window.rem = rem;
  };
  const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
    onResize
  });

  const swiperParams = {
    //   loop: true, // 启用循环模式
    //   on: {
    //     slideChange: function () {
    //         // 每次切换页面时触发的查询函数
    //         console.log(Math.random(),'-------');
    //         setSwiperKey(Math.random())
    //     }
    // }
    // navigation : {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>集团公司</NavTitle>
      </Navbar>
      <PageContent>
        <Swiper params={swiperParams} style={{ height: screenHeight }}>
          <SwiperSlide>
            <Slide1 high={screenHeight} wide={screenWidth} swiperKey={swiperKey} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide2 high={screenHeight} wide={screenWidth} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide3 high={screenHeight} wide={screenWidth} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide4 high={screenHeight} wide={screenWidth} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide5 high={screenHeight} wide={screenWidth} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide6 high={screenHeight} wide={screenWidth} swiperKey={swiperKey} />
          </SwiperSlide>
        </Swiper>
      </PageContent>
    </Page>
  );
};

export default Fullscreen;
