// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Link,
//   Page,
//   Navbar,
//   NavLeft,
//   NavTitle,
//   NavRight,
//   Searchbar,
//   BlockTitle,
//   ListInput,
//   List,
//   Icon,
//   PageContent,
//   Button
// } from '@hvisions/f-ui';
// import { useResizeDetector } from 'react-resize-detector';
// import stylemodule from './style.module.scss';
// import Rightfirst from '../Eacherts/Rightfirst';
// import Rightfirstb from '../Eacherts/Rightfirstb';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import MinescreenApi from '~/api/Screen/Minescreen';
// import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import moment from 'moment';
// // import { Sheet, f7 } from 'framework7-react';
// // import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// // import { i18n } from '@hvisions/toolkit';
// // import { onToast, createDialog } from '~/util/home';
// // import useDebounce from '~/Hook/useDebounce';
// // import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// // import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// // import { isEmpty } from 'lodash';
// // // import CardInfo from './CardInfo';
// // import { Skeleton, Empty } from '~/components';

// // import PrepareAreaServices from '~/api/PrepareArea';
// // import { PrepareAreaState } from '~/enum/enum';

// const GrossProfit = ({ f7router }) => {
//   const [visable, setVisable] = useState(false);
//   const [allprice, setAllPrice] = useState(null);
//   const handleFullScreen = useFullScreenHandle();
//   const onResize = width => {
//     window.rem = null;
//     const doc = window.document;
//     const docEl = doc.documentElement;
//     // console.log(doc);
//     // const screen = document.querySelector('#screen');
//     // console.log(width);
//     const rem = (10 * width) / 1000;
//     docEl.style.fontSize = rem + 'px';
//     // console.log(docEl.style.fontSize);
//     // const targetX = 1920;
//     // const scaleRatio = width / targetX;
//     // screen.style.transform = `scale(${scaleRatio})`;

//     // if (echartsRef.current) {
//     //   echartsRef.current.getEchartsInstance().resize();
//     // }
//     window.rem = rem;
//     // window.a = rem;
//     // console.log(window, '(((');
//   };
//   useEffect(() => {
//     MinescreenApi.getProfitPieChart(moment(new Date(), 'YYYY').format('YYYY'))
//       .then(res => {
//         // console.log(res, '77777');
//         // const newprice = res.map(item => {
//         //   return item.companyName == '总利润';
//         // });
//         let allsumin = 0;

//         res.forEach(item => {
//           if (item.companyName == '总利润') {
//             allsumin = item.profitValue;
//           }
//           // allsumin += item.profitValue;
//         });
//         setAllPrice(allsumin);
//       })
//       .catch(err => {});
//   }, []);
//   const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
//     handleHeight: false,
//     refreshMode: 'debounce',
//     refreshRate: 300,
//     onResize
//   });
//   return (
//     <Page pageContent={false}>
//       利润总额
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>总体营收</NavTitle>
//         <NavRight>
//           {!visable && (
//             <Button
//               icon="fullscreen"
//               onClick={() => {
//                 handleFullScreen.enter();
//                 setVisable(true);
//               }}
//               className={stylemodule.button}
//             >
//               <img alt="" style={{ height: 24 }} src={In} />
//             </Button>
//           )}
//         </NavRight>
//       </Navbar>
//       <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
//         <div ref={rightPanelRef} className={stylemodule.backdiv}>
//           <div className={stylemodule.rightbackdiv}>
//             <div className={stylemodule.rightbackdivfirst}>
//               <div className={stylemodule.rightbackdivfirstin}>
//                 <div style={{ height: '100%', width: '100%' }}>
//                   {/* <div className={stylemodule.rightbackdivfirsttitle}></div> */}
//                   {visable && (
//                     <Button
//                       onClick={() => {
//                         handleFullScreen.exit();
//                         setVisable(false);
//                       }}
//                       className={stylemodule.button2}
//                     >
//                       <img alt="" style={{ height: 24 }} src={Out} />
//                     </Button>
//                   )}
//                   <div className={stylemodule.rightbackdivfirstovertext}>利润构成(万元)</div>
//                   <div className={stylemodule.rightbackdivfirstechartstitle}>
//                     <div className={stylemodule.rightbackdivfirstechartstitleall}>总利润</div>
//                     <div className={stylemodule.rightbackdivfirstechartstitleallsum}>
//                       <span style={{ color: allprice > 0 ? 'green' : 'red' }}>
//                         {allprice != null && allprice}
//                       </span>
//                       万元
//                     </div>
//                   </div>
//                   {/* <div className={stylemodule.rightbackdivfirstecharts}>

//                       </div> */}
//                   <div
//                     style={{
//                       // marginLeft: '-10rem',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       // justifyContent: 'center',
//                       alignItems: 'center', // 这里添加对齐属性
//                       // backgroundColor: 'red',
//                       // marginLeft: '-8rem',
//                       height: '70%'
//                     }}
//                   >
//                     <div style={{ height: '100%', width: '100%' }}>
//                       <Rightfirst />
//                     </div>
//                     <div
//                       style={{
//                         height: '100%',
//                         width: '100%',
//                         // marginLeft: '25rem',
//                         marginTop: '25rem'
//                         // marginLeft: '5rem'
//                       }}
//                     >
//                       <Rightfirstb />
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     position: 'absolute',
//                     height: '40rem',
//                     width: '100%',
//                     // background: 'red',
//                     padding: '10rem',
//                     top: '50%'
//                   }}
//                 >
//                   <div></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </FullScreen>
//     </Page>
//   );
// };

// export default GrossProfit;
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
import { useResizeDetector } from 'react-resize-detector';
import stylemodule from './style.module.scss';
import Rightfirst from '../Eacherts/Rightfirst';
import Rightfirstb from '../Eacherts/Rightfirstb';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import MinescreenApi from '~/api/Screen/Minescreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import moment from 'moment';
import { useSwipeable } from 'react-swipeable';
// import { Sheet, f7 } from 'framework7-react';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { i18n } from '@hvisions/toolkit';
// import { onToast, createDialog } from '~/util/home';
// import useDebounce from '~/Hook/useDebounce';
// import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// import { isEmpty } from 'lodash';
// // import CardInfo from './CardInfo';
// import { Skeleton, Empty } from '~/components';

// import PrepareAreaServices from '~/api/PrepareArea';
// import { PrepareAreaState } from '~/enum/enum';

const GrossProfit = ({ f7router }) => {
  const [visable, setVisable] = useState(false);
  const [allprice, setAllPrice] = useState(null);
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
  const handlers = useSwipeable({
    onSwipedLeft: () => handleBindingRight(),
    onSwipedRight: () => handleBindingLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // 如果你希望在桌面浏览器上模拟滑动手势，可以将其设置为true
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

  //     if (deltaX < -50 && Math.abs(deltaX) > Math.abs(deltaY)) {
  //       handleBindingRight();
  //     }
  //   });
  // }, []);
  const handleBindingLeft = async () => {
    f7router.navigate('/overall-OperatingIndicators', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/market', {});
  };
  useEffect(() => {
    MinescreenApi.getProfitPieChart(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        // console.log(res, '77777');
        // const newprice = res.map(item => {
        //   return item.companyName == '总利润';
        // });
        let allsumin = 0;

        res.forEach(item => {
          if (item.companyName == '总利润') {
            allsumin = item.profitValue;
          }
          // allsumin += item.profitValue;
        });
        setAllPrice(allsumin);
      })
      .catch(err => {});
  }, []);
  const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
    onResize
  });
  return (
    <Page pageContent={false}>
      利润总额
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>总体营收</NavTitle>
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
              top: '50%',
              left: '80%',
              marginLeft: '8rem',
              marginTop: '4rem',
              zIndex: '50'
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
              top: '50%',
              // left: '80%',
              marginLeft: '8rem',
              marginTop: '4rem',
              zIndex: '50'
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
              marginTop: '10rem'
            }}
          >
            <div style={{ width: '100%', height: '35%' }}>
              <Rightfirst />
            </div>
            <div
              className={stylemodule.rightbackdivfirstechartstitle}
              style={{
                width: '50%',
                height: '5%',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                paddingTop: '3rem',
                marginBottom: '5rem'
                // flexDirection: 'column'
              }}
            >
              <div className={stylemodule.rightbackdivfirstechartstitleall}>总利润</div>
              <div className={stylemodule.rightbackdivfirstechartstitleallsum}>
                <span style={{ color: allprice > 0 ? 'green' : 'red' }}>
                  {allprice != null && allprice}
                </span>
                万元
              </div>
            </div>
            <div style={{ width: '100%', height: '35%' }}>
              <Rightfirstb />
            </div>
          </div>
        </div>
      </FullScreen>
    </Page>
  );
};

export default GrossProfit;
