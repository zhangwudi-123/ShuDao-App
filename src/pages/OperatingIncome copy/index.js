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
// import ReactECharts from 'echarts-for-react';
// // import { HVLayout, Select, notification, HIcon } from '@hvisions/h-ui';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import { getLeftFirstecharts } from '../Eacherts/options';
// import styles from './style.scss';
// import stylemodule from './style.module.scss';
// import Lsftfirst from '../Eacherts/Leftfirst';
// import Leftsecond from '../Eacherts/Leftsecond';
// import { useResizeDetector } from 'react-resize-detector';
// import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import MinescreenApi from '~/api/Screen/Minescreen';
// import moment from 'moment';
// // import { Sheet, f7 } from 'framework7-react';
// // import styles from './style.scss';
// // import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// // import { i18n } from '@hvisions/toolkit';
// // import { onToast, createDialog } from '~/util/home';
// // import useDebounce from '~/Hook/useDebounce';
// // import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// // import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// // import { isEmpty } from 'lodash';

// // import { Skeleton, Empty } from '~/components';

// // import PrepareAreaServices from '~/api/PrepareArea';
// // import { PrepareAreaState } from '~/enum/enum';

// const OperatingIncome = ({ f7router }) => {
//   const [pricename, setPricename] = useState(null);
//   const [leftThird, setLeftThird] = useState(null);
//   const [leftThird2, setLeftThird2] = useState(null);
//   const [visable, setVisable] = useState(false);
//   const [allsum, setAllsum] = useState(null);
//   const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
//   const [type, setType] = useState([
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     1,
//     11,
//     12,
//     13,
//     14,
//     15
//   ]);
//   const [value, setValue] = useState([
//     12,
//     10,
//     15,
//     20,
//     16,
//     19,
//     15,
//     17,
//     16,
//     13,
//     12,
//     15,
//     18,
//     15,
//     16,
//     13,
//     15,
//     18
//   ]);
//   const [value2, setValue2] = useState([
//     15,
//     17,
//     16,
//     13,
//     12,
//     15,
//     18,
//     15,
//     16,
//     13,
//     15,
//     18,
//     12,
//     10,
//     15,
//     20,
//     16,
//     19
//   ]);
//   useEffect(() => {
//     ALL();
//   }, []);
//   const ALL = async () => {
//     await MinescreenApi.getRevenuePieChart(moment(new Date(), 'YYYY').format('YYYY'))
//       .then(res => {
//         let allsumin = 0;

//         res.forEach(item => {
//           // console.log(item, '++++');
//           if (item.companyName == '总营收') {
//             allsumin = item.revenueValue;
//           }
//         });

//         setAllsum(allsumin.toFixed(2));
//         setValue(res);
//       })
//       .catch(err => {});
//   };
//   const handleChange = event => {
//     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '===');
//         // setPricename(res);
//         setLeftThird(res);
//       })
//       .catch(err => {
//         // notification.warning({
//         //   description: err.message
//         // });
//       });

//     console.log(event.target.value);
//     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '=======');
//         if (res != null) {
//           setLeftThird2(res);
//         } else {
//           setLeftThird2([]);
//         }
//         // setPricename(res);
//       })
//       .catch(err => {
//         // notification.warning({
//         //   description: err.message
//         // });
//       });
//   };
//   const handleBlur = event => {
//     // console.log(event, '===');
//   };
//   const getProductPrice = () => {
//     MinescreenApi.getProductPriceHl()
//       .then(res => {})
//       .catch(err => {
//         // notification.warning({
//         //   description: err.message
//         // });
//       });
//     MinescreenApi.getProductPriceJc()
//       .then(res => {})
//       .catch(err => {
//         // notification.warning({
//         //   description: err.message
//         // });
//       });
//     MinescreenApi.getSalesUnitPriceJc2()
//       .then(res => {})
//       .catch(err => {
//         // notification.warning({
//         //   description: err.message
//         // });
//       });
//   };
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
//   const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
//     handleHeight: false,
//     refreshMode: 'debounce',
//     refreshRate: 300,
//     onResize
//   });
//   return (
//     <Page pageContent={false}>
//       营业收入
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>营业收入</NavTitle>
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
//       <PageContent>
//         {/* <div className={styles.backdiv}>11111</div> */}
//         <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
//           <div ref={rightPanelRef} className={stylemodule.backdiv}>
//             <div className={stylemodule.leftbackdiv}>
//               <div className={stylemodule.leftbackdivfirst}>
//                 <div className={stylemodule.leftbackdivfirstin}>
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
//                   <div
//                     className={stylemodule.leftbackdivfirstovertext}
//                     style={{ marginTop: '10rem' }}
//                   >
//                     营收构成(万元)
//                   </div>
//                   <div className={stylemodule.leftbackdivfirstecharts}>
//                     <div
//                       style={{
//                         width: '100%',
//                         height: '70%'
//                         // backgroundColor: 'red'
//                         // display: 'flex',
//                         // alignItems: 'center',
//                         // justifyContent: 'center'
//                       }}
//                     >
//                       <Lsftfirst />
//                     </div>
//                     <div style={{ height: '50%', width: '100%' }}>
//                       <div className={stylemodule.leftbackdivfirstovertext}>营收指标(万元)</div>
//                       <Leftsecond />
//                     </div>
//                   </div>
//                   <div
//                   // style={{
//                   //   position: 'absolute',
//                   //   height: '40rem',
//                   //   width: '100%',
//                   //   // background: 'red',
//                   //   // padding: '5rem',
//                   //   top: '50%'
//                   // }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </FullScreen>
//         {/* <div
//           style={{
//             width: '100%',
//             height: '100%',
//             // backgroundColor: 'red',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           <ReactECharts
//             option={getLeftFirstecharts(value, value2, type)}
//             style={{ width: '100%', height: '100%', marginLeft: '10%', marginTop: '2rem' }}
//             className={stylemodule.leftfirst}
//             key={chartKey} // 使用 key 强制重新挂载
//             // onEvents={onEvents}
//           ></ReactECharts>
//         </div> */}
//       </PageContent>
//     </Page>
//   );
// };

// export default OperatingIncome;

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
  Button,
  ListItem
} from '@hvisions/f-ui';
import ReactECharts from 'echarts-for-react';
// import { HVLayout, Select, notification, HIcon } from '@hvisions/h-ui';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import { getLeftFirstecharts } from '../Eacherts/options';
import styles from './style.scss';
import stylemodule from './style.module.scss';
// import Lsftfirst from '../Eacherts/Leftfirst';
import Leftsecond from '../Eacherts/Leftsecond';
import { useResizeDetector } from 'react-resize-detector';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import MinescreenApi from '~/api/Screen/Minescreen';
import moment from 'moment';
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

const OperatingIncome = ({ f7router }) => {
  console.log(f7router, '444');
  const [pricename, setPricename] = useState(null);
  const [leftThird, setLeftThird] = useState(null);
  const [leftThird2, setLeftThird2] = useState(null);
  const [visable, setVisable] = useState(false);
  const [allsum, setAllsum] = useState(null);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  const [type, setType] = useState([
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
    11,
    12,
    13,
    14,
    15
  ]);
  const [value, setValue] = useState([
    12,
    10,
    15,
    20,
    16,
    19,
    15,
    17,
    16,
    13,
    12,
    15,
    18,
    15,
    16,
    13,
    15,
    18
  ]);
  const [value2, setValue2] = useState([
    15,
    17,
    16,
    13,
    12,
    15,
    18,
    15,
    16,
    13,
    15,
    18,
    12,
    10,
    15,
    20,
    16,
    19
  ]);
  useEffect(() => {
    ALL();

    // let startX = 0;
    // let startY = 0;

    // document.addEventListener('touchstart', e => {
    //   startX = e.touches[0].clientX;
    //   startY = e.touches[0].clientY;
    // });

    // document.addEventListener('touchmove', e => {
    //   const moveX = e.touches[0].clientX;
    //   const moveY = e.touches[0].clientY;
    //   const deltaX = moveX - startX;
    //   const deltaY = moveY - startY;

    //   if (deltaX > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    //     handleBindingLeft();
    //   }
    // });
  }, []);
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
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => handleBindingLeft(),
  //   onSwipedRight: () => handleBindingRight(),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true // 如果你希望在桌面浏览器上模拟滑动手势，可以将其设置为true
  // });
  const ALL = async () => {
    await MinescreenApi.getRevenuePieChart(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        let allsumin = 0;

        res.forEach(item => {
          // console.log(item, '++++');
          if (item.companyName == '总营收') {
            allsumin = item.revenueValue;
          }
        });

        setAllsum(allsumin.toFixed(2));
        setValue(res);
      })
      .catch(err => {});
  };
  const handleChange = event => {
    MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        // console.log(res, '===');
        // setPricename(res);
        setLeftThird(res);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });

    console.log(event.target.value);
    MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        // console.log(res, '=======');
        if (res != null) {
          setLeftThird2(res);
        } else {
          setLeftThird2([]);
        }
        // setPricename(res);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  };
  const handleBlur = event => {
    // console.log(event, '===');
  };
  const getProductPrice = () => {
    MinescreenApi.getProductPriceHl()
      .then(res => {})
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
    MinescreenApi.getProductPriceJc()
      .then(res => {})
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
    MinescreenApi.getSalesUnitPriceJc2()
      .then(res => {})
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  };
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

  const handleBindingLeft = async () => {
    f7router.navigate('/finished-products', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/grossprofit', {});
  };
  return (
    <Page pageContent={false}>
      主材耗量
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>a
        </NavLeft>
        <NavTitle>主材耗量</NavTitle>
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
      <PageContent>
        {/* <div className={styles.backdiv}>11111</div> */}
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
                height: '60%',
                // backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '26rem'
              }}
            >
              <Leftsecond />
            </div>
          </div>
        </FullScreen>
        {/* <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ReactECharts
            option={getLeftFirstecharts(value, value2, type)}
            style={{ width: '100%', height: '100%', marginLeft: '10%', marginTop: '2rem' }}
            className={stylemodule.leftfirst}
            key={chartKey} // 使用 key 强制重新挂载
            // onEvents={onEvents}
          ></ReactECharts>
        </div> */}
      </PageContent>
    </Page>
  );
};

export default OperatingIncome;
